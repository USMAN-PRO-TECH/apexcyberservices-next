import React from "react";

function Profitlossprojection() {
  return (
    <div className="flex flex-col 2xl:gap-12 lg:gap-7 md:gap-4 2xl:py-24 lg:py-16 md:py-10">
      <p className="font-bold text-center 2xl:text-6xl xl:text-4xl lg:text-3xl md:text-2xl">
        <span className="text-[#0466C8]">Profit </span>
        <span className="text-[#090909]">& Loss Projections</span>
      </p>
      <p className="font-normal 2xl:text-3xl xl:text-base lg:text-xs md text-center text-[#605D64]">
        Year 1 Profit & Loss: Charting a Path to Financial Success
      </p>
      <div className="flex justify-between 2xl:px-64 md:px-32">
        <span className="p-4">
          <p className="font-semibold 2xl:text-5xl xl:text-3xl lg:text-2xl text-center text-[#0A090B]">
            $2.5 million
          </p>
          <p className="font-normal 2xl:text-2xl xl:text-sm lg:text-xs md:text-[9px] text-[#605D64]">
            Last year Revenue
          </p>
        </span>
        <span className="p-4 border-l-2 border-[#B3C9FB]">
          <p className="font-semibold 2xl:text-5xl xl:text-3xl lg:text-2xl text-center text-[#0A090B]">
            $1.8 million
          </p>
          <p className="font-normal 2xl:text-2xl xl:text-sm lg:text-xs md:text-[9px] text-[#605D64]">
            Last Year Expenses
          </p>
        </span>
        <span className="p-4 border-l-2 border-[#B3C9FB]">
          <p className="font-semibold 2xl:text-5xl xl:text-3xl lg:text-2xl text-center text-[#0A090B]">
            $700,000
          </p>
          <p className="font-normal 2xl:text-2xl xl:text-sm lg:text-xs md:text-[9px] text-[#605D64]">
            Last year Profits
          </p>
        </span>
      </div>
    </div>
  );
}

export default Profitlossprojection;
