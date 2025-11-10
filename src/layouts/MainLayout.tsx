import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-100 via-white to-green-100">
      {/* Global Navbar */}
      <Navbar />

      {/* Render the active page inside here */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
