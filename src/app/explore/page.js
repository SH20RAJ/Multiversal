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
  FloatButton,
  Empty
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
  TrendingUp,
  Star,
  Music,
  Palette,
  Edit3
} from 'lucide-react';
import NavigationHeader from '../../components/NavigationHeader';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

export default function MinimalisticExplorePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { key: 'all', label: 'All', count: 3420, icon: <Star className="w-4 h-4" /> },
    { key: 'poetry', label: 'Poetry', count: 1250, icon: <Edit3 className="w-4 h-4" /> },
    { key: 'stories', label: 'Stories', count: 890, icon: <BookOpen className="w-4 h-4" /> },
    { key: 'music', label: 'Music', count: 650, icon: <Music className="w-4 h-4" /> },
    { key: 'art', label: 'Art', count: 630, icon: <Palette className="w-4 h-4" /> }
  ];

  const sortOptions = [
    { key: 'trending', label: 'Trending', icon: <TrendingUp className="w-4 h-4" /> },
    { key: 'latest', label: 'Latest', icon: <Clock className="w-4 h-4" /> },
    { key: 'popular', label: 'Most Liked', icon: <Heart className="w-4 h-4" /> },
    { key: 'discussed', label: 'Most Discussed', icon: <MessageCircle className="w-4 h-4" /> }
  ];

  const featuredContent = [
    {
      id: 1,
      title: "Whispers in the Digital Wind",
      type: "poetry",
      author: "Luna Martinez",
      avatar: "🌙",
      excerpt: "In circuits and code we find our soul, where binary dreams make us whole...",
      tags: ["digital", "modern", "technology"],
      stats: { likes: 245, comments: 32, views: 1200, readTime: 3 },
      gradient: "from-purple-400 to-pink-400"
    },
    {
      id: 2,
      title: "The Last Library on Earth",
      type: "story",
      author: "Marcus Chen",
      avatar: "📚",
      excerpt: "When the world went digital, one librarian refused to let the books die...",
      tags: ["dystopian", "books", "future"],
      stats: { likes: 567, comments: 89, views: 3400, readTime: 12 },
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      id: 3,
      title: "Neon Dreams",
      type: "music",
      author: "Alex Vega",
      avatar: "🎵",
      excerpt: "An ambient journey through synthwave landscapes and retro futures...",
      tags: ["synthwave", "ambient", "electronic"],
      stats: { likes: 123, comments: 45, views: 890, readTime: 4 },
      gradient: "from-orange-400 to-red-400"
    },
    {
      id: 4,
      title: "Cosmic Solitude",
      type: "art",
      author: "Zara Kim",
      avatar: "🎨",
      excerpt: "A digital painting exploring isolation in the vast expanse of space...",
      tags: ["space", "digital art", "surreal"],
      stats: { likes: 334, comments: 67, views: 2100, readTime: 2 },
      gradient: "from-green-400 to-blue-400"
    },
    {
      id: 5,
      title: "Coffee Shop Chronicles",
      type: "story",
      author: "Sam Rivera",
      avatar: "☕",
      excerpt: "Every customer has a story, and the barista remembers them all...",
      tags: ["slice of life", "urban", "human connection"],
      stats: { likes: 189, comments: 56, views: 1500, readTime: 8 },
      gradient: "from-yellow-400 to-orange-400"
    },
    {
      id: 6,
      title: "Midnight Melancholy",
      type: "poetry",
      author: "River Stone",
      avatar: "🌃",
      excerpt: "In the quiet hours when the world sleeps, thoughts flow like rivers...",
      tags: ["night", "introspective", "emotions"],
      stats: { likes: 278, comments: 41, views: 1800, readTime: 5 },
      gradient: "from-indigo-400 to-purple-400"
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'poetry': return <Edit3 className="w-4 h-4" />;
      case 'story': return <BookOpen className="w-4 h-4" />;
      case 'music': return <Music className="w-4 h-4" />;
      case 'art': return <Palette className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'poetry': return 'purple';
      case 'story': return 'blue';
      case 'music': return 'orange';
      case 'art': return 'green';
      default: return 'default';
    }
  };

  return (
    <Layout className="min-h-screen bg-gray-50">
      <NavigationHeader />
      
      <Content className="pt-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <Title level={1} className="text-4xl font-bold text-gray-900 mb-2">
              Explore
            </Title>
            <Paragraph className="text-xl text-gray-600">
              Discover amazing stories, poetry, music, and art from creators worldwide
            </Paragraph>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8 border-0 shadow-sm">
            <Row gutter={[16, 16]} align="middle">
              <Col xs={24} md={12}>
                <Input
                  placeholder="Search for stories, creators, or topics..."
                  prefix={<Search className="w-4 h-4 text-gray-400" />}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  size="large"
                  className="rounded-lg"
                />
              </Col>
              <Col xs={12} md={6}>
                <Select
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  size="large"
                  className="w-full"
                  placeholder="Category"
                >
                  {categories.map(cat => (
                    <Option key={cat.key} value={cat.key}>
                      <Space>
                        {cat.icon}
                        {cat.label}
                        <span className="text-gray-400">({cat.count})</span>
                      </Space>
                    </Option>
                  ))}
                </Select>
              </Col>
              <Col xs={12} md={6}>
                <Select
                  value={sortBy}
                  onChange={setSortBy}
                  size="large"
                  className="w-full"
                  placeholder="Sort by"
                >
                  {sortOptions.map(opt => (
                    <Option key={opt.key} value={opt.key}>
                      <Space>
                        {opt.icon}
                        {opt.label}
                      </Space>
                    </Option>
                  ))}
                </Select>
              </Col>
            </Row>
          </Card>

          {/* Category Filters */}
          <div className="mb-8">
            <Space wrap>
              {categories.map(category => (
                <Button
                  key={category.key}
                  type={selectedCategory === category.key ? "primary" : "default"}
                  icon={category.icon}
                  onClick={() => setSelectedCategory(category.key)}
                  className="rounded-lg"
                >
                  {category.label}
                </Button>
              ))}
            </Space>
          </div>

          {/* Content Grid */}
          <Row gutter={[24, 24]}>
            {featuredContent.map((content) => (
              <Col xs={24} md={12} lg={8} key={content.id}>
                <Card
                  hoverable
                  className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  styles={{ body: { padding: 0 } }}
                >
                  {/* Content Header with Gradient */}
                  <div className={`h-32 bg-gradient-to-r ${content.gradient} relative`}>
                    <div className="absolute top-4 left-4">
                      <Tag 
                        color={getTypeColor(content.type)}
                        icon={getTypeIcon(content.type)}
                        className="rounded-lg"
                      >
                        {content.type}
                      </Tag>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Space>
                        <div className="text-2xl">{content.avatar}</div>
                        <div>
                          <Text className="text-white font-medium text-sm">
                            {content.author}
                          </Text>
                        </div>
                      </Space>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6">
                    <Title level={4} className="text-gray-900 mb-3 line-clamp-2">
                      {content.title}
                    </Title>
                    
                    <Paragraph className="text-gray-600 mb-4 line-clamp-3">
                      {content.excerpt}
                    </Paragraph>

                    {/* Tags */}
                    <div className="mb-4">
                      <Space wrap>
                        {content.tags.map(tag => (
                          <Tag key={tag} className="rounded-lg text-xs">
                            {tag}
                          </Tag>
                        ))}
                      </Space>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-gray-500 text-sm">
                      <Space size={16}>
                        <Space size={4}>
                          <Heart className="w-4 h-4" />
                          <span>{content.stats.likes}</span>
                        </Space>
                        <Space size={4}>
                          <MessageCircle className="w-4 h-4" />
                          <span>{content.stats.comments}</span>
                        </Space>
                        <Space size={4}>
                          <Eye className="w-4 h-4" />
                          <span>{content.stats.views}</span>
                        </Space>
                      </Space>
                      <Space size={4}>
                        <Clock className="w-4 h-4" />
                        <span>{content.stats.readTime} min read</span>
                      </Space>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Load More */}
          <div className="text-center mt-12 mb-8">
            <Button 
              size="large"
              type="primary"
              ghost
              className="px-8 rounded-lg"
            >
              Load More Stories
            </Button>
          </div>
        </div>
      </Content>

      <FloatButton.BackTop 
        style={{ right: 24, bottom: 24 }} 
        className="shadow-lg"
      />
    </Layout>
  );
}
