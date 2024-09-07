import Image from "next/image";
import React from "react";

function Contactnow() {
  return (
    <div className="lg:bg-hero-pattern lg:bg-no-repeat md:bg-none lg:bg-left">
      <div className="flex justify-center py-10 xl:gap-20 md:gap-10 lg:bg-footer-texture lg:bg-no-repeat lg:bg-right mb-10">
        <div className="2xl:mt-28 md:mt-12">
          <div className="flex space-x-2">
            <Image
              className="2xl:w-12 2xl:h-10 xl:w-6 xl:h-7 md:w-5 md:h-6"
              src={"/image/call.svg"}
              width={630}
              height={316}
              alt="call"
            ></Image>
            <p className="font-bold 2xl:text-4xl lg:text-2xl md:text-sm text-[#090909]">
              Call Us
            </p>
          </div>
          <p className="py-2 font-normal 2xl:text-3xl xl:text-base md:text-sm text-[#48464C]">
            +1 888.909.2207
          </p>

          <div className="flex space-x-2 mt-16">
            <Image
              className="2xl:w-12 2xl:h-10 xl:w-6 md:w-5 xl:h-7 md:h-6"
              src={"/image/gps.svg"}
              width={630}
              height={316}
              alt="gpa"
            ></Image>
            <p className="font-bold 2xl:text-4xl lg:text-2xl md:text-sm text-[#090909]">
              Location
            </p>
          </div>
          <p className="py-2 font-normal 2xl:text-3xl xl:text-base md:text-sm text-[#48464C]">
            Address: 8609 6th Avenue,
            <br /> Edmonton, Alberta, T6X 1G4, Canada
          </p>

          <div className="flex space-x-2 mt-16">
            <Image
              className="2xl:w-12 2xl:h-10 xl:w-6 md:w-5 xl:h-7 md:h-6"
              src={"/image/email.svg"}
              width={630}
              height={316}
              alt="email"
            ></Image>
            <p className="font-bold 2xl:text-4xl lg:text-2xl md:text-sm text-[#090909]">
              Email
            </p>
          </div>
          <p className="py-2 font-normal 2xl:text-3xl xl:text-base md:text-sm text-[#48464C]">
            info@apexcyberservices.com
          </p>
        </div>

        <div className="border-2 2xl:w-[950px] h-auto shadow-2xl px-6 2xl:py-12 md:py-8">
          <p className="mb-3">
            <span className="font-bold 2xl:text-6xl lg:text-4xl md:text-xl text-[#0466C8]">
              Contact
            </span>
            <span className="font-bold 2xl:text-6xl lg:text-4xl md:text-xl text-[#090909]">
              {" "}
              Now
            </span>
          </p>
          <p className="font-normal 2xl:text-3xl lg:text-base md:text-xs text-[#48464C]">
            Fill up the form and our team will get back toyou within 24 hours.
          </p>
          <span className="flex flex-col justify-between 2xl:gap-10 gap-4 mt-4">
            <p className="py-3 hover:py-7 2xl:w-[760px] lg:w-96 md:w-80 font-normal hover:font-bold 2xl:text-4xl lg:text-base md:text-xs  cursor-text border-b-2 text-[#48464C] border-slate-600 hover:text-blue-800 hover:border-blue-800">
              Name *
            </p>
            <p className="py-3 hover:py-7 2xl:w-[760px] lg:w-96 md:w-80 font-normal  hover:font-bold 2xl:text-4xl lg:text-base md:text-xs cursor-text  border-b-2 text-[#48464C] border-slate-600 hover:text-blue-800 hover:border-blue-800">
              Email *
            </p>
            <p className="py-3 hover:py-7 2xl:w-[760px] lg:w-96 md:w-80 font-normal  hover:font-bold 2xl:text-4xl lg:text-base md:text-xs cursor-text  border-b-2 text-[#48464C] border-slate-600 hover:text-blue-800 hover:border-blue-800">
              Phone *
            </p>
            <p className="py-3 hover:py-7 2xl:w-[760px] lg:w-96 md:w-80 font-normal  hover:font-bold 2xl:text-4xl lg:text-base md:text-xs cursor-text  border-b-2 text-[#48464C] border-slate-600 hover:text-blue-800 hover:border-blue-800">
              Message *
            </p>
          </span>
          {/* <button className="2xl:w-56 lg:w-44 md:w-36 2xl:h-16 lg:h-12 md:h-8 2xl:mt-7 mt-4 font-semibold 2xl:text-3xl lg:text-base md:text-sm rounded-lg text-center text-[#FFFFFF] bg-[#0466C8]">
            Submit
          </button> */}
          <button className="2xl:w-56 lg:w-44 md:w-36 2xl:h-16 lg:h-12 md:h-8 2xl:mt-7 mt-4 font-semibold 2xl:text-3xl lg:text-base md:text-sm rounded-lg text-center text-[#FFFFFF] bg-[#0466C8] hover:bg-black hover:text-white ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contactnow;
