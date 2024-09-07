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
  para1: string;
  heading1: string;
  text2: string;
  text3: string;
  text4: string;
  heading2: string;
  text5: string;
  text6: string;
  text7: string;
  para2: string;
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

function servicesproviders() {
  const one: datatype[] = [
    {
      id: 7,
      icon: "/image/servicesproviders.svg",
      heading: "Service ",
      heading2: "Providers",
      text: "Elevate your business with ApexCyberServices, your dedicated partner in Service Excellence. Unlock unparalleled solutions, personalized strategies, and a seamless provider-client experience.",
    },
  ];

  const two: typedata[] = [
    {
      id: 7,
      h1: "Customer Segmentation",
      t1: "Divide your target market into segments based on demographics, behaviors, or preferences. Tailor marketing messages and strategies to each segment.",
      h2: "Marketing Objectives",
      t2: "Clearly define your marketing goals and objectives. Ensure they are specific, measurable, achievable, relevant, and time-bound (SMART).",
      h3: "Digital Marketing",
      t3: "Develop an online presence through a website, social media, and other digital channels. Use SEO, content marketing, and paid advertising to increase visibility.",
      h4: "Content Strategy",
      t4: "Create valuable and relevant content to engage your audience. Utilize blogs, videos, infographics, and other content formats.",
    },
  ];

  const three: typedata2[] = [
    {
      id: 7,
      icon1: "/image/cl13.svg",
      para1:
        "ApexCyberServices operates in a competitive landscape alongside industry leaders such as Concentrix, Sitel, Teleperformance, Alorica, Teleservices, and West Corporation. These renowned service providers offer a diverse array of solutions tailored to meet the demands of ecommerce businesses.",
      heading1: "Concentrix",
      text2: "Market Share: 20%",
      text3: "Global Presence: 70 countries",
      text4: "Revenue: $12.5 billion",
      heading2: "West Corporation",
      text5: "Market Share: 8%",
      text6: " Global Presence: 49 markets",
      text7: "Revenue: $1.5 billion",
      para2:
        "The global Travel & Tourism industry is poised for substantial growth, with projections indicating that it will surpass $8.5 trillion by 2027. This expansive growth creates a remarkable opportunity for service providers catering to the unique needs of the Travel & Tourism sector. ApexCyberServices stands at the forefront of this burgeoning market, offering a comprehensive suite of services tailored to meet the dynamic demands of the industry.",
      icon2: "/image/cl14.svg",
    },
  ];

  const four: datatype3[]=[
    {
      id: 7,
      icon:"/image/ps7.png",
      pic1:"/image/sdo.svg",
      pic2:"/image/cd1.svg",
      pic3:"/image/isc.svg",
      heading1:"Diverse Service Portfolios",
      heading2:"Customer Discontinuation",
      heading3:"Inconsistent Support Channels",
      heading4:"Unified Customer Service Approach",
      heading5:"Reduced Resolution Times",
      heading6:"Measurable Improvement",
      text1:"Service Providers often struggle to maintain high-quality customer interactions across a diverse range of services, leading to inconsistencies and challenges in delivering seamless support.",
      text2:"Reports show that 68% of customers discontinue services due to poor customer service experiences, impacting customer retention rates and overall business profitability.",
      text3:"A significant challenge lies in the inconsistency of support across various channels, with 45% of customers expressing frustration over the lack of uniformity in service resolution.",
      text4:"We provide a unified and efficient approach to customer service, ensuring a consistent level of support across all service offerings. This results in a 25% improvement in customer satisfaction scores.",
      text5:"ApexCyberServices focuses on reducing service resolution times by optimizing processes and leveraging our agents' specialized knowledge. This leads to a 30% reduction in the time it takes to resolve customer inquiries.",
      text6:"Our solution is designed to deliver measurable results, addressing the root causes of customer dissatisfaction and providing Service Providers with the tools to enhance customer interactions effectively.",
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

export default servicesproviders;
