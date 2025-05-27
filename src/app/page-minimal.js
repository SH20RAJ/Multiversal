'use client';
import React from 'react';
import { Layout, Typography, Button, Row, Col, Card, Space, Avatar, Tag, Statistic } from 'antd';
import { 
  Sparkles, 
  BookOpen, 
  Users, 
  Star, 
  ArrowRight, 
  Globe, 
  Heart,
  TrendingUp,
  Zap,
  Palette,
  Music,
  Edit3
} from 'lucide-react';
import NavigationHeader from '../components/NavigationHeader';
import SiteFooter from '../components/SiteFooter';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export default function MinimalisticHome() {
  const stats = [
    { title: '50K+', subtitle: 'Creators', icon: <Users className="w-6 h-6" /> },
    { title: '1M+', subtitle: 'Stories', icon: <BookOpen className="w-6 h-6" /> },
    { title: '500K+', subtitle: 'Readers', icon: <Globe className="w-6 h-6" /> },
    { title: '4.9', subtitle: 'Rating', icon: <Star className="w-6 h-6" /> }
  ];

  const categories = [
    { name: 'Poetry', icon: <Edit3 className="w-8 h-8" />, count: '12K+', color: '#8b5cf6' },
    { name: 'Stories', icon: <BookOpen className="w-8 h-8" />, count: '25K+', color: '#06b6d4' },
    { name: 'Music', icon: <Music className="w-8 h-8" />, count: '8K+', color: '#f59e0b' },
    { name: 'Art', icon: <Palette className="w-8 h-8" />, count: '15K+', color: '#ef4444' }
  ];

  const featuredCreators = [
    { name: 'Maya Chen', specialty: 'Poet', avatar: '🌟', followers: '12K' },
    { name: 'Alex Rivera', specialty: 'Storyteller', avatar: '✨', followers: '8K' },
    { name: 'Sam Taylor', specialty: 'Musician', avatar: '🎵', followers: '15K' }
  ];

  const trendingWorks = [
    { title: 'Midnight Reflections', type: 'Poetry', author: 'Luna Rose', likes: 342 },
    { title: 'The Digital Nomad', type: 'Story', author: 'Marcus Webb', likes: 567 },
    { title: 'Autumn Melody', type: 'Music', author: 'Sofia Park', likes: 234 }
  ];

  return (
    <Layout className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <NavigationHeader />
      
      <Content>
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
          <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white rounded-full shadow-lg">
                  <Sparkles className="w-12 h-12 text-indigo-600" />
                </div>
              </div>
              
              <Title level={1} className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Where Stories<br />Come Alive
              </Title>
              
              <Paragraph className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join a universe of creators sharing poetry, stories, music, and art. 
                Your imagination has no limits here.
              </Paragraph>
              
              <Space size="large" className="flex-wrap justify-center">
                <Button 
                  type="primary" 
                  size="large"
                  icon={<Edit3 className="w-5 h-5" />}
                  className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 border-0 hover:from-indigo-700 hover:to-purple-700"
                >
                  Start Creating
                </Button>
                <Button 
                  size="large"
                  icon={<BookOpen className="w-5 h-5" />}
                  className="h-14 px-8 text-lg font-semibold"
                >
                  Explore Stories
                </Button>
              </Space>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <Row gutter={[32, 32]} className="text-center">
              {stats.map((stat, index) => (
                <Col xs={12} md={6} key={index}>
                  <div className="p-6">
                    <div className="flex justify-center mb-4 text-indigo-600">
                      {stat.icon}
                    </div>
                    <Statistic 
                      value={stat.title} 
                      className="text-3xl font-bold text-gray-900"
                    />
                    <Paragraph className="text-gray-600 mt-2 font-medium">
                      {stat.subtitle}
                    </Paragraph>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* Categories Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <Title level={2} className="text-4xl font-bold text-gray-900 mb-4">
                Explore Categories
              </Title>
              <Paragraph className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover amazing content across different creative mediums
              </Paragraph>
            </div>
            
            <Row gutter={[24, 24]}>
              {categories.map((category, index) => (
                <Col xs={12} md={6} key={index}>
                  <Card
                    hoverable
                    className="h-full text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300"
                    styles={{ body: { padding: 32 } }}
                  >
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white"
                      style={{ backgroundColor: category.color }}
                    >
                      {category.icon}
                    </div>
                    <Title level={4} className="text-gray-900 mb-2">
                      {category.name}
                    </Title>
                    <Paragraph className="text-gray-600 mb-4">
                      {category.count} pieces
                    </Paragraph>
                    <Button 
                      type="text" 
                      icon={<ArrowRight className="w-4 h-4" />}
                      className="text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      Explore
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* Featured Creators */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <Title level={2} className="text-4xl font-bold text-gray-900 mb-4">
                Featured Creators
              </Title>
              <Paragraph className="text-xl text-gray-600">
                Meet the talented artists shaping our community
              </Paragraph>
            </div>
            
            <Row gutter={[24, 24]} justify="center">
              {featuredCreators.map((creator, index) => (
                <Col xs={24} md={8} key={index}>
                  <Card
                    hoverable
                    className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300"
                    styles={{ body: { padding: 32 } }}
                  >
                    <div className="text-6xl mb-4">
                      {creator.avatar}
                    </div>
                    <Title level={4} className="text-gray-900 mb-2">
                      {creator.name}
                    </Title>
                    <Tag color="blue" className="mb-4">
                      {creator.specialty}
                    </Tag>
                    <Paragraph className="text-gray-600 mb-6">
                      {creator.followers} followers
                    </Paragraph>
                    <Button 
                      type="primary" 
                      ghost
                      icon={<Users className="w-4 h-4" />}
                      className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                    >
                      Follow
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* Trending Works */}
        <div className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <Title level={2} className="text-4xl font-bold text-gray-900 mb-4">
                Trending Now
              </Title>
              <Paragraph className="text-xl text-gray-600">
                Discover what&apos;s capturing hearts today
              </Paragraph>
            </div>
            
            <Row gutter={[24, 24]}>
              {trendingWorks.map((work, index) => (
                <Col xs={24} md={8} key={index}>
                  <Card
                    hoverable
                    className="border-0 shadow-sm hover:shadow-lg transition-all duration-300"
                    styles={{ body: { padding: 24 } }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <TrendingUp className="w-6 h-6 text-green-500" />
                      <Tag color="purple">{work.type}</Tag>
                    </div>
                    <Title level={4} className="text-gray-900 mb-2">
                      {work.title}
                    </Title>
                    <Paragraph className="text-gray-600 mb-4">
                      by {work.author}
                    </Paragraph>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500">
                        <Heart className="w-4 h-4 mr-1" />
                        <span>{work.likes}</span>
                      </div>
                      <Button 
                        type="text" 
                        size="small"
                        icon={<ArrowRight className="w-4 h-4" />}
                        className="text-indigo-600 hover:text-indigo-700"
                      >
                        Read
                      </Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-6">
            <div className="p-4 bg-white/10 rounded-full w-fit mx-auto mb-8">
              <Zap className="w-12 h-12 text-white" />
            </div>
            <Title level={2} className="text-4xl font-bold text-white mb-6">
              Ready to Share Your Story?
            </Title>
            <Paragraph className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who&apos;ve found their voice. 
              Your story matters, and the world is waiting to hear it.
            </Paragraph>
            <Space size="large">
              <Button 
                size="large"
                icon={<Sparkles className="w-5 h-5" />}
                className="h-14 px-8 text-lg font-semibold bg-white text-indigo-600 border-0 hover:bg-gray-50"
              >
                Join for Free
              </Button>
              <Button 
                size="large"
                ghost
                icon={<BookOpen className="w-5 h-5" />}
                className="h-14 px-8 text-lg font-semibold text-white border-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </Space>
          </div>
        </div>
      </Content>

      <SiteFooter />
    </Layout>
  );
}
