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
  Timeline,
  Tag
} from 'antd';
import { Shield, Lock, Eye, Share2, User, ShieldCheck, FileText, Clock } from 'lucide-react';
import NavigationHeader from '../../components/NavigationHeader';
import SiteFooter from '../../components/SiteFooter';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function PrivacyPage() {
  const lastUpdated = "May 27, 2025";

  const privacySections = [
    {
      title: "Information We Collect",
      icon: <User className="w-4 h-4" />,
      content: [
        {
          subtitle: "Account Information",
          description: "When you create an account, we collect your email address, username, and any profile information you choose to provide, such as your bio, profile picture, and social media links."
        },
        {
          subtitle: "Content Data",
          description: "We store the creative content you share on our platform, including poetry, stories, music, and other creative works, along with associated metadata like tags and categories."
        },
        {
          subtitle: "Usage Analytics",
          description: "We collect anonymized data about how you interact with the platform, including page views, content engagement, and feature usage to improve our services."
        },
        {
          subtitle: "Device Information",
          description: "We may collect information about the device and browser you use to access our platform for security and optimization purposes."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <Eye className="w-4 h-4" />,
      content: [
        {
          subtitle: "Platform Operations",
          description: "To provide, maintain, and improve our creative platform, including content delivery, user authentication, and community features."
        },
        {
          subtitle: "Communication",
          description: "To send you important updates about your account, new features, community events, and respond to your inquiries and support requests."
        },
        {
          subtitle: "Content Discovery",
          description: "To help other users discover your content through search, recommendations, and community features, based on your privacy settings."
        },
        {
          subtitle: "Analytics & Improvement",
          description: "To analyze platform usage patterns and improve user experience, always using aggregated, anonymized data."
        }
      ]
    },
    {
      title: "Information Sharing & Disclosure",
      icon: <Share2 className="w-4 h-4" />,
      content: [
        {
          subtitle: "Public Content",
          description: "Content you choose to publish publicly on Multiversal.blog is visible to all users and may be indexed by search engines."
        },
        {
          subtitle: "No Sale of Personal Data",
          description: "We never sell your personal information to third parties. Your creative work and personal data remain yours."
        },
        {
          subtitle: "Service Providers",
          description: "We may share limited data with trusted service providers (hosting, analytics) who help us operate the platform under strict confidentiality agreements."
        },
        {
          subtitle: "Legal Requirements",
          description: "We may disclose information if required by law, court order, or to protect the rights and safety of our users and the platform."
        }
      ]
    },
    {
      title: "Data Security & Protection",
      icon: <Lock />,
      content: [
        {
          subtitle: "Encryption",
          description: "All data transmission is protected using industry-standard SSL/TLS encryption. Your passwords are hashed and securely stored."
        },
        {
          subtitle: "Access Controls",
          description: "We implement strict access controls to ensure only authorized personnel can access user data, and only when necessary for platform operations."
        },
        {
          subtitle: "Regular Security Audits",
          description: "We conduct regular security assessments and updates to protect against emerging threats and vulnerabilities."
        },
        {
          subtitle: "Data Backup",
          description: "Your content is regularly backed up to prevent data loss, with backups stored securely and encrypted."
        }
      ]
    },
    {
      title: "Your Privacy Rights",
      icon: <ShieldCheck />,
      content: [
        {
          subtitle: "Access Your Data",
          description: "You can access, review, and download your personal data and content at any time through your account settings."
        },
        {
          subtitle: "Data Portability",
          description: "You can export your content and data in standard formats if you wish to move to another platform."
        },
        {
          subtitle: "Content Control",
          description: "You have full control over your content visibility - you can make content public, private, or delete it entirely at any time."
        },
        {
          subtitle: "Account Deletion",
          description: "You can delete your account and all associated data at any time. Some content may remain in backups for up to 90 days for security purposes."
        }
      ]
    },
    {
      title: "Cookies & Tracking",
      icon: <FileText />,
      content: [
        {
          subtitle: "Essential Cookies",
          description: "We use essential cookies for authentication, security, and basic platform functionality. These cannot be disabled without affecting platform operation."
        },
        {
          subtitle: "Analytics Cookies",
          description: "We use analytics cookies to understand how users interact with our platform, always in an anonymized manner. You can opt out of these in your settings."
        },
        {
          subtitle: "No Third-Party Tracking",
          description: "We do not use third-party advertising cookies or tracking pixels. Your browsing activity on our platform is not shared with advertisers."
        },
        {
          subtitle: "Local Storage",
          description: "We may use local storage to save your preferences and improve your experience, such as remembering your theme settings."
        }
      ]
    }
  ];

  const dataRetentionTimeline = [
    {
      children: "Account created - Personal data collected and stored securely",
      color: 'blue'
    },
    {
      children: "Active use - Data maintained for platform functionality",
      color: 'green'
    },
    {
      children: "Account inactive (1 year) - Email reminder sent about data retention",
      color: 'orange'
    },
    {
      children: "Account deletion request - Data removal initiated immediately",
      color: 'red'
    },
    {
      children: "90 days post-deletion - All data permanently removed from backups",
      color: 'gray'
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
          <ShieldCheck style={{ fontSize: 64, marginBottom: 24 }} />
          <Title level={1} style={{ color: 'white', fontSize: '3rem', marginBottom: 16 }}>
            Privacy Policy
          </Title>
          <Paragraph style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', maxWidth: 800, margin: '0 auto 30px' }}>
            Your privacy and creative rights are fundamental to our mission. This policy explains how we protect 
            and respect your personal information and creative content on Multiversal.blog.
          </Paragraph>
          
          <Space size="large" wrap>
            <Tag color="white" style={{ color: '#667eea', fontSize: '1rem', padding: '8px 16px', borderRadius: 20 }}>
              <Clock /> Last Updated: {lastUpdated}
            </Tag>
            <Tag color="rgba(255,255,255,0.2)" style={{ color: 'white', fontSize: '1rem', padding: '8px 16px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.3)' }}>
              <Shield /> GDPR Compliant
            </Tag>
          </Space>
        </div>

        {/* Privacy Principles */}
        <Alert
          message="Our Privacy Principles"
          description={
            <div>
              <Paragraph style={{ marginBottom: 16, fontSize: '1.1rem' }}>
                <Text strong>Transparency:</Text> We clearly explain what data we collect and how we use it.<br/>
                <Text strong>Control:</Text> You maintain full control over your content and personal information.<br/>
                <Text strong>Security:</Text> We implement industry-leading security measures to protect your data.<br/>
                <Text strong>Respect:</Text> We never sell your data or use it for purposes beyond platform operation.
              </Paragraph>
            </div>
          }
          type="info"
          showIcon
          style={{ marginBottom: 40, borderRadius: 12, padding: 24 }}
        />

        {/* Privacy Sections */}
        <Row gutter={[24, 24]} style={{ marginBottom: 40 }}>
          {privacySections.map((section, index) => (
            <Col xs={24} lg={12} key={index}>
              <Card 
                title={
                  <Space>
                    <div style={{ color: '#1890ff', fontSize: 20 }}>
                      {section.icon}
                    </div>
                    <Text strong>{section.title}</Text>
                  </Space>
                }
                style={{ height: '100%' }}
                headStyle={{ background: '#f8f9fa', borderRadius: '8px 8px 0 0' }}
              >
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <Title level={5} style={{ color: '#1890ff', marginBottom: 8 }}>
                        {item.subtitle}
                      </Title>
                      <Paragraph style={{ marginBottom: 0, lineHeight: 1.6, color: '#666' }}>
                        {item.description}
                      </Paragraph>
                    </div>
                  ))}
                </Space>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Data Retention Timeline */}
        <Card 
          title={
            <Space>
              <Clock style={{ color: '#1890ff' }} />
              <Text strong>Data Retention Timeline</Text>
            </Space>
          }
          style={{ marginBottom: 40 }}
          headStyle={{ background: '#f8f9fa' }}
        >
          <Timeline
            mode="left"
            items={dataRetentionTimeline}
            style={{ marginTop: 20 }}
          />
        </Card>

        {/* Contact & Updates */}
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
              <User style={{ fontSize: 48, marginBottom: 16 }} />
              <Title level={4} style={{ color: 'white', marginBottom: 16 }}>
                Questions About Privacy?
              </Title>
              <Paragraph style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 24 }}>
                Contact our privacy team for any questions or concerns about how we handle your data.
              </Paragraph>
              <a href="mailto:privacy@multiversal.blog" style={{ color: 'white', textDecoration: 'underline' }}>
                privacy@multiversal.blog
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
              <Shield style={{ fontSize: 48, marginBottom: 16 }} />
              <Title level={4} style={{ color: 'white', marginBottom: 16 }}>
                Policy Updates
              </Title>
              <Paragraph style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 24 }}>
                We&apos;ll notify you of any significant changes to this privacy policy via email and platform notifications.
              </Paragraph>
              <Text style={{ color: 'white', fontSize: '1rem' }}>
                Stay informed about your rights
              </Text>
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
          <Title level={4}>Legal Framework</Title>
          <Paragraph>
            This privacy policy is governed by applicable data protection laws, including the General Data Protection 
            Regulation (GDPR) for European users and the California Consumer Privacy Act (CCPA) for California residents. 
            Multiversal.blog is committed to meeting the highest standards of data protection globally.
          </Paragraph>
          
          <Divider />
          
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Text strong>Effective Date:</Text><br />
              <Text>May 27, 2025</Text>
            </Col>
            <Col xs={24} sm={8}>
              <Text strong>Last Review:</Text><br />
              <Text>May 27, 2025</Text>
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
