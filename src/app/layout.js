import { Geist, Geist_Mono } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import customTheme from '../theme/config';
import { AuthProvider } from "../components/AuthProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Multiversal.blog - Where Creativity Meets the Infinite",
  description: "An open-source platform for poets, writers, musicians, and storytellers to share their unique creations with a global audience. Join 12,500+ creators sharing their voices worldwide.",
  keywords: "poetry, writing, music, storytelling, creative platform, writers community, poets, musicians, stories, shayari",
  authors: [{ name: "Multiversal.blog Team" }],
  creator: "SH20RAJ",
  publisher: "Multiversal.blog",
  openGraph: {
    title: "Multiversal.blog - Where Creativity Meets the Infinite",
    description: "Join a global community of creators sharing poetry, stories, music, and more. Express yourself and discover extraordinary creativity.",
    url: "https://multiversal.pages.dev",
    siteName: "Multiversal.blog",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Multiversal.blog - Creative Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multiversal.blog - Where Creativity Meets the Infinite",
    description: "Join a global community of creators sharing poetry, stories, music, and more.",
    images: ["/og-image.jpg"],
    creator: "@multiversal_blog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#667eea" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <ConfigProvider theme={customTheme}>
            <AuthProvider>
              {children}
            </AuthProvider>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
