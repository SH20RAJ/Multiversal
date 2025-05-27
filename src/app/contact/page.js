'use client';

import React, { useState } from 'react';
import { 
  Layout, 
  Typography, 
  Card, 
  Row, 
  Col, 
  Form, 
  Input, 
  Button, 
  Select, 
  Space,
  Divider,
  message,
  Badge,
  Avatar
} from 'antd';
import { 
  Mail, 
  Phone, 
  MapPin,
  Twitter,
  Linkedin,
  Send,
  Clock,
  Heart,
  User,
  MessageCircle
} from 'lucide-react';
import NavigationHeader from '../../components/NavigationHeader';
import SiteFooter from '../../components/SiteFooter';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

export default function ContactPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {            message.success('Message sent successfully! We&apos;ll get back to you within 24 hours.');
      form.resetFields();
      setLoading(false);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" style={{ color: '#1890ff' }} />,
      title: 'Email Us',
      description: 'Get in touch via email',
      value: 'hello@multiversal.blog',
      action: 'mailto:hello@multiversal.blog'
    },
    {
      icon: <MessageCircle className="w-6 h-6" style={{ color: '#52c41a' }} />,
      title: 'Live Chat',
      description: 'Chat with our support team',
      value: 'Available 24/7',
      action: '#'
    },
    {
      icon: <Twitter className="w-6 h-6" style={{ color: '#1da1f2' }} />,
      title: 'Social Media',
      description: 'Follow us for updates',
      value: '@multiversalblog',
      action: 'https://twitter.com/multiversalblog'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Community Manager',
      avatar: 'S',
      status: 'online',
      expertise: ['Community Support', 'Content Moderation']
    },
    {
      name: 'Alex Chen',
      role: 'Technical Support',
      avatar: 'A',
      status: 'online',
      expertise: ['Platform Issues', 'API Support']
    },
    {
      name: 'Maya Patel',
      role: 'Creator Success',
      avatar: 'M',
      status: 'away',
      expertise: ['Creator Onboarding', 'Growth Strategy']
    }
  ];

  const faqItems = [
    {
      question: 'How do I start sharing my content?',
      answer: 'Simply create an account and use our intuitive content creation tools to share your poetry, stories, music, or other creative works.'
    },
    {
      question: 'Is the platform free to use?',
      answer: 'Yes! Multiversal.blog is completely free for creators. We believe in democratizing creative expression.'
    },
    {
      question: 'How do I grow my audience?',
      answer: 'Engage with the community, participate in challenges, use relevant tags, and consistently share quality content.'
    },
    {
      question: 'Can I monetize my content?',
      answer: 'We&apos;re working on creator monetization features. Join our newsletter for updates!'
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
            Get in Touch
          </Title>
          <Paragraph style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', maxWidth: 600, margin: '0 auto' }}>
            Have questions, feedback, or need support? We&apos;re here to help you on your creative journey. 
            Our team typically responds within 24 hours.
          </Paragraph>
          <div style={{ marginTop: 30 }}>
            <Badge count="24/7" style={{ backgroundColor: '#52c41a' }}>
              <Clock className="w-6 h-6" style={{ color: 'white' }} />
            </Badge>
            <Text style={{ color: 'white', marginLeft: 10, fontSize: '1rem' }}>
              Average response time: 2 hours
            </Text>
          </div>
        </div>

        <Row gutter={[32, 32]}>
          {/* Contact Methods */}
          <Col xs={24} lg={8}>
            <Card 
              title="Contact Methods" 
              style={{ height: '100%' }}
              headStyle={{ background: '#f8f9fa', fontWeight: 600 }}
            >
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {contactMethods.map((method, index) => (
                  <Card 
                    key={index}
                    size="small"
                    hoverable
                    style={{ cursor: 'pointer', border: '1px solid #f0f0f0' }}
                    onClick={() => method.action.startsWith('http') ? window.open(method.action) : null}
                  >
                    <Space>
                      {method.icon}
                      <div>
                        <Text strong>{method.title}</Text>
                        <br />
                        <Text type="secondary" style={{ fontSize: '0.9rem' }}>
                          {method.description}
                        </Text>
                        <br />
                        <Text style={{ color: '#1890ff' }}>{method.value}</Text>
                      </div>
                    </Space>
                  </Card>
                ))}
              </Space>

              <Divider />

              <div>
                <Title level={5}>Our Support Team</Title>
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  {teamMembers.map((member, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <Badge 
                        status={member.status === 'online' ? 'success' : 'warning'} 
                        dot
                        offset={[-8, 8]}
                      >
                        <Avatar style={{ backgroundColor: '#1890ff' }}>
                          {member.avatar}
                        </Avatar>
                      </Badge>
                      <div style={{ flex: 1 }}>
                        <Text strong style={{ fontSize: '0.9rem' }}>{member.name}</Text>
                        <br />
                        <Text type="secondary" style={{ fontSize: '0.8rem' }}>
                          {member.role}
                        </Text>
                      </div>
                    </div>
                  ))}
                </Space>
              </div>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col xs={24} lg={16}>
            <Card 
              title="Send us a Message" 
              headStyle={{ background: '#f8f9fa', fontWeight: 600 }}
            >
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                size="large"
              >
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="name"
                      label="Full Name"
                      rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                      <Input placeholder="Your full name" prefix={<User className="w-4 h-4" />} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      label="Email Address"
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' }
                      ]}
                    >
                      <Input placeholder="your@email.com" prefix={<Mail className="w-4 h-4" />} />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="subject"
                  label="Subject"
                  rules={[{ required: true, message: 'Please enter a subject' }]}
                >
                  <Select placeholder="What is this regarding?">
                    <Option value="general">General Inquiry</Option>
                    <Option value="technical">Technical Support</Option>
                    <Option value="content">Content Guidelines</Option>
                    <Option value="partnership">Partnership</Option>
                    <Option value="feedback">Feedback</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Message"
                  rules={[{ required: true, message: 'Please enter your message' }]}
                >
                  <TextArea 
                    rows={6} 
                    placeholder="Tell us how we can help you..."
                    showCount
                    maxLength={1000}
                  />
                </Form.Item>

                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    loading={loading}
                    icon={<Send className="w-4 h-4" />}
                    size="large"
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none',
                      borderRadius: 8,
                      fontWeight: 600,
                      padding: '0 30px'
                    }}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>

        {/* FAQ Section */}
        <Card 
          title="Frequently Asked Questions" 
          style={{ marginTop: 40 }}
          headStyle={{ background: '#f8f9fa', fontWeight: 600 }}
        >
          <Row gutter={[24, 24]}>
            {faqItems.map((faq, index) => (
              <Col xs={24} md={12} key={index}>
                <Card size="small" hoverable style={{ height: '100%' }}>
                  <Title level={5} style={{ color: '#1890ff', marginBottom: 12 }}>
                    {faq.question}
                  </Title>
                  <Paragraph style={{ marginBottom: 0, lineHeight: 1.6 }}>
                    {faq.answer}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

        {/* Additional Support */}
        <Card 
          style={{ 
            marginTop: 40, 
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            border: 'none'
          }}
        >
          <div style={{ textAlign: 'center', color: 'white' }}>
            <Heart className="w-12 h-12 mx-auto mb-4" style={{ color: 'white' }} />
            <Title level={3} style={{ color: 'white', marginBottom: 16 }}>
              Love using Multiversal.blog?
            </Title>
            <Paragraph style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', marginBottom: 24 }}>
              Help us spread the word and grow our creative community!
            </Paragraph>
            <Space size="large">
              <Button 
                size="large" 
                style={{ 
                  background: 'rgba(255,255,255,0.2)', 
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: 'white',
                  borderRadius: 8
                }}
                href="https://twitter.com/intent/tweet?text=I'm%20loving%20@multiversalblog"
                target="_blank"
              >
                Share on Twitter
              </Button>
              <Button 
                size="large" 
                style={{ 
                  background: 'rgba(255,255,255,0.2)', 
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: 'white',
                  borderRadius: 8
                }}
              >
                Leave a Review
              </Button>
            </Space>
          </div>
        </Card>
      </Content>

      <SiteFooter />
    </Layout>
  );
}
