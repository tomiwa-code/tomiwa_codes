declare module "react-hover-video-player" {
  export interface HoverVideoPlayerProps {
    // Define the prop types here
    // Example:
    videoSrc: string;
    pausedOverlay: {};
    style: {};
    loadingOverlay: {};
    unloadVideoOnPaused: boolean;
    disablePictureInPicture: boolean;
    playbackStartDelay: number;
    // ...
  }

  const HoverVideoPlayer: React.FC<HoverVideoPlayerProps>;
  export default HoverVideoPlayer;
}
