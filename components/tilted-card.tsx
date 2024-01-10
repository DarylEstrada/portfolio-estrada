"use client";

import Image from "next/image";
import { Tilt } from "react-tilt";

export default function TiltedCard() {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <>
      <div className="w-full">
        <Tilt options={defaultOptions}>
          <div className="w-full h-[500px] rounded-[50px] glow p-[50px] glass">
            {/* <Image
          className="object-cover"
          src={"/imgs/circle-me.png"}
          alt={""}
          width={200}
          height={209}
        /> */}
            <div>
              <p className="text-[30px] font-light">Hi I am</p>
              <div className="text-[90px] font-extrabold leading-[75px] ">
                <p>DARYL</p>
                <p>ESTRADA</p>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </>
  );
}
