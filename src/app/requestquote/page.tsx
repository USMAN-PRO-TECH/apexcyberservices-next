import Image from "next/image";
import React from "react";

function Requestquote() {
  return (
    <main className="lg:bg-left-frame lg:bg-no-repeat lg:bg-left-bottom">
      <div className=" flex justify-center py-16 2xl:gap-16 md:gap-8 lg:bg-right-frame lg:bg-no-repeat lg:bg-right-top">
        <div className=" flex flex-col xl:gap-6 lg:gap-4 md:gap-3">
          <p className="2xl:text-6xl md:text-4xl font-bold">
            <span className="text-[#090909]">Request a </span>
            <span className="text-[#0466C8]">Quote</span>
          </p>
          <p className="2xl:w-[800px] xl:w-[600px] lg:w-[450px] md:w-[300px] 2xl:text-3xl xl:text-base md:text-xs lg:text-sm font-normal text-[#48464C]">
            Explore bespoke solutions tailored to your needs. Request a quote
            today to unlock competitive pricing, personalized services, and a
            seamless partnership. Your success journey begins with a simple
            request.
          </p>
          <Image
            className="2xl:h-[500px] 2xl:w-[750px] xl:h-[430px] xl:w-[630px] lg:h-[300px] lg:w-[400px] md:h-[280px] md:w-[320px]"
            src={"/image/request.svg"}
            width={630}
            height={316}
            alt="email"
          ></Image>
        </div>

        <div className="border-2 shadow-2xl 2xl:py-8 lg:px-6 md:px-3 lg:py-8 md:py-5 2xl:w-[800px] xl:w-[500px] lg:w-[450px] md:w-[300px] h-auto">
          <span className="flex flex-col justify-between 2xl:gap-10 xl:gap-5 md:gap-3 mt-4">
            <p className="py-3 hover:py-7 2xl:w-[760px] lg:w-96 md:w-80 font-normal  hover:font-bold 2xl:text-4xl xl:text-base md:text-xs cursor-text  border-b-2 text-[#48464C] border-slate-600 hover:text-blue-800 hover:border-blue-800">
              Name *
            </p>
            <p className="py-3 hover:py-7 2xl:w-[760px] lg:w-96 md:w-80 font-normal  hover:font-bold 2xl:text-4xl xl:text-base md:text-xs cursor-text  border-b-2 text-[#48464C] border-slate-600 hover:text-blue-800 hover:border-blue-800">
              Email *
            </p>
            <p className="py-3 hover:py-7 2xl:w-[760px] lg:w-96 md:w-80 font-normal  hover:font-bold 2xl:text-4xl xl:text-base md:text-xs cursor-text  border-b-2 text-[#48464C] border-slate-600 hover:text-blue-800 hover:border-blue-800">
              Phone *
            </p>
            <p className="py-3 hover:py-7 2xl:w-[760px] lg:w-96 md:w-80 font-normal  hover:font-bold 2xl:text-4xl xl:text-base md:text-xs cursor-text  border-b-2 text-[#48464C] border-slate-600 hover:text-blue-800 hover:border-blue-800">
              Project Type *
            </p>
            <p className="py-3 hover:py-7 2xl:w-[760px] lg:w-96 md:w-80 font-normal  hover:font-bold 2xl:text-4xl xl:text-base md:text-xs cursor-text  border-b-2 text-[#48464C] border-slate-600 hover:text-blue-800 hover:border-blue-800">
              Estimation *
            </p>
            <p className="py-3 hover:py-7 2xl:w-[760px] lg:w-96 md:w-80 font-normal  hover:font-bold 2xl:text-4xl xl:text-base md:text-xs cursor-text  border-b-2 text-[#48464C] border-slate-600 hover:text-blue-800 hover:border-blue-800">
              Message *
            </p>
          </span>
          <button className="2xl:w-60 xl:w-44 lg:w-36 md:w-28 2xl:h-16 xl:h-12 lg:h-8 md:h-4 2xl:mt-8 mt-4 font-semibold 2xl:text-4xl xl:text-base lg:text-sm md:text-xs lg:rounded-lg md:rounded-md text-center text-[#FFFFFF] bg-[#0466C8] hover:bg-black hover:text-white">
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}

export default Requestquote;
