'use client';

import React, { useState, useRef } from 'react';
import { 
  Card, 
  Typography, 
  Button, 
  Row, 
  Col, 
  Space,
  Progress,
  Statistic,
  Avatar,
  Tag,
  Divider,
  Input,
  Rate,
  Upload,
  Select,
  Form,
  message
} from 'antd';
import { Plus, FileText, Shield, Video, Send, Star, Trophy, Heart } from 'lucide-react';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

export default function CreatorDashboard() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [form] = Form.useForm();

  const creatorStats = {
    totalWorks: 24,
    totalLikes: 1420,
    totalViews: 8750,
    followers: 342,
    averageRating: 4.6,
    streak: 7
  };

  const recentWorks = [
    {
      title: "Midnight Thoughts",
      category: "Poetry",
      likes: 89,
      views: 234,
      status: "Published",
      publishedAt: "2 days ago"
    },
    {
      title: "The Journey Home",
      category: "Story",
      likes: 156,
      views: 445,
      status: "Published", 
      publishedAt: "5 days ago"
    },
    {
      title: "Untitled Draft",
      category: "Poetry",
      likes: 0,
      views: 0,
      status: "Draft",
      publishedAt: "1 hour ago"
    }
  ];

  const contentTypes = [
    { 
      key: 'poetry', 
      title: 'Poetry & Shayari', 
      icon: <FileText className="w-4 h-4" />, 
      color: '#f56565',
      description: 'Express emotions through verses'
    },
    { 
      key: 'story', 
      title: 'Stories & Scripts', 
      icon: <FileText className="w-4 h-4" />, 
      color: '#4299e1',
      description: 'Captivating narratives'
    },
    { 
      key: 'music', 
      title: 'Music & Songs', 
      icon: <Shield className="w-4 h-4" />, 
      color: '#38a169',
      description: 'Soul-stirring melodies'
    },
    { 
      key: 'video', 
      title: 'Comedy & Performance', 
      icon: <Video className="w-4 h-4" />, 
      color: '#ed8936',
      description: 'Entertainment content'
    }
  ];

  const handleSubmit = (values) => {
    console.log('Received values:', values);
    message.success('Content created successfully!');
    form.resetFields();
  };

  const uploadProps = {
    name: 'file',
    multiple: false,
    action: '/api/upload',
    onChange(info) {
      const { status } = info.file;
      if (status === 'uploading') {
        setUploadProgress(Math.random() * 100);
      } else if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        setUploadProgress(100);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div style={{ padding: '24px', maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <Title level={2} style={{ marginBottom: 8 }}>
          Creator Dashboard
        </Title>
        <Paragraph style={{ color: '#666', fontSize: 16 }}>
          Share your creativity with the world
        </Paragraph>
      </div>

      <Row gutter={[24, 24]}>
        {/* Stats Overview */}
        <Col xs={24} lg={8}>
          <Card 
            title="Your Impact" 
            style={{ marginBottom: 24, borderRadius: 12 }}
            extra={<TrophyOutlined style={{ color: '#ffd700' }} />}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Statistic 
                  title="Total Works" 
                  value={creatorStats.totalWorks} 
                  valueStyle={{ color: '#1890ff' }}
                />
              </Col>
              <Col span={12}>
                <Statistic 
                  title="Total Likes" 
                  value={creatorStats.totalLikes} 
                  valueStyle={{ color: '#ff6b6b' }}
                  suffix={<Heart className="w-4 h-4" />}
                />
              </Col>
              <Col span={12}>
                <Statistic 
                  title="Total Views" 
                  value={creatorStats.totalViews} 
                  valueStyle={{ color: '#52c41a' }}
                />
              </Col>
              <Col span={12}>
                <Statistic 
                  title="Followers" 
                  value={creatorStats.followers} 
                  valueStyle={{ color: '#722ed1' }}
                />
              </Col>
            </Row>
            
            <Divider />
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: 8 }}>
                <Text strong>Average Rating</Text>
              </div>
              <Rate 
                disabled 
                defaultValue={creatorStats.averageRating} 
                allowHalf 
              />
              <div style={{ marginTop: 8 }}>
                <Text type="secondary">{creatorStats.averageRating}/5.0</Text>
              </div>
            </div>

            <Divider />

            <div style={{ textAlign: 'center' }}>
              <Progress
                type="circle"
                percent={(creatorStats.streak / 30) * 100}
                format={() => `${creatorStats.streak} Days`}
                strokeColor="#52c41a"
                size={80}
              />
              <div style={{ marginTop: 8 }}>
                <Text strong>Publishing Streak</Text>
              </div>
            </div>
          </Card>

          {/* Recent Works */}
          <Card 
            title="Recent Works" 
            style={{ borderRadius: 12 }}
          >
            <Space direction="vertical" style={{ width: '100%' }} size={16}>
              {recentWorks.map((work, index) => (
                <div key={index} style={{ 
                  padding: 12,
                  border: '1px solid #f0f0f0',
                  borderRadius: 8,
                  background: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: 8
                  }}>
                    <Text strong style={{ fontSize: 14 }}>{work.title}</Text>
                    <Tag 
                      color={work.status === 'Published' ? 'green' : 'orange'}
                      style={{ fontSize: 11 }}
                    >
                      {work.status}
                    </Tag>
                  </div>
                  <div style={{ marginBottom: 8 }}>
                    <Tag size="small">{work.category}</Tag>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    fontSize: 12,
                    color: '#666'
                  }}>
                    <span>❤️ {work.likes} 👁️ {work.views}</span>
                    <span>{work.publishedAt}</span>
                  </div>
                </div>
              ))}
            </Space>
          </Card>
        </Col>

        {/* Content Creation */}
        <Col xs={24} lg={16}>
          <Card 
            title="Create New Content" 
            style={{ borderRadius: 12 }}
            extra={
              <Button 
                type="primary" 
                icon={<Plus className="w-4 h-4" />}
                style={{
                  background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
                  border: 'none',
                  borderRadius: 8
                }}
              >
                Quick Create
              </Button>
            }
          >
            {/* Content Type Selection */}
            <div style={{ marginBottom: 32 }}>
              <Title level={4} style={{ marginBottom: 16 }}>
                Choose Content Type
              </Title>
              <Row gutter={[16, 16]}>
                {contentTypes.map((type) => (
                  <Col xs={12} lg={6} key={type.key}>
                    <Card
                      hoverable
                      size="small"
                      style={{ 
                        textAlign: 'center',
                        borderRadius: 8,
                        border: selectedCategory === type.key 
                          ? `2px solid ${type.color}` 
                          : '1px solid #f0f0f0',
                        cursor: 'pointer'
                      }}
                      onClick={() => setSelectedCategory(type.key)}
                    >
                      <div style={{ 
                        fontSize: 24, 
                        color: type.color,
                        marginBottom: 8 
                      }}>
                        {type.icon}
                      </div>
                      <div style={{ fontSize: 12, fontWeight: 500 }}>
                        {type.title}
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>

            {/* Content Form */}
            {selectedCategory && (
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                style={{
                  background: '#fafafa',
                  padding: 24,
                  borderRadius: 12,
                  border: '1px solid #f0f0f0'
                }}
              >
                <Row gutter={16}>
                  <Col xs={24} lg={16}>
                    <Form.Item
                      name="title"
                      label="Title"
                      rules={[{ required: true, message: 'Please enter a title' }]}
                    >
                      <Input 
                        placeholder="Give your creation a compelling title..."
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} lg={8}>
                    <Form.Item
                      name="visibility"
                      label="Visibility"
                      initialValue="public"
                    >
                      <Select size="large">
                        <Option value="public">Public</Option>
                        <Option value="unlisted">Unlisted</Option>
                        <Option value="private">Private</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="content"
                  label="Content"
                  rules={[{ required: true, message: 'Please enter your content' }]}
                >
                  <TextArea
                    placeholder="Share your creativity here..."
                    autoSize={{ minRows: 8, maxRows: 16 }}
                    style={{ fontSize: 16, lineHeight: 1.6 }}
                  />
                </Form.Item>

                <Row gutter={16}>
                  <Col xs={24} lg={12}>
                    <Form.Item
                      name="tags"
                      label="Tags"
                    >
                      <Select
                        mode="tags"
                        placeholder="Add tags to help people discover your work"
                        style={{ width: '100%' }}
                      >
                        <Option value="love">love</Option>
                        <Option value="life">life</Option>
                        <Option value="inspiration">inspiration</Option>
                        <Option value="nature">nature</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} lg={12}>
                    <Form.Item
                      name="category"
                      label="Subcategory"
                    >
                      <Select placeholder="Select subcategory">
                        <Option value="romantic">Romantic</Option>
                        <Option value="motivational">Motivational</Option>
                        <Option value="sad">Melancholic</Option>
                        <Option value="humorous">Humorous</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                {/* File Upload */}
                <Form.Item
                  name="attachments"
                  label="Attachments (Optional)"
                >
                  <Upload {...uploadProps} listType="text">
                    <Button icon={<UploadOutlined />}>
                      Upload Audio/Image
                    </Button>
                  </Upload>
                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <Progress 
                      percent={uploadProgress} 
                      size="small" 
                      style={{ marginTop: 8 }} 
                    />
                  )}
                </Form.Item>

                <Form.Item style={{ marginBottom: 0, marginTop: 24 }}>
                  <Space>
                    <Button 
                      type="primary" 
                      htmlType="submit"
                      icon={<Send className="w-4 h-4" />}
                      size="large"
                      style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        border: 'none',
                        borderRadius: 8,
                        fontWeight: 600
                      }}
                    >
                      Publish Now
                    </Button>
                    <Button size="large">
                      Save as Draft
                    </Button>
                    <Button size="large">
                      Preview
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
