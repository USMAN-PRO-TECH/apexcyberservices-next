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
    

function Emailcustomer() {

    const a: datatype4[]=[{
        id:2,
        icon:"/image/email.png",
        heading1:"Efficient Email Customer",
        heading2:" Support Tailored to Your",
        heading3:"Business Needs",
        text:"Efficient Email Customer Support Tailored to Your Business Needs",
      },
  ];

  const b: datatype5[] = [
    {
      id: 2,
      icon1: "/image/container2.svg",
      icon2: "/image/div2a.svg",
      icon3: "/image/div2b.svg",
      icon4: "/image/div2c.svg",
      heading1: "Swift Response Times",
      heading2: "24/7 Availability",
      heading3: "Quality Assurance",
      text1: "Our dedicated team ensures swift response times, acknowledging customer inquiries promptly. We prioritize efficiency without compromising the quality of our responses.",
      text2: "Email support that never sleeps. Our services are available round the clock, providing customers with the assurance that their queries will be addressed at any time. We understand that customer issues can arise at any hour, and we're ready to respond.",
      text3: "Quality is non-negotiable. Our Email Customer Support service undergoes rigorous quality assurance measures to guarantee the accuracy and effectiveness of every interaction.",
    },
  ];
  
  const c: datatype6[] = [
    {
        id:2,
        icon1:"/image/icon23.svg",
        icon2:"/image/icon24.svg",
        icon3:"/image/icon25.svg",
        icon4:"/image/icon26.svg",
        icon5:"/image/icon27.svg",
        icon6:"/image/icon28.svg",
        icon7:"/image/icon29.svg",
        icon8:"/image/icon30.svg",
        heading1:"Delayed Responses",
        heading2:"Miscommunications",
        heading3:"Overlooking Important Inquiries",
        heading4:"Inefficiencies in Email Management",
        heading5:"Swift Response Times",
        heading6:"Multilingual Support",
        heading7:"Tailored Call Scripts",
        heading8:"Advanced Ticketing System",
        text1:"Businesses often struggle with delayed responses to customer emails, leading to frustration and dissatisfaction.",
        text2:"The complexity of email communication can result in misinterpretations, leading to misunderstandings and potential customer dissatisfaction.",
        text3:"Managing a high volume of emails poses the risk of overlooking critical customer inquiries, potentially damaging customer relationships.",
        text4:"Without a streamlined process, businesses may face inefficiencies in managing and responding to a large volume of customer emails.",
        text5:"ApexCyberServices ensures swift response times, acknowledging customer inquiries promptly to enhance overall satisfaction.",
        text6:"Catering to a global audience, we offer multilingual support to ensure effective communication with customers from diverse linguistic backgrounds.",
        text7:"We create customized call scripts to reflect your brand voice, maintaining consistency and enhancing the overall customer interaction.",
        text8:"We leverage advanced ticketing systems to organize and prioritize customer inquiries efficiently, preventing any email from going unnoticed.",
    },
  ];

  return (
    <main>
         <div>
      {a?.map((item) => {   
        console.log(item,"item")
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

export default Emailcustomer