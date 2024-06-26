import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
// import Home from './Components/Home/Home.jsx'
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>

  },
  // {
  //      path : 'Home',
  //      element: <Home/>
  // },
  {
    path : "About",
    element : <About/>
  },
  {
    path : "Contact",
    element : <Contact/>
  }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
