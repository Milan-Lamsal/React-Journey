import React, { useState, useEffect } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const userData = useSelector((state) => state.auth.userData)
    const navigate = useNavigate()
    const [darkMode, setDarkMode] = useState(() => {
        // Check localStorage first, then prefer-color-scheme, default to false
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode !== null) {
            return savedMode === 'true';
        }
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    });
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: '/signup',
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        // Save to localStorage
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode])

    return (
        <header className='py-3 shadow bg-white dark:bg-gray-800 transition-colors duration-300'>
            <Container>
                <nav className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Link to='/' className='mr-4'>
                            <Logo width='70px' />
                        </Link>
                        <h1 className='text-xl font-bold text-blue-600 dark:text-blue-400 hidden md:block'>AppwriteBlog</h1>
                    </div>

                    {/* Mobile menu button */}
                    <button 
                        className='md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <div className={`hidden md:flex items-center space-x-1`}>
                        <ul className='flex items-center'>
                            {navItems.map((item) =>
                                item.active ? (
                                    <li key={item.name}>
                                        <button
                                            onClick={() => navigate(item.slug)}
                                            className='inline-block px-4 py-2 mx-1 rounded-md text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium'
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                ) : null
                            )}
                            {authStatus && (
                                <>
                                    <li className="border-l border-gray-300 dark:border-gray-600 mx-2 h-6"></li>
                                    {userData?.name && userData.name !== 'three' && (
                                        <li className="text-sm text-gray-600 dark:text-gray-300 mr-2">
                                            {userData.name}
                                        </li>
                                    )}
                                    <li>
                                        <LogoutBtn />
                                    </li>
                                </>
                            )}
                            <li>
                                <button 
                                    onClick={() => setDarkMode(!darkMode)}
                                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 ml-2"
                                >
                                    {darkMode ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                    )}
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-3 border-t border-gray-200 dark:border-gray-700 pt-3">
                        <ul className='space-y-1'>
                            {navItems.map((item) =>
                                item.active ? (
                                    <li key={item.name}>
                                        <button
                                            onClick={() => {
                                                navigate(item.slug)
                                                setMobileMenuOpen(false)
                                            }}
                                            className='w-full text-left px-4 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium'
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                ) : null
                            )}
                            {authStatus && (
                                <>
                                    <li className="border-t border-gray-200 dark:border-gray-700 my-2 pt-2">
                                        <div className="flex items-center px-4 py-2">
                                            {userData?.name && userData.name !== 'three' && (
                                                <span className="text-sm text-gray-600 dark:text-gray-300 mr-2">
                                                    {userData.name}
                                                </span>
                                            )}
                                            <LogoutBtn />
                                        </div>
                                    </li>
                                </>
                            )}
                            <li className="border-t border-gray-200 dark:border-gray-700 my-2 pt-2">
                                <button 
                                    onClick={() => setDarkMode(!darkMode)}
                                    className="w-full flex items-center px-4 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    {darkMode ? (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                            Light Mode
                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                            </svg>
                                            Dark Mode
                                        </>
                                    )}
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </Container>
        </header>
    )
}

export default Header
