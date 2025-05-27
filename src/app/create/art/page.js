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
    Divider
} from 'antd';
import {
    Palette,
    Upload as UploadIcon,
    Image as ImageIcon,
    Sparkles,
    Save,
    Eye,
    Settings,
    Zap,
    Trash2
} from 'lucide-react';
import NavigationHeader from '../../../components/NavigationHeader';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;

export default function ArtCreatePage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [fileList, setFileList] = useState([]);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [tags, setTags] = useState([]);
    const [category, setCategory] = useState('');
    const [isPublic, setIsPublic] = useState(true);
    const [allowComments, setAllowComments] = useState(true);
    const [saveProgress, setSaveProgress] = useState(0);

    const descriptionRef = useRef(null);

    const categories = [
        'Digital Art', 'Photography', 'Illustration', 'Abstract',
        'Portrait', 'Landscape', 'Pixel Art', 'Sculpture',
        'Animation', 'Concept Art', 'Comics', 'Traditional'
    ];

    const handleBeforeUpload = (file) => {
        const isImage = file.type.startsWith('image/');
        if (!isImage) {
            message.error('You can only upload image files!');
        }
        const isLt10M = file.size / 1024 / 1024 < 10;
        if (!isLt10M) {
            message.error('Image must be smaller than 10MB!');
        }
        return isImage && isLt10M;
    };

    const handleChange = ({ fileList }) => {
        setFileList(fileList);
    };

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
    };

    const handleSave = () => {
        if (fileList.length === 0) {
            message.error('Please upload an image');
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
            message.error('Please upload at least one image');
            return;
        }
        message.success('Art published successfully!');
    };

    const uploadButton = (
        <div className="text-center p-8">
            <UploadIcon className="w-10 h-10 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500">
                Click or drag image to upload<br />
                <span className="text-xs">(Max: 10MB)</span>
            </p>
        </div>
    );

    return (
        <Layout className="min-h-screen bg-gray-50">
            <NavigationHeader />
            <Content className="pt-8">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <div className="mb-6">
                        <Title level={1} className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                            <Palette className="w-8 h-8 mr-3 text-green-500" />
                            Create Art
                        </Title>
                        <Paragraph className="text-lg text-gray-600">
                            Share your visual creations with the world
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
                                            placeholder="Enter your artwork title..."
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            size="large"
                                            className="text-2xl font-bold border-0 border-b-2 border-gray-100 focus:border-green-500 rounded-none px-0"
                                            style={{ fontSize: '24px', fontWeight: '600' }}
                                        />
                                    </div>

                                    {/* Image Upload */}
                                    <div className="art-uploader">
                                        <Dragger
                                            listType="picture-card"
                                            fileList={fileList}
                                            beforeUpload={handleBeforeUpload}
                                            onChange={handleChange}
                                            onPreview={handlePreview}
                                            multiple={true}
                                            maxCount={5}
                                            // In a real app, configure action and upload behavior
                                            action="https://run.mocky.io/v3/e8c60678-a786-4c95-b8e6-be18ce8a600c"
                                            className="art-upload-container"
                                        >
                                            {fileList.length >= 5 ? null : uploadButton}
                                        </Dragger>
                                        <Modal
                                            open={previewVisible}
                                            title="Image Preview"
                                            footer={null}
                                            onCancel={() => setPreviewVisible(false)}
                                            width="80%"
                                            centered
                                        >
                                            <img
                                                alt="preview"
                                                style={{ width: '100%' }}
                                                src={previewImage}
                                            />
                                        </Modal>
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
                                            placeholder="Describe your artwork, inspiration, and techniques used..."
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
                                                className="px-8 bg-gradient-to-r from-green-600 to-teal-600 border-0 hover:from-green-700 hover:to-teal-700"
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
                                    Artwork Settings
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
                                        <Text className="text-gray-700 block mb-2">Art Type</Text>
                                        <Select
                                            placeholder="Select art type"
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

                                    {/* Art Tips */}
                                    <Card className="bg-green-50 border border-green-100">
                                        <div className="flex">
                                            <Zap className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                            <div>
                                                <Text strong className="block text-green-700 mb-1">Art Upload Tips</Text>
                                                <Text className="text-green-600 text-sm">
                                                    Use high-resolution images for best quality. Consider adding process images to showcase your technique. Write a detailed description including materials and inspiration.
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
        .art-upload-container .ant-upload-list-picture-card-container,
        .art-upload-container .ant-upload-select {
          width: 140px;
          height: 140px;
          margin-right: 12px;
          margin-bottom: 12px;
        }
        
        @media (min-width: 640px) {
          .art-upload-container .ant-upload-list-picture-card-container,
          .art-upload-container .ant-upload-select {
            width: 160px;
            height: 160px;
          }
        }
        
        @media (min-width: 1024px) {
          .art-upload-container .ant-upload-list-picture-card-container,
          .art-upload-container .ant-upload-select {
            width: 180px;
            height: 180px;
          }
        }
      `}</style>
        </Layout>
    );
}
