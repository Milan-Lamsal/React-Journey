import React from 'react'
import { Link } from 'react-router-dom';
import HairLogo from '../../assets/HairLogo.png'
import BackgroundImage from '../../assets/BackgroundImage.png'

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className="mx-auto w-full max-w-7xl">
                {/* Hero Section */}
                <section className="relative overflow-hidden rounded-lg sm:mx-16 mx-2 sm:py-16">
                    <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                        <div className="max-w-xl space-y-8 text-center sm:text-left">
                            <h1 className="text-4xl font-bold sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
                                Transform Your Style
                                <span className="block text-2xl mt-4 text-gray-300">at Zoe Luxury Hair Salon</span>
                            </h1>
                            <p className="text-lg text-gray-300">
                                Experience the art of hairstyling with our expert stylists. Book your appointment today and discover your perfect look.
                            </p>
                            <div className="flex gap-4 justify-center sm:justify-start">
                                <Link
                                    className="inline-flex items-center px-6 py-3 font-medium text-slate-900 bg-amber-400 rounded-lg hover:bg-amber-500 transition-colors duration-200"
                                    to="/contact"
                                >
                                    Book Appointment
                                </Link>
                                <Link
                                    className="inline-flex items-center px-6 py-3 font-medium text-amber-400 border-2 border-amber-400 rounded-lg hover:bg-amber-400/10 transition-colors duration-200"
                                    to="/about"
                                >
                                    Our Services
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90"></div>
                        <img 
                            className="w-full h-full object-cover" 
                            src={BackgroundImage}
                            alt="Salon Background" 
                        />
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-16 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
                    <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12 text-amber-400">Our Signature Services</h2>
                    <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-slate-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-700">
                            <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <svg className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M7 5a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-2 text-amber-400">Haircut & Styling</h3>
                            <p className="text-gray-300 text-center">Professional cuts and styles tailored to your unique personality</p>
                        </div>
                        <div className="bg-slate-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-700">
                            <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <svg className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-2 text-amber-400">Color & Highlights</h3>
                            <p className="text-gray-300 text-center">Expert coloring services to enhance your natural beauty</p>
                        </div>
                        <div className="bg-slate-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-700">
                            <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <svg className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-2 text-amber-400">Treatment & Care</h3>
                            <p className="text-gray-300 text-center">Luxury hair treatments and deep conditioning services</p>
                        </div>
                    </div>
                </section>

                {/* Testimonial Section */}
                <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12 text-amber-400">What Our Clients Say</h2>
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="bg-slate-800/50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-700">
                                <div className="flex items-center mb-4">
                                    <div className="h-12 w-12 rounded-full bg-amber-400/10 flex items-center justify-center">
                                        <span className="text-xl font-semibold text-amber-400">S</span>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-semibold text-gray-200">Sarah Johnson</h4>
                                        <div className="flex text-amber-400">
                                            ★★★★★
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-300">"The best salon experience I've ever had! The stylists are true artists and the atmosphere is so welcoming."</p>
                            </div>
                            <div className="bg-slate-800/50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-700">
                                <div className="flex items-center mb-4">
                                    <div className="h-12 w-12 rounded-full bg-amber-400/10 flex items-center justify-center">
                                        <span className="text-xl font-semibold text-amber-400">M</span>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-semibold text-gray-200">Maria Garcia</h4>
                                        <div className="flex text-amber-400">
                                            ★★★★★
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-300">"Love my new look! The team at Zoe really knows how to bring out the best in their clients."</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-amber-400">Ready to Transform Your Look?</h2>
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 font-medium text-slate-900 bg-amber-400 rounded-lg hover:bg-amber-500 transition-colors duration-200 text-lg"
                        >
                            Book Your Appointment Today
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}