'use client';

import React, { useState } from 'react';
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
    Progress,
    Modal,
    message,
    Spin,
    Form,
    Divider
} from 'antd';
import {
    Save,
    Eye,
    Upload,
    ArrowLeft,
    Heart,
    Sparkles,
    BookOpen,
    Settings,
    Zap
} from 'lucide-react';
import NavigationHeader from '../../../components/NavigationHeader';
import StoryEditor from '../../../components/StoryEditor';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

export default function StoryCreatePage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState([]);
    const [category, setCategory] = useState('');
    const [isPublic, setIsPublic] = useState(true);
    const [allowComments, setAllowComments] = useState(true);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [saveProgress, setSaveProgress] = useState(0);
    const [wordCount, setWordCount] = useState(0);

    const categories = [
        'Fiction', 'Science Fiction', 'Fantasy', 'Romance', 'Mystery', 'Thriller',
        'Historical', 'Adventure', 'Young Adult', 'Dystopian', 'Horror', 'Western'
    ];

    const handleContentChange = (value) => {
        setContent(value);
        // Simple HTML to text conversion for word count
        const textOnly = value.replace(/<[^>]*>/g, ' ');
        setWordCount(textOnly.split(/\s+/).filter(word => word.length > 0).length);
    };

    const handleSave = () => {
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
        if (!content.trim()) {
            message.error('Please add some content');
            return;
        }
        message.success('Story published successfully!');
    };

    return (
        <Layout className="min-h-screen bg-gray-50">
            <NavigationHeader />
            <Content className="pt-8">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <div className="mb-6">
                        <Title level={1} className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                            <BookOpen className="w-8 h-8 mr-3 text-blue-500" />
                            Create Story
                        </Title>
                        <Paragraph className="text-lg text-gray-600">
                            Craft your narrative and share your story with the world
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
                                            placeholder="Enter your story title..."
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            size="large"
                                            className="text-2xl font-bold border-0 border-b-2 border-gray-100 focus:border-blue-500 rounded-none px-0"
                                            style={{ fontSize: '24px', fontWeight: '600' }}
                                        />
                                    </div>

                                    {/* Content Editor */}
                                    <div>
                                        <StoryEditor
                                            content={content}
                                            onChange={handleContentChange}
                                            placeholder="Begin your story here..."
                                        />
                                    </div>

                                    {/* Word Count & Progress */}
                                    <div className="flex items-center justify-between text-gray-500">
                                        <Space>
                                            <Text className="text-sm">
                                                {wordCount} words
                                            </Text>
                                            {saveProgress > 0 && saveProgress < 100 && (
                                                <Progress
                                                    percent={saveProgress}
                                                    size="small"
                                                    className="w-32"
                                                    strokeColor="#3b82f6"
                                                />
                                            )}
                                        </Space>
                                        <Space>
                                            <Button
                                                icon={<Eye className="w-4 h-4" />}
                                                onClick={() => setPreviewVisible(true)}
                                                className="border-gray-300"
                                            >
                                                Preview
                                            </Button>
                                            <Button
                                                icon={<Save className="w-4 h-4" />}
                                                onClick={handleSave}
                                                disabled={saveProgress > 0 && saveProgress < 100}
                                                className="border-gray-300"
                                            >
                                                Save Draft
                                            </Button>
                                        </Space>
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
                                                className="px-8 bg-gradient-to-r from-blue-600 to-indigo-600 border-0 hover:from-blue-700 hover:to-indigo-700"
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
                                    Story Settings
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
                                        <Text className="text-gray-700 block mb-2">Story Genre</Text>
                                        <Select
                                            placeholder="Select story genre"
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

                                    {/* Story Writing Tips */}
                                    <Card className="bg-blue-50 border border-blue-100">
                                        <div className="flex">
                                            <Zap className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                                            <div>
                                                <Text strong className="block text-blue-700 mb-1">Storytelling Tips</Text>
                                                <Text className="text-blue-600 text-sm">
                                                    Focus on character development and strong narrative arcs. Use descriptive language to create vivid scenes, and vary your sentence structure to maintain reader interest.
                                                </Text>
                                            </div>
                                        </div>
                                    </Card>
                                </Space>
                            </Card>
                        </Col>
                    </Row>
                </div>

                {/* Preview Modal */}
                <Modal
                    title="Story Preview"
                    open={previewVisible}
                    onCancel={() => setPreviewVisible(false)}
                    footer={null}
                    width="80%"
                    centered
                    className="preview-modal"
                >
                    <div className="p-6">
                        <div className="mb-4">
                            <Tag
                                icon={<BookOpen className="w-4 h-4" />}
                                color="blue"
                                className="mb-2"
                            >
                                Story
                            </Tag>
                            {category && (
                                <Tag color="default" className="ml-2">{category}</Tag>
                            )}
                        </div>
                        {title && (
                            <Title level={2} className="text-gray-900 mb-4">
                                {title}
                            </Title>
                        )}
                        {content && (
                            <div className="story-preview prose max-w-none text-gray-700"
                                dangerouslySetInnerHTML={{ __html: content }}
                            />
                        )}
                        {tags.length > 0 && (
                            <div className="mt-6 pt-4 border-t border-gray-100">
                                <Space wrap>
                                    {tags.map(tag => (
                                        <Tag key={tag} className="rounded-lg">
                                            {tag}
                                        </Tag>
                                    ))}
                                </Space>
                            </div>
                        )}
                    </div>
                </Modal>
            </Content>
        </Layout>
    );
}
