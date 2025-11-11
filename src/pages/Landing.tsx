import AiIntro from "../components/AiIntro";
import GalleryCarousel from "../components/GalleryCarousel";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import QuotesSection from "../components/QuotesSection";
import { useThemeStore } from "../store/useThemeStore";

export default function Landing() {
  const { theme } = useThemeStore();

  return (
    <div
      className={`flex flex-col items-center overflow-hidden transition-colors duration-700 ${
        theme === "ai"
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
          : "bg-gradient-to-b from-white via-orange-50 to-green-50 text-gray-900"
      }`}
    >
      <HeroSection />
      <AiIntro />

      {/* Highlights */}
      <section
        className={`py-24 w-full ${
          theme === "ai" ? "bg-transparent" : "bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2
            className={`text-4xl font-bold mb-14 ${
              theme === "ai" ? "text-orange-400" : "text-orange-500"
            }`}
          >
            Why <span className="text-lime-400">StepChef</span>?
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: "👨‍🍳",
                title: "Step-by-Step Cooking",
                desc: "Follow guided steps at your own pace, never miss a detail while learning.",
              },
              {
                icon: "⏱️",
                title: "Smart Tracking",
                desc: "Track your progress while you cook and resume anytime effortlessly.",
              },
              {
                icon: "🍝",
                title: "Learn New Recipes",
                desc: "Discover global dishes daily powered by our rich meal API.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform backdrop-blur-xl ${
                  theme === "ai"
                    ? "bg-white/10 border border-white/10 hover:border-orange-400/40"
                    : "bg-orange-50"
                }`}
              >
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p
                  className={`${
                    theme === "ai" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GalleryCarousel />
      <QuotesSection />
      <HowItWorks />

      {/* CTA */}
      <section className="py-28 mt-20 text-center w-full relative">
        <div
          className={`absolute inset-0 ${
            theme === "ai"
              ? "bg-gradient-to-b from-slate-900/60 via-slate-950/60 to-slate-900/60"
              : "bg-white"
          }`}
        ></div>
        <div className="relative z-10">
          <h2
            className={`text-4xl font-bold mb-6 ${
              theme === "ai" ? "text-orange-400" : "text-gray-900"
            }`}
          >
            Ready to Cook Smarter?
          </h2>
          <p
            className={`mb-8 ${
              theme === "ai" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Join StepChef and start your journey toward confident, guided cooking.
          </p>
          <a
            href="/home"
            className={`px-10 py-4 rounded-xl text-lg font-semibold shadow-xl transition ${
              theme === "ai"
                ? "bg-orange-500/90 hover:bg-orange-400 text-white"
                : "bg-orange-500 hover:bg-orange-600 text-white"
            }`}
          >
            Get Started 🍳
          </a>
        </div>
      </section>
    </div>
  );
}
