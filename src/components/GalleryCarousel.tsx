import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useThemeStore } from '../store/useThemeStore';

const images = [
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80',
  'https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1000&q=80',
];

export default function GalleryCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [
    Autoplay({ delay: 2500, stopOnInteraction: false }),
  ]);
  const { theme } = useThemeStore();

  return (
    <section
      className={`relative w-screen overflow-hidden py-24 transition-colors duration-700 ${
        theme === 'ai'
          ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'
          : 'bg-gradient-to-b from-orange-50 to-green-50 text-gray-900'
      }`}
    >
      <h2
        className={`text-4xl font-bold text-center mb-12 ${
          theme === 'ai' ? 'text-orange-400' : 'text-orange-600'
        }`}
      >
        Explore <span className="text-lime-400">Cooking Magic</span>
      </h2>

      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div key={i} className="flex-[0_0_80%] sm:flex-[0_0_60%] md:flex-[0_0_40%] px-4">
              <img
                src={src}
                alt={`slide-${i}`}
                className={`w-full h-[320px] md:h-[400px] object-cover rounded-2xl shadow-2xl ${
                  theme === 'ai' ? 'opacity-90 ring-1 ring-white/10' : ''
                }`}
              />
            </div>
          ))}
        </div>

        {/* 🎬 Cinematic gradient edges for both themes */}
        <div
          className={`pointer-events-none absolute top-0 left-0 h-full w-48 transition-all duration-700 ${
            theme === 'ai'
              ? 'bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent'
              : 'bg-gradient-to-r from-orange-50 via-white/80 to-transparent'
          }`}
        ></div>
        <div
          className={`pointer-events-none absolute top-0 right-0 h-full w-48 transition-all duration-700 ${
            theme === 'ai'
              ? 'bg-gradient-to-l from-slate-950 via-slate-900/80 to-transparent'
              : 'bg-gradient-to-l from-orange-50 via-white/80 to-transparent'
          }`}
        ></div>
      </div>
    </section>
  );
}
