"use client"
import { datatype } from "@/app/pricing/page";
import Image from "next/image";
import React, { useState } from "react";
import Selectplan from "../Selectplan";


interface itemProps {
  item: datatype;
}

function Box({ item }: itemProps) {
  const [isClicked, setIsClicked] = useState(false);
  const handleButtonClick = () => {
    setIsClicked(prevIsClicked => {
      console.log('prevIsClicked', prevIsClicked);
      return !prevIsClicked;
    });
  };
  console.log("item", item);
  return (
    <div className={`${item.h1==="Gold"&&"border-blue-700"} flex flex-col 2xl:gap-y-14 lg:gap-y-8 md:gap-y-4 p-3 2xl:w-[600px] xl:w-[370px] lg:w-[280px] md:w-[200px] h-auto lg:px-8 md:px-6 border-2 rounded-lg border-[#DDE4F1]`}>
      <span className="flex justify-between md:gap-x-2 px-5 ">
        <p className="2xl:text-3xl lg:text-base md:text-sm font-medium text-[#282D47]">{item.h1}</p>
        {item.h1 === "Gold" && (
          <p className="py-1 font-medium text-center 2xl:text-3xl lg:text-sm md:text-[8px] 2xl:w-[230px] lg:w-[120px] md:w-[200px] 2xl:h-14 md:h-7 rounded-lg text-[#0466C8] bg-[#E8F4FF]">
            Most Popular
          </p>
        )}
      </span>
      <p>
        <span className="font-bold 2xl:text-[120px] xl:text-6xl lg:text-4xl md:text-3xl text-[#090909]">
          {item.t1}
        </span>
        <span className="font-normal 2xl:text-3xl xl:text-base lg:text-sm md:text-xs text[#48464C]">
          {item.t2}
        </span>
      </p>
      {/* <button className={`${item.h1==="Gold"&&"bg-blue-700 text-white"} font-semibold 2xl:text-3xl lg:text-base md:text-sm text-center 2xl:w-[500px] xl:w-[300px] lg:w-[220px] md:w-[140px] 2xl:h-20 xl:h-12 lg:h-10 md:h-auto border-2 rounded-lg border-[#0466C8] text-[#0466C8]`}>
        Select Plan
      </button> */}

      <Selectplan isClicked={isClicked} handleButtonClick={handleButtonClick} />
      <p className="">
        <span className="font-semibold 2xl:text-5xl xl:text-2xl md:text-sm text-[#090909]">
          {item.heading}
        </span>
        <span className="font-normal 2xl:text-3xl xl:text-base lg:text-sm md:text-[10px] text-[#605D64]">
          <br />
          {item.paragraph}
        </span>
      </p>
      <div className="flex flex-col 2xl:gap-y-8 md:gap-y-4">
        {item.feature.map((data) => {
          return (
            <span
              key={data.id}
              className="flex gap-x-2 font-normal 2xl:text-3xl xl:text-base lg:text-xs md:text-[8px]  text-[#605D64]"
            >
              <Image
                className="2xl:w-[40px] xl:w-[20px] lg:w-[16px] 2xl:h-[35px] xl:h-[20px] lg:h-[16px]"
                src={data.icon}
                width={14}
                height={14}
                alt="icon tick"
              ></Image>
              <p>{data.text}</p>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Box;
