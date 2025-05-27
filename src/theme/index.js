// Theme configuration for Ant Design
export const themeConfig = {
  token: {
    // Primary colors
    colorPrimary: '#1890ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1890ff',
    
    // Typography
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: 14,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,
    
    // Spacing
    padding: 16,
    margin: 16,
    
    // Border radius
    borderRadius: 8,
    borderRadiusLG: 12,
    borderRadiusSM: 6,
    
    // Shadows
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    boxShadowSecondary: '0 4px 12px rgba(0, 0, 0, 0.15)',
    
    // Component specific tokens
    colorBgContainer: '#ffffff',
    colorBgElevated: '#ffffff',
    colorBgLayout: '#f5f5f5',
    colorTextBase: '#000000d9',
    colorTextSecondary: '#00000073',
    colorTextTertiary: '#00000040',
    colorTextQuaternary: '#00000026',
  },
  
  // Component specific overrides
  components: {
    Button: {
      borderRadius: 8,
      fontWeight: 500,
    },
    Card: {
      borderRadiusLG: 12,
      paddingLG: 24,
    },
    Typography: {
      titleMarginBottom: 0.5,
      titleMarginTop: 1.2,
    },
    Layout: {
      headerBg: '#ffffff',
      bodyBg: '#ffffff',
      footerBg: '#001529',
    },
  },
  
  // Custom algorithm for dark mode support
  algorithm: [], // Can add theme.darkAlgorithm for dark mode
};

export const gradients = {
  primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  secondary: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
  success: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  warm: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  cool: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  purple: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
};

export const animations = {
  slideUp: {
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  scaleIn: {
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
  },
};
