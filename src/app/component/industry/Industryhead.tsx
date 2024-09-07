import { datatype } from "@/app/ecommerce/page";
import Image from "next/image";
import React from "react";

interface itemProps {
    item: datatype;
  }

function Industry({item}:itemProps) {

  return (
    <main>
      <div className="mt-7">
        <div className="flex justify-center items-center">
          <Image
            className="2xl:w-[99%] lg:w-[90%] md:w-[80%] md:h-[40%]"
            src={item.icon}
            width={630}
            height={316}
            alt="travel"
          ></Image>
        </div>
        <div
          className=" flex flex-col 2xl:gap-12 md:gap-3 px-5 2xl:w-[94%] lg:w-[85%] md:w-[70%] 2xl:h-[270px] xl:h-[172px] md:h-[110px] rounded-lg shadow-xl
                           relative 2xl:bottom-32 xl:bottom-24 lg:bottom-20 md:bottom-16 2xl:left-20 lg:left-24 md:left-32 bg-white">
          <p className="2xl:text-5xl xl:text-xl lg:text-lg md:text-base font-semibold text-center mt-6 text-[#151515]">
            <span className="text-[#0466C8]"> {item.heading} </span>
            <span className="text-[#090909]">{item.heading2}</span>
          </p>
          <p className="font-normal 2xl:text-3xl xl:text-base lg:text-xs md:text-[7px] text-center text-[#605D64]">
            {item.text}
          </p>
        </div>
      </div>
    </main>
  );
}

export default Industry;
