'use client';

import React from 'react';
import { 
  Layout, 
  Typography, 
  Card, 
  Row, 
  Col, 
  Space,
  Divider,
  Alert,
  List,
  Tag,
  Timeline
} from 'antd';
import { 
  FileText,
  User,
  Shield,
  Copyright,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock,
  Globe
} from 'lucide-react';
import NavigationHeader from '../../components/NavigationHeader';
import SiteFooter from '../../components/SiteFooter';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function TermsPage() {
  const lastUpdated = "May 27, 2025";

  const acceptableUse = [
    {
      title: "Share Original Creative Content",
      description: "Poetry, stories, music, art, and other original creative works",
      icon: <CheckCircle style={{ color: '#52c41a' }} />
    },
    {
      title: "Engage Respectfully",
      description: "Provide constructive feedback and support fellow creators",
      icon: <CheckCircle style={{ color: '#52c41a' }} />
    },
    {
      title: "Build Community",
      description: "Participate in discussions, challenges, and collaborative projects",
      icon: <CheckCircle style={{ color: '#52c41a' }} />
    },
    {
      title: "Credit Sources",
      description: "Properly attribute any inspiration, collaboration, or fair use content",
      icon: <CheckCircle style={{ color: '#52c41a' }} />
    }
  ];

  const prohibitedActivities = [
    {
      title: "Copyright Infringement",
      description: "Sharing content you don&apos;t own or have permission to use",
      icon: <XCircle style={{ color: '#ff4d4f' }} />
    },
    {
      title: "Harassment or Abuse",
      description: "Bullying, threatening, or harassing other users",
      icon: <XCircle style={{ color: '#ff4d4f' }} />
    },
    {
      title: "Spam or Misleading Content",
      description: "Posting repetitive, promotional, or deliberately false content",
      icon: <XCircle style={{ color: '#ff4d4f' }} />
    },
    {
      title: "Inappropriate Content",
      description: "Adult content, hate speech, or content promoting illegal activities",
      icon: <XCircle style={{ color: '#ff4d4f' }} />
    }
  ];

  const contentGuidelines = [
    {
      category: "Original Creative Works",
      description: "Your poetry, stories, music, and art should be your own original creation or properly attributed collaborative work.",
      examples: ["Personal poetry and prose", "Original music compositions", "Creative writing and storytelling", "Art and visual content you created"]
    },
    {
      category: "Collaborative Content",
      description: "When sharing collaborative works, ensure all contributors are credited and have given permission.",
      examples: ["Co-written stories or poems", "Musical collaborations", "Joint art projects", "Community challenge entries"]
    },
    {
      category: "Fair Use & Attribution",
      description: "Limited use of others&apos; work for commentary, criticism, or educational purposes with proper attribution.",
      examples: ["Book reviews with quoted excerpts", "Analysis of public domain works", "Educational content with citations", "Parody or transformative works"]
    },
    {
      category: "Community Contributions",
      description: "Constructive participation in community discussions, feedback, and collaborative projects.",
      examples: ["Thoughtful feedback on others&apos; work", "Participation in writing prompts", "Community event contributions", "Mentoring newer creators"]
    }
  ];

  const enforcementActions = [
    {
      violation: "Minor Policy Violation",
      action: "Warning and guidance",
      example: "First-time unintentional guideline violation",
      color: 'orange'
    },
    {
      violation: "Repeated Violations",
      action: "Content removal and temporary restrictions",
      example: "Multiple spam posts or minor harassment",
      color: 'red'
    },
    {
      violation: "Serious Violation",
      action: "Account suspension (7-30 days)",
      example: "Copyright infringement or significant harassment",
      color: 'red'
    },
    {
      violation: "Severe or Illegal Activity",
      action: "Permanent account termination",
      example: "Hate speech, doxxing, or illegal content sharing",
      color: 'red'
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <NavigationHeader />
      
      <Content style={{ marginTop: 64, padding: '50px' }}>
        {/* Header Section */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: 60,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '80px 20px',
          borderRadius: 16,
          color: 'white'
        }}>
          <FileText style={{ fontSize: 64, marginBottom: 24 }} />
          <Title level={1} style={{ color: 'white', fontSize: '3rem', marginBottom: 16 }}>
            Terms of Service
          </Title>
          <Paragraph style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', maxWidth: 800, margin: '0 auto 30px' }}>
            These terms govern your use of Multiversal.blog and help us maintain a safe, 
            supportive environment for all creators to share and discover amazing content.
          </Paragraph>
          
          <Space size="large" wrap>
            <Tag color="white" style={{ color: '#667eea', fontSize: '1rem', padding: '8px 16px', borderRadius: 20 }}>
              <Clock /> Last Updated: {lastUpdated}
            </Tag>
            <Tag color="rgba(255,255,255,0.2)" style={{ color: 'white', fontSize: '1rem', padding: '8px 16px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.3)' }}>
              <Globe /> Applies Globally
            </Tag>
          </Space>
        </div>

        {/* Agreement Notice */}
        <Alert
          message="By using Multiversal.blog, you agree to these terms"
          description={
            <Paragraph style={{ marginBottom: 0, fontSize: '1rem' }}>
              By creating an account or using our platform, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms of Service and our Privacy Policy.
            </Paragraph>
          }
          type="info"
          showIcon
          style={{ marginBottom: 40, borderRadius: 12, padding: 24 }}
        />

        {/* Platform Purpose */}
        <Card 
          title={
            <Space>
              <User style={{ color: '#1890ff' }} />
              <Text strong>Platform Purpose & Mission</Text>
            </Space>
          }
          style={{ marginBottom: 40 }}
          headStyle={{ background: '#f8f9fa' }}
        >
          <Paragraph style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
            Multiversal.blog is a creative platform designed to democratize artistic expression and build 
            a global community of poets, writers, musicians, and storytellers. Our mission is to provide 
            a safe, supportive environment where creators can share their work, receive feedback, 
            and connect with like-minded individuals from around the world.
          </Paragraph>
          
          <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
            <Col xs={24} md={6}>
              <div style={{ textAlign: 'center', padding: 16 }}>
                <Title level={3} style={{ color: '#1890ff', margin: 0 }}>12,500+</Title>
                <Text type="secondary">Active Creators</Text>
              </div>
            </Col>
            <Col xs={24} md={6}>
              <div style={{ textAlign: 'center', padding: 16 }}>
                <Title level={3} style={{ color: '#52c41a', margin: 0 }}>45,000+</Title>
                <Text type="secondary">Works Published</Text>
              </div>
            </Col>
            <Col xs={24} md={6}>
              <div style={{ textAlign: 'center', padding: 16 }}>
                <Title level={3} style={{ color: '#fa8c16', margin: 0 }}>180+</Title>
                <Text type="secondary">Countries</Text>
              </div>
            </Col>
            <Col xs={24} md={6}>
              <div style={{ textAlign: 'center', padding: 16 }}>
                <Title level={3} style={{ color: '#722ed1', margin: 0 }}>99.2%</Title>
                <Text type="secondary">User Satisfaction</Text>
              </div>
            </Col>
          </Row>
        </Card>

        {/* Acceptable Use */}
        <Row gutter={[24, 24]} style={{ marginBottom: 40 }}>
          <Col xs={24} lg={12}>
            <Card 
              title={
                <Space>
                  <CheckCircle style={{ color: '#52c41a' }} />
                  <Text strong>What You Can Do</Text>
                </Space>
              }
              style={{ height: '100%' }}
              headStyle={{ background: '#f6ffed', borderRadius: '8px 8px 0 0' }}
            >
              <List
                dataSource={acceptableUse}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={item.icon}
                      title={item.title}
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card 
              title={
                <Space>
                  <XCircle style={{ color: '#ff4d4f' }} />
                  <Text strong>What&apos;s Not Allowed</Text>
                </Space>
              }
              style={{ height: '100%' }}
              headStyle={{ background: '#fff2f0', borderRadius: '8px 8px 0 0' }}
            >
              <List
                dataSource={prohibitedActivities}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={item.icon}
                      title={item.title}
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>

        {/* Content Guidelines */}
        <Card 
          title={
            <Space>
              <Copyright style={{ color: '#1890ff' }} />
              <Text strong>Content Guidelines & Intellectual Property</Text>
            </Space>
          }
          style={{ marginBottom: 40 }}
          headStyle={{ background: '#f8f9fa' }}
        >
          <Row gutter={[24, 24]}>
            {contentGuidelines.map((guideline, index) => (
              <Col xs={24} lg={12} key={index}>
                <Card size="small" style={{ height: '100%', border: '1px solid #f0f0f0' }}>
                  <Title level={5} style={{ color: '#1890ff', marginBottom: 12 }}>
                    {guideline.category}
                  </Title>
                  <Paragraph style={{ marginBottom: 16, lineHeight: 1.6 }}>
                    {guideline.description}
                  </Paragraph>
                  <Text strong style={{ fontSize: '0.9rem', color: '#666' }}>Examples:</Text>
                  <ul style={{ marginTop: 8, marginLeft: 16 }}>
                    {guideline.examples.map((example, i) => (
                      <li key={i} style={{ fontSize: '0.9rem', color: '#666', marginBottom: 4 }}>
                        {example}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

        {/* Enforcement & Violations */}
        <Card 
          title={
            <Space>
              <AlertCircle style={{ color: '#fa8c16' }} />
              <Text strong>Policy Enforcement</Text>
            </Space>
          }
          style={{ marginBottom: 40 }}
          headStyle={{ background: '#f8f9fa' }}
        >
          <Paragraph style={{ fontSize: '1.1rem', marginBottom: 24 }}>
            We take community guidelines seriously and apply enforcement measures proportionally. 
            Our goal is education and community preservation, not punishment.
          </Paragraph>

          <Row gutter={[16, 16]}>
            {enforcementActions.map((action, index) => (
              <Col xs={24} md={12} lg={6} key={index}>
                <Card 
                  size="small" 
                  style={{ 
                    textAlign: 'center',
                    border: `2px solid ${action.color === 'orange' ? '#fa8c16' : '#ff4d4f'}`,
                    height: '100%'
                  }}
                >
                  <Title level={5} style={{ color: action.color === 'orange' ? '#fa8c16' : '#ff4d4f', marginBottom: 8 }}>
                    {action.violation}
                  </Title>
                  <Paragraph style={{ fontWeight: 600, marginBottom: 8 }}>
                    {action.action}
                  </Paragraph>
                  <Text type="secondary" style={{ fontSize: '0.9rem' }}>
                    {action.example}
                  </Text>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

        {/* Your Rights & Responsibilities */}
        <Row gutter={[24, 24]} style={{ marginBottom: 40 }}>
          <Col xs={24} lg={12}>
            <Card 
              title="Your Rights"
              headStyle={{ background: '#e6f7ff' }}
              style={{ height: '100%' }}
            >
              <List
                size="small"
                dataSource={[
                  "Retain full ownership of your original creative content",
                  "Control the visibility and sharing of your work",
                  "Request removal or modification of your content",
                  "Access and download your data at any time",
                  "Fair and transparent treatment in policy enforcement",
                  "Appeal any moderation decisions you disagree with"
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <CheckCircle style={{ color: '#52c41a', marginRight: 8 }} />
                    {item}
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card 
              title="Your Responsibilities"
              headStyle={{ background: '#fff7e6' }}
              style={{ height: '100%' }}
            >
              <List
                size="small"
                dataSource={[
                  "Ensure all shared content complies with our guidelines",
                  "Respect the intellectual property rights of others",
                  "Maintain accurate account information",
                  "Report violations and inappropriate content",
                  "Engage constructively with the community",
                  "Keep your account credentials secure and private"
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <User style={{ color: '#fa8c16', marginRight: 8 }} />
                    {item}
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>

        {/* Platform Availability & Modifications */}
        <Card 
          title={
            <Space>
              <Shield style={{ color: '#1890ff' }} />
              <Text strong>Platform Availability & Service Modifications</Text>
            </Space>
          }
          style={{ marginBottom: 40 }}
          headStyle={{ background: '#f8f9fa' }}
        >
          <Paragraph>
            While we strive to maintain 99.9% uptime, Multiversal.blog may occasionally be unavailable 
            for maintenance, updates, or unforeseen technical issues. We&apos;ll provide advance notice 
            when possible and work to minimize any disruption to your creative work.
          </Paragraph>
          
          <Paragraph>
            We may modify these terms, add new features, or update our platform to better serve 
            the creative community. Significant changes will be communicated via email and platform 
            notifications at least 30 days in advance.
          </Paragraph>
        </Card>

        {/* Contact & Legal */}
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card 
              style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                color: 'white',
                textAlign: 'center'
              }}
            >
              <FileText style={{ fontSize: 48, marginBottom: 16 }} />
              <Title level={4} style={{ color: 'white', marginBottom: 16 }}>
                Questions About These Terms?
              </Title>
              <Paragraph style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 24 }}>
                Contact our legal team for clarification on any aspect of our Terms of Service.
              </Paragraph>
              <a href="mailto:legal@multiversal.blog" style={{ color: 'white', textDecoration: 'underline' }}>
                legal@multiversal.blog
              </a>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card 
              style={{ 
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                border: 'none',
                color: 'white',
                textAlign: 'center'
              }}
            >
              <AlertCircle style={{ fontSize: 48, marginBottom: 16 }} />
              <Title level={4} style={{ color: 'white', marginBottom: 16 }}>
                Report Violations
              </Title>
              <Paragraph style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 24 }}>
                Help us maintain community standards by reporting content that violates these terms.
              </Paragraph>
              <a href="mailto:report@multiversal.blog" style={{ color: 'white', textDecoration: 'underline' }}>
                report@multiversal.blog
              </a>
            </Card>
          </Col>
        </Row>

        {/* Legal Information */}
        <Card 
          style={{ 
            marginTop: 40,
            background: '#f8f9fa',
            border: '1px solid #e8e8e8'
          }}
        >
          <Title level={4}>Legal Information</Title>
          <Paragraph>
            These Terms of Service constitute a legally binding agreement between you and Multiversal.blog. 
            They are governed by the laws of [Jurisdiction] and any disputes will be resolved through 
            binding arbitration in accordance with [Arbitration Rules].
          </Paragraph>
          
          <Divider />
          
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Text strong>Effective Date:</Text><br />
              <Text>May 27, 2025</Text>
            </Col>
            <Col xs={24} sm={8}>
              <Text strong>Version:</Text><br />
              <Text>2.1</Text>
            </Col>
            <Col xs={24} sm={8}>
              <Text strong>Next Review:</Text><br />
              <Text>November 27, 2025</Text>
            </Col>
          </Row>
        </Card>
      </Content>

      <SiteFooter />
    </Layout>
  );
}
