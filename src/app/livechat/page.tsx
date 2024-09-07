import React from 'react'
import Empowerbusiness from '../component/services/Empowerbusiness';
import Featurekeypoints from '../component/Featurekeypoints';
import Whybetter from '../component/services/Whybetter';
import Contactnow from '../component/Contactnow';
import Problemsolution from '../component/services/Problem&solution';

export type datatype4 ={
    id:number;
    icon:string;
    heading1:string;
    heading2:string;
    heading3:string;
    text:string;
    };

    export type datatype5 = {
        id: number;
        icon1: string;
        icon2: string;
        icon3: string;
        icon4: string;
        heading1: string;
        heading2: string;
        heading3: string;
        text1: string;
        text2: string;
        text3: string;
      };

      export type datatype6 = {
        id: number;
        icon1: string;
        icon2: string;
        icon3: string;
        icon4: string;
        icon5: string;
        icon6: string;
        icon7: string;
        icon8: string;
        heading1: string;
        heading2: string;
        heading3: string;
        heading4: string;
        heading5: string;
        heading6: string;
        heading7: string;
        heading8: string;
        text1: string;
        text2: string;
        text3: string;
        text4: string;
        text5: string;
        text6: string;
        text7: string;
        text8: string;
      };

function Livechat() {

    const a: datatype4[]=[{
        id:4,
        icon:"/image/ps10.png",
        heading1:"Enhance Customer Engagement",
        heading2:" with ApexCyberServices Live",
        heading3:"Chat Solutions",
        text:"Real-time support, seamless interactions, and increased customer satisfaction through our advanced live chat services.",
      },
  ];

  const b: datatype5[] = [
    {
      id: 4,
      icon1: "/image/container10.svg",
      icon2: "/image/container8.svg",
      icon3: "/image/container9.svg",
      icon4: "/image/container7.svg",
      heading1: "Highly Skilled Chat Agents",
      heading2: "Multi-Channel Integration",
      heading3: "Real-time Issue Resolution",
      text1: "Our chat agents are not only proficient in handling real-time conversations but are also trained to provide accurate and helpful information. Skilled in navigating complex queries, our agents contribute to a seamless and effective live chat experience.",
      text2: "Whether it's transitioning from email to live chat or vice versa, our services ensure a cohesive and efficient customer journey.",
      text3: "Immediate problem-solving contributes to a positive customer perception and helps in preventing potential escalations. Experience quick and effective issue resolution through our real-time live chat support.",
    },
  ];

  const c: datatype6[] = [
    {
        id:4,
        icon1:"/image/icon39.svg",
        icon2:"/image/icon40.svg",
        icon3:"/image/icon41.svg",
        icon4:"/image/icon42.svg",
        icon5:"/image/icon43.svg",
        icon6:"/image/icon44.svg",
        icon7:"/image/icon45.svg",
        icon8:"/image/icon46.svg",
        heading1:"Delayed Responses",
        heading2:"Missed Opportunities",
        heading3:"Inefficient Communication Channels",
        heading4:"Limited Accessibility",
        heading5:"24/7 Live Chat Support",
        heading6:"Highly Skilled Chat Agents",
        heading7:"Personalized Interactions",
        heading8:"Real-time Issue Resolution",
        text1:"Traditional communication channels often result in delayed responses, failing to meet the instant support expectations of today's customers.",
        text2:"Customers seeking immediate assistance may abandon the interaction or turn to competitors if they don't receive real-time support.",
        text3:"Traditional methods such as email and phone calls may not be as efficient for quick query resolution, leading to frustration.",
        text4:"Customers expect businesses to be accessible 24/7. Traditional support channels may not provide the accessibility needed to meet customer demands.",
        text5:"Provide round-the-clock live chat support to meet the instantaneous needs of customers, ensuring they can connect with your business at any time.",
        text6:"Employ highly skilled chat agents trained not only in real-time conversation management but also in providing accurate and helpful information.",
        text7:"Tailor live chat interactions to the individual needs and preferences of each customer, enhancing the overall customer experience.",
        text8:"Resolve customer issues in real-time through live chat, preventing delays and contributing to positive customer perceptions.",
    },
  ];

  return (
   <main>
     <div>
      {a?.map((item) => {
        return <Empowerbusiness key={item.id} item={item} />;
      })}
    </div>
    <div>
        {c?.map((item) => {
          return <Problemsolution key={item.id} item={item} />;
        })}
      </div>
    <Featurekeypoints />
    <div>
        {b?.map((item) => {
          return <Whybetter key={item.id} item={item} />;
        })}
      </div>
      <div className='p-16'>
        <Contactnow />
      </div>
   </main>
  )
}

export default Livechat