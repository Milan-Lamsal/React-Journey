import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth_service'
import { login, logout } from "./store/authSlice"
import './App.css'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    let ignore = false;

    async function checkAuth() {
      try {
        console.log("App: Checking authentication status...")
        const userData = await authService.getCurrentUser()
        console.log("App: User data received:", userData)
        
        if (!ignore) {
          if (userData) {
            dispatch(login({ userData }))
          } else {
            console.log("App: No user data, logging out")
            dispatch(logout())
          }
          setLoading(false)
        }
      } catch (error) {
        console.error("App: Error in auth check:", error)
        if (!ignore) {
          dispatch(logout())
          setLoading(false)
        }
      }
    }

    checkAuth()

    // Cleanup function to prevent state updates if component unmounts
    return () => {
      ignore = true
    }
  }, [dispatch]) // Keep dispatch in dependencies

  if (loading) {
    return (
      <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="text-center">
          <div className="inline-block w-20 h-20 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin mb-4"></div>
          <div className="text-white text-xl font-medium">Loading your experience...</div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen min-w-full flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden'>
      <Header />
      <main className="flex-grow w-full py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
