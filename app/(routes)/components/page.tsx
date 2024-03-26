"use client";

import BlogForm from "@/components/blog-form";
import BrickBreaker from "@/components/brick-breaker";
import Dashboard from "@/components/dashboard";
import { ImageSlider } from "@/components/image-slider";
import { InfiniteAutoScroll } from "@/components/infinite-auto-scroll";
import Test from "@/components/test";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { RecoilRoot } from "recoil";

export default function Components() {
  const [bannerClick, setBannerClick] = useState(false);

  const onClickBanner = (isClicked: boolean) => {
    setBannerClick(isClicked);
  };

  return (
    <>
      <RecoilRoot>
        <div className="relative background max-w-[1920px]  w-screen h-screen overflow-hidden flex flex-col justify-center items-center">
          {/* <div className="h-[1080px] w-full  flex-col justify-center overflow-hidden py-[100px] px-[50px] hidden min-[1920px]:flex">
            <div
              className={`transition-transform transform custom-duration ease-out ${
                bannerClick ? "-translate-y-[1000px]" : "translate-y-[340px]"
              }
        `}
            >
              <div className="flex flex-col px-[100px]">
                <p className="font-bold text-[60px]">My Components:</p>
                <div className="flex w-full items-center justify-between ">
                  
                </div>
              </div>
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
                <BrickBreaker />
              </div>
            </div>
          </div> */}
          <div className="flex flex-col px-[100px]">
            <p className="font-bold text-[60px]">My Components:</p>
            <div className="flex flex-col gap-[50px] max-h-[800px] overflow-y-scroll p-[50px]">
              <div className="flex gap-[50px] w-full items-center justify-between">
                <div>
                  <Dashboard onClick={onClickBanner} />
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
                <BrickBreaker />
              </div>
              <div className="flex flex-col gap-[50px]">
                <div className="max-w-[1000px] w-full">
                  <BlogForm />
                </div>
                <div className="max-w-[2200px]">
                  <p className="text-2xl font-bold text-start mb-[15px]">
                    Image Slider
                  </p>
                  <ImageSlider />
                  <InfiniteAutoScroll src={""} height={0} width={0} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </RecoilRoot>
    </>
  );
}
