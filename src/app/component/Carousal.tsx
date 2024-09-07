import Image from "next/image";
import React from "react";

function Carousal() {
  return (
    <main className="2xl:py-28 md:py-20 bg-[#F5F8FF]">
      <div className="space-y-10">
        <p className="2xl:text-6xl xl:text-4xl lg:text-3xl md:text-2xl font-bold text-center">
          <span className="text-[#090909]">Our </span>
          <span className="text-[#0466C8]">Testimonials</span>
        </p>

        <div className="flex justify-center gap-10">
          <div  className="lg:mt-28 md:mt-20 absolute lg:left-[100px] md:left-[50px]">
            <Image
              className="2xl:w-[100px] 2xl:h-[100px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] md:w-[20px] md:h-[20px]"
              src={"/image/lessthan.svg"}
              width={538}
              height={480}
              alt="container"
            ></Image>
          </div>

          <div className="flex flex-col justify-center">
            <div className="xl:p-10 lg:p-7 md:p-5 border-2 lg:w-[550px] md:w-[450px] 2xl:h-[300px] lg:h-[200px] md:h-[150px] rounded-lg absolute 2xl:right-[500px] xl:right-[200px] lg:right-[150px] md:right-[90px] z-0 opacity-75 bg-[#FFFFFF]">
              <span>
              <Image
                  className=" xl:w-[70px] xl:h-[25px] lg:w-[60px] lg:h-[20px] md:w-[50px] md:h-[15px]"
                  src={"/image/rightquote.svg"}
                  width={538}
                  height={480}
                  alt="container"
                ></Image>
                <p className="text-center md:text-sm font-normal text-[#48464C] w-auto h-auto">
                  My tax consultation business was not in the position to hire a
                  dedicated customer service department. Luckily, I found E-Call
                  Center Services. We agreed on terms and they started handling
                  my customer calls.                                 
                </p>
                <span className="flex justify-end">
                <Image
                  className=" xl:w-[70px] xl:h-[25px] lg:w-[60px] lg:h-[20px] md:w-[50px] md:h-[15px]"
                  src={"/image/leftquote.svg"}
                  width={538}
                  height={480}
                  alt="container"
                ></Image>
                </span>
              </span>
              <span className="flex justify-center">
                <Image
                  className=" xl:w-[90px] xl:h-[25px] lg:w-[70px] lg:h-[20px] md:w-[50px] md:h-[15px]"
                  src={"/image/stars1.svg"}
                  width={538}
                  height={480}
                  alt="container"
                ></Image>
              </span>
              <span>
              <div className="flex flex-wrap items-center justify-center">
        <Image
                  className=" lg:w-10 md:w-5 lg:h-10 md:h-5 rounded-full"
                  src={"/image/icon63.svg"}
                  width={538}
                  height={480}
                  alt="container"
                ></Image>
                </div>
              </span>
            </div>
          </div>

          {/* second slider */}
          <div className="flex flex-col justify-center">
            <div className="xl:p-10 lg:p-7 md:p-5 border-2 lg:w-[550px] md:w-[450px] 2xl:h-[300px] lg:h-[200px] md:h-[150px] rounded-lg absolute 2xl:left-[500px] xl:left-[200px] lg:left-[150px] md:left-[100px] z-20 opacity-75 bg-[#FFFFFF]">
              <span>
              <Image
                  className=" xl:w-[70px] xl:h-[25px] lg:w-[60px] lg:h-[20px] md:w-[50px] md:h-[15px]"
                  src={"/image/rightquote.svg"}
                  width={538}
                  height={480}
                  alt="container"
                ></Image>
                <p className="text-center text-sm font-normal text-[#48464C] w-auto h-auto">
                  My tax consultation business was not in the position to hire a
                  dedicated customer service department. Luckily, I found E-Call
                  Center Services. We agreed on terms and they started handling
                  my customer calls.
                </p>
                <span className="flex justify-end">
                <Image
                  className=" xl:w-[70px] xl:h-[25px] lg:w-[60px] lg:h-[20px] md:w-[50px] md:h-[15px]"
                  src={"/image/leftquote.svg"}
                  width={538}
                  height={480}
                  alt="container"
                ></Image>
                </span>
              </span>
              <span className="flex justify-center">
                <Image
                  className=" xl:w-[90px] xl:h-[25px] lg:w-[70px] lg:h-[20px] md:w-[50px] md:h-[15px]"
                  src={"/image/stars1.svg"}
                  width={538}
                  height={480}
                  alt="container"
                ></Image>
              </span>
              <span>
              <div className="flex flex-wrap items-center justify-center">
        <Image
                  className="lg:w-10 md:w-5 lg:h-10 md:h-5  rounded-full"
                  src={"/image/icon63.svg"}
                  width={538}
                  height={480}
                  alt="container"
                ></Image></div>
              </span>
            </div>
          </div>

          {/* third slider */}
          <div className="flex flex-col justify-center">
            <div className="xl:p-10 lg:p-7 md:p-5 border-2 2xl:w-[800px] xl:w-[600px] lg:w-[500px] md:w-[450px] 2xl:h-[430px] h-auto rounded-lg relative lg:right-[50px] md:right-[30px] z-30 bg-[#FFFFFF]">
              <span> 
              <Image
                  className="2xl:w-[100px] 2xl:h-[45px] xl:w-[70px] xl:h-[25px] lg:w-[60px] lg:h-[20px] md:w-[40px] md:h-[15px]"
                  src={"/image/rightquote.svg"}
                  width={538}
                  height={480}
                  alt="container"
                ></Image>
                <p className="text-center 2xl:text-2xl lg:text-sm md:text-xs font-normal text-[#48464C] w-auto h-auto">
                  My tax consultation business was not in the position to hire a
                  dedicated customer service department. Luckily, I found E-Call
                  Center Services. We agreed on terms and they started handling
                  my customer calls.
                </p>
                <span className="flex justify-end">
                <Image
                  className="2xl:w-[100px] 2xl:h-[45px] xl:w-[70px] xl:h-[25px] lg:w-[60px] lg:h-[20px] md:w-[50px] md:h-[15px]"
                  src={"/image/leftquote.svg"}
                  width={538}
                  height={480}
                  alt="container"
                ></Image>
                </span>
              </span>
              <span className="flex justify-center">
                <Image
                  className="2xl:w-[140px] 2xl:h-[55px] xl:w-[90px] xl:h-[25px] lg:w-[70px] lg:h-[20px] md:w-[60px] md:h-[15px]"
                  src={"/image/stars1.svg"}
                  width={538}
                  height={480}
                  alt="container"
                ></Image>
              </span>
              <span>
              <div className="flex flex-wrap items-center justify-center">
        <Image
                  className="2xl:w-[70px] 2xl:h-[70px] md:w-10 md:h-10 rounded-full"
                  src={"/image/icon63.svg"}
                  width={538}
                  height={480}
                  alt="container"
                ></Image>
        <div className="ml-4 text-left">
            <p className="2xl:text-3xl md:text-base font-semibold text-[#000000]">Jean Morris</p>
            <p className="2xl:text-3xl md:text-base font-normal text-[#605D64]">6 months ago</p>
        </div></div>
              </span>
            </div>
          </div>

          <div className="lg:mt-28 md:mt-20 absolute lg:right-[100px] md:right-[50px]">
            <Image
              className="2xl:w-[100px] 2xl:h-[100px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] md:w-[20px] md:h-[20px]"
              src={"/image/greaterthan.svg"}
              width={538}
              height={480}
              alt="container"
            ></Image>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Carousal;
