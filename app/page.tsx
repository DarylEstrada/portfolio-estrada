"use client";

import Banner from "@/components/banner";
import BannerSmall from "@/components/banner-small-device";
import BrickBreaker from "@/components/brick-breaker";
import Test from "@/components/test";
import WhatIDo from "@/components/what-i-do";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";

export default function Home() {
  const [bannerClick, setBannerClick] = useState(false);
  const [whatIDoclick, setWhatIDoclick] = useState(false);
  const [click, setClick] = useState(false);

  const onClickBanner = (isClicked: boolean) => {
    setBannerClick(isClicked);
  };

  const onClickWhatIDo = (isClicked: boolean) => {
    setWhatIDoclick(isClicked);
    setBannerClick(false);
  };

  const onClickWhatIDoBack = (isClicked: boolean) => {
    setWhatIDoclick(isClicked);
  };

  return (
    <RecoilRoot>
      <main className=" relative background max-w-[1920px]  w-screen h-screen overflow-hidden flex flex-col justify-center items-center ">
        {/* <div className="relative z-[1] flex items-center"> */}

        <div className="h-[1080px] w-full  flex-col justify-center overflow-hidden py-[100px] px-[50px] hidden min-[1920px]:flex">
          <div
            className={`transition-transform transform custom-duration ease-out ${
              bannerClick ? "-translate-y-[1000px]" : "translate-y-[370px]"
            }
        `}
          >
            <Banner onClick={onClickBanner} />
          </div>

          <div
            className={`transition-transform transform custom-duration ease-out ${
              bannerClick ? `-translate-y-[250px]` : "translate-y-[1000px]"
            }
        `}
          >
            <div className="flex w-full items-center justify-between px-[100px]">
              <WhatIDo
                onClick={onClickWhatIDo}
                onClickBack={onClickWhatIDoBack}
              />
              {/* <BrickBreaker /> */}
            </div>
          </div>
        </div>

        <div className="flex h-full w-full overflow-scroll min-[1920px]:hidden">
          <BannerSmall onClick={onClickBanner} />
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
    </RecoilRoot>
  );
}
