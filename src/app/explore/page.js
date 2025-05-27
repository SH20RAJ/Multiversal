'use client';
import React, { useState, Suspense } from 'react';
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
  Empty,
  Spin
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
import { useFeaturedContent, useCategories } from '../../lib/api-client';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

function ExplorePageContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch data from API
  const { featuredContent, isLoading: isLoadingContent } = useFeaturedContent();
  const { categories: apiCategories, isLoading: isLoadingCategories } = useCategories();

  // Use API data or fallback to default data if still loading
  const categories = apiCategories || [
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
            {isLoadingContent ? (
              // Show loading skeleton
              Array.from({ length: 6 }).map((_, index) => (
                <Col xs={24} md={12} lg={8} key={`loading-${index}`}>
                  <Card className="h-full border-0 shadow-sm">
                    <div className="animate-pulse">
                      <div className="bg-gray-300 h-32 w-full rounded-t-lg"></div>
                      <div className="p-6">
                        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
                        <div className="flex gap-1 mb-4">
                          <div className="h-6 bg-gray-300 rounded w-16"></div>
                          <div className="h-6 bg-gray-300 rounded w-16"></div>
                        </div>
                        <div className="flex justify-between">
                          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))
            ) : !featuredContent || featuredContent.length === 0 ? (
              <Col span={24}>
                <Empty
                  description="No content found"
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  className="my-16"
                />
              </Col>
            ) : (
              featuredContent.map((content) => (
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
                          {content.tags && content.tags.map(tag => (
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
                            <span>{content.likes || 0}</span>
                          </Space>
                          <Space size={4}>
                            <MessageCircle className="w-4 h-4" />
                            <span>{content.comments || 0}</span>
                          </Space>
                          <Space size={4}>
                            <Eye className="w-4 h-4" />
                            <span>{content.views || 0}</span>
                          </Space>
                        </Space>
                        <Space size={4}>
                          <Clock className="w-4 h-4" />
                          <span>{content.readTime || 0} min read</span>
                        </Space>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))
            )}
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

export default function MinimalisticExplorePage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <Spin size="large" />
      </div>
    }>
      <ExplorePageContent />
    </Suspense>
  );
}
