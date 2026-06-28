interface VideoPlayerProps {
  src: string;
}

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  return (
    <video
      src={src}
      className="w-full h-auto"
      controls
      playsInline
      preload="metadata"
    />
  );
};

export default VideoPlayer;
