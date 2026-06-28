interface VideoPlayerProps {
  src: string;
}

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  return (
    <video
      src={src}
      className="w-full h-auto"
      controls
      autoPlay
      muted
      loop
      playsInline
    />
  );
};

export default VideoPlayer;
