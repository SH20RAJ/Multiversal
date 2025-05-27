import { db } from '../src/lib/db/index.js';
import { users, works, comments, likes, follows, ratings } from '../src/lib/db/schema.js';

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
  },
  {
    id: 'user_kai_artist',
    name: 'Kai Thompson',
    email: 'kai@multiversal.blog',
    username: 'kai_visuals',
    bio: 'Digital artist exploring the intersection of technology and human emotion.',
    title: 'Digital Artist & Designer',
    location: 'Brooklyn, NY',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    verified: false,
    totalWorks: 6,
    totalViews: 1567,
    totalLikes: 234,
    avgRating: 4.3,
    linkedinHandle: 'kai-thompson-art',
    allowComments: true,
    isPublic: true
  },
  {
    id: 'user_luna_essayist',
    name: 'Luna Rodriguez',
    email: 'luna@multiversal.blog',
    username: 'luna_thoughts',
    bio: 'Exploring the human condition through thoughtful essays and personal reflections.',
    title: 'Essayist & Philosophy Student',
    location: 'Cambridge, MA',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    verified: false,
    totalWorks: 9,
    totalViews: 2134,
    totalLikes: 298,
    avgRating: 4.6,
    twitterHandle: '@luna_reflects',
    allowComments: true,
    isPublic: true
  }
];

