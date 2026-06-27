import heroBanner from "../assets/images/banners/hero_banner.png";
import { useNavigate } from "react-router-dom";

function Hero() {
   const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden">
      <img
        src={heroBanner}
        alt="Hero Banner"
        className="w-full h-[400px] md:h-auto lg:h-auto"
      />

      <div className="absolute top-10 md:top-10 left-20 md:left-10 lg:left-18">
        <h1 className="playpen text-[#144a36] font-extrabold text-4xl md:text-5xl lg:text-8xl md:text-center lg:text-center leading-loose ">
          Open Your Heart,
          <br />
          <span className="text-[#88b62c]"> Adopt a Friend

          </span>
        </h1>

        <p className=" md:mt-8 lg:mt-18 lg:max-w-3xl md:max-w-md text-lg md:text-xl lg:text-3xl font-medium md:text-center lg:text-center lg:[word-spacing:6px]  leading-loose">
          Give a loving pet the chance to be part of your family and create unforgettable memories filled with joy and love.
        </p>

        <button  onClick={() => navigate("/adopt")} 
        className="mt-6 lg:mt-25 lg:ml-50 bg-[#144a36] text-white md:text-2xl lg:text-3xl lg:text-4xl px-6 py-5 lg:px-10 lg:py-7 rounded-xl font-bold cursor-pointer">
          Adopt Now
        </button>
      </div>
      <section className="relative">
    </section>
    </section>
  );
}

export default Hero;