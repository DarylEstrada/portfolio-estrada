import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedBlob = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;

    // Create the GSAP animation timeline
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(blob, {
      duration: 2,
      attr: {
        d: "M54.5,-68.3C70,-63.8,81.5,-47,80.9,-30.6C80.2,-14.2,67.4,1.8,57.1,14C46.8,26.2,39.1,34.6,30,44C20.9,53.4,10.4,63.8,0,63.8C-10.5,63.8,-20.9,53.5,-36.2,46.1C-51.5,38.8,-71.6,34.3,-81.2,22.3C-90.7,10.2,-89.8,-9.3,-83.3,-26.3C-76.7,-43.3,-64.6,-57.8,-49.8,-62.6C-35,-67.3,-17.5,-62.5,1,-63.8C19.5,-65.2,39,-72.9,54.5,-68.3Z",
      },
      ease: "power1.inOut",
    });
  }, []);

  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        ref={blobRef}
        fill="#2E7BE1"
        d="M54.5,-68.3C70,-63.8,81.5,-47,80.9,-30.6C80.2,-14.2,67.4,1.8,57.1,14C46.8,26.2,39.1,34.6,30,44C20.9,53.4,10.4,63.8,0,63.8C-10.5,63.8,-20.9,53.5,-36.2,46.1C-51.5,38.8,-71.6,34.3,-81.2,22.3C-90.7,10.2,-89.8,-9.3,-83.3,-26.3C-76.7,-43.3,-64.6,-57.8,-49.8,-62.6C-35,-67.3,-17.5,-62.5,1,-63.8C19.5,-65.2,39,-72.9,54.5,-68.3Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};

export default AnimatedBlob;
