import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/theme'
import ThemeBtn from './components/ThemeButton'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }
  // how is acutal change in theme 

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])



  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="min-h-screen w-full transition-all duration-300 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-8">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
