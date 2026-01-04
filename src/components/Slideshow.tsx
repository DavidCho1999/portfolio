import { useState, useEffect } from 'react';

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
  interval = 3000,
  transition = 'none',
  transitionDuration = 1000
}: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1 % images.length);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (transition === 'crossfade') {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          setNextIndex((prevIndex) => (prevIndex + 2) % images.length);
          setIsTransitioning(false);
        }, transitionDuration);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, transition, transitionDuration]);

  if (transition === 'crossfade') {
    return (
      <div className="relative w-full h-auto">
        {/* Current image */}
        <img
          src={images[currentIndex]}
          alt={`${alt} - ${currentIndex + 1}`}
          className="w-full h-auto transition-opacity"
          style={{
            opacity: isTransitioning ? 0 : 1,
            transitionDuration: `${transitionDuration}ms`
          }}
        />
        {/* Next image (positioned absolutely) */}
        <img
          src={images[nextIndex]}
          alt={`${alt} - ${nextIndex + 1}`}
          className="absolute top-0 left-0 w-full h-auto transition-opacity"
          style={{
            opacity: isTransitioning ? 1 : 0,
            transitionDuration: `${transitionDuration}ms`
          }}
        />
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
    </div>
  );
};

export default Slideshow;
