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

       
function Dataentry() {

    const a: datatype4[]=[{
        id:7,
        icon:"/image/ps13.png",
        heading1:"Efficient Data Management",
        heading2:"with ApexCyberServices Data ",
        heading3:" Entry Solutions",
        text:"Unlock the power of accurate and organized data with our comprehensive Data Entry services.",
      },
  ];

  const b: datatype5[] = [
    {
      id: 7,
      icon1: "/image/container19.svg",
      icon2: "/image/container20.svg",
      icon3: "/image/container21.svg",
      icon4: "/image/container22.svg",
      heading1: "Data Security and Confidentiality",
      heading2: "Customized Data Solutions",
      heading3: "Timely Data Entry",
      text1: "Your data security is our top priority. Our robust security protocols and measures ensure the confidentiality and integrity of your sensitive information.",
      text2: "Recognizing that each business has unique data needs, our services are tailored to accommodate the specific requirements of your industry.",
      text3: "We understand the importance of timely data entry. Our services are structured to ensure that data is entered promptly, allowing you to make informed decisions without delays.",
    },
  ];

  const c: datatype6[] = [
    {
        id:7,
        icon1:"/image/icon9.svg",
        icon2:"/image/icon10.svg",
        icon3:"/image/icon11.svg",
        icon4:"/image/icon12.svg",
        icon5:"/image/icon13.svg",
        icon6:"/image/icon14.svg",
        icon7:"/image/icon15.svg",
        icon8:"/image/icon16.svg",
        heading1:"",
        heading2:"",
        heading3:"",
        heading4:"",
        heading5:"",
        heading6:"",
        heading7:"",
        heading8:"",
        text1:"",
        text2:"",
        text3:"",
        text4:"",
        text5:"",
        text6:"",
        text7:"",
        text8:"",
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

export default Dataentry