import React from 'react'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'

import Browse from './Browse'
import Login from './Login'

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/watch",
        element:<Browse/>
    },
    
    
])


const Body = () => {
  return (
      <div className=''>
         <RouterProvider router={appRouter} />
      </div>
  )
}

export default Body