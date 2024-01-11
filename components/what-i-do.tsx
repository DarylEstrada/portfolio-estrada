"use client";

import { Tilt } from "react-tilt";

interface WhatIDoProps {
  onClick: (isClicked: boolean) => void;
  onClickBack: (isClicked: boolean) => void;
}

export default function WhatIDo({ onClick, onClickBack }: WhatIDoProps) {
  const skills = [
    {
      title: "Front-End Development",
      desc: `I specialize in crafting intuitive and engaging user
      interfaces using the latest technologies. My proficiency in
      React allows me to build interactive single-page applications
      (SPAs) that provide a smooth and enjoyable user experience. I
      am dedicated to creating designs that not only look great but
      also enhance usability.`,
    },

    {
      title: "Back-End Development",
      desc: `As a full-stack developer, I am well-versed in server-side
      development and database management. I utilize tools like
      Node.js and Express to create robust back-end solutions that
      power the functionality of web applications. My goal is to
      build scalable and efficient server architectures.`,
    },

    {
      title: "Full-Stack Proficiency",
      desc: `I enjoy the challenges of working on both the client and
      server sides, ensuring that every aspect of a web application
      functions seamlessly. From designing responsive layouts to
      implementing server logic, I bring a holistic approach to web
      development.`,
    },
  ];

  return (
    <div className="flex flex-col gap-[10px]">
      <p className="font-bold text-[60px] ">What I Do?</p>
      <div className=" pr-[40px] flex flex-col gap-[20px]">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="glass glow p-[20px] flex flex-col gap-[20px] "
          >
            <p className="font-bold text-[20px]">{skill.title}</p>
            <p className=" text-[18px] text-justify">{skill.desc}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center gap-[20px] mt-[20px]">
        <div onClick={() => onClick(true)}>
          <Tilt>
            <div className="glass rounded-[20px] px-[50px] py-[15px] text-center cursor-pointer glow hover:bg-[#7db1f5] hover:text-black">
              EXPLORE
            </div>
          </Tilt>
        </div>
        <div onClick={() => onClickBack(true)}>
          <Tilt>
            <div className="glass rounded-[20px] px-[50px] py-[15px] text-center cursor-pointer glow hover:bg-[#7db1f5] hover:text-black">
              BACK
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}
