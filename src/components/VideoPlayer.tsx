import { useRef, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
  pauseDuration?: number; // in milliseconds, default 500ms
}

const VideoPlayer = ({ src, pauseDuration = 500 }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay was prevented:', error);
      });
    }
  }, []);

  const handleVideoEnd = () => {
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }, pauseDuration);
  };

  return (
    <video
      ref={videoRef}
      src={src}
      className="w-full h-auto"
      autoPlay
      muted
      playsInline
      onEnded={handleVideoEnd}
    />
  );
};

export default VideoPlayer;
