import React from "react";
import Contactnow from "../component/Contactnow";
import Profitlossprojection from "../component/industry/Profitlossprojection";
import Industry from "../component/industry/Industryhead";
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

function Ecommerce() {
  const one: datatype[] = [
    {
      id: 1,
      icon: "/image/ecomerce3.svg",
      heading: "Ecommerce",
      heading2: "Industry",
      text: "We're committed to not just meeting but exceeding your customers' expectations. Our dedication to customer satisfaction sets us apart, creating loyal customers who keep coming back for more.",
    },
  ];

  const two: typedata[] = [
    {
      id: 1,
      h1: "Digital Marketing Excellence",
      t1: "Leveraging targeted online ads and content marketing to reach a wide audience and engage potential customers effectively.",
      h2: "Strategic Partnerships",
      t2: "Building collaborations with ecommerce platforms and solution providers to expand our market reach and offer integrated solutions.",
      h3: "Direct Sales Approach",
      t3: "Engaging directly with potential clients to establish personal connections and tailor our services to their specific needs.",
      h4: "Cost-Efficient Acquisition",
      t4: "Our proficiency in digital marketing results in a cost-effective customer acquisition, averaging $50 per customer gained.",
    },
  ];

const three: typedata2[]=[
{
  id: 1,
  icon1:"/image/cl1.svg",
  para1:"ApexCyberServices key competitors include Concentrix, Sitel, Teleperformance, Alorica, Teleservices, and West Corporation. These companies are all well-established players in the contact center industry, and they offer a wide range of services to ecommerce businesses.",
  heading1:"Concentrix",
  text2:"Market share: 15%",
  text3:"Global presence: 40 countries",
  text4:"Revenue: $4.8 billion",
  heading2:"West Corporation",
  text5:"Market share: 10%",
  text6:"Global presence: 29 countries",
  text7:"Revenue: $2.9 billion",
  para2:"The global ecommerce market is expected to reach $5.5 trillion by 2027. This growth presents a significant opportunity for ecommerce call center providers. ApexCyberServices has a proven track record of success in the ecommerce call center industry. We have a team of over 1,000 experienced call center agents who serve over 100 ecommerce businesses worldwide.",
  icon2: "/image/cl2.svg",
},
];

const four: datatype3[]=[
  {
    id: 1,
    icon:"/image/ps1.png",
    pic1:"/image/eig.svg",
    pic2:"/image/hce.svg",
    pic3:"/image/iocs.svg",
    heading1:"Ecommerce Industry Growth",
    heading2:"High Customer Expectations",
    heading3:"Importance of Customer Service",
    heading4:"Tailored Solution",
    heading5:"Specialized Agents",
    heading6:"Round-the-Clock Coverage",
    text1:"The ecommerce sector is thriving due to the convenience and accessibility of online shopping, attracting a growing number of consumers.",
    text2:"Customers have increasingly high expectations for quick, efficient, and personalized service when shopping online.",
    text3:"Recent data indicates that 68% of online shoppers are more likely to complete a purchase if they receive excellent customer service.",
    text4:"ApexCyberServices provides a customized solution to tackle the customer service challenges faced by the ecommerce industry.",
    text5:"We employ a dedicated team of brand specialist call center agents who are carefully selected to ensure exceptional support for your customers.",
    text6:"Our services are available 24/7, offering support and assistance to customers at any time, enhancing their overall experience.",
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

export default Ecommerce;
