import { db } from '../src/lib/db/index.js';
import { users, works, comments, likes, follows } from '../src/lib/db/schema.js';

// Sample user data with creative personas
const sampleUsers = [
  {
    id: 'user_maya_poet',
    name: 'Maya Angelou Chen',
    email: 'maya@multiversal.blog',
    username: 'maya_poet',
    bio: 'Words are my paintbrush, emotions my canvas. Crafting verses that touch the soul.',
    title: 'Award-winning Poet & Storyteller',
    location: 'San Francisco, CA',
    website: 'https://mayapoetry.com',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    verified: true,
    totalWorks: 12,
    totalViews: 2847,
    totalLikes: 389,
    avgRating: 4.7,
    twitterHandle: '@maya_verses',
    allowComments: true,
    isPublic: true
  },
  {
    id: 'user_alex_storyteller',
    name: 'Alex Rivera',
    email: 'alex@multiversal.blog',
    username: 'alex_stories',
    bio: 'Weaving tales from the threads of imagination. Every story is a doorway to another world.',
    title: 'Fantasy & Sci-Fi Writer',
    location: 'Portland, OR',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    verified: false,
    totalWorks: 8,
    totalViews: 1923,
    totalLikes: 267,
    avgRating: 4.5,
    instagramHandle: '@alex_tales',
    allowComments: true,
    isPublic: true
  },
  {
    id: 'user_zara_musician',
    name: 'Zara Moon',
    email: 'zara@multiversal.blog',
    username: 'zara_melodies',
    bio: '🎵 Composing life one note at a time. Music is the universal language of the heart.',
    title: 'Indie Musician & Songwriter',
    location: 'Nashville, TN',
    website: 'https://zaramoon.music',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    verified: true,
    totalWorks: 15,
    totalViews: 3451,
    totalLikes: 542,
    avgRating: 4.8,
    twitterHandle: '@zara_melodies',
    instagramHandle: '@zaramoonmusic',
    allowComments: true,
    isPublic: true
  }
];

