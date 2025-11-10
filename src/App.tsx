import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Landing from './pages/Landing'
import Home from './pages/Home'

export default function App() {
  return (
    <Router>
      <Routes>
        {/* All routes inside MainLayout share the same Navbar + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}
