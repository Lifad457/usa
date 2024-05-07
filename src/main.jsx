import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './pages/App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Index from './pages/Index.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />} >
    <Route index element={<Index />} />
    {/* <Route path='palm-springs' />
    <Route path='mont-san-jacinto' />
    <Route path='joshua-tree' />
    <Route path='williams' />
    <Route path='grand-canyon' />
    <Route path='page' />
    <Route path='antelope-canyon' />
    <Route path='horsebend-shoe' />
    <Route path='monument-valley' />
    <Route path='kanab' />
    <Route path='bryce-canyon' />
    <Route path='zion' />
    <Route path='death-valley' />
    <Route path='three-rivers' />
    <Route path='sequoia' />
    <Route path='yosemite' />
    <Route path='san-francisco' /> */}

    <Route path="*" element={<ErrorPage />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)