'use client';

import React, { useState, useEffect } from 'react';
import { 
  Layout, 
  Typography, 
  Button, 
  Card, 
  Row, 
  Col, 
  Space, 
  Divider,
  Tag,
  Avatar,
  Statistic,
  FloatButton,
  BackTop,
  Carousel,
  Steps,
  Badge,
  Modal,
  Tooltip,
  Progress,
  Rate,
  Timeline,
  Tabs
} from 'antd';
import { 
  PlusOutlined, 
  HeartOutlined, 
  CommentOutlined, 
  ShareAltOutlined,
  EditOutlined,
  BookOutlined,
  SafetyOutlined,
  VideoCameraOutlined,
  StarOutlined,
  TrophyOutlined,
  UserOutlined,
  RocketOutlined,
  BulbOutlined,
  ThunderboltOutlined,
  CrownOutlined,
  FireOutlined,
  GlobalOutlined,
  TeamOutlined,
  SafetyOutlined,
  DashboardOutlined,
  PlayCircleOutlined,
  ReadOutlined,
  SoundOutlined,
  SmileOutlined,
  EyeOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const contentCategories = [
    { 
      title: "Poetry & Shayari", 
      icon: <EditOutlined />, 
      color: "#f56565",
      description: "Express your deepest emotions through verses",
      count: "1.2K+ works",
      growth: "+15%"
    },
    { 
      title: "Stories & Scripts", 
      icon: <BookOutlined />, 
      color: "#4299e1",
      description: "Captivating narratives that transport readers",
      count: "850+ stories",
      growth: "+22%"
    },
    { 
      title: "Music & Songs", 
      icon: <SafetyOutlined />, 
      color: "#38a169",
      description: "Soul-stirring melodies and lyrics",
      count: "620+ tracks",
      growth: "+18%"
    },
    { 
      title: "Comedy & Jokes", 
      icon: <VideoCameraOutlined />, 
      color: "#ed8936",
      description: "Laughter that connects hearts",
      count: "930+ laughs",
      growth: "+25%"
    }
  ];

  const featuredWorks = [
    {
      title: "Whispers of the Night",
      author: "Sarah Chen",
      category: "Poetry",
      likes: 234,
      comments: 45,
      views: 1200,
      readTime: 3,
      excerpt: "In the silence of midnight hours, when the world sleeps and dreams dance freely through the corridors of consciousness...",
      avatar: "S",
      trending: true,
      qualityScore: 4.8,
      tags: ["love", "night", "dreams"],
      createdAt: "2 hours ago"
    },
    {
      title: "The Digital Nomad",
      author: "Alex Rodriguez", 
      category: "Story",
      likes: 189,
      comments: 67,
      views: 890,
      readTime: 8,
      excerpt: "A journey through virtual worlds and real emotions, where technology bridges hearts across continents...",
      avatar: "A",
      featured: true,
      qualityScore: 4.6,
      tags: ["technology", "adventure", "modern"],
      createdAt: "5 hours ago"
    },
    {
      title: "Melodies of Tomorrow",
      author: "Priya Sharma",
      category: "Music",
      likes: 312,
      comments: 89,
      views: 1540,
      readTime: 5,
      excerpt: "A symphony that bridges past and future, weaving traditional melodies with contemporary beats...",
      avatar: "P",
      trending: true,
      qualityScore: 4.9,
      tags: ["fusion", "classical", "modern"],
      createdAt: "1 day ago"
    }
  ];

  const testimonials = [
    {
      content: "Multiversal.blog gave me the platform to share my poetry with the world. The community here is incredibly supportive and the engagement is genuine!",
      author: "Maya Patel",
      role: "Poet & Writer",
      avatar: "M",
      rating: 5,
      location: "Mumbai, India"
    },
    {
      content: "I've discovered so many talented artists here. It's like having a global creative community at your fingertips. The quality of content is exceptional.",
      author: "David Kim",
      role: "Music Producer",
      avatar: "D",
      rating: 5,
      location: "Seoul, South Korea"
    },
    {
      content: "The interface is beautiful and intuitive. Perfect platform for storytellers! I've gained thousands of readers and valuable feedback.",
      author: "Emma Thompson",
      role: "Novelist",
      avatar: "E",
      rating: 5,
      location: "London, UK"
    }
  ];

  const platformFeatures = [
    {
      icon: <GlobalOutlined />,
      title: "Global Reach",
      description: "Connect with creators and audiences from 89+ countries",
      color: "#1890ff"
    },
    {
      icon: <TeamOutlined />,
      title: "Supportive Community",
      description: "Join a community that celebrates creativity and provides constructive feedback",
      color: "#52c41a"
    },
    {
      icon: <SafetyOutlined />,
      title: "Safe Environment",
      description: "Protected platform with moderation and anti-plagiarism measures",
      color: "#fa541c"
    },
    {
      icon: <TrophyOutlined />,
      title: "Recognition System",
      description: "Earn badges, ratings, and featured placements for quality content",
      color: "#ffd700"
    }
  ];

  const creationProcess = [
    {
      title: 'Ideate',
      description: 'Let your creativity flow with our inspiring prompts and tools',
      icon: <BulbOutlined />,
      status: 'process'
    },
    {
      title: 'Create',
      description: 'Use our intuitive editor with rich formatting and media support',
      icon: <EditOutlined />,
      status: 'process'
    },
    {
      title: 'Refine',
      description: 'Get AI suggestions and community feedback to perfect your work',
      icon: <StarOutlined />,
      status: 'process'
    },
    {
      title: 'Share',
      description: 'Publish to our global audience and track your impact',
      icon: <ShareAltOutlined />,
      status: 'process'
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Enhanced Header */}
      <Header 
        style={{ 
          position: 'fixed', 
          zIndex: 1000, 
          width: '100%',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(15px)',
          borderBottom: '1px solid #f0f0f0',
          padding: '0 50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Title 
            level={3} 
            style={{ 
              margin: 0, 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700
            }}
          >
            ✨ Multiversal.blog
          </Title>
        </div>
        <Space size="large">
          <Button type="text" size="large">Explore</Button>
          <Button type="text" size="large">Community</Button>
          <Button type="text" size="large">About</Button>
          <Button 
            type="text" 
            size="large"
            icon={<DashboardOutlined />}
            onClick={() => setShowDashboard(true)}
          >
            Dashboard
          </Button>
          <Button 
            type="primary" 
            icon={<PlusOutlined />}
            size="large"
            style={{
              background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
              border: 'none',
              borderRadius: 8,
              fontWeight: 600,
              boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)'
            }}
          >
            Create
          </Button>
        </Space>
      </Header>

      <Content style={{ marginTop: 64 }}>
        {/* Hero Section with Enhanced Psychology */}
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '120px 50px 100px',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated background elements */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            animation: 'float 6s ease-in-out infinite'
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <Title level={1} style={{ 
              color: 'white', 
              fontSize: '4rem', 
              marginBottom: 32,
              fontWeight: 800,
              lineHeight: 1.1
            }}>
              Where Creativity Meets the{' '}
              <span style={{ 
                color: '#ffd700',
                textShadow: '0 0 20px rgba(255, 215, 0, 0.5)'
              }}>
                Infinite
              </span>
            </Title>
            
            <Paragraph style={{ 
              fontSize: '1.4rem', 
              color: 'rgba(255,255,255,0.9)', 
              maxWidth: 800, 
              margin: '0 auto 48px',
              lineHeight: 1.6
            }}>
              Join a global community of <strong>12,500+ creators</strong> sharing their unique voices. 
              Discover extraordinary creativity, get inspired, and share your own masterpieces with the world.
            </Paragraph>
            
            <Space size="large" style={{ marginBottom: 60 }}>
              <Button 
                type="primary" 
                size="large" 
                icon={<RocketOutlined />}
                style={{ 
                  height: 56,
                  fontSize: '18px',
                  padding: '0 32px',
                  background: '#ff6b6b',
                  borderColor: '#ff6b6b',
                  borderRadius: 28,
                  fontWeight: 600,
                  boxShadow: '0 8px 25px rgba(255, 107, 107, 0.4)',
                  transform: 'translateY(0)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(255, 107, 107, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.4)';
                }}
              >
                Start Creating Today
              </Button>
              <Button 
                size="large"
                ghost
                style={{ 
                  height: 56, 
                  fontSize: '18px',
                  padding: '0 32px',
                  borderRadius: 28,
                  fontWeight: 500,
                  borderWidth: 2
                }}
              >
                Explore Works
              </Button>
            </Space>

            {/* Enhanced Social Proof */}
            <Row gutter={32} justify="center">
              <Col xs={12} sm={6}>
                <Statistic 
                  title="Active Creators" 
                  value={12500} 
                  valueStyle={{ 
                    color: 'white', 
                    fontSize: '2.2rem',
                    fontWeight: 700
                  }}
                  suffix={<UserOutlined />}
                />
                <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>
                  +15% this month
                </Text>
              </Col>
              <Col xs={12} sm={6}>
                <Statistic 
                  title="Works Shared" 
                  value={45000} 
                  valueStyle={{ 
                    color: 'white', 
                    fontSize: '2.2rem',
                    fontWeight: 700
                  }}
                  suffix={<StarOutlined />}
                />
                <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>
                  Quality guaranteed
                </Text>
              </Col>
              <Col xs={12} sm={6}>
                <Statistic 
                  title="Countries" 
                  value={89} 
                  valueStyle={{ 
                    color: 'white', 
                    fontSize: '2.2rem',
                    fontWeight: 700
                  }}
                  suffix="+"
                />
                <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>
                  Global community
                </Text>
              </Col>
              <Col xs={12} sm={6}>
                <Statistic 
                  title="Avg. Rating" 
                  value={4.8} 
                  valueStyle={{ 
                    color: 'white', 
                    fontSize: '2.2rem',
                    fontWeight: 700
                  }}
                  suffix="/5"
                />
                <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>
                  User satisfaction
                </Text>
              </Col>
            </Row>
          </div>
        </div>

        {/* Enhanced Content Categories */}
        <div style={{ padding: '100px 50px', background: '#fafafa' }}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <Title level={2} style={{ fontSize: '3rem', marginBottom: 24 }}>
              Express Yourself in Every Form
            </Title>
            <Paragraph style={{ 
              fontSize: '1.2rem', 
              color: '#666', 
              maxWidth: 700, 
              margin: '0 auto',
              lineHeight: 1.7
            }}>
              Choose your medium and let your creativity flow. Our platform supports all forms of 
              artistic expression with tools designed to enhance your creative process.
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {contentCategories.map((category, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card
                  hoverable
                  style={{ 
                    textAlign: 'center',
                    borderRadius: 16,
                    border: 'none',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    height: 280
                  }}
                  bodyStyle={{ padding: 32 }}
                  className="category-card"
                >
                  <div 
                    style={{ 
                      fontSize: '3rem', 
                      color: category.color,
                      marginBottom: 20,
                      height: 60,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {category.icon}
                  </div>
                  <Title level={4} style={{ marginBottom: 16, fontSize: '1.3rem' }}>
                    {category.title}
                  </Title>
                  <Paragraph style={{ 
                    color: '#666', 
                    marginBottom: 20,
                    lineHeight: 1.6,
                    fontSize: '14px'
                  }}>
                    {category.description}
                  </Paragraph>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Tag color={category.color} style={{ fontSize: '12px', padding: '4px 12px' }}>
                      {category.count}
                    </Tag>
                    <Text style={{ color: '#52c41a', fontSize: '12px', fontWeight: 600 }}>
                      {category.growth}
                    </Text>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Enhanced Featured Works with ContentCard Component */}
        <div style={{ padding: '100px 50px' }}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <Title level={2} style={{ fontSize: '3rem', marginBottom: 24 }}>
              <FireOutlined style={{ color: '#ff6b6b', marginRight: 16 }} />
              Trending Creations
            </Title>
            <Paragraph style={{ 
              fontSize: '1.2rem', 
              color: '#666',
              maxWidth: 600,
              margin: '0 auto',
              lineHeight: 1.7
            }}>
              Discover the most loved works from our vibrant community. 
              These creators are setting new standards for creativity.
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {featuredWorks.map((work, index) => (
              <Col xs={24} lg={8} key={index}>
                <Card
                  hoverable
                  style={{ 
                    borderRadius: 16,
                    border: 'none',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflow: 'hidden'
                  }}
                  bodyStyle={{ padding: 0 }}
                  className="featured-card"
                >
                  {/* Badge */}
                  <div style={{ 
                    position: 'absolute', 
                    top: 16, 
                    right: 16, 
                    zIndex: 1 
                  }}>
                    <Badge 
                      count={work.trending ? "Trending" : "Featured"} 
                      style={{ 
                        backgroundColor: work.trending ? '#ff6b6b' : '#1890ff',
                        fontSize: '11px'
                      }}
                    />
                  </div>

                  {/* Header */}
                  <div style={{ padding: '24px 24px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                      <Tag 
                        color={work.category === 'Poetry' ? '#f56565' : 
                               work.category === 'Story' ? '#4299e1' : '#38a169'}
                        style={{ 
                          fontSize: '11px',
                          borderRadius: 12,
                          padding: '2px 8px'
                        }}
                      >
                        {work.category}
                      </Tag>
                      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                        <Rate 
                          disabled 
                          defaultValue={work.qualityScore} 
                          style={{ fontSize: 12 }}
                          allowHalf
                        />
                        <Text style={{ marginLeft: 6, fontSize: 12, color: '#666' }}>
                          {work.qualityScore}
                        </Text>
                      </div>
                    </div>
                    
                    <Title 
                      level={4} 
                      style={{ 
                        margin: 0,
                        marginBottom: 16,
                        lineHeight: 1.3
                      }}
                      ellipsis={{ rows: 2 }}
                    >
                      {work.title}
                    </Title>

                    {/* Author */}
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                      <Avatar 
                        style={{ backgroundColor: '#1890ff', marginRight: 12 }}
                      >
                        {work.avatar}
                      </Avatar>
                      <div>
                        <Text strong style={{ fontSize: 14 }}>{work.author}</Text>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <Text type="secondary" style={{ fontSize: 12 }}>
                            {work.createdAt}
                          </Text>
                          <ClockCircleOutlined style={{ fontSize: 12 }} />
                          <Text type="secondary" style={{ fontSize: 12 }}>
                            {work.readTime} min
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '0 24px 16px' }}>
                    <Paragraph 
                      style={{ 
                        color: '#555',
                        lineHeight: 1.6,
                        fontSize: 14,
                        marginBottom: 16
                      }}
                      ellipsis={{ rows: 3 }}
                    >
                      {work.excerpt}
                    </Paragraph>
                    
                    {/* Tags */}
                    <Space size={4} wrap>
                      {work.tags.map((tag, tagIndex) => (
                        <Tag 
                          key={tagIndex}
                          style={{ 
                            fontSize: 11,
                            margin: 0,
                            border: '1px solid #e8e8e8',
                            background: '#f8f8f8'
                          }}
                        >
                          {tag}
                        </Tag>
                      ))}
                    </Space>
                  </div>

                  {/* Stats */}
                  <div style={{ 
                    padding: '16px 24px',
                    borderTop: '1px solid #f0f0f0',
                    background: '#fafafa',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <Space size={16}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <HeartOutlined style={{ color: '#ff6b6b', marginRight: 4 }} />
                        <Text style={{ fontSize: 13 }}>{work.likes}</Text>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CommentOutlined style={{ color: '#666', marginRight: 4 }} />
                        <Text style={{ fontSize: 13 }}>{work.comments}</Text>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <EyeOutlined style={{ color: '#666', marginRight: 4 }} />
                        <Text style={{ fontSize: 13 }}>{work.views}</Text>
                      </div>
                    </Space>
                    
                    <Button 
                      type="primary"
                      size="small"
                      style={{
                        borderRadius: 16,
                        fontWeight: 500
                      }}
                    >
                      Read More
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Platform Features */}
        <div style={{ padding: '100px 50px', background: '#fafafa' }}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <Title level={2} style={{ fontSize: '3rem', marginBottom: 24 }}>
              Why Creators Choose Us
            </Title>
            <Paragraph style={{ 
              fontSize: '1.2rem', 
              color: '#666',
              maxWidth: 700,
              margin: '0 auto',
              lineHeight: 1.7
            }}>
              More than just a platform - we're your creative partner in reaching 
              audiences and building meaningful connections.
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {platformFeatures.map((feature, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card
                  style={{ 
                    textAlign: 'center',
                    borderRadius: 16,
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    height: 200
                  }}
                  bodyStyle={{ padding: 24 }}
                >
                  <div 
                    style={{ 
                      fontSize: '2.5rem', 
                      color: feature.color,
                      marginBottom: 16
                    }}
                  >
                    {feature.icon}
                  </div>
                  <Title level={5} style={{ marginBottom: 12 }}>
                    {feature.title}
                  </Title>
                  <Paragraph style={{ 
                    color: '#666', 
                    fontSize: 14,
                    lineHeight: 1.5,
                    margin: 0
                  }}>
                    {feature.description}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Enhanced Creation Process */}
        <div style={{ padding: '100px 50px' }}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <Title level={2} style={{ fontSize: '3rem', marginBottom: 24 }}>
              Your Creative Journey
            </Title>
            <Paragraph style={{ 
              fontSize: '1.2rem', 
              color: '#666',
              maxWidth: 600,
              margin: '0 auto',
              lineHeight: 1.7
            }}>
              From inspiration to publication - we guide you through every step 
              of your creative process with powerful tools and community support.
            </Paragraph>
          </div>

          <Row justify="center">
            <Col xs={24} lg={20}>
              <Steps
                current={-1}
                direction="horizontal"
                size="default"
                items={creationProcess}
                style={{
                  marginBottom: 60
                }}
              />
            </Col>
          </Row>

          <div style={{ textAlign: 'center' }}>
            <Button 
              type="primary" 
              size="large"
              icon={<RocketOutlined />}
              style={{
                height: 50,
                fontSize: '16px',
                padding: '0 24px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                borderRadius: 25,
                fontWeight: 600,
                boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)'
              }}
            >
              Start Your Journey
            </Button>
          </div>
        </div>

        {/* Enhanced Testimonials */}
        <div style={{ padding: '100px 50px', background: '#fafafa' }}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <Title level={2} style={{ fontSize: '3rem', marginBottom: 24 }}>
              <CrownOutlined style={{ color: '#ffd700', marginRight: 16 }} />
              Loved by Creators Worldwide
            </Title>
            <Paragraph style={{ 
              fontSize: '1.2rem', 
              color: '#666',
              maxWidth: 600,
              margin: '0 auto',
              lineHeight: 1.7
            }}>
              Real stories from real creators who have found their voice and built 
              their audience on our platform.
            </Paragraph>
          </div>

          <Carousel autoplay dots={{ className: 'custom-dots' }}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <Card
                  style={{ 
                    maxWidth: 900, 
                    margin: '0 auto',
                    textAlign: 'center',
                    border: 'none',
                    borderRadius: 16,
                    boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
                  }}
                  bodyStyle={{ padding: 48 }}
                >
                  <Rate 
                    disabled 
                    defaultValue={testimonial.rating} 
                    style={{ marginBottom: 24, fontSize: 20 }}
                  />
                  <Paragraph 
                    style={{ 
                      fontSize: '1.3rem', 
                      fontStyle: 'italic',
                      color: '#333',
                      marginBottom: 32,
                      lineHeight: 1.6
                    }}
                  >
                    &ldquo;{testimonial.content}&rdquo;
                  </Paragraph>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Avatar 
                      style={{ backgroundColor: '#1890ff', marginRight: 16 }}
                      size="large"
                    >
                      {testimonial.avatar}
                    </Avatar>
                    <div style={{ textAlign: 'left' }}>
                      <Text strong style={{ fontSize: 16 }}>{testimonial.author}</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 14 }}>{testimonial.role}</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>{testimonial.location}</Text>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Enhanced Call to Action */}
        <div style={{
          background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
          padding: '100px 50px',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Title level={1} style={{ 
              color: 'white', 
              marginBottom: 32,
              fontSize: '3.5rem',
              fontWeight: 800
            }}>
              Ready to Share Your Story?
            </Title>
            <Paragraph style={{ 
              fontSize: '1.3rem', 
              marginBottom: 48, 
              color: 'rgba(255,255,255,0.95)',
              maxWidth: 700,
              margin: '0 auto 48px',
              lineHeight: 1.6
            }}>
              Join our community of creators and start building your audience today.
              <br />
              <strong>It&apos;s completely free and always will be!</strong>
            </Paragraph>
            
            <Space size="large">
              <Button 
                type="primary"
                size="large"
                icon={<RocketOutlined />}
                style={{ 
                  height: 56,
                  fontSize: '18px',
                  padding: '0 32px',
                  background: 'white',
                  color: '#ff6b6b',
                  borderColor: 'white',
                  borderRadius: 28,
                  fontWeight: 700,
                  boxShadow: '0 8px 25px rgba(255, 255, 255, 0.3)'
                }}
              >
                Start Creating Now
              </Button>
              <Button 
                size="large"
                ghost
                style={{ 
                  height: 56, 
                  fontSize: '18px',
                  padding: '0 32px',
                  borderRadius: 28,
                  fontWeight: 500,
                  borderWidth: 2
                }}
              >
                Learn More
              </Button>
            </Space>

            <div style={{ marginTop: 60 }}>
              <Text style={{ 
                color: 'rgba(255,255,255,0.8)', 
                fontSize: 14 
              }}>
                Join 12,500+ creators • 45,000+ works shared • 89+ countries
              </Text>
            </div>
          </div>
        </div>
      </Content>

      {/* Enhanced Footer */}
      <Footer style={{ 
        textAlign: 'center', 
        background: '#001529', 
        color: 'white', 
        padding: '60px 50px 40px' 
      }}>
        <Row gutter={[32, 32]} justify="center">
          <Col xs={24} sm={8}>
            <Title level={4} style={{ color: 'white', marginBottom: 16 }}>
              Multiversal.blog
            </Title>
            <Paragraph style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>
              An open-source platform where creativity meets the infinite.
              Empowering creators worldwide to share their unique voices.
            </Paragraph>
          </Col>
          <Col xs={24} sm={8}>
            <Title level={5} style={{ color: 'white', marginBottom: 16 }}>
              Community
            </Title>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>
              <div style={{ marginBottom: 8 }}>Featured Creators</div>
              <div style={{ marginBottom: 8 }}>Writing Contests</div>
              <div style={{ marginBottom: 8 }}>Creator Resources</div>
              <div>Community Guidelines</div>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <Title level={5} style={{ color: 'white', marginBottom: 16 }}>
              Support
            </Title>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>
              <div style={{ marginBottom: 8 }}>Help Center</div>
              <div style={{ marginBottom: 8 }}>Creator Guide</div>
              <div style={{ marginBottom: 8 }}>API Documentation</div>
              <div>Contact Us</div>
            </div>
          </Col>
        </Row>
        
        <Divider style={{ borderColor: 'rgba(255,255,255,0.2)', margin: '40px 0 24px' }} />
        
        <Text style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>
          © 2025 Multiversal.blog. Made with ❤️ for creators worldwide. 
          Open source on GitHub.
        </Text>
      </Footer>

      {/* Enhanced Floating Elements */}
      <FloatButton.Group shape="circle" style={{ right: 24, bottom: 24 }}>
        <FloatButton 
          icon={<PlusOutlined />} 
          type="primary" 
          tooltip="Create New Content"
          style={{
            background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
            border: 'none'
          }}
        />
        <FloatButton 
          icon={<DashboardOutlined />} 
          tooltip="Creator Dashboard"
          onClick={() => setShowDashboard(true)}
        />
      </FloatButton.Group>
      
      <BackTop style={{ right: 24, bottom: 120 }} />

      {/* Creator Dashboard Modal */}
      <Modal
        title="Creator Dashboard"
        open={showDashboard}
        onCancel={() => setShowDashboard(false)}
        width="90%"
        style={{ maxWidth: 1200 }}
        footer={null}
        bodyStyle={{ padding: 0 }}
      >
        {/* Dashboard content would go here */}
        <div style={{ padding: 24, textAlign: 'center', minHeight: 400 }}>
          <Title level={3} style={{ marginBottom: 16 }}>
            Creator Dashboard
          </Title>
          <Paragraph style={{ color: '#666', marginBottom: 32 }}>
            Manage your content, track analytics, and engage with your audience.
          </Paragraph>
          <Button 
            type="primary" 
            size="large"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              borderRadius: 8
            }}
          >
            Coming Soon
          </Button>
        </div>
      </Modal>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .category-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15) !important;
        }
        
        .featured-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 35px rgba(0,0,0,0.12) !important;
        }
        
        .custom-dots .slick-dots li button {
          background: #1890ff;
          height: 8px;
          border-radius: 4px;
        }
        
        .ant-carousel .slick-dots li.slick-active button {
          background: #ff6b6b;
          width: 24px;
        }
        
        .ant-steps-item-icon {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
          border-color: transparent !important;
        }
        
        .ant-steps-item-icon .ant-steps-icon {
          color: white !important;
        }
        
        .ant-btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }
      `}</style>
    </Layout>
  );
}
