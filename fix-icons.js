#!/usr/bin/env node

// Script to help replace Ant Design icons with Lucide React icons
const fs = require('fs');
const path = require('path');

const iconMappings = {
  // Common mappings from Ant Design to Lucide React
  'SearchOutlined': 'Search',
  'EditOutlined': 'Edit3', 
  'HeartOutlined': 'Heart',
  'CommentOutlined': 'MessageCircle',
  'ShareAltOutlined': 'Share2',
  'UserOutlined': 'User',
  'SettingOutlined': 'Settings',
  'BookOutlined': 'BookOpen',
  'SafetyOutlined': 'Shield',
  'TeamOutlined': 'Users',
  'TrophyOutlined': 'Trophy',
  'RocketOutlined': 'Rocket',
  'FireOutlined': 'Flame',
  'StarOutlined': 'Star',
  'EyeOutlined': 'Eye',
  'LikeOutlined': 'ThumbsUp',
  'DislikeOutlined': 'ThumbsDown',
  'MailOutlined': 'Mail',
  'PhoneOutlined': 'Phone',
  'EnvironmentOutlined': 'MapPin',
  'TwitterOutlined': 'Twitter',
  'LinkedinOutlined': 'Linkedin',
  'InstagramOutlined': 'Instagram',
  'FacebookOutlined': 'Facebook',
  'YoutubeOutlined': 'Youtube',
  'SendOutlined': 'Send',
  'ClockCircleOutlined': 'Clock',
  'CalendarOutlined': 'Calendar',
  'LocationOutlined': 'MapPin',
  'LinkOutlined': 'Link',
  'BulbOutlined': 'Lightbulb',
  'QuestionCircleOutlined': 'HelpCircle',
  'VideoCameraOutlined': 'Video',
  'FileTextOutlined': 'FileText',
  'DollarOutlined': 'DollarSign',
  'PlayCircleOutlined': 'PlayCircle',
  'MessageOutlined': 'MessageCircle',
  'BellOutlined': 'Bell',
  'AnalyticsOutlined': 'BarChart',
  'PlusOutlined': 'Plus',
  'GlobalOutlined': 'Globe',
  'BookmarkOutlined': 'Bookmark',
  'HeartFilled': 'Heart'
};

const filesToFix = [
  'src/app/about/page.js',
  'src/app/community/page.js', 
  'src/app/dashboard/page.js',
  'src/app/privacy/page.js',
  'src/app/terms/page.js',
  'src/app/profile/[id]/page.js',
  'src/app/help/page.js',
  'src/app/contact/page.js',
  'src/components/CreatorDashboard.js'
];

function fixIconsInFile(filePath) {
  console.log(`\nFixing icons in: ${filePath}`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;
  
  // First, replace the import statement
  const antdIconsImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]@ant-design\/icons['"];?/s;
  const importMatch = content.match(antdIconsImportRegex);
  
  if (importMatch) {
    const importedIcons = importMatch[1]
      .split(',')
      .map(icon => icon.trim())
      .filter(icon => icon && iconMappings[icon]);
    
    const lucideIcons = importedIcons.map(icon => iconMappings[icon]);
    
    if (lucideIcons.length > 0) {
      const newImport = `import { ${lucideIcons.join(', ')} } from 'lucide-react';`;
      content = content.replace(antdIconsImportRegex, newImport);
      hasChanges = true;
      console.log(`  Replaced import with: ${newImport}`);
      
      // Replace icon usages in the content
      importedIcons.forEach((antdIcon, index) => {
        const lucideIcon = lucideIcons[index];
        
        // Replace basic usage: <IconName />
        const basicUsageRegex = new RegExp(`<${antdIcon}\\s*/>`, 'g');
        content = content.replace(basicUsageRegex, `<${lucideIcon} className="w-4 h-4" />`);
        
        // Replace usage with style: <IconName style={{...}} />
        const styleUsageRegex = new RegExp(`<${antdIcon}\\s+style=\\{[^}]+\\}\\s*/>`, 'g');
        content = content.replace(styleUsageRegex, `<${lucideIcon} className="w-4 h-4" />`);
        
        console.log(`  Replaced ${antdIcon} with ${lucideIcon}`);
      });
    }
  }
  
  if (hasChanges) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✅ File updated successfully`);
  } else {
    console.log(`  ⚠️  No Ant Design icons found or already converted`);
  }
}

// Fix all files
console.log('🔧 Starting Ant Design to Lucide React icon conversion...\n');

filesToFix.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  fixIconsInFile(fullPath);
});

console.log('\n✨ Icon conversion completed!');
console.log('🚀 Run "npm run build" to check for any remaining issues.');
