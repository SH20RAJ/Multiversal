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
  message
} from 'antd';
import {
  Save,
  Eye,
  Sparkles,
  BookOpen,
  Edit3,
  Music,
  Palette,
  Video,
  Settings,
  Upload,
  Zap
} from 'lucide-react';
import NavigationHeader from '../../components/NavigationHeader';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;
const { Option } = Select;

export default function MinimalisticCreatePage() {
  const [contentType, setContentType] = useState('story');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [allowComments, setAllowComments] = useState(true);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [saveProgress, setSaveProgress] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const contentTypes = [
    {
      key: 'story',
      label: 'Story',
      icon: <BookOpen className="w-6 h-6" />,
      description: 'Share your narratives and tales',
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      key: 'poetry',
      label: 'Poetry',
      icon: <Edit3 className="w-6 h-6" />,
      description: 'Express yourself in verse',
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      key: 'music',
      label: 'Music',
      icon: <Music className="w-6 h-6" />,
      description: 'Share your musical creations',
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      key: 'art',
      label: 'Art',
      icon: <Palette className="w-6 h-6" />,
      description: 'Showcase your visual art',
      color: 'bg-green-500',
      bgColor: 'bg-green-50'
    }
  ];

  const categories = {
    story: ['Fiction', 'Science Fiction', 'Fantasy', 'Romance', 'Mystery', 'Thriller', 'Historical'],
    poetry: ['Free Verse', 'Haiku', 'Sonnet', 'Spoken Word', 'Narrative', 'Lyrical'],
    music: ['Pop', 'Rock', 'Electronic', 'Classical', 'Jazz', 'Folk', 'Hip Hop'],
    art: ['Digital Art', 'Photography', 'Illustration', 'Abstract', 'Portrait', 'Landscape']
  };

  const handleContentChange = (value) => {
    setContent(value);
    setWordCount(value.split(/\s+/).filter(word => word.length > 0).length);
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
    message.success('Content published successfully!');
  };

  const selectedType = contentTypes.find(type => type.key === contentType);

  return (
    <Layout className="min-h-screen bg-gray-50">
      <NavigationHeader />

      <Content className="pt-8">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <Title level={1} className="text-4xl font-bold text-gray-900 mb-2">
              Create
            </Title>
            <Paragraph className="text-xl text-gray-600">
              Share your creativity with the world
            </Paragraph>
          </div>

          <Row gutter={[24, 24]}>
            {/* Content Type Selection */}
            <Col xs={24} lg={8}>
              <Card className="mb-6 border-0 shadow-sm">
                <Title level={4} className="text-gray-900 mb-4">
                  Content Type
                </Title>
                <Space direction="vertical" className="w-full" size="middle">
                  {contentTypes.map(type => (
                    <div
                      key={type.key}
                      onClick={() => setContentType(type.key)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${contentType === type.key
                          ? `border-indigo-500 ${type.bgColor}`
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg text-white ${type.color}`}>
                          {type.icon}
                        </div>
                        <div className="flex-1">
                          <Text className={`font-semibold ${contentType === type.key ? 'text-indigo-700' : 'text-gray-900'
                            }`}>
                            {type.label}
                          </Text>
                          <Paragraph className="text-gray-600 text-sm mb-0 mt-1">
                            {type.description}
                          </Paragraph>
                        </div>
                      </div>
                    </div>
                  ))}
                </Space>
              </Card>

              {/* Specialized Editors Section */}
              <Card className="border-0 shadow-sm mt-6">
                <div className="flex items-center justify-between mb-4">
                  <Title level={4} className="text-gray-900 mb-0">
                    Use Specialized Editors
                  </Title>
                  <Zap className="w-5 h-5 text-amber-500" />
                </div>
                <Paragraph className="text-gray-600 mb-4">
                  For a richer creation experience, try our dedicated editors designed specifically for each content type
                </Paragraph>
                <Space direction="vertical" className="w-full" size="middle">
                  <Button
                    type="default"
                    href="/create/poetry"
                    className="w-full text-left h-auto py-3 px-4 flex items-center"
                    icon={<Edit3 className="w-5 h-5 text-purple-500 mr-2" />}
                  >
                    <div>
                      <span className="font-medium">Poetry Editor</span>
                      <span className="text-gray-500 text-sm block">Enhanced features for verse formatting</span>
                    </div>
                  </Button>
                  <Button
                    type="default"
                    href="/create/story"
                    className="w-full text-left h-auto py-3 px-4 flex items-center"
                    icon={<BookOpen className="w-5 h-5 text-blue-500 mr-2" />}
                  >
                    <div>
                      <span className="font-medium">Story Editor</span>
                      <span className="text-gray-500 text-sm block">Rich formatting for narrative writing</span>
                    </div>
                  </Button>
                  <Button
                    type="default"
                    href="/create/art"
                    className="w-full text-left h-auto py-3 px-4 flex items-center"
                    icon={<Palette className="w-5 h-5 text-green-500 mr-2" />}
                  >
                    <div>
                      <span className="font-medium">Art Upload</span>
                      <span className="text-gray-500 text-sm block">Visual artwork gallery tools</span>
                    </div>
                  </Button>
                  <Button
                    type="default"
                    href="/create/music"
                    className="w-full text-left h-auto py-3 px-4 flex items-center"
                    icon={<Music className="w-5 h-5 text-orange-500 mr-2" />}
                  >
                    <div>
                      <span className="font-medium">Music Upload</span>
                      <span className="text-gray-500 text-sm block">Audio player and metadata tools</span>
                    </div>
                  </Button>
                </Space>
              </Card>

              {/* Settings */}
              <Card className="border-0 shadow-sm">
                <Title level={4} className="text-gray-900 mb-4">
                  Settings
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
                    <Text className="text-gray-700 block mb-2">Category</Text>
                    <Select
                      placeholder="Select category"
                      value={category}
                      onChange={setCategory}
                      className="w-full"
                      size="large"
                    >
                      {categories[contentType]?.map(cat => (
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
                </Space>
              </Card>
            </Col>

            {/* Main Editor */}
            <Col xs={24} lg={16}>
              <Card className="border-0 shadow-sm">
                <Space direction="vertical" className="w-full" size="large">
                  {/* Title */}
                  <div>
                    <Input
                      placeholder={`Enter your ${contentType} title...`}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      size="large"
                      className="text-2xl font-bold border-0 border-b-2 border-gray-100 focus:border-indigo-500 rounded-none px-0"
                      style={{ fontSize: '24px', fontWeight: '600' }}
                    />
                  </div>

                  {/* Content Editor */}
                  <div>
                    <TextArea
                      placeholder={`Start writing your ${contentType}...`}
                      value={content}
                      onChange={(e) => handleContentChange(e.target.value)}
                      className="border-0 resize-none"
                      style={{
                        minHeight: '500px',
                        fontSize: '16px',
                        lineHeight: '1.6'
                      }}
                      autoSize={{ minRows: 20 }}
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
                          strokeColor="#6366f1"
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
                        className="px-8 bg-gradient-to-r from-indigo-600 to-purple-600 border-0 hover:from-indigo-700 hover:to-purple-700"
                      >
                        Publish
                      </Button>
                    </Space>
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Preview Modal */}
        <Modal
          title="Preview"
          open={previewVisible}
          onCancel={() => setPreviewVisible(false)}
          footer={null}
          width="80%"
          centered
          className="preview-modal"
        >
          <div className="p-6">
            {selectedType && (
              <div className="mb-4">
                <Tag
                  icon={selectedType.icon}
                  color="blue"
                  className="mb-2"
                >
                  {selectedType.label}
                </Tag>
              </div>
            )}
            {title && (
              <Title level={2} className="text-gray-900 mb-4">
                {title}
              </Title>
            )}
            {content && (
              <div className="whitespace-pre-wrap text-gray-700 text-base leading-relaxed">
                {content}
              </div>
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
