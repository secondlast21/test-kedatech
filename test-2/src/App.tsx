import { FC } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Navigate to='/home' />}
        />
        <Route
          path='/'
          element={<Outlet />}
        >
          <Route
            path='home'
            element={<Home />}
          />
          <Route
            path='about'
            element={<About />}
          />
          <Route
            path='pricing'
            element={<Pricing />}
          />
          <Route
            path='Contact'
            element={<Contact />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
