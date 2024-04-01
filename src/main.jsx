import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './pages/App.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import DescLayout from './components/DescLayout.jsx'
import MonumentValley from './components/MonumentValley.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />} >
    <Route path='desc' element={<DescLayout />}>
      <Route index element={<ErrorPage />} />
      <Route path='monument-valley' element={<MonumentValley />} />
    </Route>

    <Route path="*" element={<ErrorPage />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)