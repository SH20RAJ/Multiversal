'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, Typography, Button, Space } from 'antd'
import { LogOut, X } from 'lucide-react'
import { signOutUser } from '../../../lib/auth-client'

const { Title, Paragraph } = Typography

export default function SignOut() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSignOut = async () => {
    setIsLoading(true)
    try {
      const { error } = await signOutUser({ callbackUrl: '/' })
      if (error) {
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    router.back() // Go back to the previous page
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
          <div className="text-center">
            <Title level={2} className="mb-2">
              Sign Out
            </Title>
            <Paragraph className="text-gray-600">
              Are you sure you want to sign out?
            </Paragraph>
          </div>

          <Space>
            <Button 
              icon={<X size={16} />}
              onClick={handleCancel}
              size="large"
            >
              Cancel
            </Button>
            <Button 
              icon={<LogOut size={16} />}
              onClick={handleSignOut}
              loading={isLoading}
              type="primary" 
              size="large"
              danger
            >
              Sign Out
            </Button>
          </Space>
        </div>
      </Card>
    </div>
  )
}
