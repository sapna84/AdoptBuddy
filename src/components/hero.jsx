import heroBanner1 from "../assets/images/banners/hero_banner1.png";
import heroBanner2 from "../assets/images/banners/hero_banner2.png";
import heroBanner3 from "../assets/images/banners/hero_banner3.png";
import heroBanner4 from "../assets/images/banners/hero_banner4.png";

import heroMobile1 from "../assets/images/banners/hero_mobile1.png";
import heroMobile2 from "../assets/images/banners/hero_mobile2.png";
import heroMobile3 from "../assets/images/banners/hero_mobile3.png";
import heroMobile4 from "../assets/images/banners/hero_mobile4.png";


import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Hero() {
 const slides = [
  {
    desktop: heroBanner1,
    mobile: heroMobile1,

    title: "Open Your Heart,",
    highlight: "Adopt a Friend",

    description:
      "Give a loving pet the chance to be part of your family and create unforgettable memories filled with joy and love.",

    titleClass:
      "playpen text-[#144a36] font-extrabold text-center lg:text-left text-6xl md:text-left md:ml-30 lg:ml-50 sm:text-4xl md:text-6xl lg:text-8xl leading-tight",

    descriptionClass:
      "text-[#144a36] text-center lg:ml-50 md:ml-30 md:mt-12 lg:mt-20 text-2xl md:max-w-lg lg:max-w-4xl font-semibold sm:text-lg md:text-2xl lg:text-4xl lg:leading-loose",

    buttonContainerClass:
     "flex justify-center mt-10 md:mr-100 lg:mr-200",

    buttonClass:
      "bg-white text-[#144a36] lg:mr-115 md:mr-70 border-[#144a36] px-6 py-3 lg:ml-80 md:ml-40 text-xl md:text-2xl lg:text-4xl rounded-xl  lg:px-8 lg:py-4 font-bold cursor-pointer border-4 hover:bg-[#144a36] hover:text-white transition",

    buttons: [
      {
        text: "Adopt Now",
        path: "/adopt",
      },
    ],
  },

  {
    desktop: heroBanner2,
    mobile: heroMobile2,

    title: "Reuniting Is",
highlight: "Just One Click Away",

description:
  "Lost your pet? Browse our lost and found listings—you might find your furry friend.",

    titleClass:
      "playpen text-[#144a36] font-extrabold text-center lg:text-left text-6xl md:text-left md:ml-30 lg:ml-50 sm:text-4xl md:text-6xl lg:text-8xl leading-tight",

    descriptionClass:
      "text-[#144a36] text-center lg:ml-50 md:ml-30 md:mt-12 lg:mt-20 text-2xl md:max-w-lg lg:max-w-4xl font-semibold sm:text-lg md:text-2xl lg:text-4xl lg:leading-loose",

    buttonContainerClass:
      "flex justify-center mt-10 md:mr-100 lg:mr-200",

    buttonClass:
      "bg-white text-[#144a36] lg:mr-115 md:mr-70 border-[#144a36] px-6 py-3 lg:ml-80 md:ml-40 text-xl md:text-2xl lg:text-4xl rounded-xl  lg:px-8 lg:py-4 font-bold cursor-pointer border-4 hover:bg-[#144a36] hover:text-white transition",


    buttons: [
      {
        text: "View Lost & Found",
        path: "/lostfound",
      },
    ],
  },

  {
    desktop: heroBanner3,
    mobile: heroMobile3,

    title: "Lost Your Pet?",
highlight: "Don't Lose Hope",

description:
"Create a lost pet report, and increase the chances of bringing your companion home.",


    titleClass:
      "text-white lg:text-[#144a36] md:text-[#144a36] font-extrabold text-center text-6xl lg:text-8xl lg:text-left md:text-left md:ml-30 lg:ml-45 sm:text-4xl md:text-6xl",

    descriptionClass:
      "text-white lg:text-[#144a36] md:text-[#144a36] text-center text-2xl font-semibold lg:text-3xl lg:ml-50 md:ml-30 md:mt-12 lg:mt-10 md:max-w-lg lg:max-w-4xl sm:text-lg md:text-2xl lg:text-4xl lg:leading-loose",

    buttonContainerClass:
      "flex justify-center mt-10 md:mr-100 lg:mr-200",

    buttonClass:
      "bg-white text-[#88b62c] lg:mr-125 md:mr-80 lg:text-[#144a36] lg:border-[#144a36] border-[#88b62c] px-6 py-3 text-xl md:text-2xl lg:text-4xl md:ml-50 lg:ml-100 rounded-xl  lg:px-8 lg:py-4 font-bold cursor-pointer border-4 hover:bg-[#88b62c] hover:text-[#144a36] transition",

      
buttons: [
  { text: "Report Lost",path: "/report_",
                state: { reportType: "lost" },
            }
],
  },

{
   desktop: heroBanner4,
    mobile: heroMobile4,
title: "Found a Pet?",
highlight: "Help Them Get Home",

description:
"Report a found pet so its family can find them. A few minutes from you could mean everything to someone else.",


    titleClass:
     "text-[#144a36] text-center font-extrabold text-6xl lg:text-8xl lg:text-left md:text-left md:ml-40 lg:ml-50 sm:text-4xl md:text-6xl",

    descriptionClass:
      "text-[#144a36] text-center text-2xl font-semibold lg:text-3xl lg:ml-50 md:ml-40 md:mt-12 lg:mt-10 md:max-w-lg lg:max-w-4xl sm:text-lg md:text-2xl lg:text-4xl lg:leading-loose",

    buttonContainerClass:
      "flex justify-center mt-10 md:mr-100 lg:mr-200",

    buttonClass:
      "bg-white text-[#144a36] lg:mr-110 md:mr-70 border-[#144a36] px-6 py-3 text-xl md:text-2xl lg:text-4xl lg:ml-100 md:ml-60 rounded-xl  lg:px-8 lg:py-4 font-bold cursor-pointer border-4 hover:bg-[#144a36] hover:text-white transition",
                                                                     
buttons: [
  { text: "Report Found", path: "/report_",
    state: { reportType: "lost" }
  }
],

},

];
  const navigate = useNavigate();

const [currentSlide, setCurrentSlide] = useState(0);
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 280000);

  return () => clearInterval(timer);
}, []);

