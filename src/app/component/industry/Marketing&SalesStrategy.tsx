import { typedata } from "@/app/ecommerce/page";
import { datatype } from "@/app/home/page";
import React from "react";

interface itemProps {
  item: typedata;
}

function Marketingstrategy({ item }: itemProps) {
  return (
    <main className="flex flex-col lg:gap-8 md:gap-4 2xl:p-36 lg:p-14 md:p-8 bg-[#F5F8FF]">
      <p className="font-bold 2xl:text-6xl xl:text-4xl lg:text-3xl md:text-2xl text-center">
        <span className="text-[#0466C8]">Marketing </span>
        <span className="text-[#090909]">& Sales Strategy </span>
      </p>
      <p className="2xl:text-3xl lg:text-base md:text-sm font-normal text-center text-[#605D64]">
        Our strategy focuses on a multi-channel approach to acquire customers
      </p>
      <div className="flex justify-center gap-y-3 gap-x-2">
        <div className="flex flex-col gap-3 px-2 bg-[#EAF4FF]">
          <p className="font-semibold 2xl:text-3xl xl:text-xl lg:text-base md:text-xs border-t-4 py-2 border-[#0466C8] text-[#090909]">
            {item.h1}
          </p>
          <p className="font-semibold 2xl:text-2xl xl:text-sm lg:text-xs md:text-[8px] 2xl:w-[330px] lg:w-[205px] md:w-[160px] h-auto text-[#605D64]">
            {item.t1}
          </p>
        </div>
        <div className="flex flex-col gap-3 px-2">
          <p className="font-semibold 2xl:text-3xl xl:text-xl lg:text-base md:text-xs border-t-4 py-2 border-[#E0EEFF] text-[#090909]">
            {item.h2}
          </p>
          <p className="font-semibold 2xl:text-2xl xl:text-sm lg:text-xs md:text-[8px] 2xl:w-[330px] lg:w-[205px] md:w-[160px] h-auto text-[#605D64]">
            {item.t2}
          </p>
        </div>
        <div className="flex flex-col gap-3 px-2">
          <p className="font-semibold 2xl:text-3xl xl:text-xl lg:text-base md:text-xs border-t-4 py-2 border-[#E0EEFF] text-[#090909]">
            {item.h3}
          </p>
          <p className="font-semibold 2xl:text-2xl xl:text-sm lg:text-xs md:text-[8px] 2xl:w-[330px] lg:w-[205px] md:w-[160px] h-auto text-[#605D64]">
            {item.t3}
          </p>
        </div>
        <div className="flex flex-col gap-3 px-2">
          <p className="font-semibold 2xl:text-3xl xl:text-xl lg:text-base md:text-xs border-t-4 py-2 border-[#E0EEFF] text-[#090909]">
            {item.h4}
          </p>
          <p className="font-semibold 2xl:text-2xl xl:text-sm lg:text-xs md:text-[8px] 2xl:w-[330px] lg:w-[205px] md:w-[160px] h-auto text-[#605D64]">
            {item.t4}
          </p>
        </div>
      </div>
    </main>
  );
}

export default Marketingstrategy;
