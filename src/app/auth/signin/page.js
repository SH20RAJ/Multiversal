'use client'

import { useState, Suspense } from 'react'
import { Card, Button, Divider, Space, Typography, Spin } from 'antd'
import { signInWithProvider, useAuth } from '../../../lib/auth-client'
import { useRouter, useSearchParams } from 'next/navigation'
import { Github, Mail, LogIn } from 'lucide-react'

const { Title, Text, Paragraph } = Typography

function SignInContent() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const { isAuthenticated } = useAuth()
  const callbackUrl = searchParams.get('callbackUrl') || '/'
  
  // If already authenticated, redirect to callback URL
  if (isAuthenticated) {
    router.push(callbackUrl)
    return null
  }

  const handleOAuthSignIn = async (provider) => {
    setIsLoading(true)
    try {
      await signInWithProvider(provider, { callbackUrl })
    } catch (error) {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center p-4">
      <Card 
        className="w-full max-w-md overflow-hidden rounded-xl shadow-lg" 
        bordered={false}
        style={{ 
          borderRadius: 'var(--border-radius-cute)', 
          boxShadow: 'var(--shadow-cute)' 
        }}
      >
        <div className="flex flex-col items-center justify-center space-y-6 px-2 py-4">
          <div className="text-center">
            <Title level={2}>Welcome Back!</Title>
            <Paragraph className="text-gray-600">
              Sign in to your Multiversal account
            </Paragraph>
          </div>

          <Space direction="vertical" className="w-full">
            <Button 
              icon={<LogIn size={18} />}
              block
              size="large"
              onClick={() => handleOAuthSignIn('google')}
              loading={isLoading}
              className="flex items-center justify-center gap-2"
              style={{
                background: 'var(--accent-gradient)',
                border: 'none',
                color: 'white',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
              }}
            >
              Continue with Google
            </Button>

            <Button 
              icon={<Github size={18} />}
              block
              size="large"
              onClick={() => handleOAuthSignIn('github')}
              loading={isLoading}
              className="flex items-center justify-center gap-2"
              style={{ borderRadius: '12px' }}
            >
              Continue with GitHub
            </Button>
            
            <Button 
              icon={<Mail size={18} />}
              block
              size="large"
              onClick={() => handleOAuthSignIn('discord')}
              loading={isLoading}
              className="flex items-center justify-center gap-2"
              style={{ borderRadius: '12px' }}
            >
              Continue with Discord
            </Button>

            <Divider plain>Or</Divider>
            
            <div className="text-center">
              <Text>
                Don't have an account?{' '}
                <a href="#" className="text-blue-500 hover:underline">
                  Sign up
                </a>
              </Text>
            </div>
          </Space>
        </div>
      </Card>
    </div>
  )
}

// Wrap the SignInContent component with Suspense
export default function SignIn() {
  return (
    <Suspense fallback={
      <div className="flex min-h-[80vh] items-center justify-center p-4">
        <Card 
          className="w-full max-w-md overflow-hidden rounded-xl shadow-lg" 
          bordered={false}
          style={{ 
            borderRadius: 'var(--border-radius-cute)', 
            boxShadow: 'var(--shadow-cute)' 
          }}
        >
          <div className="flex items-center justify-center py-12">
            <Spin size="large" />
            <Typography.Title level={4} className="ml-3">Loading...</Typography.Title>
          </div>
        </Card>
      </div>
    }>
      <SignInContent />
    </Suspense>
  )
}
