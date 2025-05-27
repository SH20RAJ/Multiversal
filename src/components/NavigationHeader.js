'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Layout, 
  Typography, 
  Button, 
  Space, 
  Dropdown, 
  Avatar,
  Badge,
  Drawer,
  Menu,
  Input
} from 'antd';
import { useAuth, signOutUser } from '../lib/auth-client';
import { 
  Plus,
  Search as SearchIcon,
  Bell,
  User,
  Menu as MenuIcon,
  Home,
  Compass,
  Users,
  Info,
  Settings,
  LogOut,
  Infinity,
  Palette,
  Settings2,
  User2,
  BookAIcon,
  BellDot
} from 'lucide-react';

const { Header } = Layout;
const { Title } = Typography;
const { Search } = Input;

export default function NavigationHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const { user, isLoading, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      key: 'home',
      label: 'Home',
      href: '/'
    },
    {
      key: 'explore',
      label: 'Explore',
      href: '/explore'
    },
    {
      key: 'community',
      label: 'Community',
      href: '/community'
    },
    {
      key: 'about',
      label: 'About',
      href: '/about'
    }
  ];

  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      // Error signing out
    }
  };

  const userMenuItems = [
    {
      key: 'dashboard',
      icon: <BookAIcon />,
      label: 'Dashboard',
    },
    {
      key: 'profile',
      icon: <User2 />,
      label: 'My Profile',
    },
    {
      key: 'settings',
      icon: <Settings2 />,
      label: 'Settings',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogOut />,
      label: 'Sign Out',
      danger: true,
    },
  ];

  const mobileMenuItems = [
    {
      key: 'home',
      icon: <Home />,
      label: 'Home',
    },
    {
      key: 'explore',
      icon: <Compass />,
      label: 'Explore',
    },
    {
      key: 'community',
      icon: <Users />,
      label: 'Community',
    },
    {
      key: 'dashboard',
      icon: <Settings />,
      label: 'Dashboard',
    },
    {
      key: 'about',
      icon: <Info />,
      label: 'About',
    },
  ];

  return (
    <>
      <Header 
        style={{ 
          position: 'fixed', 
          zIndex: 1000, 
          width: '100%',
          background: scrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(15px)',
          borderBottom: scrolled 
            ? '1px solid #e8e8e8' 
            : '1px solid rgba(232, 232, 232, 0.3)',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: scrolled 
            ? '0 2px 8px rgba(0, 0, 0, 0.06)' 
            : 'none'
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/">
            
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
            ✨ Multiversal
          </Title>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <Search
            placeholder="Search stories, poems, music..."
            allowClear
            style={{ width: 300 }}
            size="large"
          />
          
          <Space size="large">
            {navigationItems.map(item => (
              <Link key={item.key} href={item.href}>
                <Button type="text" size="large">{item.label}</Button>
              </Link>
            ))}
            
            {user ? (
              <>
                <Badge count={3} size="small">
                  <Button 
                    type="text" 
                    icon={<BellDot />} 
                    size="large"
                  />
                </Badge>
                
                <Dropdown 
                  menu={{ 
                    items: userMenuItems,
                    onClick: ({ key }) => {
                      if (key === 'dashboard') {
                        window.location.href = '/dashboard';
                      } else if (key === 'profile') {
                        window.location.href = `/profile/${user.id}`;
                      } else if (key === 'logout') {
                        handleSignOut();
                      }
                    }
                  }} 
                  placement="bottomRight"
                  trigger={['click']}
                >
                  <Avatar 
                    src={user.image}
                    style={{ 
                      backgroundColor: user.image ? 'transparent' : '#1890ff',
                      cursor: 'pointer'
                    }} 
                    icon={!user.image && <User />} 
                  />
                </Dropdown>
                
                <Button 
                  type="primary" 
                  icon={<Plus />}
                  size="large"
                  onClick={() => window.location.href = '/create'}
                  style={{
                    background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
                    border: 'none',
                    borderRadius: 8,
                    fontWeight: 600,
                    boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)'
                  }}
                >
                  Create
                </Button>
              </>
            ) : (
              <>
                <Link href="/auth/signin">
                  <Button size="large" style={{ borderRadius: 8 }}>Sign In</Button>
                </Link>
                <Link href="/auth/signin">
                  <Button 
                    type="primary" 
                    size="large"
                    style={{
                      background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
                      border: 'none',
                      borderRadius: 8,
                      fontWeight: 600,
                      boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)'
                    }}
                  >
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </Space>
        </div>

        {/* Mobile Menu Button */}
        <Button
          className="mobile-menu-btn"
          type="text"
          icon={<MenuIcon />}
          size="large"
          onClick={() => setMobileMenuVisible(true)}
          style={{ display: 'none' }}
        />
      </Header>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        width={280}
      >
        <div style={{ marginBottom: 24 }}>
          <Search
            placeholder="Search..."
            allowClear
            style={{ marginBottom: 16 }}
          />
        </div>
        
        <Menu
          mode="inline"
          items={mobileMenuItems}
          style={{ border: 'none' }}
        />
        
        <div style={{ 
          position: 'absolute', 
          bottom: 24, 
          left: 24, 
          right: 24 
        }}>
          <Button 
            type="primary" 
            block 
            size="large"
            icon={<Plus />}
            style={{
              background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
              border: 'none',
              borderRadius: 8,
              fontWeight: 600,
              marginBottom: 16
            }}
          >
            Create Content
          </Button>
          
          <div style={{ textAlign: 'center' }}>
            <Avatar 
              style={{ backgroundColor: '#1890ff', marginBottom: 8 }} 
              icon={<User />} 
            />
            <div style={{ fontSize: 14, color: '#666' }}>
              Welcome back, User!
            </div>
          </div>
        </div>
      </Drawer>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
