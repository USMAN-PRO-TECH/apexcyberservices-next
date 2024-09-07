import React from "react";
import Industry from "../component/industry/Industryhead";
import Profitlossprojection from "../component/industry/Profitlossprojection";
import Contactnow from "../component/Contactnow";
import Marketingstrategy from "../component/industry/Marketing&SalesStrategy";
import Competitivelandscape from "../component/industry/Competitivelandscape";
import Table from "../component/industry/Table";
import Problemstatement from "../component/industry/Problemstatement";

export type datatype = {
  id: number;
  icon: string;
  heading: string;
  heading2: string;
  text: string;
};

export type typedata = {
  id: number;
  h1: string;
  t1: string;
  h2: string;
  t2: string;
  h3: string;
  t3: string;
  h4: string;
  t4: string;
};

export type typedata2 = {
  id: number;
  icon1: string;
  para1:string;
  heading1:string;
  text2:string;
  text3:string;
  text4:string;
  heading2:string;
  text5:string;
  text6:string;
  text7:string;
  para2:string;
  icon2: string;
};

export type datatype3 = {
  id: number;
  icon: string;
  pic1: string;
  pic2: string;
  pic3: string;
  heading1:string;
  heading2:string;
  heading3:string;
  heading4:string;
  heading5:string;
  heading6:string;
  text1:string;
  text2:string;
  text3:string;
  text4:string;
  text5:string;
  text6:string;
};


function Travel() {
  const one: datatype[] = [
    {
      id: 2,
      icon: "/image/tour.svg",
      heading: "Travel",
      heading2: " & Tourism",
      text: "Embark on extraordinary journeys with ApexCyberServices, your premier companion in Travel & Tourism. Experience innovation, personalized services, and seamless adventures that redefine travel. Discover a world crafted for you.",
    },
  ];

  const two: typedata[] = [
    {
      id: 2,
      h1: "Target Audience Definition",
      t1: "Identify the specific segments within the Travel & Tourism industry that ApexCyberServices aims to serve. This could include travel agencies, tour operators, hotels, and other businesses in the sector.",
      h2: "Online Presence",
      t2: "Establish a strong online presence through a professional and user-friendly website. Optimize the website for search engines (SEO) to ensure visibility when potential clients search for services in the Travel & Tourism sector.",
      h3: "Sales Team Training",
      t3: "Equip the sales team with in-depth product knowledge and industry insights. Provide training on effective communication, objection handling, and negotiation skills.",
      h4: "Brand Positioning",
      t4: "ApexCyberServices in the Travel & Tourism market. Highlight key differentiators that set the company apart from competitors.",
    },
  ];

  const three: typedata2[]=[
    {
      id: 2,
      icon1:"/image/cl3.svg",
      para1:"ApexCyberServices' key competitors in the Travel & Tourism industry are globally recognized players, each contributing significantly to the sector. These competitors bring diverse offerings and have a substantial impact on the market.",
      heading1:"Expedia Group",
      text2:"Market Share: 20%",
      text3:"Global Presence: 70 countries",
      text4:"Revenue: $12.5 billion",
      heading2:"TripAdvisor",
      text5:"Revenue: $12.5 billion",
      text6:"Global Presence: 49 markets",
      text7:"Revenue: $1.5 billion",
      para2:"The Travel & Tourism industry is poised for substantial growth, with global opportunities projected to unfold in the coming years. As a key player in the industry, ApexCyberServices is well-positioned to capitalize on this market opportunity. Our commitment to excellence and a team of dedicated professionals uniquely position us to leverage the expanding landscape of the Travel & Tourism sector.",
      icon2: "/image/cl4.svg",
    },
    ];

    const four: datatype3[]=[
      {
        id: 2,
        icon:"/image/ps2.png",
        pic1:"/image/sdo.svg",
        pic2:"/image/cd1.svg",
        pic3:"/image/mc.svg",
        heading1:"Lack of Personalization",
        heading2:"Customer Dissatisfaction",
        heading3:"Multilingual Communication",
        heading4:"Enhanced Customer Satisfaction",
        heading5:"AI-Powered Travel Assistance",
        heading6:"24/7 Support Services",
        text1:"Many travel businesses struggle to provide personalized assistance, leading to a one-size-fits-all approach that doesn't cater to individual traveler needs.",
        text2:"A significant percentage of travelers express dissatisfaction with the existing customer support services within the Travel & Tourism sector.",
        text3:"The diverse nature of travelers requires efficient multilingual support, which is often lacking in the current industry standards.",
        text4:"By focusing on prompt, personalized, and multilingual support, ApexCyberServices aims to significantly improve customer satisfaction rates within the Travel & Tourism industry.",
        text5:" Leveraging advanced AI technology, ApexCyberServices provides personalized travel recommendations, real-time itinerary updates, and tailored support to meet the unique preferences and needs of each traveler.",
        text6:"ApexCyberServices addresses delayed responses by providing round-the-clock customer support, ensuring travelers receive timely assistance at any stage of their journey.",
      },
      ];

  return (
    <main>
    <div>
      {one?.map((item) => {
        return <Industry key={item.id} item={item} />;
      })}
    </div>
    <div>
    {four?.map((item) => {
      return <Problemstatement key={item.id} item={item} />;
    })}
  </div>
    <Profitlossprojection />
    <div>
      {three?.map((item) => {
        return <Competitivelandscape key={item.id} item={item} />;
      })}
    </div>
    <Table />
    <div>
      {two?.map((item) => {
        return <Marketingstrategy key={item.id} item={item} />;
      })}
    </div>
    <div className="mt-10">
    <Contactnow />
    </div>
  </main>
  );
}

export default Travel;
