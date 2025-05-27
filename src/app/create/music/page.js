'use client';

import React, { useState, useRef } from 'react';
import {
    Layout,
    Typography,
    Card,
    Button,
    Space,
    Row,
    Col,
    Input,
    Select,
    Tag,
    Switch,
    Upload,
    Modal,
    message,
    Divider,
    Progress
} from 'antd';
import {
    Music,
    Upload as UploadIcon,
    FileAudio,
    Sparkles,
    Save,
    Eye,
    Settings,
    Zap,
    Trash2,
    Play,
    Pause,
    SkipBack,
    Volume2,
    VolumeX
} from 'lucide-react';
import NavigationHeader from '../../../components/NavigationHeader';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;

export default function MusicCreatePage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [fileList, setFileList] = useState([]);
    const [tags, setTags] = useState([]);
    const [category, setCategory] = useState('');
    const [isPublic, setIsPublic] = useState(true);
    const [allowComments, setAllowComments] = useState(true);
    const [saveProgress, setSaveProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isMuted, setIsMuted] = useState(false);

    const audioRef = useRef(null);
    const descriptionRef = useRef(null);

    const categories = [
        'Pop', 'Rock', 'Electronic', 'Classical', 'Jazz', 'Hip Hop', 'Folk',
        'R&B', 'Ambient', 'Instrumental', 'Acoustic', 'Indie'
    ];

    const handleBeforeUpload = (file) => {
        const isAudio = file.type.startsWith('audio/');
        if (!isAudio) {
            message.error('You can only upload audio files!');
        }
        const isLt20M = file.size / 1024 / 1024 < 20;
        if (!isLt20M) {
            message.error('Audio file must be smaller than 20MB!');
        }
        return isAudio && isLt20M;
    };

    const handleChange = ({ fileList }) => {
        if (fileList.length > 1) {
            fileList = [fileList[fileList.length - 1]];
        }
        setFileList(fileList);
    };

    const handleSave = () => {
        if (fileList.length === 0) {
            message.error('Please upload an audio file');
            return;
        }

        setSaveProgress(0);
        const interval = setInterval(() => {
            setSaveProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    message.success('Draft saved successfully!');
                    return 100;
                }
                return prev + 10;
            });
        }, 100);
    };

    const handlePublish = () => {
        if (!title.trim()) {
            message.error('Please add a title');
            return;
        }
        if (fileList.length === 0) {
            message.error('Please upload an audio file');
            return;
        }
        message.success('Music published successfully!');
    };

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleSeek = (e) => {
        const seekTime = (e.nativeEvent.offsetX / e.target.offsetWidth) * duration;
        if (audioRef.current) {
            audioRef.current.currentTime = seekTime;
            setCurrentTime(seekTime);
        }
    };

    const formatTime = (time) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const uploadButton = (
        <div className="text-center p-8">
            <FileAudio className="w-10 h-10 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500">
                Click or drag audio file to upload<br />
                <span className="text-xs">(Max: 20MB)</span>
            </p>
        </div>
    );

    const audioPreview = fileList.length > 0 && fileList[0].url || fileList[0]?.thumbUrl;

    return (
        <Layout className="min-h-screen bg-gray-50">
            <NavigationHeader />
            <Content className="pt-8">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <div className="mb-6">
                        <Title level={1} className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                            <Music className="w-8 h-8 mr-3 text-orange-500" />
                            Create Music
                        </Title>
                        <Paragraph className="text-lg text-gray-600">
                            Share your musical compositions and audio creations
                        </Paragraph>
                    </div>

                    <Row gutter={[24, 24]}>
                        {/* Main Editor */}
                        <Col xs={24} lg={16} order={{ xs: 2, lg: 1 }}>
                            <Card className="border-0 shadow-sm">
                                <Space direction="vertical" className="w-full" size="large">
                                    {/* Title */}
                                    <div>
                                        <Input
                                            placeholder="Enter your track title..."
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            size="large"
                                            className="text-2xl font-bold border-0 border-b-2 border-gray-100 focus:border-orange-500 rounded-none px-0"
                                            style={{ fontSize: '24px', fontWeight: '600' }}
                                        />
                                    </div>

                                    {/* Audio Upload */}
                                    <div className="music-uploader">
                                        <Dragger
                                            fileList={fileList}
                                            beforeUpload={handleBeforeUpload}
                                            onChange={handleChange}
                                            multiple={false}
                                            maxCount={1}
                                            accept="audio/*"
                                            // In a real app, configure action and upload behavior
                                            action="https://run.mocky.io/v3/e8c60678-a786-4c95-b8e6-be18ce8a600c"
                                            className="music-upload-container"
                                        >
                                            {fileList.length >= 1 ? null : uploadButton}
                                        </Dragger>

                                        {/* Audio Player */}
                                        {fileList.length > 0 && fileList[0].status === 'done' && (
                                            <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                                                <audio
                                                    ref={audioRef}
                                                    src={URL.createObjectURL(fileList[0].originFileObj)}
                                                    onTimeUpdate={handleTimeUpdate}
                                                    onLoadedMetadata={handleLoadedMetadata}
                                                    onEnded={() => setIsPlaying(false)}
                                                    style={{ display: 'none' }}
                                                />
                                                <div className="flex items-center gap-3 mb-2">
                                                    <Button
                                                        type="text"
                                                        icon={<SkipBack className="w-4 h-4" />}
                                                        onClick={() => {
                                                            if (audioRef.current) {
                                                                audioRef.current.currentTime = 0;
                                                                setCurrentTime(0);
                                                            }
                                                        }}
                                                    />
                                                    <Button
                                                        type="primary"
                                                        shape="circle"
                                                        icon={isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                                                        onClick={handlePlayPause}
                                                        className="bg-orange-500 border-0 hover:bg-orange-600"
                                                    />
                                                    <Button
                                                        type="text"
                                                        icon={isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                                        onClick={toggleMute}
                                                    />
                                                    <div className="flex-1 flex items-center">
                                                        <span className="text-xs text-gray-500 w-10">{formatTime(currentTime)}</span>
                                                        <div
                                                            className="h-2 flex-1 bg-gray-200 rounded-full mx-2 cursor-pointer"
                                                            onClick={handleSeek}
                                                        >
                                                            <div
                                                                className="h-2 bg-orange-500 rounded-full"
                                                                style={{ width: `${(currentTime / duration) * 100}%` }}
                                                            />
                                                        </div>
                                                        <span className="text-xs text-gray-500 w-10">{formatTime(duration)}</span>
                                                    </div>
                                                </div>
                                                <div className="text-sm text-gray-500 flex justify-between">
                                                    <span>{fileList[0].name}</span>
                                                    <span>{Math.round(fileList[0].size / 1024)} KB</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <Text strong className="text-gray-700 block mb-2">
                                            Description
                                        </Text>
                                        <TextArea
                                            ref={descriptionRef}
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            placeholder="Describe your music, inspiration, and production details..."
                                            autoSize={{ minRows: 3, maxRows: 6 }}
                                            className="border-gray-200"
                                        />
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <Button
                                            icon={<Settings className="w-4 h-4" />}
                                            className="text-gray-600"
                                        >
                                            Advanced Settings
                                        </Button>

                                        <Space>
                                            <Button
                                                size="large"
                                                className="px-6"
                                            >
                                                Save as Draft
                                            </Button>
                                            <Button
                                                type="primary"
                                                size="large"
                                                icon={<Sparkles className="w-4 h-4" />}
                                                onClick={handlePublish}
                                                className="px-8 bg-gradient-to-r from-orange-500 to-amber-500 border-0 hover:from-orange-600 hover:to-amber-600"
                                            >
                                                Publish
                                            </Button>
                                        </Space>
                                    </div>
                                </Space>
                            </Card>
                        </Col>

                        {/* Settings */}
                        <Col xs={24} lg={8} order={{ xs: 1, lg: 2 }}>
                            <Card className="border-0 shadow-sm mb-6">
                                <Title level={4} className="text-gray-900 mb-4">
                                    Music Settings
                                </Title>
                                <Space direction="vertical" className="w-full" size="middle">
                                    <div className="flex items-center justify-between">
                                        <Text className="text-gray-700">Public</Text>
                                        <Switch
                                            checked={isPublic}
                                            onChange={setIsPublic}
                                            className="bg-gray-300"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Text className="text-gray-700">Allow Comments</Text>
                                        <Switch
                                            checked={allowComments}
                                            onChange={setAllowComments}
                                            className="bg-gray-300"
                                        />
                                    </div>
                                    <div>
                                        <Text className="text-gray-700 block mb-2">Music Genre</Text>
                                        <Select
                                            placeholder="Select music genre"
                                            value={category}
                                            onChange={setCategory}
                                            className="w-full"
                                            size="large"
                                        >
                                            {categories.map(cat => (
                                                <Option key={cat} value={cat}>{cat}</Option>
                                            ))}
                                        </Select>
                                    </div>
                                    <div>
                                        <Text className="text-gray-700 block mb-2">Tags</Text>
                                        <Select
                                            mode="tags"
                                            placeholder="Add tags..."
                                            value={tags}
                                            onChange={setTags}
                                            className="w-full"
                                            size="large"
                                        />
                                    </div>

                                    {/* Music Tips */}
                                    <Card className="bg-orange-50 border border-orange-100">
                                        <div className="flex">
                                            <Zap className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                                            <div>
                                                <Text strong className="block text-orange-700 mb-1">Music Upload Tips</Text>
                                                <Text className="text-orange-600 text-sm">
                                                    Upload high-quality audio files for the best listening experience. Include details about instruments, recording process, and what inspired the track.
                                                </Text>
                                            </div>
                                        </div>
                                    </Card>
                                </Space>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Content>
            <style jsx global>{`
        .music-upload-container .ant-upload-drag {
          border-radius: 8px;
          border-color: #e5e7eb;
          background: #f9fafb;
        }
        
        .music-upload-container .ant-upload-list-item {
          margin-top: 16px;
          border-radius: 8px;
        }
      `}</style>
        </Layout>
    );
}
