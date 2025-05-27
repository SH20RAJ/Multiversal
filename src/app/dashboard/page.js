'use client';
import React, { useState } from 'react';
import { Layout, Typography, Card, Avatar, Button, Space, Row, Col, Statistic, Progress, List, Tag, Tabs, Calendar, Badge, Table, Spin } from 'antd';
import { Edit3, Eye, Heart, MessageCircle, Share2, Trophy, Rocket, BookOpen, Shield, Video, Star, Bell, Settings, Plus, BarChart } from 'lucide-react';
import NavigationHeader from '../../components/NavigationHeader';
import { useDashboardStats, useRecentWorks, useCurrentUser } from '../../lib/api-client';
import { useAuth } from '../../lib/auth-client';
import { format } from 'date-fns';

const { Content, Sider } = Layout;
const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

export default function Dashboard() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [activeTab, setActiveTab] = useState('overview');

    // Get authentication status
    const { user: authUser, isLoading: authLoading, isAuthenticated } = useAuth();

    // Fetch dashboard data using SWR
    const { stats: dashboardStats, isLoading: statsLoading } = useDashboardStats();
    const { recentWorks: fetchedRecentWorks, isLoading: worksLoading } = useRecentWorks();

    // Default values while loading or if data is not available
    const userStats = dashboardStats || {
        name: "Loading...",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=placeholder",
        title: "...",
        createdAt: new Date().toISOString(),
        level: "Creator",
        followers: 0,
        following: 0,
        totalViews: 0,
        totalLikes: 0,
        totalComments: 0,
        publishedWorks: 0,
        weeklyGoal: 3,
        weeklyProgress: 0
    };

    // Format user stats from the API response
    const formattedUserStats = {
        name: userStats.name || "Anonymous Creator",
        avatar: userStats.image || "https://api.dicebear.com/7.x/avataaars/svg?seed=anonymous",
        title: userStats.title || "Content Creator",
        joinDate: userStats.createdAt ? format(new Date(userStats.createdAt), 'MMMM yyyy') : "Unknown",
        level: userStats.premium ? "Pro Creator" : "Creator",
        followers: userStats.followers || 0,
        following: userStats.following || 0,
        totalViews: userStats.totalViews || 0,
        totalLikes: userStats.totalLikes || 0,
        totalComments: userStats.totalComments || 0,
        publishedWorks: userStats.publishedWorks || 0,
        weeklyGoal: 3, // This could be from user preferences in the future
        weeklyProgress: userStats.weeklyProgress || 0
    };

    // Format recent works from the API response
    const recentWorks = fetchedRecentWorks ? fetchedRecentWorks.map(work => ({
        id: work.id,
        title: work.title,
        type: work.type,
        status: work.status,
        publishDate: work.publishedAt ? format(new Date(work.publishedAt), 'MMM d, yyyy') : 'Not published',
        views: work.views || 0,
        likes: work.likes || 0,
        comments: work.comments || 0,
        trending: work.isTrending || false
    })) : [
        // Fallback data while loading
        {
            id: 1,
            title: "Loading...",
            type: "Loading",
            status: "Loading",
            publishDate: "Loading",
            views: 0,
            likes: 0,
            comments: 0,
            trending: false
        }
    ];

    const getStatusTag = (status) => {
        switch (status) {
            case 'Published':
                return <Tag color="success">Published</Tag>;
            case 'Draft':
                return <Tag color="default">Draft</Tag>;
            case 'Scheduled':
                return <Tag color="processing">Scheduled</Tag>;
            case 'Under Review':
                return <Tag color="warning">Under Review</Tag>;
            default:
                return <Tag>{status}</Tag>;
        }
    };

    const getDateCellData = (date) => {
        const day = date.date();
        const month = date.month();
        const year = date.year();

        // Mock data - in real app would come from database
        const events = [
            { date: new Date(year, month, 10), type: 'success', content: 'Publish Essay' },
            { date: new Date(year, month, 15), type: 'warning', content: 'Submit Draft' },
            { date: new Date(year, month, 20), type: 'error', content: 'Submission Deadline' },
            { date: new Date(year, month, 25), type: 'processing', content: 'Feedback Review' },
        ];

        const matchingEvent = events.find(event =>
            event.date.getDate() === day &&
            event.date.getMonth() === month &&
            event.date.getFullYear() === year
        );

        if (matchingEvent) {
            return <Badge status={matchingEvent.type} text={matchingEvent.content} />;
        }
        return null;
    };

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text, record) => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>{text}</span>
                    {record.trending && <Tag color="red">Trending</Tag>}
                </div>
            ),
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            render: text => <Tag>{text}</Tag>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: status => getStatusTag(status),
        },
        {
            title: 'Published',
            dataIndex: 'publishDate',
            key: 'publishDate',
        },
        {
            title: 'Views',
            dataIndex: 'views',
            key: 'views',
            render: views => <div><Eye size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} />{views}</div>,
        },
        {
            title: 'Likes',
            dataIndex: 'likes',
            key: 'likes',
            render: likes => <div><Heart size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} />{likes}</div>,
        },
        {
            title: 'Comments',
            dataIndex: 'comments',
            key: 'comments',
            render: comments => <div><MessageCircle size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} />{comments}</div>,
        },
        {
            title: 'Actions',
            key: 'actions',
            render: () => (
                <Space size="small">
                    <Button type="text" icon={<Edit3 size={16} />} />
                    <Button type="text" icon={<Eye size={16} />} />
                    <Button type="text" icon={<Share2 size={16} />} />
                </Space>
            ),
        },
    ];

    return (
        <Layout className="min-h-screen">
            <NavigationHeader />
            <Content className="p-6">
                <Row gutter={[24, 24]}>
                    {/* Profile Card */}
                    <Col xs={24} lg={8}>
                        <Card bordered={false} className="shadow-sm" loading={statsLoading}>
                            <div className="flex flex-col items-center text-center">
                                <Avatar
                                    src={formattedUserStats.avatar}
                                    alt={formattedUserStats.name}
                                    size={96}
                                    className="mb-4"
                                />
                                <Title level={3} className="mb-1">{formattedUserStats.name}</Title>
                                <Text type="secondary" className="mb-3">{formattedUserStats.title}</Text>
                                <Space className="mb-4">
                                    <Tag color="blue">{formattedUserStats.level}</Tag>
                                    <Tag>Joined {formattedUserStats.joinDate}</Tag>
                                </Space>
                                <div className="flex gap-6 mb-4">
                                    <div className="text-center">
                                        <div className="text-lg font-semibold">{formattedUserStats.followers}</div>
                                        <div className="text-gray-500 text-sm">Followers</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-semibold">{formattedUserStats.following}</div>
                                        <div className="text-gray-500 text-sm">Following</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-semibold">{formattedUserStats.publishedWorks}</div>
                                        <div className="text-gray-500 text-sm">Works</div>
                                    </div>
                                </div>
                                <div className="w-full mb-4">
                                    <div className="flex justify-between mb-2">
                                        <Text>Weekly Publishing Goal</Text>
                                        <Text>{formattedUserStats.weeklyProgress}/{formattedUserStats.weeklyGoal}</Text>
                                    </div>
                                    <Progress
                                        percent={(userStats.weeklyProgress / userStats.weeklyGoal) * 100}
                                        showInfo={false}
                                        strokeColor={{
                                            '0%': '#108ee9',
                                            '100%': '#87d068',
                                        }}
                                    />
                                </div>
                                <Space>
                                    <Button type="primary" icon={<Plus size={16} />}>
                                        New Content
                                    </Button>
                                    <Button icon={<Settings size={16} />}>
                                        Settings
                                    </Button>
                                </Space>
                            </div>
                        </Card>
                    </Col>

                    {/* Stats and Quick Actions */}
                    <Col xs={24} lg={16}>
                        <Row gutter={[16, 16]}>
                            <Col xs={12} sm={8} md={6}>
                                <Card bordered={false} className="shadow-sm text-center">
                                    <Statistic
                                        title="Views"
                                        value={formattedUserStats.totalViews}
                                        prefix={<Eye size={16} />}
                                    />
                                </Card>
                            </Col>
                            <Col xs={12} sm={8} md={6}>
                                <Card bordered={false} className="shadow-sm text-center">
                                    <Statistic
                                        title="Likes"
                                        value={formattedUserStats.totalLikes}
                                        prefix={<Heart size={16} />}
                                    />
                                </Card>
                            </Col>
                            <Col xs={12} sm={8} md={6}>
                                <Card bordered={false} className="shadow-sm text-center">
                                    <Statistic
                                        title="Comments"
                                        value={formattedUserStats.totalComments}
                                        prefix={<MessageCircle size={16} />}
                                    />
                                </Card>
                            </Col>
                            <Col xs={12} sm={8} md={6}>
                                <Card bordered={false} className="shadow-sm text-center">
                                    <Statistic
                                        title="Works"
                                        value={formattedUserStats.publishedWorks}
                                        prefix={<BookOpen size={16} />}
                                    />
                                </Card>
                            </Col>
                        </Row>

                        <Card bordered={false} className="shadow-sm mt-6">
                            <Tabs defaultActiveKey="overview" onChange={setActiveTab}>
                                <TabPane tab="Overview" key="overview">
                                    <div className="mb-6">
                                        <Button type="primary" className="mb-4" icon={<Plus size={16} />}>
                                            Create New Work
                                        </Button>
                                        <div className="flex items-center justify-between">
                                            <Title level={4}>Recent Works</Title>
                                            {worksLoading && <Spin size="small" />}
                                        </div>
                                        <Table
                                            dataSource={recentWorks}
                                            columns={columns}
                                            rowKey="id"
                                            pagination={false}
                                            className="mt-4"
                                            loading={worksLoading}
                                        />
                                    </div>
                                </TabPane>
                                <TabPane tab="Calendar" key="calendar">
                                    <Title level={4}>Content Calendar</Title>
                                    <div className="mt-4">
                                        <Calendar
                                            fullscreen={false}
                                            onSelect={setSelectedDate}
                                            dateCellRender={getDateCellData}
                                        />
                                    </div>
                                </TabPane>
                                <TabPane tab="Analytics" key="analytics">
                                    <Title level={4}>Performance Analytics</Title>
                                    <div className="bg-gray-100 h-80 flex items-center justify-center">
                                        <BarChart size={48} className="text-gray-400" />
                                        <div className="ml-4">
                                            <div className="text-lg font-semibold">Analytics Chart Here</div>
                                            <div className="text-gray-500">Views, Likes and Comments trends</div>
                                        </div>
                                    </div>
                                </TabPane>
                            </Tabs>
                        </Card>
                    </Col>

                    {/* Recent Activity */}
                    <Col xs={24}>
                        <Card bordered={false} className="shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <Title level={4}>Recent Activity</Title>
                                <Button icon={<Bell size={16} />}>
                                    Notifications
                                </Button>
                            </div>

                            <div className="bg-gray-100 h-64 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-lg font-semibold">Activity timeline will appear here</div>
                                    <div className="text-gray-500">Track comments, likes and new followers</div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}