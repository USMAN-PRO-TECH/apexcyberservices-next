import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "../component/home/Card";
import Contactnow from "../component/Contactnow";
import Carousal from "../component/Carousal";

export type datatype = {
  id: number;
  icon: string;
  heading: string;
  text: string;
};

const HomePage = () => {
  const data: datatype[] = [
    {
      id: 1,
      icon: "/image/vas.svg",
      heading: "Virtual Assistant Services",
      text: " Obtain the optimum standard and  professional virtual assistant service making certain that your work load is divided",
    },
    {
      id: 2,
      icon: "/image/as.svg",
      heading: "Answering Services",
      text: " Acquire the most professional and friendly phone answering services to make sure all your existing customers",
    },
    {
      id: 3,
      icon: "/image/eas.svg",
      heading: "Email Customer Support",
      text: " Obtain the optimum standard and professional virtual assistant service making certain that your work load is divided",
    },
    {
      id: 4,
      icon: "/image/sm.svg",
      heading: "Social Media",
      text: "Enjoy ultimate business reputation with proficient social media support that confirms clients satisfaction,spread",
    },
    {
      id: 5,
      icon: "/image/lc.svg",
      heading: "Live Chat",
      text: " Join us to get up to the mark professional business with live chat support that checks to raise expectations of clients by",
    },
    {
      id: 6,
      icon: "/image/ot.svg",
      heading: " Order Taking",
      text: "  Instantly respond to your potential customers with our order taking facility to increase the sales volume with cross",
    },
    {
      id: 7,
      icon: "/image/ahs.svg",
      heading: "After Hours Support",
      text: "Earn adequate reputation with After Hours Support service that sets the seal to retain maximum customers by allowing",
    },
    {
      id: 8,
      icon: "/image/de.svg",
      heading: "Data Entry",
      text: " Manage your ecommerce website in a spiffing manner by adeptly adding products, descriptions, content, images and tags",
    },
  ];

  console.log("data", data);
  return (
    <div className="flex flex-col gap-y-10">
      {/* customer part */}
      <div className="flex lg:flex-row md:flex-col gap-10 justify-normal xl:px-16 lg:px-10 2xl:py-10 md:py-5">
        <div>
          <div className="font-bold 2xl:text-[85px] xl:text-6xl md:text-center lg:text-start md:text-3xl 2xl:space-y-8 md:space-y-4">
            <p>
              <span className="text-[#0466C8]">Enhance </span>
              <span className="text-[#090909]">Your</span>
            </p>
            <p>
              <span className="text-[#090909]">Customer </span>
              <span className="text-[#282D47]">Service with</span>
            </p>
            <p>
              <span className="text-[#090909]">Expert </span>
              <span className="text-[#0466C8]">Professionals</span>
            </p>
          </div>
          <div className="py-4">
            <p className="font-normal 2xl:text-3xl xl:text-base lg:text-xs md:text-center lg:text-start 2xl:space-y-10 md:space-y-2 text-[#48464C]">
              Cultivate customer satisfaction and loyalty by enlisting the
              expertise of our <br /> professional team to elevate your customer
              service to new heights. Discover <br /> personalized solutions and
              enhance your brands reputation
            </p> 
          </div>
          <div className="2xl:space-y-8">
          <div className=" flex md:justify-center lg:justify-start">
            <button className="2xl:py-8 xl:py-4 lg:py-2 2xl:w-72 xl:w-48 md:w-40 text-center 2xl:text-2xl md:text-sm rounded-lg font-semibold  text-white bg-blue-700 hover:bg-black hover:text-white">
              Request Quote
            </button>
          </div>
          </div>
          <div className="flex md:justify-center lg:justify-start py-6 space-x-9">
            <div>
              <p className="font-bold 2xl:text-6xl lg:text-3xl text-[#090909]">
                2,291
              </p>
              <p className="2xl:text-2xl xl:text-base lg:text-sm font-normal text-[#605D64]">
                Happy Customers
              </p>
            </div>
            <div>
              <p className="font-bold 2xl:text-6xl lg:text-3xl text-[#090909]">
                4.8/5
              </p>
              <div className="flex gap-x-2 align-middle items-center">
                <Image
                  className="2xl:w-24 2xl:h-10 lg:w-14 lg:h-5"
                  src={"/image/stars.svg"}
                  width={77}
                  height={12}
                  alt="stars"
                ></Image>
                <p className="2xl:text-2xl xl:text-base lg:text-sm font-normal text-[#605D64]">
                  Rating
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-fit m-auto">
          <Image
            className="md:h-[400px] xl:h-[450px] 2xl:h-[700px] md:w-[420px] xl:w-[400px]  2xl:w-[650px]"
            src={"/image/man3.svg"}
            width={420}
            height={550}
            alt="man3"
          />
          <span className="flex items-center align-middle  2xl:h-24 h-16 p-1 space-x-3 rounded-lg border-2 absolute shadow-lg 2xl:left-[350px] 2xl:top-[190px] md:left-56 md:top-32 bg-white">
            <Image
              className="2xl:w-20 2xl:h-14 md:w-10 md:h-8"
              src={"/image/man1.svg"}
              width={60}
              height={60}
              alt="man1"
            ></Image>
            <p className="xl:font-semibold md:font-light 2xl:text-2xl xl:text-xs md:text-[2] flex items-center align-middle text-[#47484E]">
              Good Quality service
            </p>
          </span>
          <span className="flex items-center align-middle 2xl:w-96 md:w-60 2xl:h-24 md:h-16 p-1 space-x-3 rounded-lg border-2 shadow-lg absolute 2xl:right-96 2xl:top-[500px] xl:right-60 xl:top-80 lg:right-56 md:right-60 md:top-72  bg-white">
            <Image
              className="2xl:w-20 2xl:h-14 md:w-10 md:h-8"
              src={"/image/man2.svg"}
              width={60}
              height={60}
              alt="man2"
            ></Image>
            <p className="xl:font-semibold md:font-light 2xl:text-2xl xl:text-xs md:text-[2] flex items-center align-middle text-[#47484E]">
              Professional team to understand requirement
            </p>
          </span>
        </div>
      </div>
      {/* our approach */}
      <div className="2xl:py-20 md:py-10 bg-rectangle-one bg-[#F5F8FF]">
        <div>
          <p className="text-center">
            <span className="font-bold 2xl:text-6xl xl:text-4xl md:text-2xl text-[#090909]">
              Our{" "}
            </span>
            <span className="font-bold 2xl:text-6xl xl:text-4xl md:text-2xl text-[#0466C8]">
              Approach
            </span>
          </p>
          <p className="font-normal 2xl:text-3xl xl:text-base lg:text-sm md:text-xs text-center py-3 text-[#605D64]">
            Grow your business by retaining old customers by giving their call a
            value and providing exemplary answering services <br />{" "}
            <span> to all of their queries.</span>
          </p>
          <div className="flex justify-between mt-8 px-16">
            <span className="flex flex-col gap-5">
              <p className="font-medium 2xl:text-4xl lg:text-2xl md:text-lg text-center text-[#0466C8]">
                01
              </p>
              <Image 
                className="2xl:w-[54px] 2xl:h-[54px] md:w-[18] md:h-[18] m-auto"
                src={"/image/tool.svg"}
                width={40}
                height={40}
                alt="tool"
              ></Image>
              <p className="font-semibold 2xl:text-4xl lg:text-xl md:text-sm text-center text-[#090909]">
                Services
              </p>
              <p className="font-normal 2xl:text-3xl lg:text-sm md:text-xs text-center text-[#2B2930]">
                Select the service best suits you
              </p>
            </span>
            <span>
              <Image
                className="mt-6"
                src={"/image/line1.svg"}
                width={150}
                height={13}
                alt="line1"
              ></Image>
            </span>
            <span className="flex flex-col gap-3">
              <p className="font-medium 2xl:text-4xl lg:text-2xl md:text-lg text-center text-[#0466C8]">
                02
              </p>
              <Image
                className="2xl:w-[54px] 2xl:h-[54px] md:w-[18] md:h-[18] m-auto"
                src={"/image/form.svg"}
                width={40}
                height={40}
                alt="form"
              ></Image>
              <p className="font-semibold 2xl:text-4xl lg:text-xl md:text-sm text-center text-[#090909]">
                Form
              </p>
              <p className="font-normal 2xl:text-3xl lg:text-sm md:text-xs text-center text-[#2B2930]">
                Fill up the requirement from
              </p>
            </span>
            <span>
              <Image
                className="mt-6"
                src={"/image/line.svg"}
                width={150}
                height={13}
                alt="line2"
              ></Image>
            </span>
            <span className="flex flex-col gap-3">
              <p className="font-medium 2xl:text-4xl lg:text-2xl md:text-lg text-center text-[#0466C8]">
                03
              </p>
              <Image
                className="m-auto 2xl:w-[54px] 2xl:h-[54px] md:w-[18] md:h-[18]"
                src={"/image/Agent.svg"}
                width={40}
                height={40}
                alt="agent"
              ></Image>
              <p className="font-semibold 2xl:text-4xl lg:text-xl md:text-sm text-center text-[#090909]">
                Agent
              </p>
              <p className="font-normal 2xl:text-3xl lg:text-sm md:text-xs text-center text-[#2B2930]">
                One-on-one interview with agent
              </p>
            </span>
            <span>
              <Image
                className="mt-6"
                src={"/image/line1.svg"}
                width={150}
                height={13}
                alt="line1"
              ></Image>
            </span>
            <span className="flex flex-col gap-3">
              <p className="font-medium 2xl:text-4xl lg:text-2xl md:text-lg text-center text-[#0466C8]">
                04
              </p>
              <Image
                className="m-auto 2xl:w-[54px] 2xl:h-[54px] md:w-[18] md:h-[18]"
                src={"/image/finish.svg"}
                width={40}
                height={40}
                alt="finish"
              ></Image>
              <p className="font-semibold 2xl:text-3xl lg:text-xl md:text-sm text-center text-[#090909]">
                Finish
              </p>
              <p className="font-normal 2xl:text-4xl lg:text-sm md:text-xs text-center text-[#2B2930]">
                We’re all set to start
              </p>
            </span>
          </div>
        </div>
      </div>
      {/* // about us */}
      <div className="xl:py-8 2xl:py-16 flex justify-center gap-20">
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
      </div>
      {/* what we offer */}
      <div className="bg-[#F5F8FF] 2xl:py-16 md:py-10">
        <div>
          <p className="text-center font-bold">
            <span className="2xl:text-6xl xl:text-4xl md:text-3xl text-[#090909]">
              What we{" "}
            </span>
            <span className="2xl:text-6xl xl:text-4xl md:text-3xl text-[#0466C8]">
              offer
            </span>
          </p>

          <div className="px-8 mt-16 gap-3 grid grid-cols-4">
            {/* first part */}
            {data?.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
          </div>
          <div className="flex justify-center ">
            <button className=" py-3 2xl:mt-14 md:mt-6 2xl:w-72 lg:w-52 md:w-44 text-center 2xl:text-xl md:text-sm rounded-lg font-semibold  text-white bg-blue-700 hover:bg-black hover:text-white">
              View all
            </button>
          </div>
        </div>
      </div>
      {/* discover Industries */}
      <div className="grid grid-cols-2 px-7">
        <div className="2xl:space-y-10 md:space-y-3 py-7">
          <p>
            <span className="font-bold 2xl:text-6xl lg:text-4xl md:text-2xl text-[#0466C8]">
              Discover{" "}
            </span>
            <span className="font-bold 2xl:text-6xl lg:text-4xl md:text-2xl text-[#090909]">
              Industries
            </span>
          </p>
          <p className="font-normal 2xl:text-3xl xl:text-base md:text-[8px] lg:text-[12px] text-[#48464C]">
            A centralized customer contact center whose services are designed to
            serve all <br /> business sectors for their tailored contact center
            with highest call quality score and <br /> better conversion rate.
            We know, every business differs from others, so does the <br />{" "}
            customer’s needs, here we have brand specialist call center agents
            available to <br /> handle any type of customer support services for
            a wide variety of departments <br /> from all Industries
          </p>
        </div>

        <div>
          <Image
            className="2xl:w-[95%] 2xl:h-[70%] md:w-[90%] md:h-[60%] "
            src={"/image/ecomerce.svg"}
            width={630}
            height={316}
            alt="ecomerce"
          ></Image>
          <div className="2xl:p-6 md:p-3 2xl:w-[85%] lg:w-[75%] md:w-[70%] rounded-sm shadow-xl 2xl:space-y-8 xl:space-y-5 lg:space-y-4 md:space-y-3 relative xl:bottom-32 lg:bottom-20 md:bottom-16 left-12 bg-white">
            <Image
              className="md:w-8 md:h-8 lg:w-14 lg:h-14 2xl:w-20 2xl:h-20"
              src={"/image/icon1.svg"}
              width={50}
              height={50}
              alt="icon1"
            ></Image>
            <Link href="/ecommerce">
              {" "}
              <p className="2xl:text-3xl  xl:text-xl lg:text-lg md:text-base font-semibold text-[#151515]">
                Ecommerce
              </p>{" "}
            </Link>
            <p className="font-normal 2xl:text-2xl xl:text-base lg:text-xs md:text-[7px] text-[#5B5B5B]">
              Join the millions of satisfied shoppers experienced
              <br /> the joy of E-commerce with us.
            </p>
          </div>
        </div>

        {/* second part */}

        <div>
          <Image
            className="2xl:w-[95%] 2xl:h-[70%] md:w-[90%] md:h-[60%]"
            src={"/image/travel.svg"}
            width={630}
            height={316}
            alt="travel"
          ></Image>
          <div className="2xl:p-6 md:p-3 2xl:w-[85%] p-3  lg:w-[75%] md:w-[70%] rounded-sm shadow-xl 2xl:space-y-8 xl:space-y-5 lg:space-y-4 md:space-y-3 relative xl:bottom-32 lg:bottom-20 md:bottom-16 left-12 bg-white">
            <Image
              className="md:w-8 md:h-8 lg:w-14 lg:h-14 2xl:w-20 2xl:h-20"
              src={"/image/icon2.svg"}
              width={50}
              height={50}
              alt="icon2"
            ></Image>
            <Link href="/travel">
              <p className="2xl:text-3xl xl:text-xl lg:text-lg md:text-base font-semibold text-[#151515]">
                Travel & Tourism
              </p>
            </Link>
            <p className="font-normal 2xl:text-2xl xl:text-base lg:text-xs md:text-[7px] text-[#5B5B5B]">
              Unwind on pristine beaches, explore vibrant cultures, and <br />{" "}
              create unforgettable memories. Discover the world with us!
            </p>
          </div>
        </div>

        <div>
          <Image
            className="2xl:w-[95%] 2xl:h-[70%] md:w-[90%] md:h-[60%]"
            src={"/image/info.svg"}
            width={630}
            height={316}
            alt="information"
          ></Image>
          <div className="2xl:p-6 md:p-3 2xl:w-[85%] p-3 lg:w-[75%] md:w-[70%] rounded-sm shadow-xl 2xl:space-y-8 xl:space-y-5 lg:space-y-4 md:space-y-3 relative xl:bottom-32 lg:bottom-20 md:bottom-16 left-12 bg-white">
            <Image
              className="md:w-8 md:h-8 lg:w-14 lg:h-14 2xl:w-20 2xl:h-20"
              src={"/image/icon3.svg"}
              width={50}
              height={50}
              alt="icon3"
            ></Image>
            <Link href="/information">
              {" "}
              <p className="2xl:text-3xl xl:text-xl lg:text-lg md:text-base font-semibold text-[#151515]">
                Information Technology
              </p>
            </Link>
            <p className="font-normal 2xl:text-2xl xl:text-base lg:text-xs md:text-[7px] text-[#5B5B5B]">
              Join the millions of satisfied shoppers experienced
              <br /> the joy of E-commerce with us.
            </p>
          </div>
        </div>

        {/* 3rd part */}

        <div>
          <Image
            className="2xl:w-[95%] 2xl:h-[70%] md:w-[90%] md:h-[60%]"
            src={"/image/health.svg"}
            width={630}
            height={316}
            alt="health"
          ></Image>
          <div className="2xl:p-6 md:p-3 2xl:w-[85%] p-3  lg:w-[75%] md:w-[70%] rounded-sm shadow-xl 2xl:space-y-8 xl:space-y-5 lg:space-y-4 md:space-y-3 relative xl:bottom-32 lg:bottom-20 md:bottom-16 left-12 bg-white">
            <Image
              className="md:w-8 md:h-8 lg:w-14 lg:h-14 2xl:w-20 2xl:h-20"
              src={"/image/icon4.svg"}
              width={50}
              height={50}
              alt="icon4"
            ></Image>
            <Link href="/healthcare">
              {" "}
              <p className="2xl:text-3xl xl:text-xl lg:text-lg md:text-base font-semibold text-[#151515]">
                Health Care
              </p>
            </Link>
            <p className="font-normal 2xl:text-2xl xl:text-base lg:text-xs md:text-[7px] text-[#5B5B5B]">
              Conveys the essence of personalized and compassionate <br />{" "}
              healthcare emphasizing a patient-centered approach.
            </p>
          </div>
        </div>

        <div>
          <Image
            className="2xl:w-[95%] 2xl:h-[70%] md:w-[90%] md:h-[60%]"
            src={"/image/food.svg"}
            width={630}
            height={316}
            alt="food"
          ></Image>
          <div className="2xl:p-6 md:p-3 2xl:w-[85%] p-3  lg:w-[75%] md:w-[70%] rounded-sm shadow-xl 2xl:space-y-8 xl:space-y-5 lg:space-y-4 md:space-y-3 relative xl:bottom-32 lg:bottom-20 md:bottom-16 left-12 bg-white">
            <Image
              className="md:w-8 md:h-8 lg:w-14 lg:h-14 2xl:w-20 2xl:h-20"
              src={"/image/icon5.svg"}
              width={50}
              height={50}
              alt="icon5"
            ></Image>
            <Link href="/food">
              <p className="2xl:text-3xl xl:text-xl lg:text-lg md:text-base font-semibold text-[#151515]">
                Food & Beverage
              </p>
            </Link>
            <p className="font-normal 2xl:text-2xl xl:text-base lg:text-xs md:text-[7px] text-[#5B5B5B]">
              Savor the essence of every dish and quench your thirst for <br />{" "}
              exceptional beverages.
            </p>
          </div>
        </div>

        {/* 4th part */}

        <div>
          <Image
            className="2xl:w-[95%] 2xl:h-[70%] md:w-[90%] md:h-[60%]"
            src={"/image/financial.svg"}
            width={630}
            height={316}
            alt="financial"
          ></Image>
          <div className="2xl:p-6 md:p-3 2xl:w-[85%] p-3 lg:w-[75%] md:w-[70%] rounded-sm shadow-xl 2xl:space-y-8 xl:space-y-5 lg:space-y-4 md:space-y-3 relative xl:bottom-32 lg:bottom-20 md:bottom-16 left-12 bg-white">
            <Image
              className="md:w-8 md:h-8 lg:w-14 lg:h-14 2xl:w-20 2xl:h-20"
              src={"/image/icon7.svg"}
              width={50}
              height={50}
              alt="icon7"
            ></Image>
            <Link href="/financial">
              <p className="2xl:text-3xl xl:text-xl lg:text-lg md:text-base font-semibold text-[#151515]">
                Financial Services
              </p>
            </Link>
            <p className="font-normal 2xl:text-2xl xl:text-base lg:text-xs md:text-[7px] text-[#5B5B5B]">
              Take the first step toward financial security today. Contact{" "}
              <br /> us to explore and start building a brighter financial
              future.
            </p>
          </div>
        </div>

        <div>
          <Image
            className="2xl:w-[95%] 2xl:h-[70%] md:w-[90%] md:h-[60%]"
            src={"/image/service.svg"}
            width={630}
            height={316}
            alt="service"
          ></Image>
          <div className="2xl:p-6 md:p-3 2xl:w-[85%] p-3 lg:w-[75%] md:w-[70%] rounded-sm shadow-xl 2xl:space-y-8 xl:space-y-5 lg:space-y-4 md:space-y-3 relative xl:bottom-32 lg:bottom-20 md:bottom-16 left-12 bg-white">
            <Image
              className="md:w-8 md:h-8 lg:w-14 lg:h-14 2xl:w-20 2xl:h-20"
              src={"/image/icon8.svg"}
              width={50}
              height={50}
              alt="icon8"
            ></Image>
            <Link href="/servicesproviders">
              {" "}
              <p className="2xl:text-3xl xl:text-xl lg:text-lg md:text-base font-semibold text-[#151515]">
                Service Providers
              </p>
            </Link>
            <p className="font-normal 2xl:text-2xl xl:text-base lg:text-xs md:text-[7px] text-[#5B5B5B]">
              Your satisfaction is our top priority. Choose the experts and{" "}
              <br /> experience flawless and excellence services every time.
            </p>
          </div>
        </div>
      </div>
      {/* Carousal */}
      <Carousal />
      {/* contact now */}
      <Contactnow />
    </div>
  );
};

export default HomePage;
