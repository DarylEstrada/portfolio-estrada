"use client";

import Banner from "@/components/banner";
import { LocateFixed, Plus } from "lucide-react";
import Image from "next/image";
import Draggable from "react-draggable";

export default function Home() {
  const starPositions = [
    {
      left: 100,
      top: 100,
    },
    {
      left: 100,
      top: 200,
    },
    {
      left: 300,
      top: 300,
    },
    {
      left: 400,
      top: 400,
    },
    {
      left: 500,
      top: 500,
    },
    {
      left: 600,
      top: 600,
    },
  ];

  return (
    <main className=" relative background max-w-[1920px] flex flex-col justify-center w-screen h-screen overflow-hidden py-[100px] px-[50px]">
      <div className="relative z-[1] flex items-center gap-[50px]">
        <Banner />
        {/* <div className="glass p-[10px] h-[700px] w-full">
          <div className="cursor-grab animate-bounce rounded-full">
            <Draggable>
              <LocateFixed width={50} height={50} />
            </Draggable>
          </div>
        </div> */}
      </div>
      <div>
        {/* <div className="absolute right-0 top-[100px] z-0 w-[50] h-[50] cursor-grab spin rounded-full">
          <Draggable>
            <Image width={50} height={50} src={"/imgs/rock-2.png"} alt={""} />
          </Draggable>
        </div>

        <div className="absolute right-0 top-[200px] z-0 w-[50] h-[50] cursor-grab spin rounded-full">
          <Draggable>
            <Image width={50} height={50} src={"/imgs/rock-1.png"} alt={""} />
          </Draggable>
        </div>

        <div className="absolute right-0 top-[300px] z-0 w-[50] h-[50] cursor-grab spin rounded-full">
          <Draggable>
            <Image width={50} height={50} src={"/imgs/rock-3.png"} alt={""} />
          </Draggable>
        </div>

        <div className="absolute right-0 top-[400px] z-0 w-[50] h-[50] cursor-grab spin rounded-full">
          <Draggable>
            <Image width={50} height={50} src={"/imgs/rock-1.png"} alt={""} />
          </Draggable>
        </div>

        <div className="absolute right-0 top-[500px] z-0 w-[50] h-[50] cursor-grab spin rounded-full">
          <Draggable>
            <Image width={50} height={50} src={"/imgs/rock-2.png"} alt={""} />
          </Draggable>
        </div>

        <div className="absolute right-0 top-[600px] z-0 w-[50] h-[50] cursor-grab spin rounded-full">
          <Draggable>
            <Image width={50} height={50} src={"/imgs/rock-3.png"} alt={""} />
          </Draggable>
        </div>

        <div className="absolute right-0 top-[700px] z-0 w-[50] h-[50] cursor-grab spin rounded-full">
          <Draggable>
            <Image width={50} height={50} src={"/imgs/rock-1.png"} alt={""} />
          </Draggable>
        </div>

        <div className="absolute right-0 top-[800px] z-0 w-[50] h-[50] cursor-grab spin rounded-full">
          <Draggable>
            <Image width={50} height={50} src={"/imgs/rock-2.png"} alt={""} />
          </Draggable>
        </div> */}
      </div>

      {/* <div>
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
