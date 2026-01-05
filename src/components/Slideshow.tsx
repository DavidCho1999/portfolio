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
  interval = 4000,
  transition = 'crossfade',
  transitionDuration = 1000
}: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

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
