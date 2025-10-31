import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import VideDis from "./VideDis";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const headSplit = new SplitText("#heading", { type: "chars,words" });

    gsap.from(headSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.02,
    });
  }, []);

  return (
    <div className="w-full h-full justify-center items-center text-center">
      <div className="mt-30">
        <h1 id="heading">
          Looking For Some Good Anime's to watch,We are here to recommend you
          the Best!!
        </h1>
      </div>
    </div>
  );
};

export default Hero;
