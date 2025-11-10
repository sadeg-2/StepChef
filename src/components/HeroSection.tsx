import { Link, useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();

  const handleRandom = () => {
    navigate('/home?random=true');
  };

  return (
    <main className="flex flex-col lg:flex-row items-center justify-center flex-1 px-10 py-12">
      {/* Left Text Section */}
      <div className="flex-1 text-center lg:text-left space-y-6">
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Cook Like a <span className="text-orange-500">Chef</span>, <br /> Step by Step
        </h2>
        <p className="text-gray-700 text-lg max-w-md mx-auto lg:mx-0">
          Learn cooking interactively with guided steps, real recipes, and friendly motivation.
        </p>
        <div className="flex justify-center lg:justify-start gap-4">
          <Link
            to="/home"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl shadow-lg transition"
          >
            Get Started
          </Link>
          <button
            onClick={handleRandom}
            className="border border-orange-500 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-xl shadow"
          >
            Surprise Me 🍳
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 mt-10 lg:mt-0">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80"
          alt="Cooking illustration"
          className="rounded-3xl shadow-2xl w-full object-cover"
        />
      </div>
    </main>
  );
}
