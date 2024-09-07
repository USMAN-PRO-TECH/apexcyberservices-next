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

function Food() {
  const one: datatype[] = [
    {
      id: 5,
      icon: "/image/beverage.svg",
      heading: "Food ",
      heading2: " & Beverage",
      text: "Indulge your senses with ApexCyberServices, your ultimate guide to Food & Beverage exploration. Delight in a symphony of flavors, curated culinary experiences, and exceptional service. Uncover a world of gastronomic wonders tailored just for you.",
    },
  ];

  const two: typedata[] = [
    {
      id: 5,
      h1: "Market Analysis",
      t1: "Overview of the industry and market trends. Analysis of competitors and their marketing strategies. Identification of target audience and buyer personas.",
      h2: "Brand Positioning",
      t2: "Emphasize ApexCyberServices' specialization in providing call center services exclusively for the Food & Beverage sector.",
      h3: "Online Presence",
      t3: "Ensure the company website is optimized for search engines and provides clear information about services tailored to the Food & Beverage industry.",
      h4: "Industry Partnerships",
      t4: "Establish strategic partnerships with key players in the Food & Beverage industry, including suppliers, distributors, and industry associations.",
    },
  ];

  const three: typedata2[]=[
    {
      id: 5,
      icon1:"/image/cl9.svg",
      para1:"ApexCyberServices faces strong competition in the Food & Beverage industry. Key competitors include XYZ Food Solutions, ABC Culinary Services, TastyBites Innovations, and FreshFlavors Enterprises. These companies are recognized for their diverse offerings and established presence in the Food & Beverage sector.",
      heading1:"TastyBites Innovations",
      text2:"Market Share: 20%",
      text3:"Global Presence: 70 countries",
      text4:"Revenue: $12.5 billion",
      heading2:"FreshFlavors Enterprises",
      text5:"Market Share: 8%",
      text6:" Global Presence: 49 markets",
      text7:" Revenue: $1.5 billion",
      para2:"The Food & Beverage industry is poised for substantial growth, with the global market expected to reach unprecedented figures by 2027. This presents a lucrative opportunity for call center providers catering specifically to the needs of businesses in this sector. ApexCyberServices is well-positioned to capitalize on this market opportunity, leveraging our expertise and a proven track record of success.",
      icon2: "/image/cl10.svg",
    },
    ];

    const four: datatype3[]=[
      {
        id: 5,
        icon:"/image/ps5.png",
        pic1:"/image/sdo.svg",
        pic2:"/image/cd1.svg",
        pic3:"/image/ic1.svg",
        heading1:"Customer Loyalty Impact",
        heading2:"Response Expectations",
        heading3:"Service-Related Complaints",
        heading4:"Tailored Training",
        heading5:"Hygiene and Safety Commitment",
        heading6:"Personalized Service",
        text1:"68% of consumers are willing to switch food brands due to poor customer service experiences, impacting customer loyalty.",
        text2:"75% of customers in the Food & Beverage sector expect quick responses to their inquiries, emphasizing the need for swift customer service.",
        text3:"A significant challenge is the high occurrence of service-related complaints, ranging from order issues to dietary concerns, affecting brand reputation.",
        text4:"ApexCyberServices provides specialized training for agents to handle food industry-specific queries, ensuring in-depth knowledge of dietary requirements, food safety, and culinary trends.",
        text5:"Our commitment to maintaining the highest hygiene and safety standards in customer interactions addresses customer concerns and builds trust in food-related services.",
        text6:"ApexCyberServices offers personalized customer service to enhance the overall customer experience, resulting in a 20% improvement in customer satisfaction.",
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

export default Food;
