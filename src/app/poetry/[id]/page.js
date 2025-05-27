export const runtime = 'edge';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPoem } from '../data';
import { PoemView } from '../components';
import { ArrowLeft } from 'lucide-react';

export async function generateMetadata({ params }) {
    const poem = await getPoem(params.id);

    if (!poem) {
        return {
            title: 'Poem Not Found | Multiversal',
            description: 'The requested poem could not be found',
        };
    }

    return {
        title: `${poem.title} | Poetry | Multiversal`,
        description: `Read "${poem.title}" by ${poem.authorName || 'Anonymous'}`,
        openGraph: {
            title: poem.title,
            description: `Read "${poem.title}" by ${poem.authorName || 'Anonymous'}`,
            type: 'article',
            authors: [poem.authorName || 'Anonymous'],
        },
    };
}

export default async function PoemPage({ params }) {
    const poem = await getPoem(params.id);

    if (!poem) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <Link
                        href="/poetry"
                        className="inline-flex items-center text-sm text-gray-600 hover:text-purple-700"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Poetry Collection
                    </Link>
                </div>

                <PoemView poem={poem} />

                <div className="mt-12 max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Comments</h2>

                    {/* Comments section would go here - omitted for brevity */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <p className="text-gray-500 text-center">Comments coming soon</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
