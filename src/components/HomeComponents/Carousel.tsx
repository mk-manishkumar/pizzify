import  { useState, useEffect } from "react";

const carouselImages = ["/carouselImages/carousel-1.jpg", "/carouselImages/carousel-2.jpg", "/carouselImages/carousel-3.jpg"];

export const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    
  }, [])
  



  return (
    <div className="relative w-full mx-auto h-96 overflow-hidden">
      {carouselImages.map((image) => (
        <div key={image} className="w-full  transition-opacity duration-500 ease-in-out">
          <img src={image} alt={`Carousel`} className="w-full h-auto object-cover" />
        </div>
      ))}

      {/* Controls */}
      <button className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20 hidden md:block" aria-label="Previous Slide">
        ‹
      </button>

      <button className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20 hidden md:block" aria-label="Next Slide">
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
        {carouselImages.map((img, index) => (
          <button key={img} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full border ${index === current ? "bg-white" : "bg-white/40"}`} />
        ))}
      </div>
    </div>
  );
};
