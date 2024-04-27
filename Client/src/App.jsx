import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import Success from './components/Success'

const router = createBrowserRouter([
  {
    path:'/',
    element: <><Navbar/><Home/></>
  },
  {
    path:'/home',
    element: <><Navbar/><Home/></>
  },
  {
    path:"/login",
    element: <><Navbar/><Login/></>
  },
  {
    path:"/signup",
    element: <><Navbar/><Signup/></>
  },
  {
    path:"/success",
    element: <><Navbar/><Success/></>
  },
  {
    path:"*",
    element: "404 Page not Found"
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
