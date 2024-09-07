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

function Ordertaking() {

    const a: datatype4[]=[{
        id:5,
        icon:"/image/ps11.png",
        heading1:"Effortless Order Management ",
        heading2:"with ApexCyberServices Order ",
        heading3:"Taking Services",
        text:"Streamline your business operations and enhance customer satisfaction with our professional order taking services.",
      },
  ];

  const b: datatype5[] = [
    {
      id: 5,
      icon1: "/image/container14.svg",
      icon2: "/image/container11.svg",
      icon3: "/image/container13.svg",
      icon4: "/image/container12.svg",
      heading1: "Skilled Order Takers",
      heading2: "Efficient Order Processing",
      heading3: "Quality Assurance",
      text1: "Our team of order takers is skilled in accurately capturing customer orders, ensuring precision in every detail. We prioritize hiring professionals who understand the importance of order accuracy and customer satisfaction.",
      text2: "Orders are processed promptly, minimizing wait times for customers and ensuring a smooth and quick ordering experience.",
      text3: "We prioritize order accuracy and quality in every interaction. Our services guarantee a high standard of order taking, contributing to increased customer satisfaction and repeat business.",
    },
  ];

  const c: datatype6[] = [
    {
        
        id:5,
        icon1:"/image/icon47.svg",
        icon2:"/image/icon48.svg",
        icon3:"/image/icon49.svg",
        icon4:"/image/icon50.svg",
        icon5:"/image/icon51.svg",
        icon6:"/image/icon52.svg",
        icon7:"/image/icon53.svg",
        icon8:"/image/icon54.svg",
        heading1:"Overwhelmed Operations",
        heading2:"Order Accuracy Concerns",
        heading3:"Customer Dissatisfaction",
        heading4:"Missed Opportunities",
        heading5:"Skilled Order Takers",
        heading6:"24/7 Order Support",
        heading7:"Customized Order Scripts",
        heading8:"Efficient Order Processing",
        text1:"Businesses often face challenges managing a sudden surge in order volume, leading to overwhelmed operational processes.",
        text2:"Ensuring accurate order capture, especially during peak periods, becomes a significant concern for businesses.",
        text3:"The struggle to balance order volume and operational efficiency can result in delays, leading to dissatisfied customers.",
        text4:"Inability to manage orders effectively may lead to missed opportunities for cross-selling or upselling, impacting overall revenue.",
        text5:"Our team of skilled order takers is dedicated to accurately capturing customer orders, ensuring precision in every detail.",
        text6:"Never miss an order with our 24/7 order taking services, providing customers the convenience to place orders at any time.",
        text7:"We tailor order scripts to match your brand's tone, creating a personalized ordering experience for customers.",
        text8:"Experience efficient order processing through advanced systems, minimizing wait times for customers and ensuring a smooth ordering experience.",
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

export default Ordertaking