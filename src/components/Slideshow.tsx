import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideshowProps {
  images: string[];
  alt: string;
  interval?: number;
  transition?: 'crossfade' | 'fade' | 'none';
  transitionDuration?: number;
}

const Slideshow = ({
  images,
  alt,
  interval = 4000,
  transition = 'crossfade',
  transitionDuration = 1000
}: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    // Re-arm on each index change so manual navigation resets the timer.
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearTimeout(timer);
  }, [currentIndex, images.length, interval]);

  const goToPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const goToNext = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const arrows = images.length > 1 && (
    <>
      <button
        type="button"
        aria-label="Previous image"
        onClick={goToPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/70 hover:bg-white text-black transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/70 hover:bg-white text-black transition-colors"
      >
        <ChevronRight size={20} />
      </button>
    </>
  );

  if (transition === 'crossfade') {
    return (
      <div className="relative w-full h-auto">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${alt} - ${index + 1}`}
            className="w-full h-auto transition-opacity ease-in-out absolute top-0 left-0"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              transitionDuration: `${transitionDuration}ms`,
              position: index === 0 ? 'relative' : 'absolute'
            }}
          />
        ))}
        {arrows}
      </div>
    );
  }

  // Default: no transition
  return (
    <div className="relative w-full h-auto">
      <img
        src={images[currentIndex]}
        alt={`${alt} - ${currentIndex + 1}`}
        className="w-full h-auto"
      />
      {arrows}
    </div>
  );
};

export default Slideshow;
