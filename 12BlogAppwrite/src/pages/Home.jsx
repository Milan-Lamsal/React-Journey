import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/appwriteconfig"
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        appwriteService.getPosts().then((response) => {
            if (response) {
                setPosts(response.documents || [])
            } else {
                setPosts([])
            }
            setLoading(false)
        }).catch((error) => {
            console.error("Error fetching posts:", error)
            setPosts([])
            setLoading(false)
        })
    }, [])

    if (loading) {
        return (
            <div className="w-full py-16">
                <Container>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin mb-4"></div>
                        <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                            Loading amazing content for you...
                        </h2>
                    </div>
                </Container>
            </div>
        )
    }

    if (!authStatus) {
        return (
            <div className="w-full py-16">
                <Container>
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            Welcome to Milan-Blog
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                            Share your thoughts, stories, and ideas with the world. Join our community of writers and readers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/login" className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 font-medium">
                                Login
                            </Link>
                            <Link to="/signup" className="px-6 py-3 rounded-md bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200 font-medium">
                                Sign Up
                            </Link>
                        </div>
                        <div className="mt-16">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                                    <div className="text-blue-500 dark:text-blue-400 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Share Your Voice</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Create and publish your own stories with our user-friendly editor.</p>
                                </div>
                                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                                    <div className="text-blue-500 dark:text-blue-400 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Join the Community</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Connect with other writers and readers who share your interests.</p>
                                </div>
                                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                                    <div className="text-blue-500 dark:text-blue-400 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Discover Content</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Explore articles and stories from writers around the world.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    if (!posts || posts.length === 0) {
        return (
            <div className="w-full py-16">
                <Container>
                    <div className="max-w-2xl mx-auto text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-600 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                            No posts found
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            There are no posts available at the moment. Be the first to create a post!
                        </p>
                        <Link to="/add-post" className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 font-medium inline-block">
                            Create Your First Post
                        </Link>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Latest Posts</h1>
                    <p className="text-gray-600 dark:text-gray-400">Discover stories, thinking, and expertise from writers on any topic.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {posts.map((post) => (
                        <div key={post.$id} className='flex'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
                {posts.length >= 6 && (
                    <div className="mt-12 text-center">
                        <Link to="/all-posts" className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 font-medium inline-block">
                            View All Posts
                        </Link>
                    </div>
                )}
            </Container>
        </div>
    )
}

export default Home