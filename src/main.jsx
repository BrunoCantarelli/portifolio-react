import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import MyProjects from './routes/MyProjects.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path: "MyProjects",
    element: <MyProjects />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
