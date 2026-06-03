"use client";

import { introLogoMedia } from "@/content/media";
import { useEffect, useState } from "react";

export function IntroSplash() {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fallbackTimer = window.setTimeout(() => {
      closeIntro();
    }, 5200);

    return () => window.clearTimeout(fallbackTimer);
  }, []);

  function closeIntro() {
    setIsLeaving(true);
    window.setTimeout(() => setIsVisible(false), 720);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`intro-splash${isLeaving ? " is-leaving" : ""}`}>
      <div className="intro-frame" aria-label="株式会社ルデラ ロゴモーション">
        <video
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={closeIntro}
          onError={closeIntro}
        >
          <source src={introLogoMedia.webm} type="video/webm" />
          <source src={introLogoMedia.mp4} type="video/mp4" />
        </video>
      </div>
      <button type="button" className="intro-skip" onClick={closeIntro}>
        skip
      </button>
    </div>
  );
}
