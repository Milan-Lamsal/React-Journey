import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import HairLogo from '../../assets/HairLogo.png'

// whenever you use your <a> tag the whole page get refresh, as in react there is no concept of refresh, just inject the value so because of that we use Link instead of a tag, why NavLink , its gives additional features like "to "

export default function Header() {
    return (
        <header className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <img className="h-12 w-auto" src={HairLogo} alt="Zoe Salon Logo" />
                    </Link>
                </div>
                <div className="flex gap-8">
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
                <div className="lg:flex lg:flex-1 lg:justify-end">
                    <Link
                        to="/contact"
                        className="text-sm font-semibold px-4 py-2 bg-amber-400 text-slate-900 rounded-lg hover:bg-amber-500 transition-colors duration-200"
                    >
                        Book Now
                    </Link>
                </div>
            </nav>
        </header>
    );
}
