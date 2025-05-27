'use client';

import React, { useState } from 'react';
import { 
  Layout, 
  Typography, 
  Card, 
  Row, 
  Col, 
  Space, 
  Input,
  Select,
  Button,
  Tag,
  Avatar,
  Rate,
  Pagination,
  FloatButton
} from 'antd';
import { 
  Search,
  Filter,
  Heart,
  MessageCircle,
  Share2,
  BookOpen,
  Eye,
  Clock,
  Plus,
  ArrowUpDown
} from 'lucide-react';

const { Header, Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Search } = Input;
const { Option } = Select;

export default function ExplorePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { key: 'all', label: 'All Categories', count: 3420 },
    { key: 'poetry', label: 'Poetry & Shayari', count: 1250 },
    { key: 'story', label: 'Stories & Scripts', count: 890 },
    { key: 'music', label: 'Music & Songs', count: 650 },
    { key: 'comedy', label: 'Comedy & Humor', count: 630 }
  ];

  const sortOptions = [
    { key: 'trending', label: 'Trending Now' },
    { key: 'recent', label: 'Most Recent' },
    { key: 'popular', label: 'Most Popular' },
    { key: 'highest-rated', label: 'Highest Rated' },
    { key: 'most-comments', label: 'Most Discussed' }
  ];

  const sampleContent = [
    {
      id: 1,
      title: "The Silent Symphony",
      author: "Elena Rodriguez",
      category: "Poetry",
      excerpt: "In the quiet moments between heartbeats, where time stands still and dreams begin to whisper their secrets...",
      likes: 234,
      comments: 45,
      views: 1200,
      rating: 4.8,
      readTime: 3,
      tags: ['love', 'nature', 'contemplation'],
      publishedAt: "2 hours ago",
      trending: true
    },
    {
      id: 2,
      title: "Digital Detox Diaries",
      author: "Marcus Chen",
      category: "Story",
      excerpt: "What happens when a tech entrepreneur decides to live off-grid for 30 days? A journey of self-discovery unfolds...",
      likes: 189,
      comments: 67,
      views: 890,
      rating: 4.6,
      readTime: 8,
      tags: ['technology', 'self-improvement', 'modern-life'],
      publishedAt: "5 hours ago",
      featured: true
    },
    {
      id: 3,
      title: "Midnight Melodies",
      author: "Aria Blackwood",
      category: "Music",
      excerpt: "A hauntingly beautiful composition that blends classical piano with modern electronic elements...",
      likes: 312,
      comments: 89,
      views: 1540,
      rating: 4.9,
      readTime: 5,
      tags: ['classical', 'electronic', 'instrumental'],
      publishedAt: "1 day ago",
      trending: true
    },
    {
      id: 4,
      title: "The Awkward Adventures of Adulting",
      author: "Jamie Parker",
      category: "Comedy",
      excerpt: "Why nobody prepared me for the reality of buying furniture, making doctor appointments, and pretending to understand taxes...",
      likes: 445,
      comments: 123,
      views: 2100,
      rating: 4.7,
      readTime: 6,
      tags: ['millennial', 'humor', 'relatable'],
      publishedAt: "2 days ago",
      featured: true
    },
    {
      id: 5,
      title: "Echoes of Tomorrow",
      author: "Dr. Sarah Kim",
      category: "Story",
      excerpt: "In a world where memories can be downloaded and shared, one scientist discovers the dangerous power of artificial nostalgia...",
      likes: 267,
      comments: 78,
      views: 1340,
      rating: 4.5,
      readTime: 12,
      tags: ['sci-fi', 'technology', 'future'],
      publishedAt: "3 days ago",
      trending: false
    },
    {
      id: 6,
      title: "Rain on Canvas",
      author: "Isabella Martinez",
      category: "Poetry",
      excerpt: "Each droplet tells a story, painting emotions across the sky in shades of gray and silver...",
      likes: 156,
      comments: 34,
      views: 780,
      rating: 4.4,
      readTime: 4,
      tags: ['weather', 'art', 'emotions'],
      publishedAt: "4 days ago",
      trending: false
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Poetry': '#f56565',
      'Story': '#4299e1', 
      'Music': '#38a169',
      'Comedy': '#ed8936',
      'Script': '#9f7aea'
    };
    return colors[category] || '#1890ff';
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#fafafa' }}>
      {/* Header */}
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
        <Button type="primary" icon={<PlusOutlined />}>
          Create
        </Button>
      </Header>

      <Content style={{ marginTop: 64, padding: '40px 50px' }}>
        {/* Search and Filter Section */}
        <div style={{ marginBottom: 40 }}>
          <Title level={2} style={{ marginBottom: 32, textAlign: 'center' }}>
            Explore Creative Works
          </Title>
          
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} md={12}>
              <Search
                placeholder="Search for stories, poems, music, and more..."
                allowClear
                size="large"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '100%' }}
                enterButton={<SearchOutlined />}
              />
            </Col>
            <Col xs={12} md={6}>
              <Select
                value={selectedCategory}
                onChange={setSelectedCategory}
                size="large"
                style={{ width: '100%' }}
                placeholder="Category"
              >
                {categories.map(cat => (
                  <Option key={cat.key} value={cat.key}>
                    {cat.label} ({cat.count})
                  </Option>
                ))}
              </Select>
            </Col>
            <Col xs={12} md={6}>
              <Select
                value={sortBy}
                onChange={setSortBy}
                size="large"
                style={{ width: '100%' }}
                placeholder="Sort by"
                suffixIcon={<SortAscendingOutlined />}
              >
                {sortOptions.map(option => (
                  <Option key={option.key} value={option.key}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </Col>
          </Row>
        </div>

        {/* Filter Tags */}
        <div style={{ marginBottom: 32 }}>
          <Space wrap>
            <Tag.CheckableTag checked={selectedCategory === 'all'}>All</Tag.CheckableTag>
            <Tag.CheckableTag checked={selectedCategory === 'trending'}>🔥 Trending</Tag.CheckableTag>
            <Tag.CheckableTag checked={selectedCategory === 'featured'}>⭐ Featured</Tag.CheckableTag>
            <Tag.CheckableTag checked={selectedCategory === 'new'}>🆕 New</Tag.CheckableTag>
            <Tag.CheckableTag checked={selectedCategory === 'popular'}>👑 Popular</Tag.CheckableTag>
          </Space>
        </div>

        {/* Content Grid */}
        <Row gutter={[24, 24]}>
          {sampleContent.map((content) => (
            <Col xs={24} md={12} lg={8} key={content.id}>
              <Card
                hoverable
                style={{ 
                  borderRadius: 16,
                  border: 'none',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  height: 420,
                  display: 'flex',
                  flexDirection: 'column'
                }}
                styles={{ body: { padding: 0, flex: 1, display: 'flex', flexDirection: 'column' } }}
                className="explore-card"
              >
                {/* Header */}
                <div style={{ padding: '20px 24px 16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <Tag 
                      color={getCategoryColor(content.category)}
                      style={{ fontSize: '11px', borderRadius: 12 }}
                    >
                      {content.category}
                    </Tag>
                    {content.trending && <Tag color="#ff6b6b">🔥 Trending</Tag>}
                    {content.featured && <Tag color="#1890ff">⭐ Featured</Tag>}
                  </div>
                  
                  <Title 
                    level={5} 
                    style={{ 
                      margin: 0,
                      marginBottom: 12,
                      lineHeight: 1.3
                    }}
                    ellipsis={{ rows: 2 }}
                  >
                    {content.title}
                  </Title>

                  {/* Author and Rating */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar 
                        style={{ backgroundColor: getCategoryColor(content.category), marginRight: 8 }}
                        size="small"
                      >
                        {content.author.charAt(0)}
                      </Avatar>
                      <Text style={{ fontSize: 13 }}>{content.author}</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Rate disabled defaultValue={content.rating} style={{ fontSize: 12 }} allowHalf />
                      <Text style={{ marginLeft: 4, fontSize: 12, color: '#666' }}>{content.rating}</Text>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '0 24px', flex: 1 }}>
                  <Paragraph 
                    style={{ 
                      color: '#555',
                      lineHeight: 1.6,
                      fontSize: 14,
                      marginBottom: 16
                    }}
                    ellipsis={{ rows: 4 }}
                  >
                    {content.excerpt}
                  </Paragraph>
                  
                  {/* Tags */}
                  <Space size={4} wrap style={{ marginBottom: 16 }}>
                    {content.tags.slice(0, 3).map((tag, index) => (
                      <Tag 
                        key={index}
                        style={{ 
                          fontSize: 11,
                          margin: 0,
                          border: '1px solid #e8e8e8',
                          background: '#f8f8f8'
                        }}
                      >
                        #{tag}
                      </Tag>
                    ))}
                  </Space>
                </div>

                {/* Footer */}
                <div style={{ 
                  padding: '16px 24px',
                  borderTop: '1px solid #f0f0f0',
                  background: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 12
                  }}>
                    <Space size={16}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <HeartOutlined style={{ color: '#666', marginRight: 4, fontSize: 14 }} />
                        <Text style={{ fontSize: 13 }}>{content.likes}</Text>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CommentOutlined style={{ color: '#666', marginRight: 4, fontSize: 14 }} />
                        <Text style={{ fontSize: 13 }}>{content.comments}</Text>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <EyeOutlined style={{ color: '#666', marginRight: 4, fontSize: 14 }} />
                        <Text style={{ fontSize: 13 }}>{content.views}</Text>
                      </div>
                    </Space>
                    
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <ClockCircleOutlined style={{ fontSize: 12, marginRight: 4 }} />
                      <Text style={{ fontSize: 12, color: '#666' }}>{content.readTime} min</Text>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, color: '#999' }}>{content.publishedAt}</Text>
                    <Space>
                      <Button 
                        type="text" 
                        icon={<BookOutlined />} 
                        size="small"
                        style={{ color: '#666' }}
                      />
                      <Button 
                        type="text" 
                        icon={<ShareAltOutlined />} 
                        size="small"
                        style={{ color: '#666' }}
                      />
                      <Button 
                        type="primary"
                        size="small"
                        style={{
                          borderRadius: 12,
                          fontWeight: 500,
                          background: getCategoryColor(content.category),
                          borderColor: getCategoryColor(content.category)
                        }}
                      >
                        Read
                      </Button>
                    </Space>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Pagination */}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Pagination
            current={currentPage}
            total={85}
            pageSize={6}
            onChange={setCurrentPage}
            showSizeChanger={false}
            showQuickJumper
            showTotal={(total, range) => 
              `${range[0]}-${range[1]} of ${total} works`
            }
            style={{ display: 'inline-block' }}
          />
        </div>
      </Content>

      {/* Floating Action Button */}
      <FloatButton 
        icon={<PlusOutlined />} 
        type="primary" 
        style={{ right: 24, bottom: 24 }}
        tooltip="Create New Content"
      />
      
      <FloatButton.BackTop style={{ right: 80, bottom: 24 }} />

      <style jsx global>{`
        .explore-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12) !important;
        }
      `}</style>
    </Layout>
  );
}
