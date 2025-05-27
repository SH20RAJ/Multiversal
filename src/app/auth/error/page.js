'use client'

import { useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, Typography, Space, Button, Spin } from 'antd'
import { AlertTriangle, ArrowLeft, Home } from 'lucide-react'
import Link from 'next/link'

const { Title, Paragraph } = Typography

function ErrorPageContent() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  useEffect(() => {
    if (error) {
      console.error('Auth error:', error)
    }
  }, [error])

  // Map error codes to user-friendly messages
  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'Configuration':
        return 'There is a problem with the server configuration.'
      case 'AccessDenied':
        return 'You do not have permission to sign in.'
      case 'Verification':
        return 'The verification token has expired or has already been used.'
      case 'OAuthCallback':
        return 'There was a problem with the sign-in attempt.'
      default:
        return 'An unexpected error occurred during authentication.'
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
        <div className="flex flex-col items-center justify-center space-y-6 p-6">
          <div className="rounded-full bg-red-100 p-5">
            <AlertTriangle size={36} className="text-red-500" />
          </div>

          <div className="text-center">
            <Title level={2} className="mb-2">
              Authentication Error
            </Title>
            <Paragraph className="text-gray-600">
              {getErrorMessage(error)}
            </Paragraph>
          </div>

          <Space>
            <Link href="/auth/signin">
              <Button icon={<ArrowLeft size={16} />}>Back to Sign In</Button>
            </Link>
            <Link href="/">
              <Button icon={<Home size={16} />} type="primary">Go Home</Button>
            </Link>
          </Space>
        </div>
      </Card>
    </div>
  )
}

// Wrap with Suspense to handle useSearchParams
export default function ErrorPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <Card className="w-full max-w-md shadow-lg">
          <div className="flex items-center justify-center py-8">
            <Spin size="large" />
            <Typography.Text className="ml-3">Loading...</Typography.Text>
          </div>
        </Card>
      </div>
    }>
      <ErrorPageContent />
    </Suspense>
  )
}
