import { datatype } from '@/app/home/page'
import Image from 'next/image'
import React from 'react'

 interface itemProps {
    item: datatype;
  }
function Card({item}:itemProps) {
  return (
    <div className="flex flex-col justify-between 2xl:h-[550px] xl:h-96 lg:h-80 md:h-72 lg:py-4 md:py-5 2xl:px-6 md:px-3 rounded-lg space-y-6 shadow-lg bg-white">
    <Image
      className="md:w-12 md:h-12 xl:w-14 xl:h-14 2xl:w-24 2xl:h-24"
      src={item.icon}
      width={50}
      height={50}
      alt="virtual assistant"
    />
    <p className="font-semibold 2xl:text-4xl  xl:text-xl md:text-sm lg:text-sm  text-[#151515]">
      {item.heading}
    </p>
    <p className="font-normal 2xl:text-2xl xl:text-base lg:text-[12px] md:text-[8px]  text-[#5B5B5B]">
     {item.text}
    </p>
    <div className="flex space-x-3 xl:py-7 md:py-0">
      <p className="2xl:text-2xl md:text-base hover:underline cursor-pointer font-medium hover:font-bold text-[#0466C8]">
        Read more
      </p>
      <Image 
      className='2xl:w-8 2xl:h-10 lg:w-5 lg:h-6 md:w-3 md:h-6'
        src={"/image/arrow.svg"}
        width={13}
        height={14}
        alt="arrow"
      ></Image>
    </div>
  </div>
  )
}

export default Card