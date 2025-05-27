'use client';
import React from 'react';
import { Layout, Typography, Row, Col, Space, Button, Divider, Input } from 'antd';
import { Twitter, Instagram, Linkedin, Youtube, Facebook, Mail, Heart, Globe } from 'lucide-react';
import Link from 'next/link';

const { Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

export default function SiteFooter() {
  const footerLinks = {
    platform: [
      { label: 'How it Works', href: '/how-it-works' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Features', href: '/features' },
      { label: 'API', href: '/api' }
    ],
    community: [
      { label: 'Guidelines', href: '/guidelines' },
      { label: 'Events', href: '/events' },
      { label: 'Mentorship', href: '/mentorship' },
      { label: 'Challenges', href: '/challenges' }
    ],
    resources: [
      { label: 'Writing Tips', href: '/resources/writing' },
      { label: 'Creator Tools', href: '/resources/tools' },
      { label: 'Inspiration', href: '/resources/inspiration' },
      { label: 'Success Stories', href: '/resources/stories' }
    ],
    support: [
      { label: 'Help Center', href: '/help' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Report Issue', href: '/report' },
      { label: 'Feedback', href: '/feedback' }
    ]
  };

  const socialLinks = [
    { icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com/multiversalblog', label: 'Twitter' },
    { icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com/multiversalblog', label: 'Instagram' },
    { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com/company/multiversalblog', label: 'LinkedIn' },
    { icon: <Youtube className="w-4 h-4" />, href: 'https://youtube.com/@multiversalblog', label: 'YouTube' },
    { icon: <Facebook className="w-4 h-4" />, href: 'https://facebook.com/multiversalblog', label: 'Facebook' }
  ];

  return (
    <Footer style={{ 
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      color: 'white',
      padding: '80px 0 20px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Newsletter Section */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '40px',
          marginBottom: '60px',
          textAlign: 'center',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <Title level={2} style={{ color: 'white', marginBottom: '16px' }}>
            Stay Connected with Our Creative Community
          </Title>
          <Paragraph style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '16px', marginBottom: '32px' }}>
            Get weekly inspiration, featured works, writing prompts, and exclusive creator resources delivered to your inbox.
          </Paragraph>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <Input.Group compact>
              <Input
                style={{ width: 'calc(100% - 120px)' }}
                placeholder="Enter your email address"
                size="large"
              />
              <Button 
                type="primary" 
                size="large"
                style={{
                  width: '120px',
                  background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
                  border: 'none',
                  fontWeight: '600'
                }}
              >
                Subscribe
              </Button>
            </Input.Group>
          </div>
        </div>

        {/* Main Footer Content */}
        <Row gutter={[48, 32]}>
          {/* Brand Section */}
          <Col xs={24} md={8}>
            <div style={{ marginBottom: '24px' }}>
              <Title level={3} style={{ color: 'white', marginBottom: '16px' }}>
                ✨ Multiversal.blog
              </Title>
              <Paragraph style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '24px' }}>
                Empowering creators worldwide to share their stories, poetry, music, and art. 
                Join our vibrant community where every voice matters and creativity knows no bounds.
              </Paragraph>
              
              {/* Social Links */}
              <div style={{ marginBottom: '24px' }}>
                <Text style={{ color: 'white', fontWeight: '600', marginBottom: '12px', display: 'block' }}>
                  Follow Us
                </Text>
                <Space size="large">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      type="text"
                      icon={social.icon}
                      style={{ 
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '20px',
                        padding: '8px',
                        borderRadius: '50%',
                        transition: 'all 0.3s ease'
                      }}
                      className="social-btn"
                    />
                  ))}
                </Space>
              </div>

              {/* Stats */}
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '16px',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              }}>
                <Row gutter={16}>
                  <Col span={8}>
                    <div style={{ textAlign: 'center' }}>
                      <Text style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', display: 'block' }}>
                        127K+
                      </Text>
                      <Text style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '12px' }}>
                        Creators
                      </Text>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div style={{ textAlign: 'center' }}>
                      <Text style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', display: 'block' }}>
                        2.8M+
                      </Text>
                      <Text style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '12px' }}>
                        Stories
                      </Text>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div style={{ textAlign: 'center' }}>
                      <Text style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', display: 'block' }}>
                        89
                      </Text>
                      <Text style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '12px' }}>
                        Countries
                      </Text>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>

          {/* Links Sections */}
          <Col xs={24} md={16}>
            <Row gutter={[32, 24]}>
              <Col xs={12} sm={6}>
                <Title level={5} style={{ color: 'white', marginBottom: '16px' }}>
                  Platform
                </Title>
                <Space direction="vertical" size="small">
                  {footerLinks.platform.map((link, index) => (
                    <Link key={index} href={link.href}>
                      <Text style={{ color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer' }}>
                        {link.label}
                      </Text>
                    </Link>
                  ))}
                </Space>
              </Col>

              <Col xs={12} sm={6}>
                <Title level={5} style={{ color: 'white', marginBottom: '16px' }}>
                  Community
                </Title>
                <Space direction="vertical" size="small">
                  {footerLinks.community.map((link, index) => (
                    <Link key={index} href={link.href}>
                      <Text style={{ color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer' }}>
                        {link.label}
                      </Text>
                    </Link>
                  ))}
                </Space>
              </Col>

              <Col xs={12} sm={6}>
                <Title level={5} style={{ color: 'white', marginBottom: '16px' }}>
                  Resources
                </Title>
                <Space direction="vertical" size="small">
                  {footerLinks.resources.map((link, index) => (
                    <Link key={index} href={link.href}>
                      <Text style={{ color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer' }}>
                        {link.label}
                      </Text>
                    </Link>
                  ))}
                </Space>
              </Col>

              <Col xs={12} sm={6}>
                <Title level={5} style={{ color: 'white', marginBottom: '16px' }}>
                  Support
                </Title>
                <Space direction="vertical" size="small">
                  {footerLinks.support.map((link, index) => (
                    <Link key={index} href={link.href}>
                      <Text style={{ color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer' }}>
                        {link.label}
                      </Text>
                    </Link>
                  ))}
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>

        <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.2)', margin: '48px 0 24px' }} />

        {/* Bottom Section */}
        <Row justify="space-between" align="middle">
          <Col xs={24} md={12}>
            <Space split={<Divider type="vertical" style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }} />}>
              <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                © 2025 Multiversal.blog. All rights reserved.
              </Text>
              <Link href="/privacy">
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Privacy Policy</Text>
              </Link>
              <Link href="/terms">
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Terms of Service</Text>
              </Link>
            </Space>
          </Col>
          <Col xs={24} md={12} style={{ textAlign: 'right' }}>
            <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Made with <Heart className="w-4 h-4 inline mx-1" style={{ color: '#ff6b6b' }} /> for creators worldwide
            </Text>
          </Col>
        </Row>
      </div>

      <style jsx global>{`
        .social-btn:hover {
          color: white !important;
          background: rgba(255, 255, 255, 0.1) !important;
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .footer-stats {
            text-align: center;
            margin-bottom: 24px;
          }
        }
      `}</style>
    </Footer>
  );
}
