import { datatype4 } from "@/app/virtualassistance/page";
import React from "react";

interface itemProps {
  item: datatype4;
}

function Empowerbusiness({ item }: itemProps) {
  console.log(item)
  return (  
    <main>
      <div style={{ backgroundImage: `url(${item.icon})` }} className={`2xl:bg-cover md:bg-contain bg-no-repeat w-[100%] 2xl:h-[700px] xl:h-[460px] lg:h-[370px] md:h-[240px]`}>
      {/* <div className=""> */}
        <div className="xl:px-16 lg:px-14 md:px-12 xl:py-7 lg:py-4 md:py-2 2xl:w-[1200px] xl:w-[700px] lg:w-[550px] md:w-[420px] 2xl:h-[450px] xl:h-[260px] lg:h-[200px] md:h-[150px] relative xl:top-20 lg:top-14 md:top-10 bg-[#FFFFFF]">
          <span className="flex flex-col 2xl:gap-3 md:gap-1">
            <p className="font-bold 2xl:text-6xl xl:text-3xl lg:text-2xl md:text-base text-[#090909]">
             {item.heading1}
            </p>
            <p className="font-bold 2xl:text-6xl xl:text-3xl lg:text-2xl md:text-base text-[#0466C8]">
            {item.heading2}
            </p>
            <p className="font-bold 2xl:text-6xl xl:text-3xl lg:text-2xl md:text-base text-[#0466C8]">
            {item.heading3}
            </p>
          </span>
          <p className="2xl:mt-8 md:mt-4 2xl:text-4xl xl:text-base lg:text-sm md:text-[9px] font-normal text-[#605D64]">
          {item.text}
          </p>
        </div>
      </div>
    </main>
  );
}

export default Empowerbusiness;
