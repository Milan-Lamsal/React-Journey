import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
// Import the new Style Creator game component
import StyleGame from './components/Game/StyleGame.jsx'

// we take array , list in object 
// // RouterProvider takes one props -> We removed <App/>

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />

//       },
//       {
//         path: 'contact',
//         element: <Contact />

//       },
//     ]
//   }

// ])

// Different ways to do the createBrowser

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route
        loader={githubInfoLoader} // whenever you hover the mouse before clicking the api fetch starts and bring the data which seems faster . This is optimised way to load data 
        path='github' element={<Github />} />
      <Route path='game' element={<StyleGame />} />
    </Route>
  )
)

// :userid is most important whatever you write note it down 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

