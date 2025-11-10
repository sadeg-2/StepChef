import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const images = [
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
  'https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
  'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
];

export default function GalleryCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [
    Autoplay({ delay: 2500, stopOnInteraction: false }),
  ]);

  return (
    <section className="relative w-screen overflow-hidden bg-linear-to-b from-orange-50 to-green-50 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Explore <span className="text-orange-500">Cooking Magic</span>
      </h2>

      {/* Embla Carousel Container */}
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div key={i} className="flex-[0_0_80%] sm:flex-[0_0_60%] md:flex-[0_0_40%] px-4">
              <img
                src={src}
                alt={`slide-${i}`}
                className="w-full h-[300px] md:h-90 object-cover rounded-2xl shadow-xl"
              />
            </div>
          ))}
        </div>

        {/* 🎬 Cinematic gradient edges */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-48 bg-gradient-to-r from-orange-50 via-orange-50/80 to-transparent"></div>
        <div className="pointer-events-none absolute top-0 right-0 h-full w-48 bg-gradient-to-l from-orange-50 via-orange-50/80 to-transparent"></div>
      </div>
    </section>
  );
}
