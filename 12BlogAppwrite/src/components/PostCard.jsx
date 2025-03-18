import React from 'react'
import appwriteService from "../appwrite/appwriteconfig" // we need query because of that we are using this
import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'

function PostCard({ $id, title, featuredImage, $createdAt, content, userId }) {
    // Estimate reading time (assume average reading speed of 200 words per minute)
    const getReadingTime = (text) => {
        const wordCount = text ? text.trim().split(/\s+/).length : 0;
        const readingTime = Math.ceil(wordCount / 200);
        return readingTime === 0 ? 1 : readingTime;
    };

    // Format date as "X time ago"
    const getRelativeDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return formatDistanceToNow(date, { addSuffix: true });
        } catch (e) {
            return "recently";
        }
    };

    return (
        <Link to={`/post/${$id}`} className="block w-full h-full">
            <div className='w-full h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700'>
                <div className='relative overflow-hidden aspect-video'>
                    {featuredImage ? (
                        <img 
                            src={appwriteService.getFilePreview(featuredImage)} 
                            alt={title}
                            className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    )}
                </div>
                <div className='p-5'>
                    <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
                        <span>{getRelativeDate($createdAt)}</span>
                        <span>{getReadingTime(content)} min read</span>
                    </div>
                    <h2 className='text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
                        {title || "Untitled Post"}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-3 text-sm mb-4">
                        {content ? content.replace(/<[^>]*>/g, '').substring(0, 150) + "..." : "No content available"}
                    </p>
                    <div className="flex items-center pt-2 border-t border-gray-100 dark:border-gray-700">
                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-medium">
                            {userId ? userId.substring(0, 1).toUpperCase() : "A"}
                        </div>
                        <div className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                            Author
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default PostCard