const slide = slides[currentSlide];

  return (
    <section className="relative overflow-hidden pt-15 md:pt-25 lg:pt-32">
    {/* Mobile Banner */}
<img
    src={slide.mobile}
    alt="Hero Banner"
    className="block lg:hidden md:hidden w-full h-full sm:h-[600px] object-cover transition-all duration-700"
/>

{/* Desktop Banner */}
<img
    src={slide.desktop}
    alt="Hero Banner"
    className="hidden lg:block md:block w-full md:h-full lg:h-full object-cover transition-all duration-700"
/>

      <div className="absolute top-25 left-1/2 -translate-x-1/2 w-full px-5 md:top-40 md:left-12 md:translate-x-0 lg:top-50 lg:left-14">
       <h1 className={`playpen font-extrabold leading-tight ${slide.titleClass}`}>
  {slide.title}
  <br />
  <span className="text-[#88b62c]">{slide.highlight}</span>
</h1>

      <p className={`inter mt-6 ${slide.descriptionClass}`}>
  {slide.description}
</p>

       <div className={slide.buttonContainerClass}>
    {slide.buttons.map((button) => (
<button
  onClick={() => navigate(button.path)}
  className={`inter font-bold border-4 transition ${slide.buttonClass}`}
>
  {button.text}
</button>

    ))}

</div>
      </div>
      <button
  onClick={() =>
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }
  className="absolute right-6 md:right-10 lg:right-16 top-1/2 -translate-y-1/2
             w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16
             rounded-full
             bg-white/60 hover:bg-white
             text-[#144a36]
             text-xl md:text-2xl lg:text-4xl
             font-bold
             shadow-lg
             transition-all duration-300"
>
 ❯ 
  
</button>

<button
  onClick={() =>
    setCurrentSlide((prev) =>  prev === 0 ? slides.length - 1 : prev - 1
    )
  }
  className="absolute left-6 md:left-10 lg:left-16 top-1/2 -translate-y-1/2
             w-10 h-10 md:w-14 md:h-14  lg:w-16 lg:h-16
             rounded-full
             bg-white/60 hover:bg-white
             text-[#144a36]
             text-xl md:text-2xl lg:text-4xl
             font-bold
             shadow-lg
             transition-all duration-300"
>
 ❮
</button>
    </section>
  );
}
