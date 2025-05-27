'use client';
import React, { useState } from 'react';
import { Layout, Typography, Card, Button, Space, Row, Col, Tag, Statistic } from 'antd';
import { MessageCircle, Users, Trophy, BookOpen, Heart, Eye, Calendar } from 'lucide-react';
import NavigationHeader from '../../components/NavigationHeader';
import SiteFooter from '../../components/SiteFooter';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function CommunityPage() {
  const stats = [
    { title: 'Active Members', value: 12847, icon: <Users className="w-6 h-6" />, color: '#1890ff' },
    { title: 'Daily Posts', value: 342, icon: <MessageCircle className="w-6 h-6" />, color: '#ff4d4f' },
    { title: 'Stories Shared', value: 8921, icon: <BookOpen className="w-6 h-6" />, color: '#52c41a' },
    { title: 'Connections Made', value: 15673, icon: <Heart className="w-6 h-6" />, color: '#fa8c16' }
  ];

  const featuredCreators = [
    {
      name: 'Maya Chen',
      avatar: '🌟',
      specialty: 'Poetry',
      followers: '12.5K',
      works: 45,
      engagement: '95%'
    },
    {
      name: 'Alex Rivera',
      avatar: '✨',
      specialty: 'Short Stories',
      followers: '8.2K',
      works: 32,
      engagement: '92%'
    },
    {
      name: 'Sam Taylor',
      avatar: '🎵',
      specialty: 'Music',
      followers: '15.7K',
      works: 58,
      engagement: '97%'
    }
  ];

  const challenges = [
    {
      title: 'Poetry Week Challenge',
      description: 'Share your best poetry piece this week',
      participants: 234,
      prize: 'Featured Spotlight',
      deadline: '3 days left'
    },
    {
      title: 'Short Story Sprint',
      description: 'Write a complete story in under 1000 words',
      participants: 189,
      prize: 'Editorial Review',
      deadline: '1 week left'
    }
  ];

  return (
    <Layout className="min-h-screen bg-gray-50">
      <NavigationHeader />
      
      <Content className="pt-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <Title level={1} className="text-5xl font-bold text-white mb-6">
              Community Hub
            </Title>
            <Paragraph className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Connect with fellow creators, participate in challenges, and grow together in our vibrant community.
            </Paragraph>
            <Space size="large">
              <Button 
                type="primary" 
                size="large"
                className="h-14 px-8 text-lg font-semibold bg-white text-indigo-600 border-0 hover:bg-gray-50"
              >
                Join Community
              </Button>
              <Button 
                size="large"
                ghost
                className="h-14 px-8 text-lg font-semibold text-white border-white hover:bg-white/10"
              >
                View Guidelines
              </Button>
            </Space>
          </div>
        </div>

        {/* Community Stats */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <Row gutter={[32, 32]} className="text-center">
              {stats.map((stat, index) => (
                <Col xs={12} md={6} key={index}>
                  <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-center mb-4" style={{ color: stat.color }}>
                      {stat.icon}
                    </div>
                    <Statistic 
                      value={stat.value} 
                      className="text-2xl font-bold text-gray-900"
                    />
                    <Text className="text-gray-600 mt-2 font-medium">
                      {stat.title}
                    </Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* Featured Creators */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <Title level={2} className="text-4xl font-bold text-gray-900 mb-4">
                Featured Creators
              </Title>
              <Paragraph className="text-xl text-gray-600">
                Discover amazing creators making waves in our community
              </Paragraph>
            </div>
            
            <Row gutter={[24, 24]}>
              {featuredCreators.map((creator, index) => (
                <Col xs={24} md={8} key={index}>
                  <Card
                    hoverable
                    className="text-center h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300"
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
                    <div className="space-y-2 text-gray-600 mb-6">
                      <div>{creator.followers} followers</div>
                      <div>{creator.works} works</div>
                      <div>{creator.engagement} engagement rate</div>
                    </div>
                    <Button 
                      type="primary" 
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 border-0"
                    >
                      Follow
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* Community Challenges */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <Title level={2} className="text-4xl font-bold text-gray-900 mb-4">
                Active Challenges
              </Title>
              <Paragraph className="text-xl text-gray-600">
                Participate in community challenges to showcase your skills
              </Paragraph>
            </div>
            
            <Row gutter={[24, 24]}>
              {challenges.map((challenge, index) => (
                <Col xs={24} md={12} key={index}>
                  <Card
                    className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300"
                    styles={{ body: { padding: 32 } }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Trophy className="w-8 h-8 text-yellow-500" />
                      <Tag color="orange">{challenge.deadline}</Tag>
                    </div>
                    
                    <Title level={4} className="text-gray-900 mb-3">
                      {challenge.title}
                    </Title>
                    
                    <Paragraph className="text-gray-600 mb-4">
                      {challenge.description}
                    </Paragraph>
                    
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-sm text-gray-500">
                        <Users className="w-4 h-4 inline mr-1" />
                        {challenge.participants} participants
                      </div>
                      <div className="text-sm font-medium text-indigo-600">
                        Prize: {challenge.prize}
                      </div>
                    </div>
                    
                    <Button 
                      type="primary" 
                      size="large"
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 border-0"
                    >
                      Join Challenge
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* Community Guidelines Preview */}
        <div className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Heart className="w-16 h-16 text-indigo-600 mx-auto mb-8" />
            <Title level={2} className="text-4xl font-bold text-gray-900 mb-6">
              Built on Respect & Creativity
            </Title>
            <Paragraph className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our community thrives on mutual respect, constructive feedback, and celebrating each other&apos;s creative journeys.
            </Paragraph>
            <Space size="large">
              <Button 
                size="large"
                className="h-14 px-8 text-lg font-semibold"
              >
                View Full Guidelines
              </Button>
              <Button 
                type="primary"
                size="large"
                className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 border-0"
              >
                Start Participating
              </Button>
            </Space>
          </div>
        </div>
      </Content>

      <SiteFooter />
    </Layout>
  );
}
