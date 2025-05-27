'use client';

import React, { useState } from 'react';
import { 
  Layout, 
  Typography, 
  Card, 
  Row, 
  Col, 
  Input, 
  Button, 
  Space,
  Collapse,
  Tag,
  Steps,
  Alert,
  Divider,
  Avatar,
  Badge,
  Tabs
} from 'antd';
import { 
  Search,
  HelpCircle,
  BookOpen,
  Video,
  Edit3,
  Heart,
  Share2,
  User,
  Settings,
  Shield,
  DollarSign,
  Rocket,
  Lightbulb,
  MessageCircle,
  PlayCircle,
  FileText,
  Users
} from 'lucide-react';
import NavigationHeader from '../../components/NavigationHeader';
import SiteFooter from '../../components/SiteFooter';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;
const { TabPane } = Tabs;

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');

  const helpCategories = [
    {
      key: 'getting-started',
      title: 'Getting Started',
      icon: <Rocket />,
      color: '#1890ff',
      description: 'Learn the basics of using Multiversal.blog'
    },
    {
      key: 'creating-content',
      title: 'Creating Content',
      icon: <Edit3 />,
      color: '#52c41a',
      description: 'Tips for sharing your creative works'
    },
    {
      key: 'community',
      title: 'Community Guidelines',
      icon: <Users />,
      color: '#fa8c16',
      description: 'How to be part of our creative community'
    },
    {
      key: 'account',
      title: 'Account & Settings',
      icon: <Settings />,
      color: '#722ed1',
      description: 'Manage your profile and preferences'
    },
    {
      key: 'technical',
      title: 'Technical Support',
      icon: <HelpCircle />,
      color: '#eb2f96',
      description: 'Troubleshooting and technical issues'
    }
  ];

  const gettingStartedFAQs = [
    {
      question: 'How do I create an account on Multiversal.blog?',
      answer: 'Click the "Sign Up" button in the top right corner of any page. You can register with your email, Google account, or social media. Once registered, you can immediately start sharing your creative content.'
    },
    {
      question: 'What types of content can I share?',
      answer: 'You can share poetry, short stories, essays, music, videos, comedy sketches, and any other creative content. Our platform supports text, audio, video, and image formats.'
    },
    {
      question: 'Is Multiversal.blog completely free?',
      answer: 'Yes! Multiversal.blog is completely free for all creators. We believe in democratizing creative expression and making it accessible to everyone worldwide.'
    },
    {
      question: 'How do I navigate the platform?',
      answer: 'Use the main navigation menu to explore content, visit the community section, access your dashboard, and create new content. The search function helps you discover specific content or creators.'
    }
  ];

  const creatingContentFAQs = [
    {
      question: 'How do I publish my first piece of content?',
      answer: 'Click the "Create" button in the navigation menu. Choose your content type, add your title, write or upload your content, select relevant tags, and hit publish. Your content will be immediately available to the community.'
    },
    {
      question: 'What makes content successful on the platform?',
      answer: 'Successful content is authentic, well-crafted, and engages with the community. Use relevant tags, compelling titles, and participate in community discussions to increase visibility.'
    },
    {
      question: 'Can I edit my content after publishing?',
      answer: 'Yes! You can edit your published content at any time. Go to your dashboard, find the content you want to modify, and use the edit function. Changes will be saved automatically.'
    },
    {
      question: 'How do tags and categories work?',
      answer: 'Tags help categorize your content and make it discoverable. Choose 3-5 relevant tags that describe your content&apos;s theme, style, or genre. This helps other users find content they&apos;re interested in.'
    }
  ];

  const communityFAQs = [
    {
      question: 'What are the community guidelines?',
      answer: 'We maintain a respectful, supportive environment. No harassment, spam, or inappropriate content. Give constructive feedback, credit other creators, and help build a positive creative community.'
    },
    {
      question: 'How do I interact with other creators?',
      answer: 'Like, comment, and share content you enjoy. Follow creators whose work inspires you. Participate in community challenges and events. Respectful engagement helps everyone grow.'
    },
    {
      question: 'Can I collaborate with other creators?',
      answer: 'Absolutely! Use our messaging system to connect with other creators. Many successful collaborations start with simple appreciation and mutual respect for each other&apos;s work.'
    },
    {
      question: 'What should I do if I encounter inappropriate content?',
      answer: 'Report any content that violates our guidelines using the report button. Our moderation team reviews all reports promptly and takes appropriate action to maintain community standards.'
    }
  ];

  const accountFAQs = [
    {
      question: 'How do I customize my profile?',
      answer: 'Go to your dashboard and click on profile settings. You can update your bio, profile picture, cover image, social links, and display preferences. A complete profile helps others discover and connect with you.'
    },
    {
      question: 'How do I change my notification settings?',
      answer: 'In your account settings, you can customize which notifications you receive via email and on the platform. You can choose to be notified about likes, comments, follows, and community events.'
    },
    {
      question: 'Can I delete my account?',
      answer: 'Yes, you can delete your account at any time from the account settings page. Note that this action is permanent and will remove all your content and data from the platform.'
    },
    {
      question: 'How do I reset my password?',
      answer: 'Use the "Forgot Password" link on the login page. Enter your email address, and we&apos;ll send you a secure link to reset your password. The link expires after 24 hours for security.'
    }
  ];

  const technicalFAQs = [
    {
      question: 'What file formats are supported?',
      answer: 'We support common formats: JPEG, PNG, GIF for images; MP4, MOV for videos; MP3, WAV for audio; and rich text for written content. Maximum file size is 50MB per upload.'
    },
    {
      question: 'Why is my content not loading?',
      answer: 'Check your internet connection and try refreshing the page. If issues persist, try clearing your browser cache or using a different browser. Contact support if problems continue.'
    },
    {
      question: 'How do I report a technical bug?',
      answer: 'Use our contact form or email support@multiversal.blog with details about the issue, including your browser, device, and steps to reproduce the problem. Screenshots are helpful!'
    },
    {
      question: 'Is there a mobile app?',
      answer: 'Our web platform is fully mobile-responsive and works great on mobile browsers. A dedicated mobile app is in development and will be available soon. Join our newsletter for updates!'
    }
  ];

  const getFAQsByCategory = (category) => {
    switch(category) {
      case 'getting-started': return gettingStartedFAQs;
      case 'creating-content': return creatingContentFAQs;
      case 'community': return communityFAQs;
      case 'account': return accountFAQs;
      case 'technical': return technicalFAQs;
      default: return gettingStartedFAQs;
    }
  };

  const quickStartSteps = [
    {
      title: 'Create Account',
      description: 'Sign up with your email or social media',
      icon: <User />
    },
    {
      title: 'Complete Profile',
      description: 'Add your bio, profile picture, and interests',
      icon: <Edit3 />
    },
    {
      title: 'Explore Content',
      description: 'Discover amazing creative works from the community',
      icon: <Search />
    },
    {
      title: 'Share Your Work',
      description: 'Publish your first piece of creative content',
      icon: <Heart />
    }
  ];

  const popularGuides = [
    {
      title: 'How to Write Engaging Poetry',
      description: 'Tips for creating poetry that resonates with readers',
      icon: <Edit3 />,
      readTime: '5 min read',
      category: 'Writing Tips'
    },
    {
      title: 'Building Your Creative Community',
      description: 'Strategies for growing your following and engagement',
      icon: <Users />,
      readTime: '8 min read',
      category: 'Growth'
    },
    {
      title: 'Content Creation Best Practices',
      description: 'Guidelines for creating compelling content',
      icon: <Lightbulb />,
      readTime: '6 min read',
      category: 'Content Strategy'
    },
    {
      title: 'Understanding Platform Analytics',
      description: 'How to interpret your content performance data',
      icon: <FileText />,
      readTime: '4 min read',
      category: 'Analytics'
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <NavigationHeader />
      
      <Content style={{ marginTop: 64, padding: '50px' }}>
        {/* Hero Section */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: 60,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '80px 20px',
          borderRadius: 16,
          color: 'white'
        }}>
          <Title level={1} style={{ color: 'white', fontSize: '3rem', marginBottom: 16 }}>
            Help Center
          </Title>
          <Paragraph style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', maxWidth: 600, margin: '0 auto 30px' }}>
            Find answers to common questions, learn how to use the platform, and get the most out of your creative journey.
          </Paragraph>
          
          <Input
            size="large"
            placeholder="Search for help articles, guides, or FAQs..."
            prefix={<Search />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ 
              maxWidth: 500, 
              borderRadius: 25,
              padding: '12px 20px',
              fontSize: '1rem'
            }}
          />
        </div>

        {/* Quick Start Guide */}
        <Card 
          title="Quick Start Guide" 
          style={{ marginBottom: 40 }}
          headStyle={{ background: '#f8f9fa', fontWeight: 600 }}
        >
          <Steps 
            direction="horizontal" 
            current={-1}
            style={{ marginBottom: 30 }}
            responsive
          >
            {quickStartSteps.map((step, index) => (
              <Steps.Step
                key={index}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </Steps>
          
          <Alert
            message="New to Multiversal.blog?"
            description="Follow these simple steps to get started and join our creative community today!"
            type="info"
            showIcon
            style={{ borderRadius: 8 }}
          />
        </Card>

        <Row gutter={[32, 32]}>
          {/* Categories Sidebar */}
          <Col xs={24} lg={8}>
            <Card 
              title="Help Categories" 
              headStyle={{ background: '#f8f9fa', fontWeight: 600 }}
            >
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                {helpCategories.map((category) => (
                  <Card
                    key={category.key}
                    size="small"
                    hoverable
                    style={{ 
                      cursor: 'pointer',
                      border: activeCategory === category.key ? `2px solid ${category.color}` : '1px solid #f0f0f0',
                      borderRadius: 8
                    }}
                    onClick={() => setActiveCategory(category.key)}
                  >
                    <Space>
                      <div style={{ color: category.color, fontSize: 20 }}>
                        {category.icon}
                      </div>
                      <div>
                        <Text strong style={{ display: 'block' }}>
                          {category.title}
                        </Text>
                        <Text type="secondary" style={{ fontSize: '0.9rem' }}>
                          {category.description}
                        </Text>
                      </div>
                    </Space>
                  </Card>
                ))}
              </Space>

              <Divider />

              <div>
                <Title level={5}>Popular Guides</Title>
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  {popularGuides.map((guide, index) => (
                    <Card 
                      key={index} 
                      size="small" 
                      hoverable
                      style={{ cursor: 'pointer' }}
                    >
                      <Space>
                        <div style={{ color: '#1890ff' }}>{guide.icon}</div>
                        <div style={{ flex: 1 }}>
                          <Text strong style={{ fontSize: '0.9rem', display: 'block' }}>
                            {guide.title}
                          </Text>
                          <Tag size="small">{guide.category}</Tag>
                          <Text type="secondary" style={{ fontSize: '0.8rem', marginLeft: 8 }}>
                            {guide.readTime}
                          </Text>
                        </div>
                      </Space>
                    </Card>
                  ))}
                </Space>
              </div>
            </Card>
          </Col>

          {/* FAQ Content */}
          <Col xs={24} lg={16}>
            <Card 
              title={`${helpCategories.find(cat => cat.key === activeCategory)?.title} - Frequently Asked Questions`}
              headStyle={{ background: '#f8f9fa', fontWeight: 600 }}
            >
              <Collapse 
                accordion 
                size="large"
                style={{ background: 'transparent' }}
              >
                {getFAQsByCategory(activeCategory).map((faq, index) => (
                  <Panel 
                    key={index} 
                    header={
                      <Space>
                        <HelpCircle style={{ color: '#1890ff' }} />
                        <Text strong>{faq.question}</Text>
                      </Space>
                    }
                    style={{ marginBottom: 16, borderRadius: 8 }}
                  >
                    <Paragraph style={{ marginLeft: 24, lineHeight: 1.7 }}>
                      {faq.answer}
                    </Paragraph>
                  </Panel>
                ))}
              </Collapse>
            </Card>
          </Col>
        </Row>

        {/* Additional Resources */}
        <Row gutter={[24, 24]} style={{ marginTop: 40 }}>
          <Col xs={24} md={8}>
            <Card 
              hoverable
              style={{ 
                textAlign: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                color: 'white'
              }}
            >
              <Video style={{ fontSize: 48, marginBottom: 16 }} />
              <Title level={4} style={{ color: 'white' }}>Video Tutorials</Title>
              <Paragraph style={{ color: 'rgba(255,255,255,0.9)' }}>
                Watch step-by-step video guides for common tasks
              </Paragraph>
              <Button 
                type="primary" 
                ghost 
                style={{ borderColor: 'white', color: 'white' }}
              >
                Watch Now
              </Button>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card 
              hoverable
              style={{ 
                textAlign: 'center',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                border: 'none',
                color: 'white'
              }}
            >
              <MessageCircle style={{ fontSize: 48, marginBottom: 16 }} />
              <Title level={4} style={{ color: 'white' }}>Live Chat Support</Title>
              <Paragraph style={{ color: 'rgba(255,255,255,0.9)' }}>
                Get instant help from our support team
              </Paragraph>
              <Button 
                type="primary" 
                ghost 
                style={{ borderColor: 'white', color: 'white' }}
              >
                Start Chat
              </Button>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card 
              hoverable
              style={{ 
                textAlign: 'center',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                border: 'none',
                color: 'white'
              }}
            >
              <BookOpen style={{ fontSize: 48, marginBottom: 16 }} />
              <Title level={4} style={{ color: 'white' }}>Creator Handbook</Title>
              <Paragraph style={{ color: 'rgba(255,255,255,0.9)' }}>
                Comprehensive guide for growing your creative presence
              </Paragraph>
              <Button 
                type="primary" 
                ghost 
                style={{ borderColor: 'white', color: 'white' }}
              >
                Download PDF
              </Button>
            </Card>
          </Col>
        </Row>

        {/* Still Need Help */}
        <Card 
          style={{ 
            marginTop: 40,
            textAlign: 'center',
            background: '#f8f9fa'
          }}
        >
          <Title level={3}>Still need help?</Title>
          <Paragraph style={{ fontSize: '1.1rem', marginBottom: 24 }}>
            Can&apos;t find what you&apos;re looking for? Our support team is here to help!
          </Paragraph>
          <Space size="large">
            <Button 
              type="primary" 
              size="large"
              icon={<MessageCircle />}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                borderRadius: 8
              }}
            >
              Contact Support
            </Button>
            <Button 
              size="large"
              icon={<Users />}
              style={{ borderRadius: 8 }}
            >
              Join Community Forum
            </Button>
          </Space>
        </Card>
      </Content>

      <SiteFooter />
    </Layout>
  );
}
