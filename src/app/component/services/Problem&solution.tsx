import { datatype6 } from '@/app/virtualassistance/page';
import Image from 'next/image'
import React from 'react'

interface itemProps{
     item:datatype6;
}

function Problemsolution({item}: itemProps) {
  return (
    <main>
         <div className="flex flex-col 2xl:gap-y-14 lg:gap-y-8 md:gap-y-5 2xl:py-16 md:py-10 bg-[#F5F8FF]">
        <p className="font-bold 2xl:text-6xl xl:text-4xl lg:text-3xl md:text-2xl text-center">
          <span className="text-[#0466C8]">Problem & </span>
          <span className="text-[#090909]">Solution Statements</span>
        </p>
        <p className="font-normal 2xl:text-3xl xl:text-base lg:text-xs md:text-[10px] text-center text-[#605D64]">
          Ecommerce, amid rapid growth, grapples with customer service
          challenges, satisfaction, call volumes, and cart abandonment.
        </p>
        <div className="flex justify-center gap-6 px-9">
          <div className="flex flex-col 2xl:w-[900px] md:w-[500px] lg:h-auto 2xl:gap-14 md:gap-7 2xl:py-10 2xl:px-16 md:py-6 md:px-10 border-2 rounded-md border-[#FB2B2B]">
            {/* Operational Overload */}
            <div>
              <div className="flex flex-col 2xl:gap-y-4 md:gap-y-2">
                <span className="flex 2xl:gap-x-4 md:gap-x-2">
                  <Image
                    className="2xl:w-[40px] 2xl:h-[40px] lg:w-[22px] lg:h-[22px] md:w-[14px] md:h-[14px]"
                    src={item.icon1}
                    width={538}
                    height={480}
                    alt="icon 9"
                  ></Image>
                  <p className="font-semibold 2xl:text-4xl lg:text-base md:text-xs">
                    {item.heading1}
                  </p>
                </span>
                <p className="2xl:text-2xl xl:text-sm lg:text-[10px] md:text-[7px] 2xl:w-[800px] 2xl:h-auto">
                {item.text1}
                </p>
              </div>
            </div>
            {/* balancing art */}
            <div className="flex flex-col 2xl:gap-y-4 md:gap-y-2">
              <span className="flex 2xl:gap-x-4 md:gap-x-2">
                <Image
                  className="2xl:w-[40px] 2xl:h-[40px] lg:w-[22px] lg:h-[22px] md:w-[14px] md:h-[14px]"
                  src={item.icon2}
                  width={538}
                  height={480}
                  alt="icon10"
                ></Image>
                <p className="font-semibold 2xl:text-4xl lg:text-base md:text-xs">
                {item.heading2}
                </p>
              </span>
              <p className="2xl:text-2xl xl:text-sm lg:text-[10px] md:text-[7px] 2xl:w-[800px] 2xl:h-auto">
                {item.text2}
              </p>
            </div>
            {/* Diverse Business Needs */}
            <div className="flex flex-col 2xl:gap-y-4 md:gap-y-2">
              <span className="flex 2xl:gap-x-4 md:gap-x-2">
                <Image
                  className="2xl:w-[40px] 2xl:h-[40px] lg:w-[22px] lg:h-[22px] md:w-[14px] md:h-[14px]"
                  src={item.icon3}
                  width={538}
                  height={480}
                  alt="icon 11"
                ></Image>
                <p className="font-semibold 2xl:text-4xl lg:text-base md:text-xs">
                {item.heading3}
                </p>
              </span>
              <p className="2xl:text-2xl xl:text-sm lg:text-[10px] md:text-[7px] 2xl:w-[800px] 2xl:h-auto">
              {item.text3}
              </p>
            </div>
            {/* Resource Constraints */}
            <div className="flex flex-col 2xl:gap-y-4 md:gap-y-2">
              <span className="flex 2xl:gap-x-4 md:gap-x-2">
                <Image
                  className="2xl:w-[40px] 2xl:h-[40px] lg:w-[22px] lg:h-[22px] md:w-[14px] md:h-[14px]"
                  src={item.icon4}
                  width={538}
                  height={480}
                  alt="icon12"
                ></Image>
                <p className="font-semibold 2xl:text-4xl lg:text-base md:text-xs">
                {item.heading4}
                </p>
              </span>
              <p className="2xl:text-2xl xl:text-sm lg:text-[10px] md:text-[7px] 2xl:w-[800px] 2xl:h-auto">
              {item.text4}
              </p>
            </div>
          </div>
          <div className="flex flex-col 2xl:w-[900px] md:w-[500px] lg:h-auto 2xl:gap-14 md:gap-7 2xl:py-10 2xl:px-16 md:py-6 md:px-10 border-2 rounded-lg border-[#4DAC4D]">
            {/* Tailored Virtual Assistance */}
            <div>
              <div className="flex flex-col 2xl:gap-y-4 md:gap-y-2">
                <span className="flex 2xl:gap-x-4 md:gap-x-2">
                  <Image
                    className="2xl:w-[40px] 2xl:h-[40px] lg:w-[22px] lg:h-[22px] md:w-[14px] md:h-[14px]"
                    src={item.icon5}
                    width={538}
                    height={480}
                    alt="icon 13"
                  ></Image>
                  <p className="font-semibold 2xl:text-4xl lg:text-base md:text-xs">
                  {item.heading5}
                  </p>
                </span>
                <p className="2xl:text-2xl xl:text-sm lg:text-[10px] md:text-[7px] 2xl:w-[800px] 2xl:h-auto">
                {item.text5}
                </p>
              </div>
            </div>
            {/* Enhanced Customer Experience */}
            <div className="flex flex-col 2xl:gap-y-4 md:gap-y-2">
              <span className="flex 2xl:gap-x-4 md:gap-x-2">
                <Image
                  className="2xl:w-[40px] 2xl:h-[40px] lg:w-[22px] lg:h-[22px] md:w-[14px] md:h-[14px]"
                  src={item.icon6}
                  width={538}
                  height={480}
                  alt="icon 14"
                ></Image>
                <p className="font-semibold 2xl:text-4xl lg:text-base md:text-xs">
                {item.heading6}
                </p>
              </span>
              <p className="2xl:text-2xl xl:text-sm lg:text-[10px] md:text-[7px] 2xl:w-[800px] 2xl:h-auto">
              {item.text6}
              </p>
            </div>
            {/*Operational Optimization */}
            <div className="flex flex-col 2xl:gap-y-4 md:gap-y-2">
              <span className="flex 2xl:gap-x-4 md:gap-x-2">
                <Image
                  className="2xl:w-[40px] 2xl:h-[40px] lg:w-[22px] lg:h-[22px] md:w-[14px] md:h-[14px]"
                  src={item.icon7}
                  width={538}
                  height={480}
                  alt="icon 15"
                ></Image>
                <p className="font-semibold 2xl:text-4xl lg:text-base md:text-xs">
                {item.heading7}
                </p>
              </span>
              <p className="2xl:text-2xl xl:text-sm lg:text-[10px] md:text-[7px] 2xl:w-[800px] 2xl:h-auto">
              {item.text7}
              </p>
            </div>
            {/* Global Talent */}
            <div className="flex flex-col 2xl:gap-y-4 md:gap-y-2">
              <span className="flex 2xl:gap-x-4 md:gap-x-2">
                <Image
                  className="2xl:w-[40px] 2xl:h-[40px] lg:w-[22px] lg:h-[22px] md:w-[14px] md:h-[14px]"
                  src={item.icon8}
                  width={538}
                  height={480}
                  alt="icon 16"
                ></Image>
                <p className="font-semibold 2xl:text-4xl lg:text-base md:text-xs">
                {item.heading8}
                </p>
              </span>
              <p className="2xl:text-2xl xl:text-sm lg:text-[10px] md:text-[7px] 2xl:w-[800px] 2xl:h-auto">
              {item.text8}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Problemsolution