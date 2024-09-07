import { datatype3 } from "@/app/information/page";
import Image from "next/image";
import React from "react";

interface itemProps {
  item: datatype3;
}

function Problemstatement({ item }: itemProps) {
  return (
    <main className="">
      <p className="text-center 2xl:text-6xl lg:text-4xl md:text-2xl font-bold">
        <span className="text-[#0466C8]">Problem & </span>
        <span className="text-[#090909]">Solution Statements</span>
      </p>
      <p className="md:py-5 2xl:py-12 text-center 2xl:text-3xl lg:text-base md:text-sm font-normal text-[#605D64]">
        Delays Impacting Experience - Travelers often face delays in receiving
        support, impacting their overall experience.
      </p>

      <div
        style={{ backgroundImage: `url(${item.icon})` }}
        className="bg-no-repeat bg-center md:bg-contain lg:bg-auto 2xl:bg-contain left-[100px]"
      >
        <div className="md:py-6 2xl:py-10 relative">
          {/* 1st div */}
          <div className="border border-l-4 xl:p-6 lg:p-4 md:p-2 space-y-2 2xl:w-[550px] xl:w-[350px] lg:w-[310px] md:w-[260px] rounded-lg h-auto relative xl:left-[150px] lg:left-[110px] md:left-[60px] border-[#FF0000]">
            <div className="flex gap-3">
              <Image
                className="lg:h-[30px] lg:w-[30px] md:h-[20px] md:w-[20px]"
                src={item.pic1}
                width={30}
                height={30}
                alt="travel"
              ></Image>
              <p className="2xl:text-3xl lg:text-base md:text-sm font-semibold text-[#090909]">
                {item.heading1}
              </p>
            </div>
            <div className="2xl:text-2xl xl:text-sm lg:text-xs md:text-[8px] font-normal text-[#79767D]">
              {item.text1}
            </div>
          </div>

          {/* 2nd div */}
          <div className="border border-l-4 xl:p-6 lg:p-4 md:p-2 space-y-2 2xl:w-[550px] xl:w-[350px] lg:w-[310px] md:w-[260px] rounded-lg h-auto relative xl:top-16 lg:top-20 md:top-10 xl:left-[100px] lg:left-[16px] md:left-[60px] border-[#FF0000]">
            <div className="flex gap-3">
              <Image
                className="lg:h-[30px] lg:w-[30px] md:h-[20px] md:w-[20px]"
                src={item.pic2}
                width={30}
                height={30}
                alt="travel"
              ></Image>
              <p className="2xl:text-3xl lg:text-base md:text-sm font-semibold text-[#090909]">
                {item.heading2}
              </p>
            </div>
            <div className="2xl:text-2xl  xl:text-sm lg:text-xs md:text-[8px] font-normal text-[#79767D]">
              {item.text2}
            </div>
          </div>

          {/* 3rd div */}
          <div className="border border-l-4 xl:p-6 lg:p-4 md:p-2 space-y-2 2xl:w-[550px] xl:w-[350px] lg:w-[310px] md:w-[260px] rounded-lg h-auto relative xl:top-28 lg:top-40 md:top-[90px] xl:left-[150px] lg:left-[80px] md:left-[60px] border-[#FF0000]">
            <div className="flex gap-3">
              <Image
                className="lg:h-[30px] lg:w-[30px] md:h-[20px] md:w-[20px]"
                src={item.pic3}
                width={30}
                height={30}
                alt="travel"
              ></Image>
              <p className="2xl:text-3xl lg:text-base md:text-sm  font-semibold text-[#090909]">
                {item.heading3}
              </p>
            </div>
            <div className="2xl:text-2xl  xl:text-sm lg:text-xs md:text-[8px] font-normal text-[#79767D]">
              {item.text3}
            </div>
          </div>

          {/* 4th div */}
          <div className="border border-l-4 xl:p-6 lg:p-4 md:p-2 space-y-2 2xl:w-[550px] xl:w-[350px] lg:w-[310px] md:w-[260px] rounded-lg h-auto absolute 2xl:bottom-[650px] xl:bottom-[500px] lg:bottom-[500px] md:bottom-[230px] xl:right-[120px] lg:right-[20px] md:right-[50px] border-[#5FC05F]">
            <div>
              <p className="2xl:text-3xl lg:text-base md:text-sm font-semibold text-[#090909]">
                {item.heading4}
              </p>
            </div>
            <div className="2xl:text-2xl  xl:text-sm lg:text-xs md:text-[8px] font-normal text-[#79767D]">
              {item.text4}
            </div>
          </div>
          {/* 5th div */}
          <div className="border border-l-4 xl:p-6 lg:p-4 md:p-2 space-y-2 2xl:w-[550px] xl:w-[350px] lg:w-[310px] md:w-[260px] rounded-lg h-auto absolute 2xl:bottom-[375px] xl:bottom-[290px] lg:bottom-[300px] md:bottom-[100px] xl:right-[80px] lg:right-[5px] md:right-[60px] border-[#5FC05F]">
            <div>
              <p className="2xl:text-3xl lg:text-base md:text-sm font-semibold text-[#090909]">
                {item.heading5}
              </p>
            </div>
            <div className="2xl:text-2xl xl:text-sm lg:text-xs md:text-[8px] font-normal text-[#79767D]">
              {item.text5}
            </div>
          </div>

          {/* 6th div */}
          <div className="border border-l-4 xl:p-6 lg:p-4 space-y-2 2xl:w-[550px] xl:w-[350px] lg:w-[310px] md:w-[260px] rounded-lg h-auto relative 2xl:bottom-[70px] xl:bottom-[65px] lg:bottom-[80px] md:top-[20px] 2xl:left-[1900px] xl:left-[900px] lg:left-[650px] md:left-[450px] border-[#5FC05F]">
            <div>
              <p className="2xl:text-3xl lg:text-base md:text-sm font-semibold text-[#090909]">
                {item.heading6}
              </p>
            </div>
            <div className="2xl:text-2xl  xl:text-sm lg:text-xs md:text-[8px] font-normal text-[#79767D]">
              {item.text6}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Problemstatement;
