import { motion } from 'framer-motion';
import { useState } from 'react';
import { useThemeStore } from '../store/useThemeStore';
import myPhoto from '../assets/me.jpg';

export default function AboutPage() {
  const { theme } = useThemeStore();

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const isAI = theme === 'ai';

  return (
    <main
      className={`min-h-screen transition-colors duration-700 ${
        isAI
          ? 'bg-slate-950 text-white'
          : 'bg-gradient-to-b from-orange-50 via-white to-green-50 text-gray-900'
      }`}
    >
      {/* ============================== */}
      {/* HERO SECTION */}
      {/* ============================== */}
      <section className="py-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`text-5xl font-extrabold ${isAI ? 'text-lime-300' : 'text-orange-600'}`}
        >
          About StepChef
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className={`max-w-3xl mx-auto mt-4 text-lg ${isAI ? 'text-gray-300' : 'text-gray-700'}`}
        >
          StepChef is a modern cooking app built to simplify your culinary journey — with AI-powered
          theme, cooking progress tracking, and beautiful recipe browsing.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        {/* ============================== */}
        {/* FEATURES SECTION */}
        {/* ============================== */}
        <h2 className={`text-3xl font-bold mb-6 ${isAI ? 'text-lime-300' : 'text-orange-600'}`}>
          Features
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: 'AI Mode',
              desc: 'A futuristic theme that transforms your cooking experience.',
            },
            {
              title: 'Step-by-Step Cooking',
              desc: 'Track steps with progress saving for every recipe.',
            },
            {
              title: 'Explore Ingredients',
              desc: 'Beautiful ingredient visual grid with filters.',
            },
            {
              title: 'Browse By Area',
              desc: 'Discover meals from around the world with flag indicators.',
            },
            {
              title: 'Smart Search',
              desc: 'Find what you want instantly across all categories.',
            },
            {
              title: 'Fast & Modern UI',
              desc: 'Smooth animations, responsive design, clean layout.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`p-6 rounded-xl shadow-xl ${
                isAI
                  ? 'bg-white/5 border border-white/10 backdrop-blur-xl'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className={isAI ? 'text-gray-300' : 'text-gray-700'}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ============================== */}
        {/* DEVELOPER SECTION */}
        {/* ============================== */}
        <h2 className={`text-3xl font-bold mb-6 ${isAI ? 'text-lime-300' : 'text-orange-600'}`}>
          About The Developer
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`p-8 rounded-2xl shadow-xl max-w-4xl mx-auto mb-20 flex flex-col lg:flex-row items-center gap-10
    ${
      isAI
        ? 'bg-white/5 border border-white/10 backdrop-blur-xl'
        : 'bg-white border border-gray-200'
    }`}
        >
          {/* Developer Image */}
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border border-white/20">
            <img
              src={myPhoto} // 👉 Replace with your real image path
              alt="Developer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-2">
              Sadeg <span className="opacity-80">(Developer)</span>
            </h3>

            <p className={`text-lg leading-7 mb-4 ${isAI ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a passionate full-stack developer who loves crafting modern, fast, and visually
              stunning applications. I created StepChef to showcase my ability to blend beautiful UI
              with smooth UX and clean React architecture — all backed by TypeScript, animations,
              and APIs.
            </p>

            {/* Skills */}
            <h4 className={`font-semibold mb-2 ${isAI ? 'text-lime-300' : 'text-orange-600'}`}>
              Skills & Technologies
            </h4>

            <ul
              className={`grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm font-medium mb-4 ${
                isAI ? 'text-gray-200' : 'text-gray-800'
              }`}
            >
              <li>• React / TypeScript</li>
              <li>• Framer Motion</li>
              <li>• API Integration</li>
              <li>• UI/UX Design</li>
              <li>• Tailwind CSS</li>
              <li>• Next.js / Prisma</li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/sadeg-2"
                target="_blank"
                className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                  isAI
                    ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                    : 'bg-gray-800 text-white hover:bg-gray-900'
                }`}
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sadeg-ashour"
                target="_blank"
                className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                  isAI
                    ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                LinkedIn
              </a>

              <a
                href="mailto:sadeg.magde024@gmail.com"
                className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                  isAI
                    ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                Email
              </a>
            </div>
          </div>
        </motion.div>

        {/* ============================== */}
        {/* RATING */}
        {/* ============================== */}
        <h2 className={`text-3xl font-bold mb-6 ${isAI ? 'text-lime-300' : 'text-orange-600'}`}>
          Rate Your Experience
        </h2>

        <div className="flex justify-center mb-12 gap-2 text-4xl">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.span
              key={star}
              whileHover={{ scale: 1.3 }}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setRating(star)}
              className={`cursor-pointer ${
                star <= (hoverRating || rating)
                  ? isAI
                    ? 'text-lime-400'
                    : 'text-orange-500'
                  : 'text-gray-400'
              }`}
            >
              ★
            </motion.span>
          ))}
        </div>

        {/* ============================== */}
        {/* CONTACT FORM */}
        {/* ============================== */}
        <h2 className={`text-3xl font-bold mb-6 ${isAI ? 'text-lime-300' : 'text-orange-600'}`}>
          Contact Me
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Message sent! (backend not implemented)');
          }}
          className={`p-6 rounded-xl shadow-xl max-w-3xl mx-auto space-y-4 ${
            isAI ? 'bg-white/5 border border-white/10 backdrop-blur-xl' : 'bg-white border-gray-200'
          }`}
        >
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className={`w-full p-3 rounded-xl border ${
              isAI ? 'bg-white/10 border-white/20 text-white' : 'bg-white border-gray-300'
            }`}
          />

          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Your email"
            className={`w-full p-3 rounded-xl border ${
              isAI ? 'bg-white/10 border-white/20 text-white' : 'bg-white border-gray-300'
            }`}
          />

          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Your message..."
            className={`w-full p-3 rounded-xl border ${
              isAI ? 'bg-white/10 border-white/20 text-white' : 'bg-white border-gray-300'
            }`}
          />

          <button
            className={`w-full py-3 rounded-xl font-bold text-lg transition-all ${
              isAI
                ? 'bg-lime-400/20 text-lime-300 border border-lime-400'
                : 'bg-orange-600 text-white'
            }`}
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
