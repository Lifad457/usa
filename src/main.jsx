import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './pages/App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import MonumentValley from './pages/MonumentValley.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />} >
      <Route index element={<ErrorPage />} />
      <Route path='monument-valley' element={<MonumentValley />} />

    <Route path="*" element={<ErrorPage />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)