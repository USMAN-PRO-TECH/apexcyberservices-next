import React from 'react'
import Industry from '../component/industry/Industryhead';
import Profitlossprojection from '../component/industry/Profitlossprojection';
import Contactnow from '../component/Contactnow';
import Marketingstrategy from '../component/industry/Marketing&SalesStrategy';
import Competitivelandscape from '../component/industry/Competitivelandscape';
import Table from '../component/industry/Table';
import Problemstatement from '../component/industry/Problemstatement';


export type datatype =
  {
    id: number;
    icon: string;
    heading: string;
    heading2: string;
    text: string;
 }

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

function Healthcare() {
    const one :datatype[]= [
        {
            id:4,
            icon:"/image/healthcare.svg",
            heading:"Health",
            heading2:"Care",
            text:" Our commitment to your well-being extends beyond conventional boundaries. Immerse yourself in personalized care, cutting-edge technologies, and a holistic approach that prioritizes your health journey."
        },
    ];

    const two: typedata[] = [
      {
        id: 4,
        h1: "Content Marketing",
        t1: "Develop a content strategy that provides value to your audience. Create and distribute high-quality content that establishes your brand as an authority in your industry.",
        h2: "Target Audience",
        t2: "Create detailed buyer personas to guide your marketing efforts. Tailor your messaging and campaigns to resonate with your specific audience segments.",
        h3: "Channels and Platforms",
        t3: "Determine the most effective marketing channels for reaching your target audience. Utilize a mix of online and offline channels, including social media, email marketing, content marketing, and traditional advertising.",
        h4: "Performance Measurement",
        t4: "Establish key performance indicators (KPIs) to measure the success of your sales efforts. Regularly analyze and adjust your strategy based on performance data.",
      },
    ];

    const three: typedata2[]=[
      {
        id: 4,
        icon1:"/image/cl7.svg",
        para1:"ApexHealthTech's key competitors in the healthcare technology sector include HealthSolutions Inc., MediTech Innovations, CureConnect, Wellness Systems International, and HealthData Dynamics. These companies are prominent players in the healthcare technology industry, providing a diverse range of solutions and services.",
        heading1:"HealthSolutions Inc.",
        text2:"Market Share: 20%",
        text3:"Global Presence: 70 countries",
        text4:"Revenue: $12.5 billion",
        heading2:"MediTech Innovations",
        text5:"Market Share: 8%",
        text6:"Global Presence: 49 markets",
        text7:"Revenue: $1.5 billion",
        para2:"The healthcare industry is undergoing a transformative phase, with immense market opportunities arising from the increasing demand for healthcare services and solutions. As healthcare providers strive to enhance patient care, ApexCyberServices is well-positioned to capitalize on this evolving landscape. With a proven track record in the healthcare call center sector, we are poised to leverage the anticipated market growth.",
        icon2: "/image/cl8.svg",
      },
      ];

      const four: datatype3[]=[
        {
          id: 4,
          icon:"/image/ps4.png",
          pic1:"/image/mc.svg",
          pic2:"/image/lpt.svg",
          pic3:"/image/cd1.svg",
          heading1:"Communication Gaps",
          heading2:"Long Response Times",
          heading3:"Patient Dissatisfaction",
          heading4:"Dedicated Healthcare Agents",
          heading5:"Swift Response Times",
          heading6:"HIPAA-Compliant Communication",
          text1:"Existing healthcare communication systems lead to significant gaps, with 45% of patients dissatisfied due to poor communication.",
          text2:"Healthcare providers face challenges in responding promptly to patient queries, contributing to a 30% decrease in patient satisfaction.",
          text3:"A lack of efficient customer service contributes to a decline in patient satisfaction, impacting the overall healthcare experience.",
          text4:"ApexCyberServices provides a dedicated team of healthcare-trained agents, ensuring knowledgeable and empathetic responses to patient inquiries.",
          text5:"Our services guarantee a 25% reduction in response time, enhancing patient satisfaction and engagement with healthcare providers.",
          text6:"ApexCyberServices ensures compliance with healthcare regulations, offering secure and compliant communication channels to protect patient information.",
        },
        ];

  return (
    <main>
    <div>
           {one?.map((item)=>{
              return (
                < Industry key={item.id} item={item} />
              )
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
  )
}

export default Healthcare