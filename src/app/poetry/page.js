import Link from 'next/link';
import Image from 'next/image';
import { FeaturedPoems } from './components';
import { getFeaturedPoems } from './data';

export const metadata = {
    title: 'Poetry Collection | Multiversal',
    description: 'Explore beautiful poetry created by our community of writers',
    openGraph: {
        title: 'Poetry Collection | Multiversal',
        description: 'Explore beautiful poetry created by our community of writers',
        type: 'website',
    }
};

export default async function PoetryHomePage() {
    // Server side data fetching with built-in caching
    const featuredPoems = await getFeaturedPoems(6);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
                <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            Poetry Collection
                        </h1>
                        <p className="mt-6 text-xl max-w-3xl mx-auto">
                            Explore verse and rhythm crafted by our community of poets.
                            Immerse yourself in emotion, imagery, and the beauty of language.
                        </p>
                        <div className="mt-10 flex justify-center gap-x-6">
                            <Link
                                href="/create/poetry"
                                className="rounded-md bg-white px-5 py-3 text-base font-medium text-purple-700 shadow hover:bg-gray-50"
                            >
                                Create Poetry
                            </Link>
                            <Link
                                href="/explore"
                                className="rounded-md bg-purple-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-purple-700"
                            >
                                Explore All
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full h-24 bg-white"
                    style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}>
                </div>
            </section>

            {/* Featured Section */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Featured Poetry</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        A curated selection of remarkable poems that showcase creativity and emotion
                    </p>
                </div>

                <FeaturedPoems poems={featuredPoems} />
            </section>

            {/* Categories Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Poetry Categories</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover poems across different styles and forms
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {poetryCategories.map((category) => (
                            <Link
                                key={category.name}
                                href={`/poetry/category/${category.slug}`}
                                className="group"
                            >
                                <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg">
                                    <div className="h-48 bg-gradient-to-br from-purple-400 to-indigo-600 relative">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <category.icon className="w-16 h-16 text-white opacity-75" />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700">
                                            {category.name}
                                        </h3>
                                        <p className="mt-2 text-gray-600">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="md:flex">
                            <div className="md:flex-1 p-8 md:p-12 flex flex-col justify-center">
                                <h2 className="text-3xl font-bold text-gray-900">
                                    Ready to share your poetry?
                                </h2>
                                <p className="mt-4 text-lg text-gray-600">
                                    Join our community of poets and express yourself through words.
                                    Our poetry editor makes it easy to craft beautiful verse.
                                </p>
                                <div className="mt-8">
                                    <Link
                                        href="/create/poetry"
                                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700"
                                    >
                                        Start Creating
                                    </Link>
                                </div>
                            </div>
                            <div className="md:flex-1 bg-purple-100 flex items-center justify-center p-8">
                                <div className="max-w-sm">
                                    <Image
                                        src="/poetry-illustration.svg"
                                        alt="Poetry illustration"
                                        width={400}
                                        height={300}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

// Mock data for poetry categories
import { BookOpen, Heart, Star, Music, Coffee, Feather } from 'lucide-react';

const poetryCategories = [
    {
        name: 'Free Verse',
        slug: 'free-verse',
        description: 'Poetry without regular patterns of rhyme or meter',
        icon: Feather
    },
    {
        name: 'Sonnets',
        slug: 'sonnets',
        description: '14-line poems with specific rhyme schemes',
        icon: Heart
    },
    {
        name: 'Haiku',
        slug: 'haiku',
        description: 'Brief Japanese poems with 5-7-5 syllable pattern',
        icon: Star
    },
    {
        name: 'Spoken Word',
        slug: 'spoken-word',
        description: 'Performance-based poetry with rhythmic delivery',
        icon: Music
    },
    {
        name: 'Narrative',
        slug: 'narrative',
        description: 'Story-telling poems with characters and plot',
        icon: BookOpen
    },
    {
        name: 'Lyrical',
        slug: 'lyrical',
        description: 'Musical, emotionally expressive verses',
        icon: Coffee
    }
];
