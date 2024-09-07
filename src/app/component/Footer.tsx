import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer className=" xl:px-8 bg-[#001845]">
          <main className="lg:flex lg:flex-row md:flex md:flex-col items-center justify-center xl:py-10 md:py-3 lg:gap-x-16 lg:grid-cols-4 xl:gap-48 md:gap-y-10 border-b-2 border-gray-700">
            <div className="">
              <Image
                src={"/image/apexsign.svg"}
                width={331}
                height={40}
                alt="apex"
              ></Image>
              <p className="my-5 h-auto w-80 2xl:text-lg lg:text-xs font-normal text-justify text-[#D9DBE1]">
                We believe customer support is the only opportunity for
                businesses to create a competitive advantage by connecting them
                at emotional level. Therefore we are taking the responsibility
                to meet customer’s expectation & satisfy them
              </p>
              <span className="flex gap-3 justify-center">
                <Image
                  src={"/image/Facbook.svg"}
                  width={38}
                  height={38}
                  alt="fb"
                ></Image>
                <Image
                  src={"/image/In icon.svg"}
                  width={38}
                  height={38}
                  alt="inicon"
                ></Image>
                <Image
                  src={"/image/Insta.svg"}
                  width={38}
                  height={38}
                  alt="insta"
                ></Image>
                <Image
                  src={"/image/Twiter 1.svg"}
                  width={38}
                  height={38}
                  alt="twitter"
                ></Image>
                <Image
                  src={"/image/Twiter.svg"}
                  width={38}
                  height={38}
                  alt="twitter"
                ></Image>
              </span>
            </div>
            <div className="text-white space-y-3 lg:text-left md:text-center">
              <h1 className="md:underline lg:no-underline font-normal lg:text-left md:text-center 2xl:text-2xl md:text-base text-[#FFFFFF]">
                Services
              </h1>
             <p className="md:text-sm lg:text-[10px] xl:text-sm 2xl:text-xl font-normal hover:underline text-[#D9DBE1]">
             <Link href="/virtualassistance"> Virtual Assistant</Link>
              </p> 
            <p className="md:text-sm lg:text-[10px] xl:text-sm 2xl:text-xl font-normal hover:underline text-[#D9DBE1]">
            <Link href="/afterhoursupport">After Hours Support</Link>
              </p>
              <p className="md:text-sm lg:text-[10px] xl:text-sm 2xl:text-xl font-normal hover:underline text-[#D9DBE1]">
              <Link href="/emailcustomer">Email Customer Support</Link>
              </p>
             <p className="md:text-sm lg:text-[10px] xl:text-sm 2xl:text-xl font-normal hover:underline text-[#D9DBE1]">
             <Link href="/socialmedia">  Social Media Customer</Link>
              </p>
             <p className="md:text-sm lg:text-[10px] xl:text-sm 2xl:text-xl font-normal hover:underline text-[#D9DBE1]">
             <Link href="/livechat"> Live Chat Customer
                Support</Link>
              </p>
              <p className="md:text-sm lg:text-[10px] xl:text-sm 2xl:text-xl font-normal hover:underline text-[#D9DBE1]">
              <Link href="/ordertaking"> Order Taking</Link>
              </p>
            </div>
            <div className="text-white space-y-3 lg:text-left md:text-center">
              <h1 className="md:underline lg:no-underline font-normal lg:text-left md:text-center 2xl:text-2xl md:text-base text-[#FFFFFF]">
                Priority Industry
              </h1>
              <p className="md:text-sm lg:text-[10px] xl:text-sm 2xl:text-xl font-normal cursor-pointer hover:underline text-[#D9DBE1]">
                E-commerce
              </p>
              <p className="md:text-sm lg:text-[10px] xl:text-sm 2xl:text-xl font-normal cursor-pointer hover:underline text-[#D9DBE1]">
                Information Technology
              </p>
              <p className="md:text-sm lg:text-[10px] xl:text-sm 2xl:text-xl font-normal cursor-pointer hover:underline text-[#D9DBE1]">
                Health Care
              </p>
              <p className="md:text-sm lg:text-[10px] xl:text-sm 2xl:text-xl font-normal cursor-pointer hover:underline text-[#D9DBE1]">
                Service Providers
              </p>
              <p className="md:text-sm lg:text-[10px] xl:text-sm 2xl:text-xl font-normal cursor-pointer hover:underline text-[#D9DBE1]">
                Fashion Industry
              </p>
              <p className="md:text-sm lg:text-[10px] xl:text-sm 2xl:text-xl font-normal cursor-pointer hover:underline text-[#D9DBE1]">
                Fashion Industry
              </p>
            </div>
            <div className="text-white space-y-3 lg:text-left md:text-center">
              <h1 className="md:underline lg:no-underline font-normal lg:text-left md:text-center 2xl:text-2xl md:text-base text-[#FFFFFF]">
                Pages
              </h1>
              <p className="md:text-sm lg:text-[10px] xl:text-sm 2xl:text-xl font-normal cursor-pointer hover:underline text-[#D9DBE1]">
                About Us
              </p>
              <p className="md:text-sm lg:text-[10px] xl:text-sm 2xl:text-xl font-normal cursor-pointer hover:underline text-[#D9DBE1]">
                Get A Quote
              </p>
              <p className="md:text-sm lg:text-[10px] xl:text-sm 2xl:text-xl font-normal cursor-pointer hover:underline text-[#D9DBE1]">
                Live Chat Customer Support
              </p>
              <p className="md:text-sm lg:text-[10px] xl:text-sm 2xl:text-xl font-normal cursor-pointer hover:underline text-[#D9DBE1]">
                Terms and Conditions
              </p>
              <p className="md:text-sm lg:text-[10px] xl:text-sm 2xl:text-xl font-normal cursor-pointer hover:underline text-[#D9DBE1]">
                Contact Us
              </p>
            </div>
          </main>
          <main className="flex justify-between px-8 py-4 align-middle items-center">
            <div className="text-[#D9DBE1] font-normal 2xl:text-2xl md:text-xs">
              © 2000-2021, All Rights Reserved
            </div>
            <div className="flex space-x-4">
              <Image className='2xl:h-[100px] 2xl:w-[80px] lg:h-[80px] lg:w-[60px] md:h-[50px] md:w-[50px]'
                src={"/image/logo1.svg"}
                width={50}
                height={50}
                alt="1"
              ></Image>
              <Image className='2xl:h-[100px] 2xl:w-[80px] lg:h-[80px] lg:w-[60px] md:h-[50px] md:w-[50px]'
                src={"/image/logo2.svg"}
                width={50}
                height={50}
                alt="2"
              ></Image>
              <Image className='2xl:h-[100px] 2xl:w-[80px] lg:h-[80px] lg:w-[60px] md:h-[50px] md:w-[50px]'
                src={"/image/logo3.svg"}
                width={50}
                height={50}
                alt="3"
              ></Image>
              <Image className='2xl:h-[100px] 2xl:w-[80px] lg:h-[80px] lg:w-[60px] md:h-[50px] md:w-[50px]'
                src={"/image/logo4.svg"}
                width={50}
                height={50}
                alt="4"
              ></Image>
              <Image className='2xl:h-[100px] 2xl:w-[80px] lg:h-[80px] lg:w-[60px] md:h-[50px] md:w-[50px]'
                src={"/image/logo5.svg"}
                width={50}
                height={50}
                alt="5"
              ></Image>
              <Image className='2xl:h-[100px] 2xl:w-[80px] lg:h-[80px] lg:w-[60px] md:h-[50px] md:w-[50px]'
                src={"/image/logo6.svg"}
                width={50}
                height={50}
                alt="6"
              ></Image>
              <Image className='2xl:h-[100px] 2xl:w-[80px] lg:h-[80px] lg:w-[60px] md:h-[50px] md:w-[50px]'
                src={"/image/logo7.svg"}
                width={50}
                height={50}
                alt="7"
              ></Image>
              
            </div>
          </main>
        </footer>
  )
}

export default Footer