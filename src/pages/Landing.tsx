import AiIntro from '../components/AiIntro';
import GalleryCarousel from '../components/GalleryCarousel';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import QuotesSection from '../components/QuotesSection';

export default function Landing() {
  return (
    <div className="flex flex-col items-center">
      {/* 🌟 Hero Section */}
      <HeroSection />
      <AiIntro />
      {/* 💡 Feature Highlights */}
      <section className="py-20 bg-white w-full">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Why <span className="text-orange-500">StepChef</span>?
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition bg-orange-50">
              <div className="text-5xl mb-4">👨‍🍳</div>
              <h3 className="text-xl font-semibold mb-2">Step-by-Step Cooking</h3>
              <p className="text-gray-600">
                Follow guided steps at your own pace, never miss a detail while learning.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition bg-green-50">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-xl font-semibold mb-2">Smart Tracking</h3>
              <p className="text-gray-600">
                Track your progress while you cook and resume anytime effortlessly.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition bg-yellow-50">
              <div className="text-5xl mb-4">🍝</div>
              <h3 className="text-xl font-semibold mb-2">Learn New Recipes</h3>
              <p className="text-gray-600">
                Discover global dishes daily powered by our rich meal API.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 🖼️ Visual Gallery */}
      <GalleryCarousel /> {/* new carousel */}
      <QuotesSection />
      <HowItWorks />
      {/* 🚀 CTA */}
      <section className="py-20 mt-20 bg-white text-center w-full">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Cook Smarter?</h2>
        <p className="text-gray-600 mb-8">
          Join StepChef and start your journey toward confident, guided cooking.
        </p>
        <a
          href="/home"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl shadow-lg transition text-lg font-semibold"
        >
          Get Started 🍳
        </a>
      </section>
    </div>
  );
}
