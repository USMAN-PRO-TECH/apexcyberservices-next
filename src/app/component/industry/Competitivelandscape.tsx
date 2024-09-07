import { typedata2 } from "@/app/ecommerce/page";
import Image from "next/image";
import React from "react";

interface itemProps {
    item: typedata2;
}

function Competitivelandscape({item}:itemProps) {
  return (
    <main className="bg-[#F5F8FF]">          
        {/* first part */}
      <div className="flex justify-center gap-8 py-10">             
        {/* image one */}
        <div>
          <Image
            className="2xl:w-[650px] xl:w-[600px] lg:w-[450px] md:w-[300px] 2xl:h-[600px] xl:h-[480px] lg:h-[350px] md:h-[300px]"
            src={item.icon1}
            width={600}
            height={500}
            alt="cd"
          ></Image>
        </div>
        {/* heading one */}
        <div className="flex flex-col gap-5 xl:py-14 lg:py-5 md:py-3">
          <p className="2xl:text-6xl xl:text-4xl lg:text-3xl md:text-2xl font-bold">
            <span className="text-[#0466C8]">Competitive </span>
            <span className="text-[#090909]">Landscape</span>
          </p>
          <span className="2xl:text-2xl xl:text-base lg:text-sm md:text-xs font-normal text-[#605D64]">
            <p className="xl:w-[600px] lg:w-[500px] md:w-[350px] h-auto">
              {item.para1}
            </p>
          </span>
          {/* first two divs */}
          <div className="flex gap-x-3">
            <div className="flex flex-col gap-2 xl:p-4 lg:p-2 md:p-1 border-2 2xl:w-[450px] xl:w-[320px] lg:w-[250px] md:w-[200px] h-auto rounded-md border-[#0466C8]">
              <p className="2xl:text-2xl xl:text-base lg:text-sm md:text-xs font-semibold text-[#36343B]">
                {item.heading1}
              </p>              
              <ol className="2xl:text-2xl xl:text-base lg:text-sm md:text-xs xl:px-8 lg:px-6 md:px-5 list-disc">
                <li>{item.text2}</li>
                <li>{item.text3}</li>                           
                <li>{item.text4}</li>
              </ol>
            </div>
            <div className="flex flex-col gap-2 xl:p-4 lg:p-2 md:p-1 border-2 2xl:w-[450px] xl:w-[320px] lg:w-[250px] md-[200px] h-auto rounded-md border-[#0466C8]">
              <p className="2xl:text-2xl xl:text-base lg:text-sm md:text-xs font-semibold text-[#36343B]">
                West Corporation
              </p>
              <ol className="2xl:text-2xl xl:text-base lg:text-sm md:text-xs xl:px-8 lg:px-6 md:px-5 list-disc">
                <li>{item.text5}</li>
                <li>{item.text6}</li>
                <li>{item.text7}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* second part */}
      <div className="flex justify-center gap-8 py-10">
        {/* heading two */}
        <div className="flex flex-col gap-5 xl:py-14 lg:py-8 md:py-5">
          <p className="2xl:text-6xl xl:text-4xl lg:text-3xl md:text-2xl font-bold">
            <span className="text-[#0466C8]">Market </span>
            <span className="text-[#090909]">Opportunity</span>
          </p>
          <span className="2xl:text-2xl xl:text-base lg:text-sm md:text-xs font-normal text-[#605D64]">
            <p className="2xl:w-[800px] xl:w-[600px] lg:w-[500px] md:w-[350px] h-auto">
             {item.para2}
            </p>
          </span>
          {/* result part */}
          <div className="flex flex-col gap-5">
            <p className="2xl:text-2xl md:text-xl font-semibold xl:w-[450px] lg:w-[420px] md:w-[350px] h-auto text-[#36343B]">
              We have helped our clients achieve significant results, including:
            </p>
            <div className="flex gap-4">
              {/* 61% */}
              <span>
                <Image
                  className="2xl:w-[90px] xl:w-[68px] lg:w-[54px] md:w-[36px] 2xl:h-[90px] xl:h-[68px] lg:h-[54px] md:h-[36px]"
                  src={"/image/sixtyone.svg"}
                  width={68}
                  height={68}
                  alt="61%"
                ></Image>
                <p className="2xl:text-2xl md:text-base font-normal text-[#48464C]">
                  Increasing sales
                </p>
              </span>
              {/* 37% */}
              <span>
                <Image
                  className="2xl:w-[90px] xl:w-[68px] lg:w-[54px] md:w-[36px] 2xl:h-[90px] xl:h-[68px] lg:h-[54px] md:h-[36px]"
                  src={"/image/thirtyseven.svg"}
                  width={68}
                  height={68}
                  alt="37%"
                ></Image>
                <p className="2xl:text-2xl md:text-base font-normal text-[#48464C]">
                  Annually increase
                </p>
              </span>
              {/* 15% */}
              <span>
                <Image
                  className="2xl:w-[90px] xl:w-[68px] lg:w-[54px] md:w-[36px] 2xl:h-[90px] xl:h-[68px] lg:h-[54px] md:h-[36px]"
                  src={"/image/fifteen.svg"}
                  width={68}
                  height={68}
                  alt="15%"
                ></Image>
                <p className="2xl:text-2xl md:text-base font-normal text-[#48464C]">
                  Average increase
                </p>
              </span>
            </div>
          </div>
        </div>
        {/* image two */}
        <div>
          <Image
            className="2xl:w-[650px] xl:w-[600px] lg:w-[450px] md:w-[300px] 2xl:h-[600px] xl:h-[480px] lg:h-[350px] md:h-[300px]"
            src={item.icon2}
            width={600}
            height={500}
            alt="cl2"
          ></Image>
        </div>
      </div>
    </main>
  );
}

export default Competitivelandscape;
