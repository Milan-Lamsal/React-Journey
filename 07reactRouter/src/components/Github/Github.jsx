import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData()
    
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className="mx-auto max-w-7xl px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold sm:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
                        Github Profile
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Check out our developer's Github profile and contributions.
                    </p>
                </div>

                <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-8 max-w-3xl mx-auto">
                    <div className="flex items-center justify-center mb-8">
                        <img 
                            src={data.avatar_url} 
                            alt="Github Profile" 
                            className="w-32 h-32 rounded-full border-4 border-amber-400/20"
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-2">{data.name || data.login}</h2>
                        <p className="text-gray-300 mb-6">{data.bio || 'Software Developer'}</p>
                        
                        <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
                            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                <div className="text-3xl font-bold text-amber-400 mb-1">
                                    {data.public_repos}
                                </div>
                                <div className="text-gray-300">Public Repos</div>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                <div className="text-3xl font-bold text-amber-400 mb-1">
                                    {data.followers}
                                </div>
                                <div className="text-gray-300">Followers</div>
                            </div>
                        </div>

                        <a
                            href={data.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-8 px-6 py-3 text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-200 font-medium"
                        >
                            View Profile
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Milan-Lamsal')
    return response.json()
}
