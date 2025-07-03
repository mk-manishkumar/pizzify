import { useState, useEffect } from "react";

const carouselImages = ["/carouselImages/carousel-1.jpg", "/carouselImages/carousel-2.jpg", "/carouselImages/carousel-3.jpg"];

export const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  const goToSlide = (index: number) => setCurrent(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full md:aspect-[16/5] aspect-[16/6] overflow-hidden">
      {carouselImages.map((image, index) => (
        <div key={image} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
          <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
        </div>
      ))}

      {/* Controls */}
      <button onClick={prevSlide} className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20 hidden md:block" aria-label="Previous Slide">
        ‹
      </button>

      <button onClick={nextSlide} className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20 hidden md:block" aria-label="Next Slide">
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
        {carouselImages.map((img, index) => (
          <button key={img} onClick={() => goToSlide(index)} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full border ${index === current ? "bg-white" : "bg-white/40"}`} />
        ))}
      </div>
    </div>
  );
};
