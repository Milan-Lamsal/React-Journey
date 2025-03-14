import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-900 dark:border-gray-700 transition-all duration-300 hover:scale-105">
            <a href="/" className="overflow-hidden rounded-t-xl block">
                <img 
                    className="p-4 rounded-2xl w-full h-64 object-cover transition-transform duration-300 hover:scale-105" 
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop" 
                    alt="premium_watch"
                />
            </a>
            <div className="px-5 pb-5">
                <div className="flex items-center justify-between mb-4">
                    <a href="/">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Premium SmartWatch Pro
                        </h5>
                    </a>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">
                        New
                    </span>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center">
                        <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    className={`w-4 h-4 ${index < 4 ? "text-amber-400" : "text-gray-300 dark:text-gray-700"}`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            ))}
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold ml-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                            4.0
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">$299</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">$399</span>
                        </div>
                        <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 transition-all duration-300 hover:scale-105">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

