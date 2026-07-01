import heroBanner from "../assets/images/banners/hero_banner2.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
   const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden">
      <img
        src={heroBanner}
        alt="Hero Banner"
        className="w-full h-[500px] sm:h-[600px] lg:h-[1200px]"
      />

      <div className="absolute top-24 md:top-28 lg:top-45 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 lg:left-14">
        <h1 className="playpen text-[#144a36] font-extrabold text-3xl lg:ml-12 sm:text-4xl md:text-5xl lg:text-8xl leading-tight">
          Open Your Heart,
          <br />
          <span className="text-[#88b62c]"> Adopt a Friend

          </span>
        </h1>

        <p className="inter text-center lg:ml-12 mt-6 md:mt-8 lg:mt-14 max-w-sm md:max-w-md lg:max-w-2xl text-base sm:text-lg md:text-xl lg:text-4xl font-medium leading-loose">
          Give a loving pet the chance to be part of your family and create unforgettable memories filled with joy and love.
        </p>

        <div className="flex justify-center mt-6 lg:mt-15  lg:-ml-45">
  <button
    onClick={() => navigate("/adopt")}
    className="inter px-6 py-5 lg:px-8 lg:py-4 text-xl md:text-2xl lg:text-4xl rounded-xl font-bold cursor-pointer border-4 bg-[#144a36] text-white border-[#144a36] hover:bg-[#144a36]/80 transition"
  >
    Adopt Now
  </button>
</div>
      </div>
      <section className="relative">
    </section>
    </section>
  );
}
