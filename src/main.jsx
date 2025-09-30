import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Menu from './pages/Menu.jsx'
import Contact from './pages/Contact.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:'/menu',
        element: <Menu/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path: "/signUp",
        element: <Signup/>
      },
      {
        path:"/login",
        element: <Login/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
