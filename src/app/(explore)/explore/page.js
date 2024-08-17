'use client';

import Books from '@/components/Explore/Books';
import PoemCard from '@/components/Explore/PoemCard';
import Quotes from '@/components/Explore/Quotes';


const ExplorePage = () => {
  // Sample posts data (in a real-world app, this data would come from an API or database)
  const posts = [
    {
      id: 1,
      title: 'A Beautiful Poem',
      description: 'A short description of the poem that captivates the emotions.',
      author: 'John Doe',
    },
    {
      id: 2,
      title: 'Shayari on Love',
      description: 'A heartfelt shayari about the beauty of love.',
      author: 'Jane Doe',
    },
    {
      id: 3,
      title: 'Funny Joke of the Day',
      description: 'Get ready to laugh with this hilarious joke!',
      author: 'Humorist',
    },
    // Add more posts here
    // ...
  ];

  const poems = [
    {
      id: 1,
      title: 'The Whispering Wind',
      sampleText: 'The wind whispers secrets through the trees...',
      fullText: 'The wind whispers secrets through the trees, a gentle breeze that speaks of ancient tales and forgotten dreams. Each rustle carries the weight of ages past, and the leaves dance to its timeless rhythm. In the quiet of the forest, where shadows play and light gently fades, the wind’s voice grows stronger, weaving stories into the fabric of nature. The whispering wind is a keeper of memories, a silent witness to the world’s hidden beauty and sorrow.',
    },
    // Add more poems as needed
  ];

  return (
    <main className="flex flex-col min-h-screen p-4 bg-white">

      <Quotes />

      <hr />

      <Books />



    </main>
  );
};

export default ExplorePage;
