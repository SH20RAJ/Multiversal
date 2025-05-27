'use client';

import React from 'react';
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
  Timeline,
  Badge
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
  FireOutlined
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

export default function Home() {
  const contentCategories = [
    { 
      title: "Poetry & Shayari", 
      icon: <EditOutlined />, 
      color: "#f56565",
      description: "Express your deepest emotions through verses",
      count: "1.2K+ works"
    },
    { 
      title: "Stories & Scripts", 
      icon: <BookOutlined />, 
      color: "#4299e1",
      description: "Captivating narratives that transport readers",
      count: "850+ stories"
    },
    { 
      title: "Music & Songs", 
      icon: <SafetyOutlined />, 
      color: "#38a169",
      description: "Soul-stirring melodies and lyrics",
      count: "620+ tracks"
    },
    { 
      title: "Comedy & Jokes", 
      icon: <VideoCameraOutlined />, 
      color: "#ed8936",
      description: "Laughter that connects hearts",
      count: "930+ laughs"
    }
  ];

  const featuredWorks = [
    {
      title: "Whispers of the Night",
      author: "Sarah Chen",
      category: "Poetry",
      likes: 234,
      excerpt: "In the silence of midnight hours, when the world sleeps...",
      avatar: "S",
      trending: true
    },
    {
      title: "The Digital Nomad",
      author: "Alex Rodriguez", 
      category: "Story",
      likes: 189,
      excerpt: "A journey through virtual worlds and real emotions...",
      avatar: "A",
      featured: true
    },
    {
      title: "Melodies of Tomorrow",
      author: "Priya Sharma",
      category: "Music",
      likes: 312,
      excerpt: "A symphony that bridges past and future...",
      avatar: "P",
      trending: true
    }
  ];

  const testimonials = [
    {
      content: "Multiversal.blog gave me the platform to share my poetry with the world. The community here is incredibly supportive!",
      author: "Maya Patel",
      role: "Poet & Writer",
      avatar: "M"
    },
    {
      content: "I've discovered so many talented artists here. It's like having a global creative community at your fingertips.",
      author: "David Kim",
      role: "Music Producer",
      avatar: "D"
    },
    {
      content: "The interface is beautiful and the engagement from readers is genuine. Perfect platform for storytellers!",
      author: "Emma Thompson",
      role: "Novelist",
      avatar: "E"
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Header */}
      <Header 
        style={{ 
          position: 'fixed', 
          zIndex: 1000, 
          width: '100%',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #f0f0f0',
          padding: '0 50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
            ✨ Multiversal.blog
          </Title>
        </div>
        <Space>
          <Button type="text">Explore</Button>
          <Button type="text">Community</Button>
          <Button type="text">About</Button>
          <Button type="primary" icon={<PlusOutlined />}>
            Create
          </Button>
        </Space>
      </Header>

      <Content style={{ marginTop: 64 }}>
        {/* Hero Section - Using Psychological Principles */}
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '100px 50px',
          textAlign: 'center',
          color: 'white'
        }}>
          <Title level={1} style={{ color: 'white', fontSize: '3.5rem', marginBottom: 24 }}>
            Where Creativity Meets the <span style={{ color: '#ffd700' }}>Infinite</span>
          </Title>
          <Paragraph style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)', maxWidth: 800, margin: '0 auto 40px' }}>
            Join a global community of poets, writers, musicians, and storytellers. 
            Share your unique voice and discover extraordinary creativity from around the world.
          </Paragraph>
          
          <Space size="large">
            <Button 
              type="primary" 
              size="large" 
              icon={<RocketOutlined />}
              style={{ 
                height: 50,
                fontSize: '16px',
                background: '#ff6b6b',
                borderColor: '#ff6b6b',
                boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)'
              }}
            >
              Start Creating
            </Button>
            <Button 
              size="large"
              ghost
              style={{ height: 50, fontSize: '16px' }}
            >
              Explore Works
            </Button>
          </Space>

          {/* Social Proof */}
          <Row gutter={32} style={{ marginTop: 60 }}>
            <Col span={8}>
              <Statistic 
                title="Active Creators" 
                value={12500} 
                valueStyle={{ color: 'white', fontSize: '2rem' }}
                suffix={<UserOutlined />}
              />
            </Col>
            <Col span={8}>
              <Statistic 
                title="Works Shared" 
                value={45000} 
                valueStyle={{ color: 'white', fontSize: '2rem' }}
                suffix={<StarOutlined />}
              />
            </Col>
            <Col span={8}>
              <Statistic 
                title="Countries" 
                value={89} 
                valueStyle={{ color: 'white', fontSize: '2rem' }}
                suffix="+"
              />
            </Col>
          </Row>
        </div>

        {/* Content Categories - Gestalt Principles */}
        <div style={{ padding: '80px 50px', background: '#fafafa' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <Title level={2}>Express Yourself in Every Form</Title>
            <Paragraph style={{ fontSize: '1.1rem', color: '#666', maxWidth: 600, margin: '0 auto' }}>
              Choose your medium and let your creativity flow. Our platform supports all forms of artistic expression.
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {contentCategories.map((category, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card
                  hoverable
                  style={{ 
                    textAlign: 'center',
                    borderRadius: 12,
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease'
                  }}
                  bodyStyle={{ padding: 32 }}
                  className="category-card"
                >
                  <div 
                    style={{ 
                      fontSize: '2.5rem', 
                      color: category.color,
                      marginBottom: 16,
                      height: 60,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {category.icon}
                  </div>
                  <Title level={4} style={{ marginBottom: 12 }}>
                    {category.title}
                  </Title>
                  <Paragraph style={{ color: '#666', marginBottom: 16 }}>
                    {category.description}
                  </Paragraph>
                  <Tag color={category.color} style={{ fontSize: '12px' }}>
                    {category.count}
                  </Tag>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Featured Works - Proximity and Similarity */}
        <div style={{ padding: '80px 50px' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <Title level={2}>
              <FireOutlined style={{ color: '#ff6b6b', marginRight: 12 }} />
              Trending Creations
            </Title>
            <Paragraph style={{ fontSize: '1.1rem', color: '#666' }}>
              Discover the most loved works from our vibrant community
            </Paragraph>
          </div>

          <Row gutter={[24, 24]}>
            {featuredWorks.map((work, index) => (
              <Col xs={24} md={8} key={index}>
                <Badge.Ribbon 
                  text={work.trending ? "Trending" : work.featured ? "Featured" : "Popular"} 
                  color={work.trending ? "#ff6b6b" : "#1890ff"}
                >
                  <Card
                    hoverable
                    style={{ 
                      borderRadius: 12,
                      border: 'none',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                    }}
                    actions={[
                      <Space key="like">
                        <HeartOutlined /> {work.likes}
                      </Space>,
                      <CommentOutlined key="comment" />,
                      <ShareAltOutlined key="share" />
                    ]}
                  >
                    <Meta
                      avatar={
                        <Avatar style={{ backgroundColor: '#1890ff' }}>
                          {work.avatar}
                        </Avatar>
                      }
                      title={work.title}
                      description={
                        <div>
                          <Text type="secondary">by {work.author}</Text>
                          <br />
                          <Tag color="blue" style={{ marginTop: 8 }}>
                            {work.category}
                          </Tag>
                          <Paragraph 
                            style={{ marginTop: 12, color: '#666' }}
                            ellipsis={{ rows: 2 }}
                          >
                            {work.excerpt}
                          </Paragraph>
                        </div>
                      }
                    />
                  </Card>
                </Badge.Ribbon>
              </Col>
            ))}
          </Row>
        </div>

        {/* How It Works - Sequential Flow */}
        <div style={{ padding: '80px 50px', background: '#fafafa' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <Title level={2}>Your Creative Journey in 3 Steps</Title>
            <Paragraph style={{ fontSize: '1.1rem', color: '#666' }}>
              Join thousands of creators who have found their voice on our platform
            </Paragraph>
          </div>

          <Row justify="center">
            <Col xs={24} lg={16}>
              <Steps
                current={-1}
                direction="horizontal"
                size="default"
                items={[
                  {
                    title: 'Create',
                    description: 'Write your story, poem, or upload your music',
                    icon: <BulbOutlined />
                  },
                  {
                    title: 'Share',
                    description: 'Publish to our global community',
                    icon: <ShareAltOutlined />
                  },
                  {
                    title: 'Connect',
                    description: 'Engage with fellow creators and readers',
                    icon: <ThunderboltOutlined />
                  }
                ]}
              />
            </Col>
          </Row>
        </div>

        {/* Testimonials - Social Proof */}
        <div style={{ padding: '80px 50px' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <Title level={2}>
              <CrownOutlined style={{ color: '#ffd700', marginRight: 12 }} />
              Loved by Creators Worldwide
            </Title>
          </div>

          <Carousel autoplay dots={{ className: 'custom-dots' }}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <Card
                  style={{ 
                    maxWidth: 800, 
                    margin: '0 auto',
                    textAlign: 'center',
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                  }}
                >
                  <Paragraph 
                    style={{ 
                      fontSize: '1.2rem', 
                      fontStyle: 'italic',
                      color: '#333',
                      marginBottom: 24
                    }}
                  >
                    "{testimonial.content}"
                  </Paragraph>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Avatar 
                      style={{ backgroundColor: '#1890ff', marginRight: 12 }}
                      size="large"
                    >
                      {testimonial.avatar}
                    </Avatar>
                    <div>
                      <Text strong>{testimonial.author}</Text>
                      <br />
                      <Text type="secondary">{testimonial.role}</Text>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Call to Action - Urgency and Scarcity */}
        <div style={{
          background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
          padding: '80px 50px',
          textAlign: 'center',
          color: 'white'
        }}>
          <Title level={2} style={{ color: 'white', marginBottom: 24 }}>
            Ready to Share Your Story?
          </Title>
          <Paragraph style={{ fontSize: '1.2rem', marginBottom: 40, color: 'rgba(255,255,255,0.9)' }}>
            Join our community of creators and start building your audience today.
            <br />
            <strong>It's completely free and always will be!</strong>
          </Paragraph>
          
          <Space size="large">
            <Button 
              type="primary"
              size="large"
              icon={<RocketOutlined />}
              style={{ 
                height: 50,
                fontSize: '16px',
                background: 'white',
                color: '#ff6b6b',
                borderColor: 'white',
                fontWeight: 'bold'
              }}
            >
              Start Creating Now
            </Button>
            <Button 
              size="large"
              ghost
              style={{ height: 50, fontSize: '16px' }}
            >
              Learn More
            </Button>
          </Space>
        </div>
      </Content>

      {/* Footer */}
      <Footer style={{ textAlign: 'center', background: '#001529', color: 'white', padding: '40px 50px' }}>
        <Title level={4} style={{ color: 'white', marginBottom: 24 }}>
          Multiversal.blog
        </Title>
        <Paragraph style={{ color: 'rgba(255,255,255,0.7)' }}>
          An open-source platform where creativity meets the infinite.
        </Paragraph>
        <Divider style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
        <Text style={{ color: 'rgba(255,255,255,0.5)' }}>
          © 2025 Multiversal.blog. Made with ❤️ for creators worldwide.
        </Text>
      </Footer>

      {/* Floating Action Button */}
      <FloatButton 
        icon={<PlusOutlined />} 
        type="primary" 
        style={{ right: 24, bottom: 24 }}
        tooltip="Create New Content"
      />
      
      {/* Back to Top */}
      <BackTop style={{ right: 80, bottom: 24 }} />

      <style jsx global>{`
        .category-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12) !important;
        }
        
        .custom-dots .slick-dots li button {
          background: #1890ff;
        }
        
        .ant-carousel .slick-dots li.slick-active button {
          background: #ff6b6b;
        }
      `}</style>
    </Layout>
  );
}
