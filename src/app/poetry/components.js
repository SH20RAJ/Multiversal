'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { Heart, MessageSquare, Eye, BookmarkPlus, Share2 } from 'lucide-react';

export function FeaturedPoems({ poems }) {
    if (!poems || poems.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500">No poems found</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poems.map((poem) => (
                <PoemCard key={poem.id} poem={poem} />
            ))}
        </div>
    );
}

export function PoemCard({ poem }) {
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);

    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return formatDistanceToNow(date, { addSuffix: true });
        } catch (e) {
            return 'Recently';
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg flex flex-col">
            {/* Card Header */}
            <div className="p-5 border-b border-gray-100">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        {poem.authorImage ? (
                            <Image
                                src={poem.authorImage}
                                alt={poem.authorName || 'Author'}
                                width={40}
                                height={40}
                                className="w-10 h-10 rounded-full"
                            />
                        ) : (
                            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-medium">
                                {(poem.authorName || 'A').charAt(0).toUpperCase()}
                            </div>
                        )}
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{poem.authorName || 'Anonymous'}</p>
                        <p className="text-xs text-gray-500">{formatDate(poem.createdAt)}</p>
                    </div>
                </div>
            </div>

            {/* Card Body */}
            <Link href={`/poetry/${poem.id}`} className="flex-1 p-5 hover:bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {poem.title}
                </h3>
                <div className="prose prose-sm text-gray-600 mb-4 line-clamp-3">
                    {poem.excerpt || 'No preview available'}
                </div>
                <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                        {poem.type || 'Poetry'}
                    </span>
                </div>
            </Link>

            {/* Card Footer */}
            <div className="px-5 py-3 bg-gray-50 flex justify-between items-center border-t border-gray-100">
                <div className="flex items-center space-x-3">
                    <button
                        onClick={() => setLiked(!liked)}
                        className={`flex items-center text-xs ${liked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500`}
                    >
                        <Heart className="w-4 h-4 mr-1" fill={liked ? "currentColor" : "none"} />
                        <span>Like</span>
                    </button>
                    <Link href={`/poetry/${poem.id}#comments`} className="flex items-center text-xs text-gray-500 hover:text-gray-700">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        <span>Comment</span>
                    </Link>
                </div>
                <div className="flex items-center space-x-3">
                    <button
                        onClick={() => setBookmarked(!bookmarked)}
                        className={`flex items-center text-xs ${bookmarked ? 'text-purple-500' : 'text-gray-500'} hover:text-purple-500`}
                    >
                        <BookmarkPlus className="w-4 h-4" />
                    </button>
                    <button className="flex items-center text-xs text-gray-500 hover:text-gray-700">
                        <Share2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export function PoemView({ poem }) {
    if (!poem) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500">Poem not found</p>
            </div>
        );
    }

    return (
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8 md:p-10">
                <div className="flex items-center mb-8">
                    <div className="flex-shrink-0">
                        {poem.authorImage ? (
                            <Image
                                src={poem.authorImage}
                                alt={poem.authorName || 'Author'}
                                width={48}
                                height={48}
                                className="w-12 h-12 rounded-full"
                            />
                        ) : (
                            <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-medium text-lg">
                                {(poem.authorName || 'A').charAt(0).toUpperCase()}
                            </div>
                        )}
                    </div>
                    <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">{poem.authorName || 'Anonymous'}</p>
                        <p className="text-sm text-gray-500">
                            {poem.createdAt && new Date(poem.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-6">{poem.title}</h1>

                <div className="prose prose-lg max-w-none text-gray-700 mb-8 font-serif">
                    <div dangerouslySetInnerHTML={{ __html: poem.content }} />
                </div>

                {poem.type && (
                    <div className="mb-8">
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                            {poem.type}
                        </span>
                    </div>
                )}

                <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
                    <div className="flex space-x-4">
                        <button className="flex items-center text-gray-500 hover:text-red-500">
                            <Heart className="w-5 h-5 mr-2" />
                            <span>Like</span>
                        </button>
                        <button className="flex items-center text-gray-500 hover:text-gray-700">
                            <MessageSquare className="w-5 h-5 mr-2" />
                            <span>Comment</span>
                        </button>
                    </div>
                    <div className="flex space-x-4">
                        <button className="flex items-center text-gray-500 hover:text-purple-500">
                            <BookmarkPlus className="w-5 h-5 mr-2" />
                            <span>Save</span>
                        </button>
                        <button className="flex items-center text-gray-500 hover:text-gray-700">
                            <Share2 className="w-5 h-5 mr-2" />
                            <span>Share</span>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}
