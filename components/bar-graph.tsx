"use client";

import { useEffect, useState } from "react";
import DropdownMenu from "./dropdown-menu";
import { Tilt } from "react-tilt";

interface Items {
  data: number;
  label: string;
}

interface SearchFieldProps {
  barData: Items[];
  barColor: string;
  barGraphtitle: string;
  isAnimate: boolean;
}

export default function Progressbar({
  barData,
  barColor,
  barGraphtitle,
  isAnimate
}: SearchFieldProps) {
  const options = ["Daily", "Monthly", "Annually"];




  return (
    <Tilt>
      <div className=" glass glow p-[30px] rounded-[20px] lg:h-[340px]">
        <div>
          <div className="grid grid-cols-2 grid-rows-1 gap-x-[21px]">
            <p className="text-xl font-normal text-[#64748B]">
              {barGraphtitle}
            </p>
            <DropdownMenu
              iconHeight={16}
              iconWidth={16}
              customClassName="flex items-center glass p-[10px] cursor-pointer rounded-[10px] justify-between"
              defaultValue="Daily"
              options={options}
              useValue={false}
            />
          </div>
          <p className="mt-[10px]">11/11/11</p>
        </div>
        <div className="grid grid-cols-5 grid-rows-1 gap-x-[20px] items-center h-[195px] w-full self-center">
          {barData.map((bar) => (
            <div
              className="w-full h-full flex flex-col justify-end gap-y-[5px] items-center"
              key={bar.label}
            >
              <div className="flex flex-col justify-end items-center rounded-[10px] w-full h-[200px] gap-y-[5px]">
                <p className="text-xs  font-bold">{bar.data}</p>
                <div
                  style={{
                    height: isAnimate ? `${bar.data}%` : `0%`,
                    width: "100%",
                    backgroundColor: `${barColor}`,
                    borderRadius: "10px",
                    transition: "height 2s ease",
                  }}
                ></div>
              </div>
              <p className="text-[8px] h-[20px] font-normal text-[#bac2ce] flex items-center text-center">
                {bar.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Tilt>
  );
}
