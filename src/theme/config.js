import { theme } from 'antd';

// Multiversal.blog - Minimalistic Multiverse Theme
const customTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    // Multiverse Color Palette - Minimalistic and Clean
    colorPrimary: '#6366f1', // Cosmic purple - creativity and imagination
    colorSuccess: '#10b981', // Nebula green - growth and harmony
    colorWarning: '#f59e0b', // Star gold - energy and attention
    colorError: '#ef4444',   // Solar red - urgency and importance
    colorInfo: '#3b82f6',    // Galaxy blue - trust and communication
    
    // Neutral Palette - Clean and Spacious
    colorBgBase: '#ffffff',
    colorBgContainer: '#ffffff',
    colorBgLayout: '#fafafa',
    colorBgSpotlight: '#f8fafc',
    colorBgMask: 'rgba(0, 0, 0, 0.45)',
    
    // Text Colors - High Contrast for Readability
    colorText: '#111827',
    colorTextSecondary: '#6b7280',
    colorTextTertiary: '#9ca3af',
    colorTextQuaternary: '#d1d5db',
    
    // Border Colors - Subtle Separation
    colorBorder: '#e5e7eb',
    colorBorderSecondary: '#f3f4f6',
    
    // Typography - Modern and Clean
    fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif`,
    fontSize: 14,
    fontSizeHeading1: 32,
    fontSizeHeading2: 24,
    fontSizeHeading3: 20,
    fontSizeHeading4: 18,
    fontSizeHeading5: 16,
    fontWeightStrong: 600,
    lineHeight: 1.6,
    
    // Spacing - Generous Whitespace
    sizeStep: 4,
    sizeUnit: 4,
    margin: 16,
    marginLG: 24,
    marginXL: 32,
    marginXXL: 48,
    
    // Border Radius - Soft and Modern
    borderRadius: 12,
    borderRadiusLG: 16,
    borderRadiusSM: 8,
    borderRadiusXS: 6,
    
    // Shadows - Subtle Depth
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    boxShadowSecondary: '0 4px 6px rgba(0, 0, 0, 0.05)',
    boxShadowTertiary: '0 10px 15px rgba(0, 0, 0, 0.08)',
    
    // Motion - Smooth Transitions
    motionDurationFast: '0.15s',
    motionDurationMid: '0.25s',
    motionDurationSlow: '0.4s',
    motionEaseInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    
    // Control Heights - Comfortable Touch Targets
    controlHeight: 44,
    controlHeightSM: 36,
    controlHeightLG: 52,
    
    // Wireframe - Clean Design
    wireframe: false,
  },
  
  components: {
    // Button - Clean and Modern CTAs
    Button: {
      borderRadius: 12,
      controlHeight: 44,
      controlHeightLG: 52,
      controlHeightSM: 36,
      fontWeight: 500,
      paddingInline: 24,
      paddingInlineLG: 32,
      primaryShadow: '0 4px 12px rgba(99, 102, 241, 0.15)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    },
    
    // Card - Minimalistic Containers
    Card: {
      borderRadius: 16,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
      headerBg: 'transparent',
      paddingLG: 32,
      paddingMD: 24,
      padding: 20,
      borderColor: '#f3f4f6',
    },
    
    // Input - Clean Form Elements
    Input: {
      borderRadius: 12,
      controlHeight: 44,
      controlHeightLG: 52,
      paddingInline: 16,
      activeShadow: '0 0 0 3px rgba(99, 102, 241, 0.1)',
      hoverBorderColor: '#d1d5db',
      activeBorderColor: '#6366f1',
    },
    
    // Typography - Readable Text
    Typography: {
      titleMarginTop: 0,
      titleMarginBottom: 16,
      fontFamilyCode: `'JetBrains Mono', 'Fira Code', monospace`,
    },
    
    // Tag - Soft Labels
    Tag: {
      borderRadius: 20,
      fontWeight: 500,
      paddingInline: 12,
    },
    
    // Select - Dropdown Components
    Select: {
      borderRadius: 12,
      controlHeight: 44,
      controlHeightLG: 52,
    },
    
    // Modal - Clean Dialogs
    Modal: {
      borderRadius: 20,
      paddingLG: 32,
    },
    
    // FloatButton - Floating Actions
    FloatButton: {
      borderRadius: '50%',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    
    // Progress - Visual Feedback
    Progress: {
      borderRadius: 8,
    },
    
    // Rate - Star Ratings
    Rate: {
      starColor: '#f59e0b',
      starSize: 18,
    },
    
    // Avatar - Profile Images
    Avatar: {
      borderRadius: '50%',
    },
    
    // Badge - Status Indicators
    Badge: {
      borderRadius: 12,
    },
    
    // Upload - File Uploaders
    Upload: {
      borderRadius: 12,
    },
    
    // Carousel - Content Sliders
    Carousel: {
      dotHeight: 8,
      dotWidth: 24,
      dotActiveWidth: 24,
    },
  },
};

export default customTheme;
