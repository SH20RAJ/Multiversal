'use client';
import React, { useState } from 'react';
import { Layout, Typography, Card, Avatar, Button, Space, Row, Col, Statistic, Timeline, Carousel, Tag, Divider, Image, Progress } from 'antd';
import { Heart, Lightbulb, Users, Rocket, Star, Trophy, Globe, BookOpen, Shield, Edit3, User, Mail, Linkedin, Twitter } from 'lucide-react';
import NavigationHeader from '../../components/NavigationHeader';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

export default function About() {
  const [activeFounder, setActiveFounder] = useState(0);

  const missionValues = [
    {
      icon: <HeartOutlined style={{ fontSize: '32px', color: '#ff4d4f' }} />,
      title: "Authentic Expression",
      description: "We believe every voice matters. Our platform celebrates authentic creativity without judgment."
    },
    {
      icon: <TeamOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
      title: "Community First",
      description: "Building meaningful connections between creators, fostering collaboration and mutual support."
    },
    {
      icon: <BulbOutlined style={{ fontSize: '32px', color: '#faad14' }} />,
      title: "Creative Innovation",
      description: "Pushing boundaries of digital storytelling with cutting-edge tools and features."
    },
    {
      icon: <GlobalOutlined style={{ fontSize: '32px', color: '#52c41a' }} />,
      title: "Global Accessibility",
      description: "Making creative expression accessible to everyone, regardless of background or experience."
    }
  ];

  const timeline = [
    {
      year: "2021",
      title: "The Spark",
      description: "Three friends recognized the need for a dedicated space where all forms of creative expression could thrive together.",
      color: "blue"
    },
    {
      year: "2022",
      title: "Foundation",
      description: "Launched beta with 100 creators. Focused on building core features and community guidelines.",
      color: "green"
    },
    {
      year: "2023",
      title: "Growth",
      description: "Reached 10,000 active creators. Introduced collaboration tools and mentorship programs.",
      color: "orange"
    },
    {
      year: "2024",
      title: "Innovation",
      description: "AI-powered discovery, advanced analytics, and mobile app launch. 50,000+ creators joined.",
      color: "purple"
    },
    {
      year: "2025",
      title: "Global Impact",
      description: "Expanding internationally. 100,000+ creators, featured in major publications, industry recognition.",
      color: "red"
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Co-Founder & CEO",
      bio: "Former writer turned tech entrepreneur. Published novelist with a passion for democratizing creative expression.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      background: "10 years in publishing, Stanford MBA",
      achievements: ["Published 3 novels", "TEDx Speaker", "Forbes 30 Under 30"]
    },
    {
      name: "Marcus Rodriguez",
      role: "Co-Founder & CTO",
      bio: "Musician and software engineer who believes technology should amplify human creativity, not replace it.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      background: "Ex-Spotify engineer, Berklee graduate",
      achievements: ["Grammy nominee", "20+ patents", "MIT Technology Review 35"]
    },
    {
      name: "Elena Patel",
      role: "Co-Founder & CPO",
      bio: "Designer and poet who crafts experiences that connect hearts and minds across digital boundaries.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
      background: "IDEO alum, MFA in Creative Writing",
      achievements: ["National Poetry Award", "Design Impact Award", "100 Most Creative People"]
    }
  ];

  const stats = [
    { title: 'Active Creators', value: 127834, suffix: '+' },
    { title: 'Stories Published', value: 2847392, suffix: '+' },
    { title: 'Countries Represented', value: 89, suffix: '' },
    { title: 'Community Rating', value: 4.9, suffix: '/5' }
  ];

  const awards = [
    { name: "Best Creative Platform 2024", org: "Creative Tech Awards" },
    { name: "Innovation in Digital Arts", org: "Arts & Technology Summit" },
    { name: "Community Impact Award", org: "Social Innovation Festival" },
    { name: "Best User Experience", org: "UX Design Awards" }
  ];

  return (
    <Layout style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <NavigationHeader />
      
      <Content style={{ padding: '20px', marginTop: '64px' }}>
        {/* Hero Section */}
        <div style={{ 
          textAlign: 'center', 
          padding: '80px 20px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '24px',
          marginBottom: '60px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <Title level={1} style={{ color: 'white', fontSize: '4rem', marginBottom: '24px', fontWeight: '700' }}>
            Where Stories Come Alive
          </Title>
          <Paragraph style={{ 
            color: 'rgba(255, 255, 255, 0.9)', 
            fontSize: '1.3rem', 
            maxWidth: '900px', 
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Multiversal.blog was born from a simple belief: every human has a story worth telling, 
            and every story deserves an audience that truly listens. We're not just a platform – 
            we're a movement celebrating the infinite creativity within each of us.
          </Paragraph>
          
          {/* Stats Row */}
          <Row gutter={[32, 32]} style={{ marginTop: '50px' }}>
            {stats.map((stat, index) => (
              <Col xs={12} md={6} key={index}>
                <Card style={{ 
                  background: 'rgba(255, 255, 255, 0.15)', 
                  border: 'none',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <Statistic
                    title={<span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px' }}>{stat.title}</span>}
                    value={stat.value}
                    suffix={<span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{stat.suffix}</span>}
                    valueStyle={{ color: 'white', fontWeight: 'bold', fontSize: '28px' }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Mission & Values */}
        <div style={{ marginBottom: '80px' }}>
          <Title level={2} style={{ textAlign: 'center', color: 'white', marginBottom: '50px' }}>
            Our Mission & Values
          </Title>
          <Row gutter={[32, 32]}>
            {missionValues.map((value, index) => (
              <Col xs={24} md={12} lg={6} key={index}>
                <Card style={{ 
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '20px',
                  padding: '20px',
                  textAlign: 'center',
                  border: 'none',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{ marginBottom: '20px' }}>
                    {value.icon}
                  </div>
                  <Title level={4} style={{ marginBottom: '16px' }}>{value.title}</Title>
                  <Paragraph style={{ color: '#666', lineHeight: '1.6' }}>
                    {value.description}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Our Story Timeline */}
        <Card style={{ 
          marginBottom: '80px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '24px',
          padding: '40px',
          border: 'none'
        }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>Our Journey</Title>
          <Timeline mode="alternate" style={{ padding: '20px 0' }}>
            {timeline.map((item, index) => (
              <Timeline.Item 
                key={index} 
                color={item.color}
                label={<Text strong style={{ fontSize: '18px', color: item.color }}>{item.year}</Text>}
              >
                <Card size="small" style={{ borderRadius: '12px', border: `2px solid ${item.color}` }}>
                  <Title level={4} style={{ marginBottom: '8px' }}>{item.title}</Title>
                  <Paragraph style={{ margin: 0, color: '#666' }}>{item.description}</Paragraph>
                </Card>
              </Timeline.Item>
            ))}
          </Timeline>
        </Card>

        {/* Team Section */}
        <div style={{ marginBottom: '80px' }}>
          <Title level={2} style={{ textAlign: 'center', color: 'white', marginBottom: '50px' }}>
            Meet the Founders
          </Title>
          <Row gutter={[32, 32]}>
            {team.map((member, index) => (
              <Col xs={24} md={8} key={index}>
                <Card style={{ 
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '20px',
                  border: 'none',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
                className="team-card"
                hoverable
                >
                  <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <Avatar src={member.avatar} size={120} style={{ marginBottom: '20px' }} />
                    <Title level={3} style={{ marginBottom: '8px' }}>{member.name}</Title>
                    <Text strong style={{ color: '#1890ff', fontSize: '16px' }}>{member.role}</Text>
                    <Paragraph style={{ margin: '20px 0', color: '#666', lineHeight: '1.6' }}>
                      {member.bio}
                    </Paragraph>
                    <Divider />
                    <div style={{ textAlign: 'left' }}>
                      <Text strong>Background:</Text>
                      <br />
                      <Text style={{ color: '#666' }}>{member.background}</Text>
                      <br /><br />
                      <Text strong>Achievements:</Text>
                      <div style={{ marginTop: '8px' }}>
                        {member.achievements.map(achievement => (
                          <Tag key={achievement} color="blue" style={{ margin: '2px' }}>
                            {achievement}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Awards & Recognition */}
        <Card style={{ 
          marginBottom: '80px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '24px',
          border: 'none'
        }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
            Awards & Recognition
          </Title>
          <Row gutter={[24, 24]}>
            {awards.map((award, index) => (
              <Col xs={12} md={6} key={index}>
                <Card size="small" style={{ 
                  textAlign: 'center',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none'
                }}>
                  <TrophyOutlined style={{ fontSize: '32px', color: '#faad14', marginBottom: '12px' }} />
                  <Title level={5} style={{ color: 'white', marginBottom: '8px' }}>{award.name}</Title>
                  <Text style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{award.org}</Text>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

        {/* Call to Action */}
        <div style={{ 
          textAlign: 'center', 
          padding: '60px 20px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <Title level={2} style={{ color: 'white', marginBottom: '24px' }}>
            Ready to Share Your Story?
          </Title>
          <Paragraph style={{ 
            color: 'rgba(255, 255, 255, 0.9)', 
            fontSize: '1.2rem', 
            maxWidth: '600px', 
            margin: '0 auto 40px' 
          }}>
            Join thousands of creators who have found their voice and their audience on Multiversal.blog. 
            Your story is waiting to be told.
          </Paragraph>
          <Space size="large">
            <Button type="primary" size="large" icon={<EditOutlined />}>
              Start Creating
            </Button>
            <Button size="large" style={{ 
              background: 'rgba(255, 255, 255, 0.2)', 
              border: 'none', 
              color: 'white' 
            }}>
              Contact Us
            </Button>
          </Space>
        </div>
      </Content>

      <style jsx>{`
        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </Layout>
  );
}