// Generate additional users
const generateRandomUsers = () => {
  const firstNames = ['Sage', 'River', 'Phoenix', 'Dakota', 'Rowan', 'Indigo', 'Willow', 'Cedar', 'Ocean', 'Sky'];
  const lastNames = ['Williams', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White'];
  const titles = ['Emerging Poet', 'Creative Writer', 'Indie Author', 'Literary Enthusiast', 'Aspiring Novelist'];
  const locations = ['Austin, TX', 'Seattle, WA', 'Denver, CO', 'Miami, FL', 'Chicago, IL'];

  const additionalUsers = [];
  for (let i = 0; i < 17; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const username = `${firstName.toLowerCase()}_${lastName.toLowerCase()}${i}`;
    
    additionalUsers.push({
      id: `user_${username}`,
      name: `${firstName} ${lastName}`,
      email: `${username}@multiversal.blog`,
      username: username,
      bio: `Creative writer passionate about storytelling and connecting with fellow artists.`,
      title: titles[Math.floor(Math.random() * titles.length)],
      location: locations[Math.floor(Math.random() * locations.length)],
      image: `https://images.unsplash.com/photo-${1400000000000 + Math.floor(Math.random() * 100000000)}?w=150&h=150&fit=crop&crop=face`,
      verified: Math.random() > 0.8,
      totalWorks: Math.floor(Math.random() * 10) + 1,
      totalViews: Math.floor(Math.random() * 2000) + 100,
      totalLikes: Math.floor(Math.random() * 300) + 20,
      avgRating: Math.round((Math.random() * 2 + 3) * 10) / 10,
      allowComments: true,
      isPublic: true
    });
  }
  return additionalUsers;
};

// Sample works with proper Date objects
const sampleWorks = [
  {
    id: 'work_whispers_wind',
    title: 'Whispers in the Wind',
    content: `The autumn leaves dance in golden spirals,
Each one a secret the earth has shared,
With the wind that carries stories untold,
Of summers past and winters prepared.

I close my eyes and feel the whisper,
A gentle touch upon my face,
The wind speaks in a language older
Than words, than time, than human grace.`,
    excerpt: 'A gentle meditation on connection and belonging through the metaphor of autumn winds.',
    type: 'poetry',
    category: 'nature',
    tags: JSON.stringify(['nature', 'meditation', 'connection', 'autumn']),
    authorId: 'user_maya_poet',
    status: 'published',
    publishedAt: new Date(Date.now() - 86400000 * 5),
    views: 347,
    likes: 42,
    comments: 8,
    rating: 4.7,
    ratingCount: 15,
    readTime: 2,
    isTrending: true,
    allowComments: true,
    isPublic: true
  },
  {
    id: 'work_neon_dreams',
    title: 'Neon Dreams',
    content: `The city never sleeps, they say, but I wonder if it dreams. In the depths of midnight, when the neon signs flicker like dying stars and the streets empty of all but the most determined night wanderers, I imagine the city's consciousness stirring.`,
    excerpt: 'A contemplative piece exploring the hidden soul of urban landscapes through late-night wanderings.',
    type: 'story',
    category: 'urban',
    tags: JSON.stringify(['urban', 'midnight', 'introspection', 'city-life']),
    authorId: 'user_alex_storyteller',
    status: 'published',
    publishedAt: new Date(Date.now() - 86400000 * 3),
    views: 289,
    likes: 38,
    comments: 12,
    rating: 4.5,
    ratingCount: 11,
    readTime: 4,
    isTrending: false,
    allowComments: true,
    isPublic: true
  }
];

// Generate additional works
const generateRandomWorks = (userIds) => {
  const titles = ['Midnight Reflections', 'Garden of Dreams', 'City Lights', 'Ocean Whispers', 'Mountain Echoes'];
  const types = ['poetry', 'story', 'essay', 'music', 'art'];
  const categories = ['nature', 'urban', 'love', 'adventure', 'mystery'];
  
  const additionalWorks = [];
  for (let i = 0; i < 38; i++) {
    const type = types[Math.floor(Math.random() * types.length)];
    const title = titles[Math.floor(Math.random() * titles.length)];
    const authorId = userIds[Math.floor(Math.random() * userIds.length)];
    
    additionalWorks.push({
      id: `work_${i}_${Math.random().toString(36).substring(2, 8)}`,
      title: `${title} ${i}`,
      content: `A beautiful ${type} about life, love, and the human experience. This piece explores themes through creative expression.`,
      excerpt: `A thoughtful ${type} exploring themes of humanity and connection.`,
      type: type,
      category: categories[Math.floor(Math.random() * categories.length)],
      tags: JSON.stringify(['creative', 'thoughtful']),
      authorId: authorId,
      status: 'published',
      publishedAt: new Date(Date.now() - Math.floor(Math.random() * 86400000 * 30)),
      views: Math.floor(Math.random() * 500) + 50,
      likes: Math.floor(Math.random() * 50) + 5,
      comments: Math.floor(Math.random() * 15) + 1,
      rating: Math.round((Math.random() * 2 + 3) * 10) / 10,
      ratingCount: Math.floor(Math.random() * 20) + 3,
      readTime: Math.floor(Math.random() * 8) + 1,
      isTrending: Math.random() > 0.8,
      allowComments: true,
      isPublic: true
    });
  }
  return additionalWorks;
};

// Sample comments with proper Date objects
const sampleComments = [
  {
    id: 'comment_1',
    content: 'This really spoke to my heart. Beautiful and profound.',
    workId: 'work_whispers_wind',
    authorId: 'user_alex_storyteller',
    likes: 5,
    createdAt: new Date(Date.now() - 86400000 * 2)
  },
  {
    id: 'comment_2',
    content: 'Love how you captured the soul of the city.',
    workId: 'work_neon_dreams',
    authorId: 'user_maya_poet',
    likes: 3,
    createdAt: new Date(Date.now() - 86400000 * 1)
  }
];

// Seeding function
async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...');
    
    const allUsers = [...sampleUsers, ...generateRandomUsers()];
    const allUserIds = allUsers.map(u => u.id);
    
    console.log('👥 Inserting users...');
    for (const user of allUsers) {
      await db.insert(users).values(user);
    }
    console.log(`✅ Inserted ${allUsers.length} users`);
    
    const allWorks = [...sampleWorks, ...generateRandomWorks(allUserIds)];
    
    console.log('📝 Inserting works...');
    for (const work of allWorks) {
      await db.insert(works).values(work);
    }
    console.log(`✅ Inserted ${allWorks.length} works`);
    
    console.log('💬 Inserting comments...');
    for (const comment of sampleComments) {
      await db.insert(comments).values(comment);
    }
    console.log(`✅ Inserted ${sampleComments.length} comments`);
    
    console.log('👥 Creating follow relationships...');
    const followRelationships = [
      { id: 'follow_1', followerId: 'user_maya_poet', followingId: 'user_alex_storyteller', createdAt: new Date() },
      { id: 'follow_2', followerId: 'user_alex_storyteller', followingId: 'user_zara_musician', createdAt: new Date() }
    ];
    
    for (const follow of followRelationships) {
      await db.insert(follows).values(follow);
    }
    console.log(`✅ Created ${followRelationships.length} follow relationships`);
    
    console.log('❤️ Creating likes...');
    const likeRelationships = [
      { id: 'like_1', userId: 'user_alex_storyteller', targetId: 'work_whispers_wind', targetType: 'work', createdAt: new Date() },
      { id: 'like_2', userId: 'user_maya_poet', targetId: 'work_neon_dreams', targetType: 'work', createdAt: new Date() }
    ];
    
    for (const like of likeRelationships) {
      await db.insert(likes).values(like);
    }
    console.log(`✅ Created ${likeRelationships.length} likes`);
    
    console.log('🎉 Database seeding completed successfully!');
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
}

seedDatabase()
  .then(() => {
    console.log('✨ Seeding complete!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Seeding failed:', error);
    process.exit(1);
  });
