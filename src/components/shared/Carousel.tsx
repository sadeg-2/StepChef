import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef, type ReactNode } from "react";
import { useThemeStore } from "../../store/useThemeStore";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  title?: string;
  className?: string;
  itemWidth?: string; // Customizable Tailwind width
}

export function Carousel<T>({
  items,
  renderItem,
  autoplay = true,
  autoplayDelay = 2500,
  loop = true,
  title,
  className = "",
  itemWidth = "flex-[0_0_70%] sm:flex-[0_0_50%] md:flex-[0_0_30%]", // ⭐ same as GalleryCarousel (3 images)
}: CarouselProps<T>) {
  const { theme } = useThemeStore();

  const autoplayPlugin = useRef(
    Autoplay({ delay: autoplayDelay, stopOnInteraction: false })
  );

  const [emblaRef] = useEmblaCarousel(
    { loop, align: "center" },
    autoplay ? [autoplayPlugin.current] : []
  );

  return (
    <section
      className={`relative w-full overflow-hidden py-12 transition-colors duration-700 ${className}`}
    >
      {/* Optional Title */}
      {title && (
        <h2
          className={`text-3xl font-bold text-center mb-10 ${
            theme === "ai" ? "text-orange-400" : "text-orange-600"
          }`}
        >
          {title}
        </h2>
      )}

      {/* CAROUSEL */}
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, i) => (
            <div key={i} className={`${itemWidth} px-4`}>
              {renderItem(item, i)}
            </div>
          ))}
        </div>

        {/* LEFT CINEMATIC SHADOW */}
        <div
          className={`pointer-events-none absolute top-0 left-0 h-full w-40 sm:w-48 transition-all duration-700 ${
            theme === "ai"
              ? "bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"
              : "bg-gradient-to-r from-orange-50 via-white/80 to-transparent"
          }`}
        ></div>

        {/* RIGHT CINEMATIC SHADOW */}
        <div
          className={`pointer-events-none absolute top-0 right-0 h-full w-40 sm:w-48 transition-all duration-700 ${
            theme === "ai"
              ? "bg-gradient-to-l from-slate-950 via-slate-900/80 to-transparent"
              : "bg-gradient-to-l from-orange-50 via-white/80 to-transparent"
          }`}
        ></div>
      </div>
    </section>
  );
}
