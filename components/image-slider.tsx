"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Tilt } from "react-tilt";

const poppinsBold = Poppins({
  subsets: ["latin"],
  weight: "900",
});

const poppinsBold700 = Poppins({
  subsets: ["latin"],
  weight: "700",
});

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionFromTop, setTransitionFromTop] = useState(false);
  const [transitionFromRight, setTransitionFromRight] = useState(false);
  const [transitionFromLeft, setTransitionFromLeft] = useState(false);
  const [transitionNext, setTransitionNext] = useState(false);
  const [transitionNextAuto, setTransitionNextAuto] = useState("");
  const [transitionPrev, setTransitionPrev] = useState(false);
  const [transitionPrevAuto, setTransitionPrevAuto] = useState("");
  const [display, setDisplay] = useState("");
  const [displayPrev, setDisplayPrev] = useState("");

  const teams = [
    {
      backgroundSrc: "/teams/bg-waifu.png",
      profileSrc: "/teams/waifu.png",
      backgroundTag: "DEVELOPER",
      name: "Fami",
      roles: ["UX Architect", "UI Designer", "Engineer"],
      socials: [],
      desc: "Extensive experience creating initial web concepts and solutions using wireframes and rapid to high-fidelity prototypes, then integrating user-centered design, technologies, and business strategy.  By the way, I'm a content creator who combines an imagination when it comes to graphics design, especially posters. ",
    },
    {
      backgroundSrc: "/teams/bg-yes.png",
      profileSrc: "/teams/yes.png",
      backgroundTag: "OWNER",
      name: "Himino",
      roles: ["UX Architect", "UI Designer", "Engineer"],
      socials: [],
      desc: "Extensive experience creating initial web concepts and solutions using wireframes and rapid to high-fidelity prototypes, then integrating user-centered design, technologies, and business strategy.  By the way, I'm a content creator who combines an imagination when it comes to graphics design, especially posters. ",
    },
    {
      backgroundSrc: "/teams/bg-makima.png",
      profileSrc: "/teams/makima.png",
      backgroundTag: "MANAGER",
      name: "Makima",
      roles: ["UX Architect", "UI Designer", "Engineer"],
      socials: [],
      desc: "Extensive experience creating initial web concepts and solutions using wireframes and rapid to high-fidelity prototypes, then integrating user-centered design, technologies, and business strategy.  By the way, I'm a content creator who combines an imagination when it comes to graphics design, especially posters. ",
    },
    {
      backgroundSrc: "/teams/bg-kawai.png",
      profileSrc: "/teams/kawai.png",
      backgroundTag: "QUALITY",
      name: "Kobeni",
      roles: ["UX Architect", "UI Designer", "Engineer"],
      socials: [],
      desc: "Extensive experience creating initial web concepts and solutions using wireframes and rapid to high-fidelity prototypes, then integrating user-centered design, technologies, and business strategy.  By the way, I'm a content creator who combines an imagination when it comes to graphics design, especially posters. ",
    },
    {
      backgroundSrc: "/teams/new.png",
      profileSrc: "/teams/new-w-bg.png",
      backgroundTag: "DESIGNER",
      name: "Son Goku",
      roles: ["UX Architect", "UI Designer", "Engineer"],
      socials: [],
      desc: "Extensive experience creating initial web concepts and solutions using wireframes and rapid to high-fidelity prototypes, then integrating user-centered design, technologies, and business strategy.  By the way, I'm a content creator who combines an imagination when it comes to graphics design, especially posters. ",
    },
  ];

  const handleNext = () => {
    setTransitionFromTop(true);
    setTransitionFromRight(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teams.length);
    }, 600);
    setTimeout(() => {
      setTransitionFromRight(false);
      setTransitionNextAuto("translate-x-[110rem]");
      setDisplay("hidden");
      setTransitionNext(true);
    }, 700);
    setTimeout(() => {
      setTransitionFromTop(false);
      setDisplay("flex");
    }, 800);
    setTimeout(() => {
      setTransitionNextAuto("");
      setTransitionNext(false);
    }, 900);
  };

  const handlePrev = () => {
    setTransitionFromTop(true);
    setTransitionFromLeft(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + teams.length) % teams.length
      );
    }, 600);
    setTimeout(() => {
      setTransitionFromLeft(false);
      setTransitionPrevAuto("-translate-x-[300rem]");
      setDisplayPrev("hidden");
      setTransitionPrev(true);
    }, 700);
    setTimeout(() => {
      setTransitionFromTop(false);
      setDisplayPrev("flex");
    }, 800);
    setTimeout(() => {
      setTransitionPrevAuto("");
      setTransitionPrev(false);
    }, 900);
  };

  const currentTeam = teams[currentIndex];
  const prevTeam = teams[(currentIndex - 1 + teams.length) % teams.length];
  const nextTeam = teams[(currentIndex + 1) % teams.length];
  const prev2Team = teams[(currentIndex - 2 + teams.length) % teams.length];
  const next2Team = teams[(currentIndex + 2) % teams.length];

  return (
    <>
      <div
        className="w-full max-w- h-[1100px] overflow-hidden"
        style={{ zoom: 0.7 }}
      >
        <div className=" glass ">
          <div className="relative flex items-center justify-center lg:px-[200px] w-full h-[900px]">
            <div
              className={`${
                transitionFromTop
                  ? "-translate-y-[26rem] duration-300"
                  : "translate-y-10 duration-300"
              } transition-transform transform  ease-out flex items-center justify-center absolute top-[-100px]  text-[410px] font-[900px] text-white opacity-30 leading-normal tracking-[-12.314px] ${
                poppinsBold.className
              }`}
            >
              <p> {currentTeam.backgroundTag}</p>
            </div>
            <div
              className={`
              ${
                transitionFromRight
                  ? "-translate-x-[110rem]"
                  : ` ${transitionNextAuto} ${display} ${
                      transitionNext ? "translate-x-[0rem]" : ""
                    } duration-1000`
              } 
              ${
                transitionFromLeft
                  ? "translate-x-[110rem]"
                  : ` ${transitionPrevAuto} ${displayPrev} ${
                      transitionPrev ? "translate-x-[-110rem]" : ""
                    } duration-1000`
              } duration-1000 transition-transform transform ease-out absolute w-[1750px]  h-full `}
            >
              <Image
                className="grayscale"
                src={currentTeam.backgroundSrc}
                alt={""}
                fill
              />
            </div>
            <div className="absolute bottom-[-50px] z-30">
              <div className="flex items-center justify-center gap-[40px]">
                <div className="hidden lg:flex gap-[50px] items-center">
                  {prev2Team && (
                    <div className="glow-blue-sm rounded-full w-[110px] h-[110px]">
                      <Image
                        className="rounded-full object-cover w-[110px] h-[110px]  grayscale"
                        src={prev2Team.profileSrc}
                        alt=""
                        width={110}
                        height={110}
                      />
                    </div>
                  )}
                  {prevTeam && (
                    <div className="glow-blue-sm rounded-full lg:cursor-pointer">
                      <Image
                        onClick={handlePrev}
                        className="rounded-full glow object-cover w-[140px] h-[140px] grayscale"
                        src={prevTeam.profileSrc}
                        alt=""
                        width={140}
                        height={140}
                      />
                    </div>
                  )}
                </div>

                <div
                  className={` glass-black  glow text-white relative glow-blue rounded-[10px] w-full max-w-[700px] py-5 px-10`}
                >
                  <div className="w-full flex justify-center items-center">
                    <Image
                      className="absolute object-cover w-[251px] h-[251px] top-[-125.5px] lg:left-[40px] rounded-[10px] grayscale"
                      src={currentTeam.profileSrc}
                      alt={""}
                      width={251}
                      height={251}
                    />
                  </div>
                  <div className="flex lg:justify-between mb-[35px]">
                    <div className="lg:w-[251px] hidden lg:flex"></div>
                    <div className="mt-[120px] lg:mt-0 w-full lg:w-[55%]">
                      <p className={` text-[36px] ${poppinsBold700.className}`}>
                        {currentTeam.name}
                      </p>

                      <div className="flex gap-x-[20px] items-center  text-[20px] font-bold">
                        {currentTeam.backgroundTag}
                      </div>
                    </div>
                  </div>
                  <div className=" text-justify text-[18px] font-normal">
                    <p>{currentTeam.desc}</p>
                  </div>
                </div>

                <div className="hidden lg:flex items-center gap-[50px]">
                  {nextTeam && (
                    <div
                      className={`glow-blue-sm rounded-full lg:cursor-pointer`}
                    >
                      <Image
                        onClick={handleNext}
                        className="rounded-full glow object-cover w-[140px] h-[140px]  grayscale"
                        src={nextTeam.profileSrc}
                        alt=""
                        width={140}
                        height={140}
                      />
                    </div>
                  )}
                  {next2Team && (
                    <div className="glow-blue-sm rounded-full">
                      <Image
                        className="rounded-full object-cover w-[110px] h-[110px]  grayscale"
                        src={next2Team.profileSrc}
                        alt=""
                        width={110}
                        height={110}
                      />
                    </div>
                  )}
                </div>
                <div className="flex gap-[20px] absolute bottom-[-80px]">
                  <div
                    onClick={handlePrev}
                    className="glass glow w-[80px] h-[40px] flex items-center justify-center rounded-[10px] lg:cursor-pointer"
                  >
                    <ArrowLeft width={25} height={25} />
                  </div>
                  <div
                    onClick={handleNext}
                    className="glass glow w-[80px] h-[40px] flex items-center justify-center rounded-[10px] lg:cursor-pointer"
                  >
                    <ArrowRight width={25} height={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
