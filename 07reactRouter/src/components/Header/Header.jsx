import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import HairLogo from '../../assets/HairLogo.png'

// whenever you use your <a> tag the whole page get refresh, as in react there is no concept of refresh, just inject the value so because of that we use Link instead of a tag, why NavLink , its gives additional features like "to "

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50 w-full">
            <nav className="w-full px-2 sm:px-4 lg:px-8" aria-label="Global">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <div className="flex">
                        <Link to="/" className="p-1">
                            <img className="h-8 w-auto sm:h-10" src={HairLogo} alt="Zoe Salon Logo" />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Menu icon */}
                            {!isMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden lg:flex lg:gap-x-8">
                        <NavLink 
                            to="/" 
                            className={({isActive}) =>
                                `text-lg font-semibold ${isActive ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'} transition-colors duration-200`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            className={({isActive}) =>
                                `text-lg font-semibold ${isActive ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'} transition-colors duration-200`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            className={({isActive}) =>
                                `text-lg font-semibold ${isActive ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'} transition-colors duration-200`
                            }
                        >
                            Contact
                        </NavLink>
                        <NavLink 
                            to="/github" 
                            className={({isActive}) =>
                                `text-lg font-semibold ${isActive ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'} transition-colors duration-200`
                            }
                        >
                            Github
                        </NavLink>
                        <NavLink 
                            to="/game" 
                            className={({isActive}) =>
                                `text-lg font-semibold ${isActive ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'} transition-colors duration-200`
                            }
                        >
                            Style Game
                        </NavLink>
                    </div>

                    {/* Book Now button - desktop */}
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link
                            to="/contact"
                            className="text-sm font-semibold px-4 py-2 bg-amber-400 text-slate-900 rounded-lg hover:bg-amber-500 transition-colors duration-200"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <NavLink 
                            to="/" 
                            className={({isActive}) =>
                                `block rounded-lg py-2 px-3 text-base font-semibold ${isActive ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'} transition-colors duration-200`
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            className={({isActive}) =>
                                `block rounded-lg py-2 px-3 text-base font-semibold ${isActive ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'} transition-colors duration-200`
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            className={({isActive}) =>
                                `block rounded-lg py-2 px-3 text-base font-semibold ${isActive ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'} transition-colors duration-200`
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </NavLink>
                        <NavLink 
                            to="/github" 
                            className={({isActive}) =>
                                `block rounded-lg py-2 px-3 text-base font-semibold ${isActive ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'} transition-colors duration-200`
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Github
                        </NavLink>
                        <NavLink 
                            to="/game" 
                            className={({isActive}) =>
                                `block rounded-lg py-2 px-3 text-base font-semibold ${isActive ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'} transition-colors duration-200`
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Style Game
                        </NavLink>
                        <Link
                            to="/contact"
                            className="block w-full text-center mt-4 px-4 py-2 bg-amber-400 text-slate-900 rounded-lg hover:bg-amber-500 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
