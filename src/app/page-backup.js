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
  Carousel,
  Badge,
  Tooltip,
  Rate
} from 'antd';
import { 
  Plus,
  Heart, 
  MessageCircle, 
  Share2,
  Edit3,
  Book,
  Video,
  Star,
  Trophy,
  User,
  Rocket,
  Lightbulb,
  Zap,
  Crown,
  Flame,
  Globe,
  Users,
  Shield,
  BarChart3,
  Play,
  BookOpen,
  Music,
  Smile,
  Eye,
  Clock,
  ArrowRight,
  Sparkles,
  Infinity,
  Palette,
  Mic,
  PenTool,
  Camera,
  Coffee,
  Moon,
  Sun
} from 'lucide-react';
import NavigationHeader from '../components/NavigationHeader';
import SiteFooter from '../components/SiteFooter';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { 
      id: 'poetry',
      title: 'Poetry', 
      icon: <Edit3 className="w-6 h-6" />, 
      color: '#8b5cf6',
      count: '1.2k',
      description: 'Express emotions through verses'
    },
    { 
      id: 'stories',
      title: 'Stories', 
      icon: <Book className="w-6 h-6" />, 
      color: '#3b82f6',
      count: '850',
      description: 'Captivating narratives'
    },
    { 
      id: 'music',
      title: 'Music', 
      icon: <Music className="w-6 h-6" />, 
      color: '#10b981',
      count: '620',
      description: 'Soul-stirring melodies'
    },
    { 
      id: 'art',
      title: 'Visual Art', 
      icon: <Palette className="w-6 h-6" />, 
      color: '#f59e0b',
      count: '430',
      description: 'Creative visual expressions'
    }
  ];

  const featuredCreators = [
    {
      name: 'Sarah Chen',
      role: 'Poet',
      avatar: 'S',
      followers: '2.4k',
      works: 45,
      featured: 'Whispers of the Night',
      rating: 4.9
    },
    {
      name: 'Alex Rodriguez',
      role: 'Storyteller', 
      avatar: 'A',
      followers: '1.8k',
      works: 32,
      featured: 'The Digital Nomad',
      rating: 4.7
    },
    {
      name: 'Maya Patel',
      role: 'Musician',
      avatar: 'M',
      followers: '3.1k',
      works: 67,
      featured: 'Tomorrow\'s Melody',
      rating: 4.8
    }
  ];

  return (
    <Layout className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <NavigationHeader />
      
      <Content>
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10" />
          <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
            <div className="mb-8">
              <Badge.Ribbon text="12.5k+ Creators" color="purple">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200">
                  <Infinity className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-600 font-medium">Infinite Creativity</span>
                </div>
              </Badge.Ribbon>
            </div>
            
            <Title level={1} className="!text-5xl md:!text-7xl !mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Where Stories
              <br />
              <span className="relative">
                Come Alive
                <Sparkles className="absolute -top-2 -right-8 w-8 h-8 text-yellow-400" />
              </span>
            </Title>
            
            <Paragraph className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Join a minimalist platform where poets, writers, musicians, and artists 
              share their creativity with the world. Simple. Beautiful. Inspiring.
            </Paragraph>
            
            <Space size="large" className="flex-wrap justify-center">
              <Button 
                type="primary" 
                size="large"
                className="h-12 px-8 bg-gradient-to-r from-purple-600 to-blue-600 border-none hover:from-purple-700 hover:to-blue-700 rounded-full"
                icon={<Plus className="w-5 h-5" />}
              >
                Start Creating
              </Button>
              <Button 
                size="large"
                className="h-12 px-8 border-gray-300 hover:border-purple-400 rounded-full"
                icon={<BookOpen className="w-5 h-5" />}
              >
                Explore Works
              </Button>
            </Space>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white/50 backdrop-blur-sm border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <Row gutter={[32, 32]} justify="center">
              <Col xs={12} sm={6}>
                <Statistic 
                  title="Active Creators" 
                  value={12500} 
                  prefix={<Users className="w-5 h-5 text-purple-600" />}
                  valueStyle={{ color: '#8b5cf6' }}
                />
              </Col>
              <Col xs={12} sm={6}>
                <Statistic 
                  title="Published Works" 
                  value={45200} 
                  prefix={<BookOpen className="w-5 h-5 text-blue-600" />}
                  valueStyle={{ color: '#3b82f6' }}
                />
              </Col>
              <Col xs={12} sm={6}>
                <Statistic 
                  title="Community Likes" 
                  value={890000} 
                  prefix={<Heart className="w-5 h-5 text-red-500" />}
                  valueStyle={{ color: '#ef4444' }}
                />
              </Col>
              <Col xs={12} sm={6}>
                <Statistic 
                  title="Countries" 
                  value={89} 
                  suffix="+"
                  prefix={<Globe className="w-5 h-5 text-green-600" />}
                  valueStyle={{ color: '#10b981' }}
                />
              </Col>
            </Row>
          </div>
        </div>

        {/* Categories Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <Title level={2} className="!text-3xl md:!text-4xl !mb-4">
              Explore Creative Categories
            </Title>
            <Text className="text-lg text-gray-600">
              Discover diverse forms of artistic expression
            </Text>
          </div>
          
          <Row gutter={[24, 24]}>
            {categories.map((category) => (
              <Col xs={24} sm={12} lg={6} key={category.id}>
                <Card
                  hoverable
                  className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  styles={{
                    body: { 
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }
                  }}
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <div style={{ color: category.color }}>
                      {category.icon}
                    </div>
                  </div>
                  <Title level={4} className="!mb-2">{category.title}</Title>
                  <Text className="text-gray-600 mb-3">{category.description}</Text>
                  <Badge 
                    count={`${category.count} works`} 
                    style={{ backgroundColor: category.color }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Featured Creators */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <Title level={2} className="!text-3xl md:!text-4xl !mb-4">
                Featured Creators
              </Title>
              <Text className="text-lg text-gray-600">
                Talented artists sharing their extraordinary work
              </Text>
            </div>
            
            <Row gutter={[24, 24]}>
              {featuredCreators.map((creator, index) => (
                <Col xs={24} md={8} key={index}>
                  <Card
                    className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300"
                    styles={{
                      body: { padding: '32px 24px' }
                    }}
                  >
                    <Avatar 
                      size={80} 
                      className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600"
                    >
                      {creator.avatar}
                    </Avatar>
                    <Title level={4} className="!mb-1">{creator.name}</Title>
                    <Text className="text-gray-500 mb-4">{creator.role}</Text>
                    
                    <div className="flex justify-center gap-6 mb-4">
                      <div className="text-center">
                        <div className="font-semibold text-purple-600">{creator.followers}</div>
                        <div className="text-xs text-gray-500">Followers</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-blue-600">{creator.works}</div>
                        <div className="text-xs text-gray-500">Works</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Rate disabled defaultValue={Math.floor(creator.rating)} className="text-sm" />
                      <Text className="text-sm font-medium">{creator.rating}</Text>
                    </div>
                    
                    <Button type="link" className="p-0 h-auto">
                      Latest: "{creator.featured}"
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-6 py-20 text-center text-white">
            <Title level={2} className="!text-white !text-3xl md:!text-4xl !mb-6">
              Ready to Share Your Story?
            </Title>
            <Paragraph className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are already sharing their passion 
              and connecting with audiences worldwide.
            </Paragraph>
            <Space size="large">
              <Button 
                size="large"
                className="h-12 px-8 bg-white text-purple-600 border-none hover:bg-gray-100 rounded-full font-medium"
                icon={<Rocket className="w-5 h-5" />}
              >
                Get Started Free
              </Button>
              <Button 
                size="large"
                className="h-12 px-8 border-white text-white hover:bg-white/10 rounded-full"
                icon={<BookOpen className="w-5 h-5" />}
              >
                Learn More
              </Button>
            </Space>
          </div>
        </div>
      </Content>

      <SiteFooter />
      
      {/* Floating Action Buttons */}
      <FloatButton.Group>
        <FloatButton 
          icon={<Plus className="w-5 h-5" />} 
          tooltip="Create New"
          type="primary"
        />
        <FloatButton 
          icon={<MessageCircle className="w-5 h-5" />} 
          tooltip="Community Chat"
        />
        <FloatButton.BackTop />
      </FloatButton.Group>
    </Layout>
  );
}

  const contentCategories = [
    { 
      title: "Poetry & Shayari", 
      icon: <Edit3 className="w-5 h-5" />, 
      color: "#f56565",
      description: "Express your deepest emotions through verses",
      count: "1.2K+ works",
      growth: "+15%"
    },
    { 
      title: "Stories & Scripts", 
      icon: <Book className="w-5 h-5" />, 
      color: "#4299e1",
      description: "Captivating narratives that transport readers",
      count: "850+ stories",
      growth: "+22%"
    },
    { 
      title: "Music & Songs", 
      icon: <Music className="w-5 h-5" />, 
      color: "#38a169",
      description: "Soul-stirring melodies and lyrics",
      count: "620+ tracks",
      growth: "+18%"
    },
    { 
      title: "Comedy & Jokes", 
      icon: <Smile className="w-5 h-5" />, 
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
      <NavigationHeader />

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
                  styles={{ body: { padding: 32 } }}
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
                  styles={{ body: { padding: 0 } }}
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
                  styles={{ body: { padding: 24 } }}
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
                  styles={{ body: { padding: 48 } }}
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
      
      {/* BackTop is already handled by FloatButton.BackTop above */}

      {/* Creator Dashboard Modal */}
      <Modal
        title="Creator Dashboard"
        open={showDashboard}
        onCancel={() => setShowDashboard(false)}
        width="90%"
        style={{ maxWidth: 1200 }}
        footer={null}
        styles={{ body: { padding: 0 } }}
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
      
      <SiteFooter />
    </Layout>
  );
}
