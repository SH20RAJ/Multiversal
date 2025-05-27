'use client';
import React, { useState } from 'react';
import { Layout, Typography, Card, Avatar, Button, Space, Row, Col, Tabs, List, Tag, Divider, Rate, Badge, Tooltip, Modal, Form, Input, Select } from 'antd';
import { Edit3, Eye, Heart, MessageCircle, Share2, Star, BookOpen, Shield, Video, Calendar, MapPin, Link, Twitter, Instagram, Linkedin, UserPlus, Trophy } from 'lucide-react';
import NavigationHeader from '../../../components/NavigationHeader';
import ContentCard from '../../../components/ContentCard';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;
const { TextArea } = Input;
const { Option } = Select;

export default function Profile() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [messageModalVisible, setMessageModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('works');

  // Mock profile data
  const profile = {
    id: 'luna-martinez',
    name: 'Luna Martinez',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Luna',
    coverImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=300&fit=crop',
    title: 'Award-winning Poet & Storyteller',
    bio: 'Luna is a passionate poet and storyteller who finds magic in everyday moments. Her work explores themes of love, loss, identity, and the human connection to nature. Winner of the National Poetry Award 2023.',
    location: 'San Francisco, CA',
    website: 'www.lunapoetry.com',
    joinDate: 'January 2022',
    verified: true,
    followers: 12847,
    following: 432,
    totalWorks: 156,
    totalViews: 892341,
    totalLikes: 45672,
    avgRating: 4.8,
    socialLinks: {
      twitter: '@lunapoetry',
      instagram: '@luna_writes',
      linkedin: 'luna-martinez'
    },
    badges: [
      { name: 'Verified Creator', color: 'blue', icon: <Star className="w-4 h-4" /> },
      { name: 'Top Contributor', color: 'gold', icon: <Edit3 className="w-4 h-4" /> },
      { name: 'Community Favorite', color: 'red', icon: <Heart className="w-4 h-4" /> }
    ],
    genres: ['Poetry', 'Short Stories', 'Essays', 'Memoir'],
    achievements: [
      'National Poetry Award Winner 2023',
      'Featured in Literary Quarterly',
      '50,000+ readers reached',
      'Mentored 25+ new writers'
    ]
  };

  const works = [
    {
      id: 1,
      title: 'Whispers of the Urban Forest',
      type: 'Poetry Collection',
      excerpt: 'A journey through city streets where nature reclaims its space...',
      publishDate: '2 days ago',
      views: 1847,
      likes: 234,
      comments: 67,
      rating: 4.9,
      cover: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop',
      trending: true,
      featured: true
    },
    {
      id: 2,
      title: 'The Last Library',
      type: 'Short Story',
      excerpt: 'In a world where books are forbidden, one librarian holds the last collection...',
      publishDate: '1 week ago',
      views: 3421,
      likes: 567,
      comments: 123,
      rating: 4.7,
      cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
      trending: false,
      featured: true
    },
    {
      id: 3,
      title: 'Letters to My Younger Self',
      type: 'Essay Series',
      excerpt: 'Reflections on growth, mistakes, and the wisdom that comes with time...',
      publishDate: '2 weeks ago',
      views: 2934,
      likes: 445,
      comments: 89,
      rating: 4.8,
      cover: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&h=200&fit=crop',
      trending: false,
      featured: false
    }
  ];

  const followers = [
    { name: 'Sarah Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', title: 'Novelist' },
    { name: 'Marcus Rivera', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus', title: 'Music Producer' },
    { name: 'Elena Patel', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena', title: 'Designer & Poet' },
    { name: 'David Kim', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David', title: 'Storyteller' }
  ];

  const reviews = [
    {
      reviewer: 'Emily Johnson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
      rating: 5,
      comment: 'Luna\'s poetry touches the soul. Her words have a way of making you feel understood.',
      date: '3 days ago',
      work: 'Whispers of the Urban Forest'
    },
    {
      reviewer: 'Alex Thompson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex2',
      rating: 5,
      comment: 'Incredible storytelling! The Last Library kept me reading until dawn.',
      date: '1 week ago',
      work: 'The Last Library'
    }
  ];

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <NavigationHeader />

      <Content style={{ marginTop: '64px' }}>
        {/* Cover Image */}
        <div style={{
          height: '300px',
          backgroundImage: `url(${profile.coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
            padding: '40px 24px 24px'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <Row align="bottom">
                <Col>
                  <Avatar
                    src={profile.avatar}
                    size={120}
                    style={{
                      border: '4px solid white',
                      marginRight: '24px'
                    }}
                  />
                </Col>
                <Col flex="auto">
                  <Space direction="vertical" size="small">
                    <div>
                      <Title level={2} style={{ color: 'white', margin: 0 }}>
                        {profile.name}
                        {profile.verified && (
                          <Tooltip title="Verified Creator">
                            <Star className="w-4 h-4" style={{ color: '#1890ff', marginLeft: '8px' }} />
                          </Tooltip>
                        )}
                      </Title>
                      <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px' }}>
                        {profile.title}
                      </Text>
                    </div>
                    <Space wrap>
                      {profile.badges.map((badge, index) => (
                        <Tag key={index} color={badge.color} icon={badge.icon}>
                          {badge.name}
                        </Tag>
                      ))}
                    </Space>
                  </Space>
                </Col>
                <Col>
                  <Space>
                    <Button
                      type={isFollowing ? "default" : "primary"}
                      size="large"
                      icon={<UserPlus className="w-4 h-4" />}
                      onClick={handleFollow}
                    >
                      {isFollowing ? 'Following' : 'Follow'}
                    </Button>
                    <Button
                      size="large"
                      icon={<MessageCircle className="w-4 h-4" />}
                      onClick={() => setMessageModalVisible(true)}
                    >
                      Message
                    </Button>
                    <Button size="large" icon={<Share2 className="w-4 h-4" />}>
                      Share
                    </Button>
                  </Space>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
          <Row gutter={[24, 24]}>
            {/* Left Sidebar */}
            <Col xs={24} lg={8}>
              {/* Profile Stats */}
              <Card style={{ marginBottom: '24px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={8}>
                    <div style={{ textAlign: 'center' }}>
                      <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                        {profile.followers.toLocaleString()}
                      </Title>
                      <Text type="secondary">Followers</Text>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div style={{ textAlign: 'center' }}>
                      <Title level={3} style={{ margin: 0, color: '#52c41a' }}>
                        {profile.totalWorks}
                      </Title>
                      <Text type="secondary">Works</Text>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div style={{ textAlign: 'center' }}>
                      <Title level={3} style={{ margin: 0, color: '#faad14' }}>
                        {profile.avgRating}
                      </Title>
                      <Text type="secondary">Rating</Text>
                    </div>
                  </Col>
                </Row>
              </Card>

              {/* About */}
              <Card title="About" style={{ marginBottom: '24px' }}>
                <Paragraph style={{ marginBottom: '16px' }}>
                  {profile.bio}
                </Paragraph>
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <div>
                    <MapPin className="w-4 h-4" style={{ marginRight: '8px', color: '#666' }} />
                    <Text type="secondary">{profile.location}</Text>
                  </div>
                  <div>
                    <Calendar className="w-4 h-4" style={{ marginRight: '8px', color: '#666' }} />
                    <Text type="secondary">Joined {profile.joinDate}</Text>
                  </div>
                  <div>
                    <Link className="w-4 h-4" style={{ marginRight: '8px', color: '#666' }} />
                    <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer">
                      {profile.website}
                    </a>
                  </div>
                </Space>
                <Divider />
                <Space>
                  <Button type="text" icon={<Twitter className="w-4 h-4" />} />
                  <Button type="text" icon={<Instagram className="w-4 h-4" />} />
                  <Button type="text" icon={<Linkedin className="w-4 h-4" />} />
                </Space>
              </Card>

              {/* Genres */}
              <Card title="Genres" style={{ marginBottom: '24px' }}>
                <Space wrap>
                  {profile.genres.map(genre => (
                    <Tag key={genre} color="blue">{genre}</Tag>
                  ))}
                </Space>
              </Card>

              {/* Achievements */}
              <Card title="Achievements">
                <List
                  dataSource={profile.achievements}
                  renderItem={achievement => (
                    <List.Item style={{ padding: '8px 0' }}>
                      <Text style={{ fontSize: '14px' }}>
                        <Trophy className="w-4 h-4" style={{ color: '#faad14', marginRight: '8px' }} />
                        {achievement}
                      </Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>

            {/* Main Content */}
            <Col xs={24} lg={16}>
              <Tabs activeKey={activeTab} onChange={setActiveTab} size="large">
                <TabPane tab={
                  <span>
                    <BookOpen className="w-4 h-4" />
                    Works ({profile.totalWorks})
                  </span>
                } key="works">
                  <Row gutter={[24, 24]}>
                    {works.map(work => (
                      <Col xs={24} md={12} key={work.id}>
                        <ContentCard {...work} />
                      </Col>
                    ))}
                  </Row>
                </TabPane>

                <TabPane tab={
                  <span>
                    <Heart className="w-4 h-4" />
                    Reviews
                  </span>
                } key="reviews">
                  <List
                    dataSource={reviews}
                    renderItem={review => (
                      <List.Item style={{ padding: '24px 0' }}>
                        <List.Item.Meta
                          avatar={<Avatar src={review.avatar} size={48} />}
                          title={
                            <div>
                              <Text strong>{review.reviewer}</Text>
                              <Rate disabled defaultValue={review.rating} style={{ marginLeft: '12px', fontSize: '14px' }} />
                            </div>
                          }
                          description={
                            <div>
                              <Paragraph style={{ margin: '8px 0' }}>{review.comment}</Paragraph>
                              <Text type="secondary" style={{ fontSize: '12px' }}>
                                Review for &quot;{review.work}&quot; • {review.date}
                              </Text>
                            </div>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </TabPane>

                <TabPane tab={
                  <span>
                    <UserPlus className="w-4 h-4" />
                    Followers ({profile.followers.toLocaleString()})
                  </span>
                } key="followers">
                  <Row gutter={[16, 16]}>
                    {followers.map((follower, index) => (
                      <Col xs={12} sm={8} md={6} key={index}>
                        <Card size="small" style={{ textAlign: 'center' }}>
                          <Avatar src={follower.avatar} size={64} style={{ marginBottom: '12px' }} />
                          <Title level={5} style={{ margin: '0 0 4px' }}>{follower.name}</Title>
                          <Text type="secondary" style={{ fontSize: '12px' }}>{follower.title}</Text>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </div>
      </Content>

      {/* Message Modal */}
      <Modal
        title="Send Message"
        open={messageModalVisible}
        onCancel={() => setMessageModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setMessageModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="send" type="primary">
            Send Message
          </Button>
        ]}
      >
        <Form layout="vertical">
          <Form.Item label="Subject">
            <Input placeholder="Enter message subject" />
          </Form.Item>
          <Form.Item label="Message">
            <TextArea rows={4} placeholder="Write your message..." />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
}
