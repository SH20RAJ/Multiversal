'use client';

import React, { useState } from 'react';
import { 
  Card, 
  Typography, 
  Button, 
  Space, 
  Tag,
  Avatar,
  Rate,
  Tooltip,
  Progress,
  Badge
} from 'antd';
import { 
  Heart, 
  MessageCircle, 
  Share2,
  Bookmark,
  Eye,
  Clock,
  Trophy,
  Flame
} from 'lucide-react';

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

export default function ContentCard({ 
  title, 
  content, 
  author, 
  category, 
  likes = 0, 
  comments = 0,
  views = 0,
  readTime = 5,
  isLiked = false,
  isBookmarked = false,
  isTrending = false,
  qualityScore = 4.5,
  authorAvatar,
  authorBadge,
  createdAt = "2 hours ago",
  tags = [],
  style = {}
}) {
  const [liked, setLiked] = useState(isLiked);
  const [bookmarked, setBookmarked] = useState(isBookmarked);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

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
    <Badge.Ribbon 
      text={isTrending ? "Trending" : qualityScore >= 4.5 ? "Featured" : null} 
      color={isTrending ? "#ff6b6b" : "#1890ff"}
      style={{ display: (isTrending || qualityScore >= 4.5) ? 'block' : 'none' }}
    >
      <Card
        hoverable
        style={{ 
          borderRadius: 16,
          border: 'none',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
          ...style
        }}
        styles={{ body: { padding: 0 } }}
        className="content-card"
      >
        {/* Header */}
        <div style={{ padding: '20px 24px 16px' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            marginBottom: 12 
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <Tag 
                  color={getCategoryColor(category)}
                  style={{ 
                    margin: 0,
                    borderRadius: 12,
                    fontSize: '12px',
                    fontWeight: 500
                  }}
                >
                  {category}
                </Tag>
                {isTrending && (
                  <Flame 
                    className="w-4 h-4" 
                    style={{ 
                      color: '#ff6b6b', 
                      marginLeft: 8
                    }} 
                  />
                )}
                {qualityScore >= 4.5 && (
                  <Trophy 
                    className="w-4 h-4" 
                    style={{ 
                      color: '#ffd700', 
                      marginLeft: 8
                    }} 
                  />
                )}
              </div>
              
              <Title 
                level={4} 
                style={{ 
                  margin: 0,
                  lineHeight: 1.3,
                  color: '#1a1a1a'
                }}
                ellipsis={{ rows: 2 }}
              >
                {title}
              </Title>
            </div>
            
            <Button
              type="text"
              icon={bookmarked ? <Bookmark className="w-4 h-4" style={{ color: '#1890ff' }} /> : <Bookmark className="w-4 h-4" />}
              onClick={handleBookmark}
              style={{ marginLeft: 12 }}
            />
          </div>

          {/* Author Info */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
            <Avatar 
              src={authorAvatar}
              style={{ 
                backgroundColor: getCategoryColor(category),
                marginRight: 12
              }}
            >
              {author.charAt(0)}
            </Avatar>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Text strong style={{ fontSize: 14 }}>{author}</Text>
                {authorBadge && (
                  <Badge 
                    count={authorBadge} 
                    style={{ 
                      backgroundColor: '#52c41a',
                      marginLeft: 8,
                      fontSize: 10
                    }} 
                  />
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {createdAt}
                </Text>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Clock className="w-3 h-3" style={{ marginRight: 4 }} />
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    {readTime} min read
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Score */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Rate 
                  disabled 
                  defaultValue={qualityScore} 
                  style={{ fontSize: 14 }}
                  allowHalf
                />
                <Text 
                  type="secondary" 
                  style={{ marginLeft: 8, fontSize: 12 }}
                >
                  {qualityScore}
                </Text>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Eye className="w-3 h-3" style={{ marginRight: 4 }} />
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {views.toLocaleString()}
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Content Preview */}
        <div style={{ padding: '0 24px 20px' }}>
          <Paragraph 
            style={{ 
              color: '#555',
              lineHeight: 1.6,
              fontSize: 14
            }}
            ellipsis={{ rows: 3 }}
          >
            {content}
          </Paragraph>
          
          {/* Tags */}
          {tags.length > 0 && (
            <div style={{ marginTop: 12 }}>
              <Space size={4} wrap>
                {tags.slice(0, 3).map((tag, index) => (
                  <Tag 
                    key={index}
                    style={{ 
                      fontSize: 11,
                      border: `1px solid ${getCategoryColor(category)}20`,
                      background: `${getCategoryColor(category)}10`,
                      color: getCategoryColor(category),
                      margin: 0
                    }}
                  >
                    {tag}
                  </Tag>
                ))}
                {tags.length > 3 && (
                  <Text type="secondary" style={{ fontSize: 11 }}>
                    +{tags.length - 3} more
                  </Text>
                )}
              </Space>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div style={{ 
          padding: '16px 24px',
          borderTop: '1px solid #f0f0f0',
          background: '#fafafa'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Space size={16}>
              <Button
                type="text"
                icon={liked ? <Heart className="w-4 h-4" style={{ color: '#ff6b6b', fill: '#ff6b6b' }} /> : <Heart className="w-4 h-4" />}
                onClick={handleLike}
                style={{ 
                  color: liked ? '#ff6b6b' : '#666',
                  fontWeight: 500,
                  padding: '4px 8px'
                }}
              >
                {likeCount}
              </Button>
              
              <Button
                type="text"
                icon={<MessageCircle className="w-4 h-4" />}
                style={{ color: '#666', padding: '4px 8px' }}
              >
                {comments}
              </Button>
              
              <Button
                type="text"
                icon={<Share2 className="w-4 h-4" />}
                style={{ color: '#666', padding: '4px 8px' }}
              />
            </Space>
            
            <Button 
              type="primary"
              size="small"
              style={{
                borderRadius: 16,
                fontWeight: 500,
                background: getCategoryColor(category),
                borderColor: getCategoryColor(category)
              }}
            >
              Read More
            </Button>
          </div>
        </div>
      </Card>

      <style jsx global>{`
        .content-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12) !important;
        }
        
        .content-card .ant-card-body {
          transition: all 0.3s ease;
        }
      `}</style>
    </Badge.Ribbon>
  );
}
