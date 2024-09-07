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

function Afterhoursupport() {

    const a: datatype4[]=[{
        id:6,
        icon:"/image/ps12.png",
        heading1:"24/7 Support Beyond Office",
        heading2:"Hours Uninterrupted Customer",
        heading3:"Connectivity",
        text:"Stay connected with your customers even after business hours with ApexCyberServices After Hours Support.",
      },
  ];

  const b: datatype5[] = [
    {
      id: 6,
      icon1: "/image/container15.svg",
      icon2: "/image/container16.svg",
      icon3: "/image/container17.svg",
      icon4: "/image/container18.svg",
      heading1: "Skilled Night Shift Teams",
      heading2: "Emergency Response Capability",
      heading3: "Seamless Transition",
      text1: "Our dedicated night shift teams are trained to handle a variety of customer inquiries with the same level of professionalism and expertise as during the day.",
      text2: "Be prepared for urgent situations. Our After Hours Support includes protocols for handling emergencies, ensuring timely and appropriate actions in critical scenarios.",
      text3: "No disruptions mean continuous customer satisfaction and a seamless brand experience.",
    },
  ];

  const c: datatype6[] = [
    {
        id:6,
        icon1:"/image/icon55.svg",
        icon2:"/image/icon56.svg",
        icon3:"/image/icon57.svg",
        icon4:"/image/icon58.svg",
        icon5:"/image/icon59.svg",
        icon6:"/image/icon60.svg",
        icon7:"/image/icon61.svg",
        icon8:"/image/icon62.svg",
        heading1:"Limited Availability",
        heading2:"Customer Expectations",
        heading3:"Missed Opportunities",
        heading4:"Frustrated Customers",
        heading5:"24/7 Accessibility",
        heading6:"Emergency Response Capability",
        heading7:"Seamless Transition",
        heading8:"Dedicated Night Shift Teams",
        text1:"Many businesses struggle to maintain support availability beyond the standard 9-to-5 schedule. Limited accessibility during off-hours can lead to decreased customer satisfaction and potential business loss.",
        text2:"Modern customers expect access to support services beyond traditional office hours. Failure to provide assistance during evenings and weekends can result in missed opportunities and frustrated customers.",
        text3:"Inability to respond to customer needs outside regular hours may result in missed business opportunities. Competitors offering 24/7 support gain an advantage, potentially diverting customers away.",
        text4:"Customers facing issues after business hours may experience frustration if they cannot access timely support.",
        text5:"ApexCyberServices extends support beyond office hours, providing 24/7 accessibility to address customer needs at any time. Enhance customer satisfaction and loyalty by being available when your customers need assistance the most.",
        text6:"ApexCyberServices includes protocols for handling emergencies during after hours, ensuring swift and appropriate responses. Be prepared for urgent situations, demonstrating reliability and commitment to customer well-being.",
        text7:"ApexCyberServices includes protocols for handling emergencies during after hours, ensuring swift and appropriate responses. Be prepared for urgent situations, demonstrating reliability and commitment to customer well-being.",
        text8:"Our dedicated night shift teams are trained professionals, ensuring the same level of service excellence during non-traditional hours. ",
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
      <div>
        <Contactnow />
      </div>
    </main>
  )
}

export default Afterhoursupport