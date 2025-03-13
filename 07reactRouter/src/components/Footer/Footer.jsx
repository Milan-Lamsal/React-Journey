import React from 'react'
import { Link } from 'react-router-dom';
import HairLogo from '../../assets/HairLogo.png'

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between animate-fadeIn">
                    <div className="mb-6 md:mb-0 hover:transform hover:scale-105 transition-transform duration-300">
                        <Link to="/" className="flex items-center">
                            <img
                                src={HairLogo}
                                className="mr-3 h-16"
                                alt="Salon Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div className="hover:transform hover:translate-y-[-5px] transition-transform duration-300">
                            <h2 className="mb-6 text-sm font-semibold text-amber-400 uppercase">Resources</h2>
                            <ul className="text-gray-300 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:text-amber-400 transition-colors duration-300">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:text-amber-400 transition-colors duration-300">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="hover:transform hover:translate-y-[-5px] transition-transform duration-300">
                            <h2 className="mb-6 text-sm font-semibold text-amber-400 uppercase">Follow us</h2>
                            <ul className="text-gray-300 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/Milan-Lamsal"
                                        className="hover:text-amber-400 transition-colors duration-300"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:text-amber-400 transition-colors duration-300">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="hover:transform hover:translate-y-[-5px] transition-transform duration-300">
                            <h2 className="mb-6 text-sm font-semibold text-amber-400 uppercase">Legal</h2>
                            <ul className="text-gray-300 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:text-amber-400 transition-colors duration-300">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-amber-400 transition-colors duration-300">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-slate-700 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between animate-fadeIn">
                    <span className="text-sm text-gray-300 sm:text-center hover:transform hover:translate-y-[-2px] transition-transform duration-300">
                        © 2025
                        <a href="https://github.com/Milan-Lamsal" className="hover:text-amber-400 transition-colors duration-300 ml-1">
                            Milan
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        {/* Facebook Icon */}
                        <Link to="#" className="text-gray-300 hover:text-amber-400 hover:transform hover:scale-110 transition-all duration-300">
                            <span className="sr-only">Facebook</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/>
                            </svg>
                        </Link>
                        {/* Discord Icon */}
                        <Link to="#" className="text-gray-300 hover:text-amber-400 hover:transform hover:scale-110 transition-all duration-300">
                            <span className="sr-only">Discord</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                            </svg>
                        </Link>
                        {/* Twitter/X Icon */}
                        <Link to="#" className="text-gray-300 hover:text-amber-400 hover:transform hover:scale-110 transition-all duration-300">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}