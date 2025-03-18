import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/appwriteconfig'

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        appwriteService.getPosts([]).then((response) => {
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
                            Loading posts...
                        </h2>
                    </div>
                </Container>
            </div>
        )
    }
    
    return (
        <div className='w-full py-8'>
            <Container>
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">All Posts</h1>
                    <p className="text-gray-600 dark:text-gray-400">Browse all blog posts</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {posts.map((post) => (
                        <div key={post.$id} className='flex'>
                            <PostCard 
                                $id={post.$id} 
                                title={post.title} 
                                featuredImage={post.featuredImage} 
                                $createdAt={post.$createdAt}
                                content={post.content}
                                userId={post.userId}
                            />
                        </div>
                    ))}
                </div>
                {posts.length === 0 && (
                    <div className="text-center py-10">
                        <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                            No posts found
                        </h2>
                    </div>
                )}
            </Container>
        </div>
    )
}

export default AllPosts