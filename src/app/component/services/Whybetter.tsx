import { datatype5 } from "@/app/virtualassistance/page";
import Image from "next/image";
import React from "react";

interface itemprops {
  item: datatype5;
}

function Whybetter({ item }: itemprops) {
  return (
    <main>
      <div className="flex flex-col xl:gap-8 lg:gap-4 md:gap-3 2xl:py-24 xl:py-16 lg:py-12 md:py-9 mt-5 bg-[#F5F8FF]">
        <p className="text-center font-bold 2xl:text-6xl xl:text-4xl lg:text-3xl md:text-2xl">
          <span className="text-[#0466C8]">Why </span>
          <span className="text-[#090909]">Were Better</span>
        </p>
        <p className="font-normal text-center 2xl:text-3xl xl:text-3xl lg:text-sm md:text-xs text-[#605D64]">
          Why Choose ApexCyberServices for Virtual Assistant Solutions?
        </p>
        <div className="flex justify-center lg:gap-x-8 md:gap-x-5">
          <div>
            <Image
              className="2xl:w-[700px] 2xl:h-[700px] xl:w-[450px] xl:h-[450px] lg:w-[420px] lg:h-[420px] md:w-[320px] md:h-[320px]"
              src={item.icon1}
              width={538}
              height={480}
              alt="container"
            ></Image>
          </div>
          <div className="flex flex-col 2xl:gap-7 md:gap-3 2xl:mt-14 lg:mt-8 md:mt-6">
            <div className="md:py-4 md:px-4 2xl:w-[700px] xl:w-[600px] lg:w-[470px] md:w-[350] rounded-lg bg-[#FFFFFF]">
              <span className="flex 2xl:gap-x-4 md:gap-x-2">
                <Image
                  className="2xl:w-[45px] 2xl:h-[45px] xl:w-[24px] xl:h-[24px] lg:w-[20px] lg:h-[20px] md:w-[16px] md:h-[16px]"
                  src={item.icon2}
                  width={538}
                  height={480}
                  alt="icon 17"
                ></Image>
                <p className="font-semibold 2xl:text-4xl xl:text-xl lg:text-base md:text-sm text-[#090909]">
                  {item.heading1}
                </p>
              </span>
              <p className="xl:text-base 2xl:text-2xl lg:text-[12px] md:text-[7px] font-normal text-[#48464C]">
               {item.text1}
              </p>
            </div>
            <div className="py-4 px-4 2xl:w-[700px] xl:w-[600px] lg:w-[470px] rounded-lg bg-[#FFFFFF]">
              <span className="flex 2xl:gap-x-4 md:gap-x-2">
                <Image
                  className="2xl:w-[45px] 2xl:h-[45px] xl:w-[24px] xl:h-[24px] lg:w-[20px] lg:h-[20px] md:w-[16px] md:h-[16px]"
                  src={item.icon3}
                  width={538}
                  height={480}
                  alt="icon 18"
                ></Image>
                <p className="font-semibold 2xl:text-4xl xl:text-xl lg:text-base  md:text-sm text-[#090909]">
                 {item.heading2}
                </p>
              </span>
              <p className="xl:text-base 2xl:text-2xl lg:text-[12px] md:text-[7px] font-normal text-[#48464C]">
                {item.text2}
              </p>
            </div>
            <div className="py-4 px-4 2xl:w-[700px] xl:w-[600px] lg:w-[470px] rounded-lg bg-[#FFFFFF]">
              <span className="flex 2xl:gap-x-4 md:gap-x-2">
                <Image
                  className="2xl:w-[45px] 2xl:h-[45px] xl:w-[24px] xl:h-[24px] lg:w-[20px] lg:h-[20px] md:w-[16px] md:h-[16px]"
                  src={item.icon4}
                  width={538}
                  height={480}
                  alt="icon 19"
                ></Image>
                <p className="font-semibold 2xl:text-4xl xl:text-xl lg:text-base md:text-sm text-[#090909]">
                  {item.heading3}
                </p>
              </span>
              <p className="xl:text-base 2xl:text-2xl lg:text-[12px] md:text-[7px] font-normal text-[#48464C]">
                {item.text3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Whybetter;
