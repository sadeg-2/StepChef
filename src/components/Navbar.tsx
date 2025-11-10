import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <h1 className="text-3xl font-bold text-orange-600">StepChef</h1>
      <div className="space-x-6">
        <Link to="/" className="text-gray-700 hover:text-orange-500 transition">
          Landing
        </Link>
        <Link to="/home" className="text-gray-700 hover:text-orange-500 transition">
          Home
        </Link>
        <Link to="/explore" className="text-gray-700 hover:text-orange-500 transition">
          Explore
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-orange-500 transition">
          About
        </Link>
      </div>
    </nav>
  );
}
