'use client';
import React, { useState } from 'react';
import { Layout, Typography, Card, Avatar, Button, Space, Tabs, List, Tag, Row, Col, Statistic, Badge, Input, Rate, Divider } from 'antd';
import { MessageCircle, ThumbsUp, Share2, Users, Trophy, Flame, BookOpen, Heart, MessageSquare, Eye, UserPlus, Calendar } from 'lucide-react';
import NavigationHeader from '../../components/NavigationHeader';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;
const { Search } = Input;

export default function Community() {
  const [activeTab, setActiveTab] = useState('discussions');

  const communityStats = [
    { title: 'Active Members', value: 12847, icon: <Users />, color: '#1890ff' },
    { title: 'Daily Posts', value: 342, icon: <Flame />, color: '#ff4d4f' },
    { title: 'Stories Shared', value: 8921, icon: <BookOpen />, color: '#52c41a' },
    { title: 'Connections Made', value: 15673, icon: <Heart />, color: '#fa8c16' },
  ];

  const discussions = [
    {
      id: 1,
      title: "The Art of Storytelling in the Digital Age",
      author: "Emily Chen",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      category: "Writing Tips",
      replies: 23,
      likes: 89,
      views: 432,
      lastActivity: "2 hours ago",
      isHot: true,
      tags: ["storytelling", "digital", "tips"]
    },
    {
      id: 2,
      title: "Music Composition: Finding Your Unique Voice",
      author: "Marcus Rivera",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      category: "Music",
      replies: 18,
      likes: 67,
      views: 298,
      lastActivity: "4 hours ago",
      isHot: false,
      tags: ["music", "composition", "creativity"]
    },
    {
      id: 3,
      title: "Poetry Challenge: Write a Haiku About Your Morning",
      author: "Sarah Kim",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      category: "Poetry",
      replies: 45,
      likes: 123,
      views: 678,
      lastActivity: "6 hours ago",
      isHot: true,
      tags: ["poetry", "haiku", "challenge"]
    },
    {
      id: 4,
      title: "Building Authentic Characters: A Writer's Guide",
      author: "David Thompson",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      category: "Writing Tips",
      replies: 31,
      likes: 156,
      views: 892,
      lastActivity: "8 hours ago",
      isHot: false,
      tags: ["characters", "writing", "guide"]
    }
  ];

  const featuredMembers = [
    {
      name: "Luna Martinez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna",
      title: "Award-winning Poet",
      bio: "Published author with 3 poetry collections",
      followers: 2847,
      following: 432,
      posts: 156,
      rating: 4.9,
      badge: "Top Contributor"
    },
    {
      name: "Alex Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      title: "Music Producer",
      bio: "Helping artists find their sound",
      followers: 1923,
      following: 567,
      posts: 89,
      rating: 4.8,
      badge: "Mentor"
    },
    {
      name: "Maya Patel",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya",
      title: "Storyteller",
      bio: "Crafting stories that connect hearts",
      followers: 3421,
      following: 234,
      posts: 203,
      rating: 4.9,
      badge: "Rising Star"
    }
  ];

  const events = [
    {
      title: "Weekly Poetry Slam",
      date: "Every Friday 7 PM EST",
      participants: 234,
      type: "Virtual Event",
      description: "Share your poetry live with the community"
    },
    {
      title: "Writing Workshop: Character Development",
      date: "Saturday, 2 PM EST",
      participants: 156,
      type: "Workshop",
      description: "Learn from published authors"
    },
    {
      title: "Music Collaboration Session",
      date: "Sunday, 4 PM EST",
      participants: 89,
      type: "Collaboration",
      description: "Find your next creative partner"
    }
  ];

  const challenges = [
    {
      title: "30-Day Writing Challenge",
      description: "Write 500 words every day for 30 days",
      participants: 847,
      daysLeft: 12,
      difficulty: "Medium",
      reward: "Featured Profile + Badge"
    },
    {
      title: "Micro-Fiction Friday",
      description: "Tell a complete story in under 100 words",
      participants: 423,
      daysLeft: 3,
      difficulty: "Easy",
      reward: "Community Showcase"
    },
    {
      title: "Song-a-Week Challenge",
      description: "Compose and share one song every week",
      participants: 234,
      daysLeft: 5,
      difficulty: "Hard",
      reward: "Producer Mentorship"
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <NavigationHeader />
      
      <Content style={{ padding: '20px', marginTop: '64px' }}>
        {/* Community Hero Section */}
        <div style={{ 
          textAlign: 'center', 
          padding: '60px 20px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          marginBottom: '40px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <Title level={1} style={{ color: 'white', fontSize: '3.5rem', marginBottom: '20px' }}>
            Welcome to Our Creative Community
          </Title>
          <Paragraph style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 30px' }}>
            Connect with fellow creators, share your work, get feedback, and grow together in a supportive environment designed for artists, writers, poets, and musicians.
          </Paragraph>
          <Button type="primary" size="large" icon={<UserPlus />} style={{ marginRight: '16px' }}>
            Join Community
          </Button>
          <Button size="large" style={{ background: 'rgba(255, 255, 255, 0.2)', border: 'none', color: 'white' }}>
            Browse Discussions
          </Button>
        </div>

        {/* Community Stats */}
        <Row gutter={[24, 24]} style={{ marginBottom: '40px' }}>
          {communityStats.map((stat, index) => (
            <Col xs={12} sm={6} key={index}>
              <Card style={{ 
                background: 'rgba(255, 255, 255, 0.1)', 
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '16px'
              }}>
                <Statistic
                  title={<span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{stat.title}</span>}
                  value={stat.value}
                  prefix={<span style={{ color: stat.color }}>{stat.icon}</span>}
                  valueStyle={{ color: 'white', fontWeight: 'bold' }}
                />
              </Card>
            </Col>
          ))}
        </Row>

        {/* Main Content */}
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={16}>
            <Card style={{ 
              background: 'rgba(255, 255, 255, 0.95)', 
              borderRadius: '16px',
              marginBottom: '24px'
            }}>
              <Tabs activeKey={activeTab} onChange={setActiveTab} size="large">
                <TabPane tab={
                  <span>
                    <MessageCircle />
                    Discussions
                  </span>
                } key="discussions">
                  <div style={{ marginBottom: '20px' }}>
                    <Search
                      placeholder="Search discussions..."
                      size="large"
                      style={{ marginBottom: '16px' }}
                    />
                    <Space wrap>
                      <Tag color="blue">All</Tag>
                      <Tag>Writing Tips</Tag>
                      <Tag>Poetry</Tag>
                      <Tag>Music</Tag>
                      <Tag>Storytelling</Tag>
                      <Tag>Feedback</Tag>
                    </Space>
                  </div>
                  
                  <List
                    dataSource={discussions}
                    renderItem={(item) => (
                      <List.Item style={{ padding: '20px 0', borderBottom: '1px solid #f0f0f0' }}>
                        <List.Item.Meta
                          avatar={<Avatar src={item.authorAvatar} size={48} />}
                          title={
                            <div>
                              {item.isHot && <Tag color="red" style={{ marginRight: '8px' }}>HOT</Tag>}
                              <span style={{ fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
                                {item.title}
                              </span>
                            </div>
                          }
                          description={
                            <div>
                              <Text type="secondary">by {item.author} in {item.category}</Text>
                              <br />
                              <Space style={{ marginTop: '8px' }}>
                                {item.tags.map(tag => (
                                  <Tag key={tag} size="small">{tag}</Tag>
                                ))}
                              </Space>
                            </div>
                          }
                        />
                        <div style={{ textAlign: 'right', minWidth: '120px' }}>
                          <Space direction="vertical" size="small">
                            <Space>
                              <MessageCircle />
                              <Text strong>{item.replies}</Text>
                              <ThumbsUp />
                              <Text strong>{item.likes}</Text>
                              <Eye />
                              <Text strong>{item.views}</Text>
                            </Space>
                            <Text type="secondary" style={{ fontSize: '12px' }}>
                              {item.lastActivity}
                            </Text>
                          </Space>
                        </div>
                      </List.Item>
                    )}
                  />
                </TabPane>

                <TabPane tab={
                  <span>
                    <Trophy />
                    Challenges
                  </span>
                } key="challenges">
                  <Row gutter={[16, 16]}>
                    {challenges.map((challenge, index) => (
                      <Col xs={24} md={12} key={index}>
                        <Card
                          style={{ height: '100%' }}
                          actions={[
                            <Button type="primary" size="small">Join Challenge</Button>
                          ]}
                        >
                          <Card.Meta
                            title={challenge.title}
                            description={challenge.description}
                          />
                          <Divider />
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Text strong>Participants:</Text>
                              <Text>{challenge.participants}</Text>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Text strong>Days Left:</Text>
                              <Badge count={challenge.daysLeft} showZero color="green" />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Text strong>Difficulty:</Text>
                              <Tag color={
                                challenge.difficulty === 'Easy' ? 'green' :
                                challenge.difficulty === 'Medium' ? 'orange' : 'red'
                              }>
                                {challenge.difficulty}
                              </Tag>
                            </div>
                            <div>
                              <Text strong>Reward:</Text>
                              <br />
                              <Text type="secondary">{challenge.reward}</Text>
                            </div>
                          </Space>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </TabPane>

                <TabPane tab={
                  <span>
                    <Calendar />
                    Events
                  </span>
                } key="events">
                  <List
                    dataSource={events}
                    renderItem={(event) => (
                      <List.Item
                        actions={[
                          <Button type="primary" size="small">Join Event</Button>
                        ]}
                      >
                        <List.Item.Meta
                          title={event.title}
                          description={
                            <div>
                              <Text>{event.description}</Text>
                              <br />
                              <Space style={{ marginTop: '8px' }}>
                                <Tag color="blue">{event.type}</Tag>
                                <Text type="secondary">{event.date}</Text>
                                <Text type="secondary">{event.participants} participants</Text>
                              </Space>
                            </div>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </TabPane>
              </Tabs>
            </Card>
          </Col>

          <Col xs={24} lg={8}>
            {/* Featured Members */}
            <Card 
              title="Featured Members" 
              style={{ 
                background: 'rgba(255, 255, 255, 0.95)', 
                borderRadius: '16px',
                marginBottom: '24px'
              }}
            >
              <List
                dataSource={featuredMembers}
                renderItem={(member) => (
                  <List.Item style={{ padding: '16px 0' }}>
                    <List.Item.Meta
                      avatar={<Avatar src={member.avatar} size={56} />}
                      title={
                        <div>
                          <Text strong>{member.name}</Text>
                          <Tag color="gold" size="small" style={{ marginLeft: '8px' }}>
                            {member.badge}
                          </Tag>
                        </div>
                      }
                      description={
                        <div>
                          <Text type="secondary">{member.title}</Text>
                          <br />
                          <Text style={{ fontSize: '12px' }}>{member.bio}</Text>
                          <br />
                          <Rate disabled defaultValue={member.rating} style={{ fontSize: '12px' }} />
                          <br />
                          <Space style={{ marginTop: '4px', fontSize: '11px' }}>
                            <Text type="secondary">{member.followers} followers</Text>
                            <Text type="secondary">{member.posts} posts</Text>
                          </Space>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>

            {/* Quick Actions */}
            <Card 
              title="Quick Actions" 
              style={{ 
                background: 'rgba(255, 255, 255, 0.95)', 
                borderRadius: '16px'
              }}
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <Button type="primary" block size="large" icon={<MessageCircle />}>
                  Start a Discussion
                </Button>
                <Button block size="large" icon={<Trophy />}>
                  Create Challenge
                </Button>
                <Button block size="large" icon={<Calendar />}>
                  Host an Event
                </Button>
                <Button block size="large" icon={<Share2 />}>
                  Share Your Work
                </Button>
              </Space>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