// Generate additional users programmatically
const generateRandomUsers = () => {
  const firstNames = ['Sage', 'River', 'Phoenix', 'Dakota', 'Rowan', 'Indigo', 'Sage', 'Willow', 'Cedar', 'Ocean', 'Sky', 'Rain', 'Storm', 'Winter', 'Summer'];
  const lastNames = ['Williams', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Garcia', 'Martinez', 'Robinson'];
  const titles = [
    'Emerging Poet', 'Creative Writer', 'Indie Author', 'Freelance Journalist', 
    'Content Creator', 'Literary Enthusiast', 'Aspiring Novelist', 'Short Story Writer',
    'Blogger & Dreamer', 'Creative Soul', 'Word Artist', 'Story Weaver', 'Verse Maker'
  ];
  const locations = [
    'Austin, TX', 'Seattle, WA', 'Denver, CO', 'Miami, FL', 'Chicago, IL',
    'Los Angeles, CA', 'Boston, MA', 'Atlanta, GA', 'Phoenix, AZ', 'Minneapolis, MN'
  ];

  const additionalUsers = [];
  for (let i = 0; i < 15; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const username = `${firstName.toLowerCase()}_${lastName.toLowerCase()}${Math.floor(Math.random() * 100)}`;
    
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

// Sample creative works
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
Than words, than time, than human grace.

It tells of mountains touched by starlight,
Of oceans deep and valleys wide,
Of all the hearts that beat together
In this beautiful, connected ride.

So when you hear the wind's soft calling,
Remember you are not alone,
We're all just leaves upon the same tree,
Dancing our way back home.`,
    excerpt: 'A gentle meditation on connection and belonging through the metaphor of autumn winds.',
    type: 'poetry',
    category: 'nature',
    tags: JSON.stringify(['nature', 'meditation', 'connection', 'autumn']),
    authorId: 'user_maya_poet',
    status: 'published',      publishedAt: new Date(Date.now() - 86400000 * 5), // 5 days ago
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
    content: `The city never sleeps, they say, but I wonder if it dreams. 

In the depths of midnight, when the neon signs flicker like dying stars and the streets empty of all but the most determined night wanderers, I imagine the city's consciousness stirring. What does it dream of? Perhaps of the time before concrete and steel, when wildflowers grew where skyscrapers now pierce the sky.

Maya walked through the empty streets, her footsteps echoing off the glass facades of towering buildings. The neon light from a late-night diner cast pink and blue shadows across her face, transforming her into something ethereal, something that belonged to the night itself.

She had always been drawn to these quiet hours, when the city revealed its softer side. During the day, it was all noise and urgency, a relentless machine of human ambition. But now, in the gentle hum of streetlights and the distant whisper of traffic, she could hear the city's true heartbeat.

"Every place has a soul," she whispered to herself, a habit she'd developed during these solitary walks. "Even here, especially here."

The diner's door chimed as she entered, and the tired-eyed waitress looked up with a smile that had seen a thousand midnight stories unfold across these vinyl booths.`,
    excerpt: 'A contemplative piece exploring the hidden soul of urban landscapes through late-night wanderings.',
    type: 'story',
    category: 'urban',
    tags: JSON.stringify(['urban', 'midnight', 'introspection', 'city-life']),
    authorId: 'user_alex_storyteller',
    status: 'published',
    publishedAt: Date.now() - 86400000 * 3, // 3 days ago
    views: 289,
    likes: 38,
    comments: 12,
    rating: 4.5,
    ratingCount: 11,
    readTime: 4,
    isTrending: false,
    allowComments: true,
    isPublic: true
  },
  {
    id: 'work_melody_rain',
    title: 'Melody in the Rain',
    content: `[Verse 1]
Raindrops on the window pane
Drawing patterns like a song
Every drop a different note
In the symphony that's been going on

[Chorus]
There's a melody in the rain tonight
Washing away the pain tonight
Every storm brings its own refrain
There's beauty in the rain

[Verse 2]
I used to fear the thunder's call
Now I dance to its beat
The lightning writes across the sky
Stories that make my heart complete

[Bridge]
Let it pour, let it fall
Let it cleanse what came before
In the music of the storm
I found what I was searching for

[Chorus]
There's a melody in the rain tonight
Washing away the pain tonight
Every storm brings its own refrain
There's beauty in the rain`,
    excerpt: 'An uplifting song about finding beauty and healing in life\'s storms.',
    type: 'music',
    category: 'indie-folk',
    tags: JSON.stringify(['rain', 'healing', 'hope', 'acoustic']),
    authorId: 'user_zara_musician',
    status: 'published',
    publishedAt: Date.now() - 86400000 * 1, // 1 day ago
    views: 512,
    likes: 67,
    comments: 15,
    rating: 4.8,
    ratingCount: 23,
    readTime: 3,
    isTrending: true,
    allowComments: true,
    isPublic: true
  },
  {
    id: 'work_digital_solitude',
    title: 'Digital Solitude',
    content: `I created this piece during a period of isolation, exploring how technology both connects and separates us. The central figure appears to be dissolving into pixels, representing our gradual transformation into digital beings.

The color palette shifts from warm oranges and reds at the edges to cool blues and purples at the center, symbolizing the journey from human warmth to digital coldness. Yet there's something beautiful in this transformation - the pixels seem to dance, suggesting that even in our digital existence, we retain something essentially human.

This is part of my ongoing series "Humanity.exe" which examines our relationship with technology and how it's reshaping what it means to be human in the 21st century.

The piece was created using a combination of traditional painting techniques and digital manipulation, quite literally embodying the theme of human-digital fusion.

[Image description: A semi-abstract portrait where the subject's face gradually dissolves into colorful pixels on one side while remaining photorealistic on the other. The background features flowing lines of code that morph into organic, vine-like patterns.]`,
    excerpt: 'A digital art piece exploring the intersection of humanity and technology in our modern age.',
    type: 'art',
    category: 'digital',
    tags: JSON.stringify(['digital-art', 'technology', 'humanity', 'pixels']),
    authorId: 'user_kai_artist',
    status: 'published',
    publishedAt: Date.now() - 86400000 * 7, // 1 week ago
    views: 423,
    likes: 56,
    comments: 9,
    rating: 4.3,
    ratingCount: 18,
    readTime: 2,
    isTrending: false,
    allowComments: true,
    isPublic: true
  },
  {
    id: 'work_loneliness_epidemic',
    title: 'The Loneliness Epidemic: A Modern Paradox',
    content: `We live in the most connected era in human history, yet loneliness has reached epidemic proportions. This paradox reveals something profound about the nature of human connection and the quality versus quantity of our relationships.

**The Illusion of Connection**

Social media platforms promise connection but often deliver its shadow - a curated performance of life that lacks the vulnerability and authenticity that true connection requires. We scroll through hundreds of "friends'" highlight reels while sitting alone in our rooms, feeling more isolated than ever.

**The Architecture of Isolation**

Our modern lifestyle has created an architecture of isolation. We work from home, order groceries online, stream entertainment, and conduct relationships through screens. While convenient, these innovations have inadvertently removed many opportunities for spontaneous human interaction.

**The Depth Deficit**

Perhaps most concerning is what I call the "depth deficit" - our conversations have become increasingly shallow. We exchange emojis instead of emotions, likes instead of love, and comments instead of genuine communication. The art of deep, meaningful conversation is becoming lost.

**Reclaiming Connection**

But there is hope. True connection begins with vulnerability - the willingness to show up authentically, to share our struggles alongside our successes, to ask "How are you really?" and mean it.

It requires us to step away from our screens, to make eye contact, to listen without formulating our response, to be present in the moment with another human being.

**The Way Forward**

The antidote to loneliness isn't more connections - it's deeper ones. It's quality over quantity, presence over performance, authenticity over approval.

Perhaps the loneliness epidemic is not a problem to be solved but a symptom pointing us toward what we've always known but forgotten: that we are fundamentally social beings who need genuine connection to thrive.`,
    excerpt: 'An exploration of modern loneliness and the paradox of feeling isolated in our hyper-connected world.',
    type: 'essay',
    category: 'society',
    tags: JSON.stringify(['loneliness', 'connection', 'modern-life', 'philosophy']),
    authorId: 'user_luna_essayist',
    status: 'published',
    publishedAt: Date.now() - 86400000 * 2, // 2 days ago
    views: 678,
    likes: 89,
    comments: 23,
    rating: 4.6,
    ratingCount: 34,
    readTime: 6,
    isTrending: true,
    allowComments: true,
    isPublic: true
  }
];

// Generate additional works
const generateRandomWorks = (userIds) => {
  const poemTitles = [
    'Midnight Reflections', 'Garden of Dreams', 'City Lights', 'Ocean Whispers', 
    'Mountain Echoes', 'Dancing Shadows', 'Silent Storm', 'Golden Hour',
    'Forgotten Paths', 'River Song', 'Starlight Serenade', 'Morning Dew'
  ];
  
  const storyTitles = [
    'The Last Letter', 'Coffee Shop Chronicles', 'Time Traveler\'s Journal', 
    'The Mysterious Bookstore', 'Midnight Train', 'The Artist\'s Studio',
    'Lost in Translation', 'The Memory Keeper', 'Digital Ghosts', 'Parallel Lives'
  ];
  
  const types = ['poetry', 'story', 'essay', 'music', 'art'];
  const categories = ['nature', 'urban', 'love', 'adventure', 'mystery', 'philosophy', 'indie-folk', 'digital'];
  
  const additionalWorks = [];
  for (let i = 0; i < 35; i++) {
    const type = types[Math.floor(Math.random() * types.length)];
    const titles = type === 'poetry' ? poemTitles : storyTitles;
    const title = titles[Math.floor(Math.random() * titles.length)];
    const authorId = userIds[Math.floor(Math.random() * userIds.length)];
    
    additionalWorks.push({
      id: `work_${i}_${Math.random().toString(36).substring(2, 8)}`,
      title: `${title} ${i > 20 ? 'II' : ''}`,
      content: type === 'poetry' 
        ? `A beautiful ${type} about life, love, and the human experience.\n\nThis piece explores themes of ${categories[Math.floor(Math.random() * categories.length)]} through lyrical verse and metaphor.`
        : `An engaging ${type} that takes readers on a journey through imagination and emotion.\n\nThis work delves into the complexities of modern life and relationships.`,
      excerpt: `A thoughtful ${type} exploring themes of humanity and connection.`,
      type: type,
      category: categories[Math.floor(Math.random() * categories.length)],
      tags: JSON.stringify([categories[Math.floor(Math.random() * categories.length)], 'creative', 'thoughtful']),
      authorId: authorId,
      status: 'published',
      publishedAt: Date.now() - Math.floor(Math.random() * 86400000 * 30), // Random date within last 30 days
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

// Sample comments
const sampleComments = [
  {
    id: 'comment_1',
    content: 'This really spoke to my heart. The imagery of leaves dancing is so beautiful and profound.',
    workId: 'work_whispers_wind',
    authorId: 'user_alex_storyteller',
    likes: 5,
    createdAt: Date.now() - 86400000 * 2
  },
  {
    id: 'comment_2',
    content: 'I love how you captured the soul of the city. Your description of the neon lights is mesmerizing.',
    workId: 'work_neon_dreams',
    authorId: 'user_maya_poet',
    likes: 3,
    createdAt: Date.now() - 86400000 * 1
  },
  {
    id: 'comment_3',
    content: 'This song gives me chills every time. The melody you describe matches perfectly with the lyrics.',
    workId: 'work_melody_rain',
    authorId: 'user_kai_artist',
    likes: 8,
    createdAt: Date.now() - 3600000 * 12
  }
];

// Seeding function
async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...');
    
    // Combine featured and random users
    const allUsers = [...sampleUsers, ...generateRandomUsers()];
    const allUserIds = allUsers.map(u => u.id);
    
    // Insert users
    console.log('👥 Inserting users...');
    for (const user of allUsers) {
      await db.insert(users).values(user);
    }
    console.log(`✅ Inserted ${allUsers.length} users`);
    
    // Combine featured and random works
    const allWorks = [...sampleWorks, ...generateRandomWorks(allUserIds)];
    
    // Insert works
    console.log('📝 Inserting works...');
    for (const work of allWorks) {
      await db.insert(works).values(work);
    }
    console.log(`✅ Inserted ${allWorks.length} works`);
    
    // Insert sample comments
    console.log('💬 Inserting comments...');
    for (const comment of sampleComments) {
      await db.insert(comments).values(comment);
    }
    console.log(`✅ Inserted ${sampleComments.length} comments`);
    
    // Create some follows relationships
    console.log('👥 Creating follow relationships...');
    const followRelationships = [
      { id: 'follow_1', followerId: 'user_maya_poet', followingId: 'user_alex_storyteller' },
      { id: 'follow_2', followerId: 'user_alex_storyteller', followingId: 'user_zara_musician' },
      { id: 'follow_3', followerId: 'user_zara_musician', followingId: 'user_maya_poet' },
      { id: 'follow_4', followerId: 'user_kai_artist', followingId: 'user_luna_essayist' },
      { id: 'follow_5', followerId: 'user_luna_essayist', followingId: 'user_kai_artist' }
    ];
    
    for (const follow of followRelationships) {
      follow.createdAt = Date.now();
      await db.insert(follows).values(follow);
    }
    console.log(`✅ Created ${followRelationships.length} follow relationships`);
    
    // Create some likes
    console.log('❤️ Creating likes...');
    const likeRelationships = [
      { id: 'like_1', userId: 'user_alex_storyteller', targetId: 'work_whispers_wind', targetType: 'work' },
      { id: 'like_2', userId: 'user_maya_poet', targetId: 'work_neon_dreams', targetType: 'work' },
      { id: 'like_3', userId: 'user_kai_artist', targetId: 'work_melody_rain', targetType: 'work' },
      { id: 'like_4', userId: 'user_zara_musician', targetId: 'work_digital_solitude', targetType: 'work' },
      { id: 'like_5', userId: 'user_luna_essayist', targetId: 'work_whispers_wind', targetType: 'work' }
    ];
    
    for (const like of likeRelationships) {
      like.createdAt = Date.now();
      await db.insert(likes).values(like);
    }
    console.log(`✅ Created ${likeRelationships.length} likes`);
    
    console.log('🎉 Database seeding completed successfully!');
    console.log(`📊 Summary:
    - ${allUsers.length} users created
    - ${allWorks.length} works published  
    - ${sampleComments.length} comments added
    - ${followRelationships.length} follow relationships
    - ${likeRelationships.length} likes given`);
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
}

// Run the seeding
seedDatabase()
  .then(() => {
    console.log('✨ Seeding complete!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Seeding failed:', error);
    process.exit(1);
  });
