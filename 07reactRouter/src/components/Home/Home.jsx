import React from 'react'
import { Link } from 'react-router-dom'
import HairLogo from '../../assets/HairLogo.png'
import BackgroundImage from '../../assets/BackgroundImage.png'

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden">
            {/* Hero Section */}
            <div className="relative px-2 sm:px-4 lg:px-8 pt-12 sm:pt-16">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            <span className="block text-gray-300">Welcome to</span>
                            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Zoe's Hair Salon</span>
                        </h1>
                        <p className="mx-auto mt-4 sm:mt-6 max-w-lg text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 px-2">
                            Experience luxury hair care with our expert stylists. Book your transformation today.
                        </p>
                        <div className="mt-10 flex justify-center gap-4">
                            <Link
                                to="/contact"
                                className="rounded-lg bg-amber-400 px-6 py-3 text-base sm:text-lg font-semibold text-slate-900 shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 transition-all duration-200"
                            >
                                Book Appointment
                            </Link>
                            <Link
                                to="/about"
                                className="rounded-lg bg-slate-800 px-6 py-3 text-base sm:text-lg font-semibold text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300/20 hover:bg-slate-700 transition-all duration-200"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-12">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Card 1 */}
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-amber-400/50 transition-all duration-200">
                            <div className="text-4xl mb-4">💇‍♀️</div>
                            <h3 className="text-xl font-semibold text-amber-400 mb-2">Haircut & Styling</h3>
                            <p className="text-gray-300">Expert cuts and styles tailored to your unique look.</p>
                        </div>
                        {/* Service Card 2 */}
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-amber-400/50 transition-all duration-200">
                            <div className="text-4xl mb-4">🎨</div>
                            <h3 className="text-xl font-semibold text-amber-400 mb-2">Color & Highlights</h3>
                            <p className="text-gray-300">Vibrant colors and natural-looking highlights.</p>
                        </div>
                        {/* Service Card 3 */}
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-amber-400/50 transition-all duration-200">
                            <div className="text-4xl mb-4">✨</div>
                            <h3 className="text-xl font-semibold text-amber-400 mb-2">Treatments</h3>
                            <p className="text-gray-300">Nourishing treatments for healthy, beautiful hair.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-slate-800/50 border-y border-slate-700">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 mb-6">
                            Ready for a new look?
                        </h2>
                        <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join us for a complimentary consultation and discover how we can help you achieve your dream hairstyle.
                        </p>
                        <Link
                            to="/game"
                            className="inline-block rounded-lg bg-amber-400 px-6 py-3 text-base sm:text-lg font-semibold text-slate-900 shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 transition-all duration-200"
                        >
                            Try Our Style Game
                        </Link>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-12">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <p className="text-gray-300 mb-4">"Absolutely love my new hairstyle! The team is professional and talented."</p>
                            <p className="text-amber-400 font-semibold">- Sarah M.</p>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <p className="text-gray-300 mb-4">"Best salon experience ever! They really listen to what you want."</p>
                            <p className="text-amber-400 font-semibold">- Emily R.</p>
                        </div>
                        {/* Testimonial 3 */}
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <p className="text-gray-300 mb-4">"The attention to detail and care is unmatched. Highly recommend!"</p>
                            <p className="text-amber-400 font-semibold">- Jessica K.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}