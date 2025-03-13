import React from 'react'
import BackgroundImage from '../../assets/BackgroundImage.png'

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className="mx-auto max-w-7xl px-4 py-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold sm:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
                        Book Your Appointment
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Transform your look with our expert stylists. Fill out the form below to schedule your appointment.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                            <h2 className="text-2xl font-semibold mb-6 text-amber-400">Visit Our Salon</h2>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-200">Address</h3>
                                        <p className="mt-1 text-gray-300">
                                            123 Luxury Lane<br />
                                            Beverly Hills, CA 90210
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-200">Phone</h3>
                                        <p className="mt-1 text-gray-300">(555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-200">Email</h3>
                                        <p className="mt-1 text-gray-300">appointments@zoesalon.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                            <h2 className="text-2xl font-semibold mb-6 text-amber-400">Business Hours</h2>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-300">Monday - Friday</span>
                                    <span className="text-gray-200">9:00 AM - 8:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-300">Saturday</span>
                                    <span className="text-gray-200">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-300">Sunday</span>
                                    <span className="text-gray-200">10:00 AM - 5:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                        <h2 className="text-2xl font-semibold mb-6 text-amber-400">Book an Appointment</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-gray-200 placeholder-gray-400"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-gray-200 placeholder-gray-400"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-gray-200 placeholder-gray-400"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-200 mb-2">
                                    Service Type
                                </label>
                                <select
                                    id="service"
                                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-gray-200"
                                >
                                    <option value="">Select a service</option>
                                    <option value="haircut">Haircut & Styling</option>
                                    <option value="color">Color & Highlights</option>
                                    <option value="treatment">Treatment & Care</option>
                                    <option value="makeup">Makeup Services</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-gray-200 mb-2">
                                    Preferred Date
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-gray-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                                    Special Requests
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-gray-200 placeholder-gray-400"
                                    placeholder="Any special requests or notes?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-200 font-medium"
                            >
                                Book Appointment
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
