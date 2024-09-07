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

function Financial() {
  const one: datatype[] = [
    {
      id: 6,
      icon: "/image/financials.svg",
      heading: "Financial ",
      heading2: "Services ",
      text: "Navigate the financial landscape with confidence through ApexCyberServices. Our comprehensive Financial Services offer a tailored approach, leveraging cutting-edge solutions to secure your future. Explore a realm of financial possibilities with us.",
    },
  ];

  const two: typedata[] = [
    {
      id: 6,
      h1: "Market Analysis",
      t1: "Conduct thorough market research to understand your industry, target audience, and competitors. Identify market trends, customer needs, and potential opportunities for your product or service.",
      h2: "Define Target Audience",
      t2: "Clearly define your target audience based on demographics, psychographics, and behavior. Understand their pain points, preferences, and decision-making processes.",
      h3: "Unique Selling Proposition",
      t3: "Clearly articulate what sets your product or service apart from competitors. Define your unique value proposition that appeals to your target audience.",
      h4: "Digital Presence",
      t4: "Establish a strong online presence through a user-friendly website and active social media profiles. Implement search engine optimization (SEO) strategies to improve online visibility.",
    },
  ];

  const three: typedata2[]=[
    {
      id: 6,
      icon1:"/image/cl11.svg",
      para1:"In the dynamic landscape of the financial services industry, ApexCyberServices faces robust competition from several industry leaders, each contributing to the sector's vibrancy. The competitive landscape is characterized by a diverse array of financial service providers, each distinguished by their unique strengths and offerings.",
      heading1:"Delayed Response Times",
      text2:"Market Share: 20%",
      text3:"Global Presence: 70 countries",
      text4:"Revenue: $12.5 billion",
      heading2:"FreshFlavors Enterprises",
      text5:"Market Share: 8%",
      text6:"Global Presence: 49 markets",
      text7:"Revenue: $1.5 billion",
      para2:"The financial services industry is poised for substantial growth, with significant market opportunities arising from evolving consumer needs and technological advancements. As the landscape transforms, ApexCyberServices is strategically positioned to capitalize on this opportunity. With a strong track record in the financial services call center sector, we aim to leverage our expertise to drive success for our clients.",
      icon2: "/image/cl12.svg",
    },
    ];

    const four: datatype3[]=[
      {
        id: 6,
        icon:"/image/ps6.png",
        pic1:"/image/cd1.svg",
        pic2:"/image/rit.svg",
        pic3:"/image/cc.svg",
        heading1:"Customer Dissatisfaction",
        heading2:"Churn and Switching",
        heading3:"Complexity Concerns",
        heading4:"Expert Financial Support",
        heading5:"Enhanced Customer Satisfaction",
        heading6:"24/7 Support",
        text1:"48% of financial service customers cite poor customer service as the primary reason for switching providers. 67% express frustration with the complexity of financial products and services.",
        text2:"High dissatisfaction leads to a significant 15% increase in customer churn. Nearly half of customers consider switching providers due to subpar service experiences.",
        text3:"67% of customers find financial products overly complex, leading to confusion and dissatisfaction. Complexity contributes to a lack of customer loyalty and trust.",
        text4:"ApexCyberServices provides a dedicated team of financial experts to address intricate customer queries. Our experts offer personalized assistance, navigating the complexities of financial products with clarity.",
        text5:"Our solution ensures a 20% increase in customer satisfaction through clear and responsive support. We prioritize customer needs, fostering trust and loyalty in the Financial Services sector.",
        text6:"ApexCyberServices stands out by providing 24/7 customer support, addressing customer needs anytime, anywhere.",
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

export default Financial;
