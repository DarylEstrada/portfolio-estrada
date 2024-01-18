"use client";

import Image from "next/image";
import { Tilt } from "react-tilt";
import TiltedCard from "./tilted-card";
import IconContainer from "./test";

interface BannerProps {
  onClick: (isClicked: boolean) => void;
}

export default function Banner({ onClick }: BannerProps) {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.10,.52)", // Easing on enter/exit.
  };

  const projects = [
    {
      title: "JAIROSOFT",
      company: "Jairosoft Inc.",
      src: "/imgs/jairosoft.png",
      link: "https://jairosoft.vercel.app/",
    },

    {
      title: "SUGCON SITECORE",
      company: "Jairosoft Inc.",
      src: "/imgs/sugcon.png",
      link: "https://sugcon.vercel.app/",
    },

    {
      title: "JAIROJOBS",
      company: "Jairosoft Inc.",
      src: "/imgs/jairojobs.png",
      link: "https://jairojobs.com/jobs",
    },

    {
      title: "TRUSPACE",
      company: "Stevensons System",
      src: "/imgs/truspace.png",
      link: "https://truspace.com/",
    },
  ];

  const onNavigate = (url: string) => {
    return window.open(url, "_blank");
  };

  return (
    <>
      <div className=" w-full h-[500px] p-[20px] flex flex-col xl:flex-row items-center  gap-[50px]">
        <div>
          <div className="leading-[65px]">
            <p className="text-[30px] font-semibold">Hi, I&apos;m</p>
            <div className="w-[752px]">
              <Tilt options={defaultOptions}>
                <p className="text-[90px] font-bold mb-[20px] glass p-[20px] w-[725px] cursor-pointer glow">
                  DARYL ESTRADA
                </p>
              </Tilt>
            </div>
            <p className="text-[50px] font-semibold typing-demo  flex items-center">
              I&apos;m a Fullstack Web Developer
            </p>
          </div>

          <div className="w-full flex items-center justify-center mt-[100px]">
            <div
            // onClick={() => onClick(true)}
            >
              <Tilt>
                <div className="glass rounded-[20px] px-[50px] py-[15px] text-center cursor-pointer glow hover:bg-[#7db1f5] hover:text-black">
                  EXPLORE
                </div>
              </Tilt>
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-col gap-[30px] ">
          {/* <div className="flex flex-col gap-[20px] glass p-[50px] glow"> */}
          {/* <div className="cursor-grab animate-bounce rounded-full">
            <Draggable>
              <LocateFixed width={50} height={50} />
            </Draggable>
          </div> */}
          {/* <p className="text-[60px] max-w-[600px] w-full font-bold leading-[60px]">
              Welcome to My Creative Universe!
            </p> */}

          {/* <p className="text-[25px] text-justify max-w-[1000px]">
              Unveiling a world of innovation, design, and creativity. Dive into
              a symphony of artistry and functionality where pixels meet
              purpose. Explore my portfolio and witness the fusion of passion
              and precision. Let&apos;s craft stories, shape experiences, and
              redefine possibilities together.
            </p> */}
          {/* </div> */}
          <p className="text-[30px]">PROJECTS:</p>
          <div className="flex flex-wrap gap-[20px] justify-center">
            {projects.map((project, index) => (
              <Tilt key={index}>
                <div
                  onClick={() => onNavigate(project.link)}
                  className="p-[10px] glass min-w-[200px] flex flex-col gap-[20px] glow cursor-pointer"
                >
                  <Image
                    src={project.src}
                    alt={""}
                    width={1182}
                    height={400}
                    className="object-cover rounded-[20px] w-[200px] h-[100px]"
                  />

                  <div>
                    <p className="font-bold text-[20px]">{project.title}</p>
                    <p>{project.company}</p>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
