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

function Socialmedia() {

    const a: datatype4[]=[{
        id:3,
        icon:"/image/social.png",
        heading1:"Maximize Your Social Presence",
        heading2:" with ApexCyberServices Social",
        heading3:" Media Support",
        text:"Unlock the full potential of your brand on social media with our expert team and comprehensive social media support services.",
      },
  ];

  const b: datatype5[] = [
    {
      id: 3,
      icon1: "/image/container3.svg",
      icon2: "/image/container4.svg",
      icon3: "/image/container5.svg",
      icon4: "/image/container6.svg",
      heading1: "Community Engagement",
      heading2: "Platform Expertise",
      heading3: "Strategic Content Creation",
      text1: "Building and nurturing relationships with your audience is at the core of our social media strategy.",
      text2: "Whether it's Facebook, Instagram, Twitter, LinkedIn, or emerging platforms, we have the expertise to navigate and maximize your presence on each. Our team stays updated on the latest trends and features across social media platforms to keep your brand at the forefront.",
      text3: "Our team excels in creating strategic and engaging content tailored to your brand's voice and identity. From captivating visuals to compelling copy, we ensure your content stands out in the crowded social media space.",
    },
  ];

  const c: datatype6[] = [
    {
        id:3,
        icon1:"/image/icon31.svg",
        icon2:"/image/icon32.svg",
        icon3:"/image/icon33.svg",
        icon4:"/image/icon34.svg",
        icon5:"/image/icon35.svg",
        icon6:"/image/icon36.svg",
        icon7:"/image/icon37.svg",
        icon8:"/image/icon38.svg",
        heading1:"Platform Overwhelm",
        heading2:"Customer Engagement Challenges",
        heading3:"Content Quality and Consistency",
        heading4:"Adapting to Platform Changes",
        heading5:"Strategic Content Creation",
        heading6:"Platform Expertise",
        heading7:"Community Engagement",
        heading8:"Data-Driven Insights",
        text1:"Businesses struggle to manage and maintain an active presence across multiple social media platforms.",
        text2:"Many businesses find it challenging to respond promptly to comments, messages, and build a thriving community.",
        text3:"The demand for engaging visuals and compelling copy can strain internal resources and creativity. The demand for engaging visuals and compelling copy can strain internal resources and creativity.",
        text4:"Rapid changes in social media algorithms and features make it difficult for businesses to stay ahead and adapt their strategies.",
        text5:"Our team excels in creating strategic and engaging content that aligns with your brand's voice and resonates with your target audience.",
        text6:"We bring expertise across various social media platforms, from established ones like Facebook and Instagram to emerging platforms.",
        text7:"Actively engaging with your audience is a cornerstone of our approach. We respond promptly to comments and messages, fostering a vibrant and loyal community around your brand.",
        text8:"Through analytics, we provide transparency and measurable outcomes, demonstrating the impact of your social media presence.",
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

export default Socialmedia