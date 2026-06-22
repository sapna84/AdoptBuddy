import heroBanner from "../assets/images/banners/hero_banner.png";
import { useNavigate } from "react-router-dom";

function Hero() {
   const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden">
      <img
        src={heroBanner}
        alt="Hero Banner"
        className="w-full h-auto"
      />

      <div className="absolute top-20 md:top-15 left-2 md:left-10 lg:left-18">
        <h1 className="playpen text-[#144a36] font-extrabold text-6xl md:text-6xl lg:text-9xl text-center leading-tight ">
          Open Your Heart,
          <br />
          Adopt a Friend
        </h1>

        <p className="mt-10 lg:mt-20 lg:max-w-3xl md:max-w-md text-3xl md:text-xl lg:text-5xl font-bold text-center lg:[word-spacing:6px]  leading-medium">
          Give a loving pet the chance to be part of your family and create unforgettable memories filled with joy and love.
        </p>

        <button  onClick={() => navigate("/adopt")} 
        className="mt-10 lg:mt-25 ml-12 md:ml-23 lg:ml-50 bg-[#144a36] text-white md:text-2xl lg:text-3xl lg:text-4xl px-6 py-5 lg:px-10 lg:py-7 rounded-xl font-bold cursor-pointer">
          Adopt Now
        </button>
      </div>
      <section className="relative">
    </section>
    </section>
  );
}

export default Hero;