import React from 'react'
import BackgroundImage from '../../assets/BackgroundImage.png'

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className="mx-auto max-w-7xl px-4 py-16">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold sm:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
                        Welcome to Zoe Luxury Hair Salon
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Where luxury meets style, and every client receives the royal treatment they deserve.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                        <h2 className="text-2xl font-semibold mb-4 text-amber-400">Our Mission</h2>
                        <p className="text-gray-300">
                            To provide exceptional hair care services that enhance our clients' natural beauty and boost their confidence. We strive to create a welcoming environment where creativity flourishes and clients feel valued and pampered.
                        </p>
                    </div>
                    <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                        <h2 className="text-2xl font-semibold mb-4 text-amber-400">Our Vision</h2>
                        <p className="text-gray-300">
                            To be the leading luxury hair salon, known for our innovative techniques, personalized service, and commitment to excellence in hair care and styling.
                        </p>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12 text-amber-400">Meet Our Expert Stylists</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <div className="w-24 h-24 rounded-full bg-amber-400/10 mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl font-bold text-amber-400">E</span>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-2 text-gray-200">Emma Thompson</h3>
                            <p className="text-center text-amber-400 mb-2">Master Stylist</p>
                            <p className="text-gray-300 text-center">Specializing in creative coloring and avant-garde styling techniques.</p>
                        </div>
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <div className="w-24 h-24 rounded-full bg-amber-400/10 mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl font-bold text-amber-400">S</span>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-2 text-gray-200">Sophie Chen</h3>
                            <p className="text-center text-amber-400 mb-2">Color Specialist</p>
                            <p className="text-gray-300 text-center">Expert in balayage and contemporary color techniques.</p>
                        </div>
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <div className="w-24 h-24 rounded-full bg-amber-400/10 mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl font-bold text-amber-400">M</span>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-2 text-gray-200">Marcus Rivera</h3>
                            <p className="text-center text-amber-400 mb-2">Style Director</p>
                            <p className="text-gray-300 text-center">Specialized in precision cutting and textured styling.</p>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="relative">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90"></div>
                        <img 
                            src={BackgroundImage} 
                            alt="Salon Background" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative z-10 py-16">
                        <h2 className="text-3xl font-bold text-center mb-12 text-amber-400">Why Choose Zoe Salon</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
                            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                                <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-center mb-2 text-amber-400">Expert Stylists</h3>
                                <p className="text-gray-300 text-center">Highly trained professionals with years of experience</p>
                            </div>
                            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                                <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-center mb-2 text-amber-400">Premium Products</h3>
                                <p className="text-gray-300 text-center">Using only the finest hair care products</p>
                            </div>
                            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                                <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-center mb-2 text-amber-400">Modern Techniques</h3>
                                <p className="text-gray-300 text-center">Latest styling and coloring methods</p>
                            </div>
                            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                                <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-center mb-2 text-amber-400">Satisfaction Guaranteed</h3>
                                <p className="text-gray-300 text-center">Your happiness is our priority</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
