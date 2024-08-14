'use client';

import PoemCard from '@/components/Explore/PoemCard';


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
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
      <h1 className="text-3xl font-bold text-black mb-8">Explore Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:border-indigo-600 transition duration-300 transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-black mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <p className="text-gray-500 text-sm">By {post.author}</p>
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-bold text-black mb-8">Explore Poems</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {poems.map((poem) => (
          <PoemCard key={poem.id} poem={poem} />
        ))}
      </div>

    </main>
  );
};

export default ExplorePage;
