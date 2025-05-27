'use client';
import React, { useState } from 'react';
import { Layout, Typography, Card, Avatar, Button, Space, Row, Col, Statistic, Progress, List, Tag, Tabs, Calendar, Badge, Table } from 'antd';
import { Edit3, Eye, Heart, MessageCircle, Share2, Trophy, Rocket, BookOpen, Shield, Video, Star, Bell, Settings, Plus, BarChart } from 'lucide-react';
import NavigationHeader from '../../components/NavigationHeader';

const { Content, Sider } = Layout;
const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for the dashboard
  const userStats = {
    name: "Alex Creator",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    title: "Multi-Genre Storyteller",
    joinDate: "January 2023",
    level: "Pro Creator",
    followers: 2847,
    following: 432,
    totalViews: 127483,
    totalLikes: 8934,
    totalComments: 2341,
    publishedWorks: 76,
    weeklyGoal: 3,
    weeklyProgress: 2
  };

  const recentWorks = [
    {
      id: 1,
      title: "The Digital Nomad's Lament",
      type: "Poetry",
      status: "Published",
      publishDate: "2 days ago",
      views: 234,
      likes: 45,
      comments: 12,
      trending: true
    },
    {
      id: 2,
      title: "Midnight in Tokyo - Chapter 3",
      type: "Story",
      status: "Draft",
      publishDate: "Not published",
      views: 0,
      likes: 0,
      comments: 0,
      trending: false
    },
    {
      id: 3,
      title: "Acoustic Sessions Vol. 2",
      type: "Music",
      status: "Published",
      publishDate: "1 week ago",
      views: 892,
      likes: 156,
      comments: 43,
      trending: true
    },
    {
      id: 4,
      title: "The Art of Slow Living",
      type: "Essay",
      status: "Published",
      publishDate: "2 weeks ago",
      views: 1247,
      likes: 234,
      comments: 89,
      trending: false
    }
  ];

  const analytics = [
    { month: 'Jan', views: 1200, likes: 240, comments: 80 },
    { month: 'Feb', views: 1890, likes: 378, comments: 126 },
    { month: 'Mar', views: 2340, likes: 468, comments: 156 },
    { month: 'Apr', views: 1980, likes: 396, comments: 132 },
    { month: 'May', views: 3240, likes: 648, comments: 216 },
    { month: 'Jun', views: 4120, likes: 824, comments: 274 }
  ];

  const notifications = [
    {
      type: "comment",
      message: "Sarah commented on your story 'Digital Nomad's Lament'",
      time: "2 minutes ago",
      read: false
    },
    {
      type: "like",
      message: "Your work received 50+ likes this week!",
      time: "1 hour ago",
      read: false
    },
    {
      type: "follow",
      message: "Marcus Rivera started following you",
      time: "3 hours ago",
      read: true
    },
    {
      type: "achievement",
      message: "Congratulations! You've reached 100+ views this month",
      time: "1 day ago",
      read: true
    }
  ];

  const upcomingEvents = [
    {
      title: "Weekly Poetry Slam",
      date: "Tomorrow, 7 PM",
      type: "Event"
    },
    {
      title: "Writing Workshop: Character Development",
      date: "Saturday, 2 PM",
      type: "Workshop"
    },
    {
      title: "Music Collaboration Session",
      date: "Sunday, 4 PM",
      type: "Collaboration"
    }
  ];

  const achievements = [
    { name: "Rising Star", description: "Gained 1000+ followers", earned: true },
    { name: "Prolific Writer", description: "Published 50+ works", earned: true },
    { name: "Community Favorite", description: "Received 5000+ likes", earned: true },
    { name: "Trendsetter", description: "Had 5 trending works", earned: false, progress: 3 },
    { name: "Mentor", description: "Helped 10+ new creators", earned: false, progress: 7 }
  ];

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => (
        <div>
          <Text strong>{text}</Text>
          {record.trending && <Tag color="red" size="small" style={{ marginLeft: 8 }}>Trending</Tag>}
          <br />
          <Tag color="blue" size="small">{record.type}</Tag>
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'Published' ? 'green' : 'orange'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Engagement',
      key: 'engagement',
      render: (_, record) => (
        <Space>
          <span><Eye className="w-4 h-4 inline mr-1" /> {record.views}</span>
          <span><Heart className="w-4 h-4 inline mr-1" /> {record.likes}</span>
          <span><MessageCircle className="w-4 h-4 inline mr-1" /> {record.comments}</span>
        </Space>
      ),
    },
    {
      title: 'Published',
      dataIndex: 'publishDate',
      key: 'publishDate',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Space>
          <Button size="small" icon={<Edit3 className="w-4 h-4" />}>Edit</Button>
          <Button size="small" icon={<Share2 className="w-4 h-4" />}>Share</Button>
        </Space>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <NavigationHeader />
      
      <Layout style={{ marginTop: '64px' }}>
        <Sider width={280} style={{ background: 'white', padding: '24px 0' }}>
          <div style={{ padding: '0 24px', textAlign: 'center', marginBottom: '32px' }}>
            <Avatar src={userStats.avatar} size={80} style={{ marginBottom: '16px' }} />
            <Title level={4} style={{ marginBottom: '4px' }}>{userStats.name}</Title>
            <Text type="secondary">{userStats.title}</Text>
            <br />
            <Tag color="gold" style={{ marginTop: '8px' }}>{userStats.level}</Tag>
          </div>

          <div style={{ padding: '0 24px' }}>
            <Title level={5}>Quick Stats</Title>
            <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
              <Col span={12}>
                <Statistic title="Followers" value={userStats.followers} />
              </Col>
              <Col span={12}>
                <Statistic title="Works" value={userStats.publishedWorks} />
              </Col>
            </Row>

            <Title level={5}>Weekly Goal</Title>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <Text>Publications</Text>
                <Text>{userStats.weeklyProgress}/{userStats.weeklyGoal}</Text>
              </div>
              <Progress 
                percent={(userStats.weeklyProgress / userStats.weeklyGoal) * 100} 
                strokeColor="#52c41a"
                size="small"
              />
            </div>

            <Button type="primary" block size="large" icon={<Plus className="w-4 h-4" />}>
              Create New Work
            </Button>
          </div>
        </Sider>

        <Layout style={{ padding: '24px' }}>
          <Content>
            <Tabs activeKey={activeTab} onChange={setActiveTab} size="large">
              <TabPane tab={
                <span>
                  <BarChart className="w-4 h-4 inline mr-2" />
                  Overview
                </span>
              } key="overview">
                {/* Overview Stats */}
                <Row gutter={[24, 24]} style={{ marginBottom: '32px' }}>
                  <Col xs={24} sm={12} lg={6}>
                    <Card>
                      <Statistic
                        title="Total Views"
                        value={userStats.totalViews}
                        prefix={<Eye className="w-4 h-4" />}
                        valueStyle={{ color: '#1890ff' }}
                      />
                    </Card>
                  </Col>
                  <Col xs={24} sm={12} lg={6}>
                    <Card>
                      <Statistic
                        title="Total Likes"
                        value={userStats.totalLikes}
                        prefix={<Heart className="w-4 h-4" />}
                        valueStyle={{ color: '#ff4d4f' }}
                      />
                    </Card>
                  </Col>
                  <Col xs={24} sm={12} lg={6}>
                    <Card>
                      <Statistic
                        title="Comments"
                        value={userStats.totalComments}
                        prefix={<MessageCircle className="w-4 h-4" />}
                        valueStyle={{ color: '#52c41a' }}
                      />
                    </Card>
                  </Col>
                  <Col xs={24} sm={12} lg={6}>
                    <Card>
                      <Statistic
                        title="Followers"
                        value={userStats.followers}
                        prefix={<Star className="w-4 h-4" />}
                        valueStyle={{ color: '#faad14' }}
                      />
                    </Card>
                  </Col>
                </Row>

                <Row gutter={[24, 24]}>
                  <Col xs={24} lg={16}>
                    {/* Recent Works */}
                    <Card title="Recent Works" style={{ marginBottom: '24px' }}>
                      <Table 
                        dataSource={recentWorks} 
                        columns={columns} 
                        pagination={false}
                        size="small"
                      />
                    </Card>

                    {/* Analytics Chart */}
                    <Card title="Performance Analytics">
                      <Row gutter={[16, 16]}>
                        {analytics.map((item, index) => (
                          <Col xs={4} key={index}>
                            <div style={{ textAlign: 'center' }}>
                              <Text type="secondary" style={{ fontSize: '12px' }}>{item.month}</Text>
                              <div style={{ marginTop: '8px' }}>
                                <div style={{ 
                                  height: `${(item.views / 5000) * 100}px`, 
                                  backgroundColor: '#1890ff', 
                                  width: '20px', 
                                  margin: '0 auto 4px',
                                  borderRadius: '2px',
                                  minHeight: '10px'
                                }}></div>
                                <Text style={{ fontSize: '10px' }}>{item.views}</Text>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                      <div style={{ marginTop: '16px', textAlign: 'center' }}>
                        <Space>
                          <Tag color="blue">Views</Tag>
                          <Tag color="red">Likes</Tag>
                          <Tag color="green">Comments</Tag>
                        </Space>
                      </div>
                    </Card>
                  </Col>

                  <Col xs={24} lg={8}>
                    {/* Notifications */}
                    <Card title="Recent Activity" style={{ marginBottom: '24px' }}>
                      <List
                        dataSource={notifications}
                        renderItem={item => (
                          <List.Item style={{ padding: '12px 0' }}>
                            <List.Item.Meta
                              avatar={
                                <Badge dot={!item.read}>
                                  <Bell className="w-4 h-4" style={{ 
                                    color: item.type === 'comment' ? '#1890ff' :
                                           item.type === 'like' ? '#ff4d4f' :
                                           item.type === 'follow' ? '#52c41a' : '#faad14'
                                  }} />
                                </Badge>
                              }
                              title={<Text style={{ fontSize: '13px' }}>{item.message}</Text>}
                              description={<Text type="secondary" style={{ fontSize: '11px' }}>{item.time}</Text>}
                            />
                          </List.Item>
                        )}
                      />
                    </Card>

                    {/* Upcoming Events */}
                    <Card title="Upcoming Events">
                      <List
                        dataSource={upcomingEvents}
                        renderItem={event => (
                          <List.Item>
                            <List.Item.Meta
                              title={<Text strong style={{ fontSize: '14px' }}>{event.title}</Text>}
                              description={
                                <div>
                                  <Text type="secondary" style={{ fontSize: '12px' }}>{event.date}</Text>
                                  <br />
                                  <Tag size="small" color="blue">{event.type}</Tag>
                                </div>
                              }
                            />
                          </List.Item>
                        )}
                      />
                    </Card>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tab={
                <span>
                  <Trophy className="w-4 h-4 inline mr-2" />
                  Achievements
                </span>
              } key="achievements">
                <Row gutter={[24, 24]}>
                  {achievements.map((achievement, index) => (
                    <Col xs={24} md={12} lg={8} key={index}>
                      <Card style={{ 
                        opacity: achievement.earned ? 1 : 0.7,
                        border: achievement.earned ? '2px solid #52c41a' : '1px solid #d9d9d9'
                      }}>
                        <div style={{ textAlign: 'center' }}>
                          <Trophy className="w-12 h-12 mx-auto mb-4" style={{ 
                            color: achievement.earned ? '#faad14' : '#d9d9d9'
                          }} />
                          <Title level={4}>{achievement.name}</Title>
                          <Paragraph type="secondary">{achievement.description}</Paragraph>
                          {achievement.earned ? (
                            <Tag color="green">Earned</Tag>
                          ) : (
                            <div>
                              <Progress 
                                percent={(achievement.progress / 10) * 100} 
                                size="small"
                                style={{ marginBottom: '8px' }}
                              />
                              <Text type="secondary">{achievement.progress}/10</Text>
                            </div>
                          )}
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </TabPane>

              <TabPane tab={
                <span>
                  <Settings className="w-4 h-4 inline mr-2" />
                  Settings
                </span>
              } key="settings">
                <Row gutter={[24, 24]}>
                  <Col xs={24} lg={12}>
                    <Card title="Profile Settings">
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Button block>Edit Profile</Button>
                        <Button block>Change Avatar</Button>
                        <Button block>Update Bio</Button>
                        <Button block>Manage Social Links</Button>
                      </Space>
                    </Card>
                  </Col>
                  <Col xs={24} lg={12}>
                    <Card title="Privacy & Notifications">
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Button block>Notification Preferences</Button>
                        <Button block>Privacy Settings</Button>
                        <Button block>Account Security</Button>
                        <Button block>Data Export</Button>
                      </Space>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
