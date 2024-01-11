"use client";

import Banner from "@/components/banner";
import BrickBreaker from "@/components/brick-breaker";
import WhatIDo from "@/components/what-i-do";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [bannerClick, setBannerClick] = useState(false);
  const [whatIDoclick, setWhatIDoclick] = useState(false);
  const [click, setClick] = useState(false);

  const onClickBanner = (isClicked: boolean) => {
    setBannerClick(isClicked);
  };

  const onClickWhatIDo = (isClicked: boolean) => {
    setWhatIDoclick(isClicked);
  };

  const onClickWhatIDoBack = (isClicked: boolean) => {
    setWhatIDoclick(isClicked);
  };

  return (
    <main className=" relative background max-w-[1920px]  w-screen h-screen overflow-hidden flex flex-col justify-center items-center ">
      {/* <div className="relative z-[1] flex items-center"> */}

      <div className="h-[1080px] w-full overflow-hidden flex flex-col justify-center py-[100px] px-[50px]">
        <div
          className={`transition-transform transform custom-duration ease-out ${
            bannerClick ? "-translate-y-[300px]" : "translate-y-[750px]"
          }
        `}
        >
          <Banner onClick={onClickBanner} />
        </div>

        <div
          className={`transition-transform transform custom-duration ease-out ${
            bannerClick
              ? `${
                  whatIDoclick ? "-translate-y-[1000px]" : "translate-y-[120px]"
                }`
              : "translate-y-[1200px]"
          }
        `}
        >
          <div className="flex w-full items-center justify-between px-[100px]">
            <WhatIDo
              onClick={onClickWhatIDo}
              onClickBack={onClickWhatIDoBack}
            />
            <BrickBreaker />
          </div>
        </div>

        <div
          className={`transition-transform transform custom-duration ease-out ${
            bannerClick
              ? `${
                  whatIDoclick ? "-translate-y-[630px]" : "translate-y-[500px]"
                }`
              : "translate-y-[1200px]"
          }
        `}
        >
          <div className="flex w-full items-center justify-between px-[100px]">
            <WhatIDo
              onClick={onClickWhatIDo}
              onClickBack={onClickWhatIDoBack}
            />
            <BrickBreaker />
          </div>
        </div>
      </div>

      {/* <div className="glass p-[10px] h-[700px] w-full">
          <div className="cursor-grab animate-bounce rounded-full">
            <Draggable>
              <LocateFixed width={50} height={50} />
            </Draggable>
          </div>
        </div>
      </div>

     <div>
        <div className="absolute left-0 top-0 z-0 w-[100] h-[50] cursor-grab spin rounded-full">
          <Draggable>
            <Image width={50} height={50} src={"/imgs/rock-3.png"} alt={""} />
          </Draggable>
        </div>

        <div className="absolute left-0 top-[100px] z-0 w-[50] h-[50] cursor-grab spin rounded-full">
          <Draggable>
            <Image width={50} height={50} src={"/imgs/rock-2.png"} alt={""} />
          </Draggable>
        </div>

        <div className="absolute left-0 top-[200px] z-0 w-[50] h-[50] cursor-grab spin rounded-full">
          <Draggable>
            <Image width={50} height={50} src={"/imgs/rock-1.png"} alt={""} />
          </Draggable>
        </div>

        <div className="absolute left-0 top-[300px] z-0 w-[50] h-[50] cursor-grab spin rounded-full">
          <Draggable>
            <Image width={50} height={50} src={"/imgs/rock-3.png"} alt={""} />
          </Draggable>
        </div>

        <div className="absolute left-0 top-[400px] z-0 w-[50] h-[50] cursor-grab spin rounded-full">
          <Draggable>
            <Image width={50} height={50} src={"/imgs/rock-1.png"} alt={""} />
          </Draggable>
        </div>

        <div className="absolute left-0 top-[500px] z-0 w-[50] h-[50] cursor-grab spin rounded-full">
          <Draggable>
            <Image width={50} height={50} src={"/imgs/rock-2.png"} alt={""} />
          </Draggable>
        </div>

        <div className="absolute left-0 top-[600px] z-0 w-[50] h-[50] cursor-grab spin rounded-full">
          <Draggable>
            <Image width={50} height={50} src={"/imgs/rock-3.png"} alt={""} />
          </Draggable>
        </div>

        <div className="absolute left-0 top-[700px] z-0 w-[50] h-[50] cursor-grab spin rounded-full">
          <Draggable>
            <Image width={50} height={50} src={"/imgs/rock-1.png"} alt={""} />
          </Draggable>
        </div>

        <div className="absolute left-0 top-[800px] z-0 w-[50] h-[50] cursor-grab spin rounded-full">
          <Draggable>
            <Image width={50} height={50} src={"/imgs/rock-2.png"} alt={""} />
          </Draggable>
        </div>
      </div> */}
    </main>
  );
}
