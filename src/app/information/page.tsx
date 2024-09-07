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
  h2: string;
  h3: string;
  h4: string;
  t1: string;
  t2: string;
  t3: string;
  t4: string;
};

export type typedata2 = {
  id: number;
  para1:string;
  para2:string;
  icon1: string;
  icon2: string;
  heading1:string;
  heading2:string;
  text2:string;
  text3:string;
  text4:string;
  text5:string;
  text6:string;
  text7:string;
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

function Information() {
  const one: datatype[] = [
    {
      id: 3,
      icon: "/image/information.svg",
      heading: "Information",
      heading2: "Technology",
      text: " Elevate your business through our innovative solutions, from cybersecurity to software development. Unleash the power of technology tailored to meet your unique needs and propel your success into the digital age.",
    },
  ];

  const two: typedata[] = [
    {
      id: 3,
      h1: "Market Analysis",
      h2: "Target Audience",
      h3: "Marketing Channels",
      h4: "Content Marketing",
      t1: "Identify and understand your target market. Analyze market trends, customer behaviors, and competitors. Conduct a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats).",
      t2: "Define your target audience and buyer personas. Understand the needs, preferences, and pain points of your target customers.",
      t3: "Choose relevant marketing channels based on your target audience. Utilize a mix of digital marketing, content marketing, social media, email marketing, and traditional channels.",
      t4: "Develop a content strategy that provides value to your audience. Create high-quality content to establish thought leadership in your industry.",
    },
  ];

  const three: typedata2[]=[
    {
      id: 3,
      icon1:"/image/cl5.svg",
      icon2: "/image/cl6.svg",
      para1:"In the Information Technology sector, ApexTech Solutions faces competition from several notable companies, each contributing to the industry's dynamic landscape. Key competitors include TechGlobe Innovations, InfraNet Solutions, Digital Dynamics, CodeCrafters, and CyberSys Technologies.",
      para2:"The Information Technology (IT) sector is positioned for significant growth and presents a promising market opportunity for businesses looking to innovate and thrive in the digital landscape. Rapid advancements in technology, increasing demand for digital solutions, and a global shift towards digital transformation contribute to the immense potential within the IT industry.",
      heading1:"Expedia Group",
      heading2:"CyberSys Technologies",
      text2:"Market Share: 20%",
      text3:"Global Presence: 70 countries",
      text4:"Revenue: $12.5 billion",
      text5:"Market Share: 8%",
      text6:"Global Presence: 49 markets",
      text7:"Revenue: $1.5 billion",
    },
    ];

    const four: datatype3[]=[
      {
        id: 3,
        icon:"/image/ps3.png",
        pic1:"/image/sdo.svg",
        pic2:"/image/ic1.svg",
        pic3:"/image/rit.svg",
        heading1:"Service Downtime and Outages",
        heading2:"Inefficient Communication",
        heading3:"Rising IT Support Costs",
        heading4:"Unified Communication Platforms",
        heading5:"Outsourced Scalable Support",
        heading6:"Comprehensive Cybersecurity Measures",
        text1:"IT companies often face challenges related to service downtime and unexpected outages. These disruptions can lead to financial losses, damage to reputation, and client dissatisfaction.",
        text2:"ommunication breakdowns within IT support teams and between teams and clients can result in delayed issue resolution. Inefficient communication channels hinder collaboration and contribute to prolonged downtime.",
        text3:"The costs associated with maintaining an in-house IT support team, training, and infrastructure are continually increasing. IT companies struggle to manage support costs while maintaining high-quality service levels.",
        text4:"We introduce unified communication platforms that streamline interactions within IT support teams and enhance communication with clients. This ensures real-time collaboration, faster issue resolution, and improved overall efficiency.",
        text5:"ApexCyberServices offers an outsourced IT support model that reduces the burden of managing an in-house team.",
        text6:"Our cybersecurity experts implement robust measures to identify and address security vulnerabilities. This includes regular audits, threat assessments, and the implementation of the latest security protocols to safeguard IT systems and data.",
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

export default Information;
