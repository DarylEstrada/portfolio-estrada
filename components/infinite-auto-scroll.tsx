"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ILogo {
  src: string;
  height: number;
  width: number;
  gradientColor?: boolean;
}

export const InfiniteAutoScroll = ({ gradientColor }: ILogo) => {
  const logos: ILogo[] = [
    {
      src: "/infinite-scroll-logos/next.png",
      height: 200,
      width: 200,
    },
    {
      src: "/infinite-scroll-logos/vercel.png",
      height: 200,
      width: 200,
    },
    {
      src: "/infinite-scroll-logos/tailwind.png",
      height: 100,
      width: 100,
    },
    {
      src: "/infinite-scroll-logos/React-icon.svg.png",
      height: 100,
      width: 100,
    },
    {
      src: "/infinite-scroll-logos/Angular_full_color_logo.svg.png",
      height: 100,
      width: 100,
    },
    {
      src: "/infinite-scroll-logos/Python-logo-notext.svg.png",
      height: 100,
      width: 100,
    },
    {
      src: "/infinite-scroll-logos/logo-2582748_960_720.webp",
      height: 100,
      width: 100,
    },
    {
      src: "/infinite-scroll-logos/css.webp",
      height: 100,
      width: 100,
    },
    {
      src: "/infinite-scroll-logos/JavaScript-logo.png",
      height: 100,
      width: 100,
    },
    {
      src: "/infinite-scroll-logos/figma-logo.png",
      height: 100,
      width: 100,
    },
    {
      src: "/infinite-scroll-logos/shadcn-white.png",
      height: 100,
      width: 100,
    },
    {
      src: "/infinite-scroll-logos/three.png",
      height: 100,
      width: 100,
    },
    {
      src: "/infinite-scroll-logos/Docker-Logo.png",
      height: 200,
      width: 200,
    },
    {
      src: "/infinite-scroll-logos/Postgresql_elephant.svg.png",
      height: 100,
      width: 100,
    },
  ];

  const [duplicatedLogos, setDuplicatedLogos] = useState<ILogo[]>([]);

  useEffect(() => {
    // Duplicate the logos for seamless looping
    setDuplicatedLogos([...logos, ...logos]);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center px-[40px] py-[100px] text-center w-full">
        {/* <p className="text-4xl font-bold mb-[40px]">
          Who we work <span className="text-[#2E7BE1]">with</span>
        </p> */}
        <div className=" max-w-[1500px] w-full relative overflow-hidden">
          <div
            className={`absolute z-10 bg-gradient-to-r from-[${
              gradientColor ? "#0C131D" : "#10161F"
            }] via-transparent to-transparent w-[50px] md:w-[200px] lg:w-[500px] h-[63px]`}
          ></div>
          <div
            className={`absolute right-0 z-10 bg-gradient-to-l from-[${
              gradientColor ? "#0C131D" : "#10161F"
            }] via-transparent to-transparent w-[50px] md:w-[200px] lg:w-[500px] h-[63px]`}
          ></div>
          <div className="flex items-center gap-[100px] animate-scrolling">
            {duplicatedLogos.map((logo, index) => (
              <Image
                className="brightness-75 hover:brightness-110"
                key={index}
                src={logo.src}
                alt=""
                width={logo.width}
                height={logo.height}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
