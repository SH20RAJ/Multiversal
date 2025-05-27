export const runtime = 'edge';
import Link from 'next/link';
import { BookX } from 'lucide-react';

export default function PoemNotFound() {
    return (
        <div className="min-h-[70vh] bg-gray-50 flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <BookX className="w-12 h-12 text-purple-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Poem Not Found</h1>
                <p className="text-lg text-gray-600 mb-8">
                    The poem you're looking for might have been removed or is no longer available.
                </p>
                <div className="space-y-4">
                    <Link
                        href="/poetry"
                        className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700"
                    >
                        Explore Poetry
                    </Link>
                    <Link
                        href="/"
                        className="block text-purple-600 hover:text-purple-700"
                    >
                        Return to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
