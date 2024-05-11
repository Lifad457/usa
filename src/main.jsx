import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './pages/App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Index from './pages/Index.jsx'
import Burbank from './pages/Etapes/Burbank.jsx'
import PalmSprings from './pages/Etapes/PalmSprings.jsx'
import GrandCanyon from './pages/Etapes/GrandCanyon.jsx'
import Page from './pages/Etapes/Page.jsx'
import MonumentValley from './pages/Etapes/MonumentValley.jsx'
import Kanab from './pages/Etapes/Kanab.jsx'
import DeathValley from './pages/Etapes/DeathValley.jsx'
import SequoiaPark from './pages/Etapes/SequoiaPark.jsx'
import Yosemite from './pages/Etapes/Yosemite.jsx'
import SanFrancisco from './pages/Etapes/SanFrancisco.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />} >
    <Route index element={<Index />} />
    <Route element={<Burbank />} path='burbank' />
    <Route element={<PalmSprings />} path='palm-springs' />
    <Route element={<GrandCanyon />} path='grand-canyon' />
    <Route element={<Page />} path='page' />
    <Route element={<MonumentValley />} path='monument-valley' />
    <Route element={<Kanab />} path='kanab' />
    <Route element={<DeathValley />} path='death-valley' />
    <Route element={<SequoiaPark />} path='sequoia-park' />
    <Route element={<Yosemite />} path='yosemite' />
    <Route element={<SanFrancisco />} path='san-francisco' />
    
    <Route path="*" element={<ErrorPage />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)