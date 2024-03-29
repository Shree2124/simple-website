import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact_Us from './components/Contact_Us.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "Contact us",
//         element: <Contact_Us />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Contact us' element={<Contact_Us/>} />
            <Route path='/user/:userid' element={<User/>} />
            <Route path='/github' element={<Github/>} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )