import { useRef, useEffect } from "react";

export default function VideoContainer() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked, just leave it paused
      });
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh", background: "#000" }}>
      <video
        ref={videoRef}
        src="/videos/wcc.webm"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        controls
        muted
        loop
        playsInline
      />
    </div>
  );
}