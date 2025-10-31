import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { animeList } from "../Constants";

// Register the plugin correctly
gsap.registerPlugin(ScrollTrigger);

const VideDis = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const videos = gsap.utils.toArray(".video-item");

      videos.forEach((video) => {
        ScrollTrigger.create({
          trigger: video,
          start: "top center",
          end: "bottom center",
          onEnter: () => video.play(),
          onLeave: () => video.pause(),
          onEnterBack: () => video.play(),
          onLeaveBack: () => video.pause(),
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="w-full min-h-screen mt-110 bg-red-700">
      <div className="flex  mb-8">
        <h1 className="text-8xl text-white">Top Anime's</h1>
      </div>

      <div
        ref={containerRef}
        className="flex flex-row-reverse flex-wrap gap-8 justify-center"
      >
        {animeList.map((item) => (
          <div
            key={item.id}
            className="box-border w-3xl min-w-3xl rounded-4xl bg-transparent flex flex-col items-center"
          >
            <video
              src={item.video}
              // ✅ FIX: Completed the Tailwind class from 'mt-' to 'mt-0' or removed it
              className="video-item w-full aspect-video rounded-4xl bg-amber-50"
              loop
              muted
              playsInline
            />
            {/* ✅ FIX: Adjusted logo size for better visibility */}
            <img src={item.logo} alt={item.alt} className="mt-4 w-48 h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideDis;
