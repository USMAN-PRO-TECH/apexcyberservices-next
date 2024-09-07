import React from "react";
import Empowerbusiness from "../component/services/Empowerbusiness";
import Featurekeypoints from "../component/Featurekeypoints";
import Whybetter from "../component/services/Whybetter";
import Contactnow from "../component/Contactnow";
import Problemsolution from "../component/services/Problem&solution";

export type datatype4 = {
  id: number;
  icon: string;
  heading1: string;
  heading2: string;
  heading3: string;
  text: string;
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

function Services() {

  const a: datatype4[] = [
    {
      id: 1,
      icon: "/image/ecomerce3.svg",
      heading1: "Empower Your Business with",
      heading2: "ApexCyberServices Virtual",
      heading3: "Assistant Solutions",
      text: "Elevate customer experience, boost productivity, and drive growth with our cutting-edge Virtual Assistant Services.",
    },
  ];

  const b: datatype5[] = [
    {
      id: 1,
      icon1: "/image/container23.svg",
      icon2: "/image/container24.svg",
      icon3: "/image/container25.svg",
      icon4: "/image/container26.svg",
      heading1: "Global Talent Pool",
      heading2: "Continuous Training",
      heading3: "Performance Metrics",
      text1: "Our virtual assistants are not just skilled but carefully selected from around the world, ensuring a diverse and talented team dedicated to your business needs.",
      text2: "We believe in staying ahead. Our agents undergo incessant training, tutelage, and supervision to ensure they are equipped with the latest skills and knowledge.",
      text3: "Experience a remarkable 37% growth in sales conversion, an 85% quality score occupancy, and a 77% reduction in waiting time. Our commitment is to deliver results.",
    },
  ];

  const c: datatype6[] = [
    {
        id:1,
        icon1:"/image/icon9.svg",
        icon2:"/image/icon10.svg",
        icon3:"/image/icon11.svg",
        icon4:"/image/icon12.svg",
        icon5:"/image/icon13.svg",
        icon6:"/image/icon14.svg",
        icon7:"/image/icon15.svg",
        icon8:"/image/icon16.svg",
        heading1:"Operational Overload",
        heading2:"Balancing Act",
        heading3:"Diverse Business Needs",
        heading4:"Resource Constraints",
        heading5:"Tailored Virtual Assistance",
        heading6:"Enhanced Customer Experience",
        heading7:"Operational Optimization",
        heading8:"Global Talent",
        text1:"Businesses face the challenge of handling multiple tasks, such as customer inquiries, appointment scheduling, and data entry, leading to operational overload.",
        text2:"Struggling to balance operational efficiency with maintaining a high level of customer service becomes a persistent issue for many organizations.",
        text3:"Each business has unique needs, making it difficult to find a one-size-fits-all solution for managing customer interactions and backend processes.",
        text4:"Limited resources and manpower often hinder businesses from delivering exceptional customer service consistently.",
        text5:"ApexCyberServices provides a tailored solution to address the challenges businesses face, offering virtual assistant services that cater to specific needs.",
        text6:"Our virtual assistant services are designed to elevate the overall customer experience, ensuring prompt and efficient handling of inquiries.",
        text7:"We allowing businesses to focus on core functions while we handle tasks like data entry, appointment scheduling, and customer support.",
        text8:"By sourcing talent globally, we ensure a diverse and skilled team of virtual assistants capable of handling a wide array of responsibilities.",
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
      <div className="p-16">
        <Contactnow />
      </div>
    </main>
  );
}

export default Services;
