import React from "react";
import Image from "next/image";
import Contactnow from "../component/Contactnow";
import Box from "../component/price/Box";

export type feature = {
  id: number;
  icon: string;
  text: string;
};

export type datatype = {
  id: number;
  heading: string;
  paragraph: string;
  h1: string;
  t1: string;
  t2: string;
  feature: feature[];
};
const PricingPage = () => {
  const price: datatype[] = [
    {
      id: 1,
      h1: "Starter",
      t1: "$10",
      t2: "per month",
      heading: "Feature",
      paragraph: "Everything in our free plan plus....",
      feature: [
        {
          id: 4,
          icon: "/image/tick.svg",
          text: "Access to basic features",
        },
        {
          id: 5,
          icon: "/image/cross.svg",
          text: "Basic reporting and analytics",
        },
        {
          id: 6,
          icon: "/image/cross.svg",
          text: "Up to 10 individual users",
        },
        {
          id: 7,
          icon: "/image/cross.svg",
          text: "20GB individual data each user",
        },
        {
          id: 8,
          icon: "/image/cross.svg",
          text: "Basic chat and email support",
        },
      ],
    },
    {
      id: 2,
      h1: "Gold",
      t1: "$10",
      t2: "per month",
      heading: "Feature",
      paragraph: "Everything in our free plan plus....",
      feature: [
        {
          id: 9,
          icon: "/image/tick.svg",
          text: "Access to basic features",
        },
        {
          id: 10,
          icon: "/image/tick.svg",
          text: "Basic reporting and analytics",
        },
        {
          id: 11,
          icon: "/image/tick.svg",
          text: "Up to 10 individual users",
        },
        {
          id: 12,
          icon: "/image/tick.svg",
          text: "20GB individual data each user",
        },
        {
          id: 13,
          icon: "/image/tick.svg",
          text: "Basic chat and email support",
        },
      ],
    },
    {
      id: 3,
      h1: "Premium",
      t1: "$10",
      t2: "per month",
      heading: "Feature",
      paragraph: "Everything in our free plan plus....",
      feature: [
        {
          id: 14,
          icon: "/image/tick.svg",
          text: "Access to basic features",
        },
        {
          id: 15,
          icon: "/image/tick.svg",
          text: "Basic reporting and analytics",
        },
        {
          id: 16,
          icon: "/image/tick.svg",
          text: "Up to 10 individual users",
        },
        {
          id: 17,
          icon: "/image/cross.svg",
          text: "20GB individual data each user",
        },
        {
          id: 18,
          icon: "/image/cross.svg",
          text: "Basic chat and email support",
        },
      ],
    },
  ];

  return (
    <main>
      <div className="flex flex-col 2xl:gap-12 md:gap-y-5 xl:py-24 lg:py-20 md:py-14 bg-bg-1 bg-no-repeat md:bg-contain 2xl:bg-cover w-[100%] 2xl:h-96 xl:h-80 lg:h-64 md:h-44">
        <p className="font-bold 2xl:text-6xl xl:text-4xl lg:text-2xl md:text-base text-center text-[#F4F8F4]">
          Simple, transparent pricing
        </p>
        <p className="font-normal 2xl:text-3xl xl:text-base lg:text-xs md:text-[8px] text-center text-[#DED8E1]">
          We believe Untitled should be accessible to all companies, no matter
          the size.
        </p>
      </div>

      {/* monthly plan */}
      <div className="flex justify-center 2xl:py-14">
        <div className="flex justify-center align-middle items-center gap-x-2 rounded-lg border-2 2xl:w-96 2xl:h-24 md:w-60 md:h-14 border-[#DDE4F1]">
          <button className="2xl:w-80 2xl:h-24 md:w-32 md:h-11 2xl:text-3xl md:text-base font-medium rounded-lg text-[#F4F8F4] bg-[#0466C8] hover:bg-black hover:text-white">
            Monthly Plan
          </button>
          <button className="2xl:w-64 2xl:h-24 md:w-24 md:h-11 2xl:text-3xl md:text-base font-medium rounded-lg text-[#282D47] bg-[#FFFFFF]">
            Annual Plan
          </button>
        </div>
      </div>

      <div className="flex justify-between px-10 py-8">
        {price?.map((item) => {
          return <Box key={item.id} item={item} />;
        })}
      </div>

      {/* Contactnow */}
      <div className="mt-5 xl:py-16 lg:py-12 md:py-8 bg-[#F5F8FF]">
        <Contactnow />
      </div>
    </main>
  );
};

export default PricingPage;
