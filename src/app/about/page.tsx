/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Contactnow from "../component/Contactnow";

const AboutPage = () => {
  return (
    <main className="">
      <div className="flex flex-col gap-y-5 2xl:py-24 xl:py-16 lg:py-12 md:py-8 bg-bg-1 bg-no-repeat md:bg-contain 2xl:bg-cover w-[100%] 2xl:h-[400px] xl:h-96 lg:h-72 md:h-52">
        <p className="font-bold 2xl:text-6xl xl:text-4xl lg:text-2xl md:text-base text-center text-[#F4F8F4]">
          Elevate with ApexCyberServices
        </p>
        <p className="font-normal 2xl:text-3xl xl:text-base lg:text-xs md:text-[8px] text-center text-[#DED8E1]">
          Precision, passion, excellence. ApexCyberServices redefines customer
          service with <br /> technology, a dedicated team, and transparent
          operations. Experience the apex of <br /> customer excellence.
        </p>
      </div>

      {/* about us */}
      <div className="xl:py-8 2xl:py-16 flex justify-center gap-28">
        <div>
          <p className="py-3">
            <span className="font-bold 2xl:text-6xl xl:text-4xl md:text-3xl text-[#0466C8]">
              About{" "}
            </span>
            <span className="font-bold 2xl:text-6xl xl:text-4xl md:text-3xl text-[#090909]">
              Us
            </span>
          </p>
          <p className="py-3 font-normal 2xl:text-3xl xl:text-base lg:text-[10px] md:text-[8px] h-auto 2xl:w-[900px] xl:w-[700px] lg:w-[500px] md:w-[350px] text-[#605D64]">
            ApexCyberServices has developed state of the art, precise and
            reliable infrastructure to provide non-stop and perpetually
            contact center services. Our strong point is our competent,
            positive energy and focused agents those are handpicked from
            around the world to produce the magic of eminent customer
            service.
          </p>
          <p className="py-3 font-normal 2xl:text-3xl xl:text-base lg:text-[10px] md:text-[8px] h-auto 2xl:w-[970px] xl:w-[700px] lg:w-[500px] md:w-[350px] text-[#605D64]">
            We give incessant training, tutelage, and supervision to make sure
            the business enjoys target oriented 37% growth in sales
            conversion, 85% occupancy in quality score, 77% reduction in
            waiting time with ability to handle concurrent calls, being
            flexible to adjust according to the situation to satisfy customer
            and 100% operational transparency to give business trust and
            peace of mind. ApexCyberServices has collaborated the
            technology and professionalism to provide brilliant answering
            services on the behalf of businesses.
          </p>
        </div>
        <div>
          <div className="flex gap-3">
            <Image
              className="2xl:h-[550px] xl:w-fit xl:h-[320px] lg:w-[150px] lg:h-[300px] md:w-[120px]"
              src={"/image/image 1.svg"}
              width={538}
              height={480}
              alt="frame"
            ></Image>
            <Image
              className="2xl:h-[550px] xl:w-fit xl:h-[320px] lg:w-[150px] lg:h-[300px] md:w-[120px] xl:mt-20 md:mt-10"
              src={"/image/Image 2.svg"}
              width={538}
              height={480}
              alt="frame2"
            ></Image>
          </div>
        </div>
      </div>

      {/* our strengths */}
      <div>
        <div className="flex flex-col 2xl:gap-28 xl:gap-8 lg:gap-4 md:gap-3 xl:py-16 lg:py-12 md:py-9 mt-5 bg-[#F5F8FF]">
          <div className="flex justify-center xl:gap-x-6 lg:gap-x-8 md:gap-x-5">
            <div className="flex flex-col gap-4 lg:mt-8 md:mt-6">
              <p className="font-bold 2xl:text-6xl md:text-4xl mb-4">
                <span className="text-[#090909]">Our </span>
                <span className="text-[#0466C8]">Strengths</span>
              </p>
              <div className="">
                <span className="flex gap-x-2">
                  <Image
                    className="2xl:w-[90px] 2xl:h-[90px] xl:w-[36px] xl:h-[36px] lg:w-[32px] lg:h-[32px] md:w-[16px] md:h-[16px]"
                    src={"/image/icon20.svg"}
                    width={538}
                    height={480}
                    alt="icon 20"
                  ></Image>
                  <p className="font-semibold 2xl:text-4xl xl:text-xl lg:text-base md:text-sm text-[#090909]">
                    Global Talent Pool
                  </p>
                </span>
                <p className="xl:px-9 lg:px-7 md:px-[5] 2xl:text-3xl xl:text-base lg:text-[12px] md:text-[7px] font-normal text-[#48464C]">
                  Our agents, drawn from diverse corners of the world, bring a
                  rich tapestry <br /> of skills and cultural insights to
                  enhance the customer experience.
                </p>
              </div>
              <div className="">
                <span className="flex gap-x-2">
                  <Image
                    className="2xl:w-[90px] 2xl:h-[90px] xl:w-[36px] xl:h-[36px] lg:w-[32px] lg:h-[32px] md:w-[24px] md:h-[24px]"
                    src={"/image/icon21.svg"}
                    width={538}
                    height={480}
                    alt="icon 21"
                  ></Image>
                  <p className="font-semibold 2xl:text-4xl xl:text-xl lg:text-base  md:text-sm text-[#090909]">
                    Continuous Development
                  </p>
                </span>
                <p className="xl:px-9 lg:px-7 md:px-[5] 2xl:text-3xl xl:text-base lg:text-[12px] md:text-[7px] font-normal text-[#48464C]">
                  We believe in perpetual growth, offering incessant training,
                  tutelage, and <br /> supervision. This ensures that our 
                  partners experience a targeted 37% <br /> growth in sales
                  conversion.
                </p>
              </div>
              <div className="">
                <span className="flex gap-x-2 ">
                  <Image
                    className="2xl:w-[90px] 2xl:h-[90px] xl:w-[36px] xl:h-[36px] lg:w-[32px] lg:h-[32px] md:w-[24px] md:h-[24px]"
                    src={"/image/icon22.svg"}
                    width={538}
                    height={480}
                    alt="icon 22"
                  ></Image>
                  <p className="font-semibold 2xl:text-4xl xl:text-xl lg:text-base md:text-sm text-[#090909]">
                    Quality Assurance
                  </p>
                </span>
                <p className="xl:px-9 lg:px-7 md:px-[5] 2xl:text-3xl xl:text-base lg:text-[12px] md:text-[7px] font-normal text-[#48464C]">
                  With an emphasis on quality, we maintain an 85% occupancy in
                  quality <br /> score, ensuring that every interaction reflects
                  the highest standards of <br /> service.
                </p>
              </div>
            </div>
            <div>
              <Image
                className="2xl:w-[520px] 2xl:h-[700px] xl:w-[450px] xl:h-[450px] lg:w-[420px] lg:h-[420px] md:w-[320px] md:h-[320px]"
                src={"/image/aboutus.svg"}
                width={538}
                height={480}
                alt="strength us"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      {/* our mission */}
      <div className="flex justify-center md:gap-9 2xl:gap-40 py-5">                                  
        <div className="">
          <span className="relative 2xl:right-[110px] 2xl:top-[220px] xl:top-[180px] xl:right-[100px] lg:top-[130px] lg:right-[60px] md:top-[60px] md:right-[25px] z-20">
            <Image
              className="2xl:w-[350px] 2xl:h-[350px] xl:w-[210px] xl:h-[210px] lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] xl:right-12 xl:top-36 lg:left-10 lg:top-30 md:left-8 md:top-14 z-10"
              src={"/image/i1.svg"}
              width={538}
              height={480}
              alt="icon i1"
            ></Image>
          </span>
          <span className="relative z-10">
            <Image
              className="2xl:w-[600px] 2xl:h-[550px] xl:w-[400px] xl:h-[350px] lg:w-[280px] lg:h-[250px] md:w-[200px] md:h-[150px]"
              src={"/image/i2.svg"}
              width={538}
              height={480}
              alt="icon i2"
            ></Image>
          </span>
          <span className="relative 2xl:left-[400px] 2xl:bottom-[200px] xl:left-[300px] xl:bottom-[100px] lg:left-[200px] lg:bottom-[70px] md:left-[150px] md:bottom-[35px]">
            <Image
              className="2xl:w-[250px] 2xl:h-[250px] xl:w-[130px] xl:h-[130px] lg:w-[100px] lg:h-[100px] md:w-[50px] md:h-[50px]"
              src={"/image/i3.svg"}
              width={538}
              height={480}
              alt="icon i3"
            ></Image>
          </span>
        </div>

        <div className="flex flex-col 2xl:gap-y-7 md:gap-y-4 2xl:mt-[340px] xl:mt-[250px] lg:mt-[150px] md:mt-[100px]">
          <p className="font-bold 2xl:text-6xl lg:text-4xl md:text-3xl">
            <span className="text-[#090909]">Our </span>
            <span className="text-[#0466C8]">Mission</span>
          </p>
          <p className="2xl:w-[950px] xl:w-[600px] lg:w-[500px] md:w-[270px] h-auto font-normal 2xl:text-3xl xl:text-base lg:text-sm md:text-[8px] text-[#605D64]">
            At ApexCyberServices, our mission is to revolutionize the landscape
            of customer service. We are dedicated to delivering
            unparalleled value, crafting experiences that transcend
            expectations. With innovation, dedication, and a relentless
            customer-centric approach at our core, we aim to redefine service
            excellence. Our mission is not just to meet needs but to
            exceed them, consistently providing
            solutions that stand as a testament to our commitment to excellence
            and customer satisfactio
          </p>
        </div>
      </div>

      {/* Contactnow */}
      <div className="mt-5 xl:py-16 lg:py-12 md:py-8 bg-[#F5F8FF]">
        <Contactnow />
      </div>
    </main>
  );
};

export default AboutPage;
