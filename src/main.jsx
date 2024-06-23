import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './views/Home/Home'
import BlogView from './views/BlogView/BlogView'


 const root = ReactDOM.createRoot(document.getElementById('root'))

 const router = createBrowserRouter([

   {
    path: "/",
    element:<Home/>

   },
   {
    path : "/BlogView/:id",
    element :  <BlogView/>
}

   ])


 
 
 
 root.render(
  <RouterProvider router = {router}/>
)
