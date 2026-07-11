import heroBanner from "../assets/images/banners/hero_banner1.png";
import heroMobile from "../assets/images/banners/hero_mobile.png";
import { useNavigate } from "react-router-dom";
export default function Hero() {
   const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden lg:pt-32">
    {/* Mobile Banner */}
<img
  src={heroMobile}
  alt="Hero Banner"
  className="block lg:hidden md:hidden w-full h-full sm:h-[600px] object-cover"
/>

{/* Desktop Banner */}
<img
  src={heroBanner}
  alt="Hero Banner"
  className="hidden lg:block md:block w-full md:h-full lg:h-[1200px] object-cover"
/>

      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-full px-6 md:top-40 md:left-12 md:translate-x-0 lg:top-50 lg:left-14">
        <h1 className="playpen text-[#144a36] font-extrabold text-center lg:text-left text-6xl md:ml-10 lg:ml-12 sm:text-4xl md:text-5xl lg:text-8xl leading-tight">
          Open Your Heart,
          <br />
          <span className="text-[#88b62c]"> Adopt a Friend

          </span>
        </h1>

        <p className="inter text-center lg:ml-12 md:-ml-2 mt-6 md:mt-12 lg:mt-18 px-8 md:max-w-md lg:max-w-2xl text-xl sm:text-lg md:text-xl lg:text-4xl font-medium leading-loose">
          Give a loving pet the chance to be part of your family and create unforgettable memories filled with joy and love.
        </p>

        <div className="flex mt-4 lg:mt-20 ml-40 md:ml-30 lg:ml-50">
  <button
    onClick={() => navigate("/adopt")}
    className="inter px-4 py-3 lg:px-8 lg:py-4 text-xl md:text-2xl lg:text-4xl rounded-xl font-bold cursor-pointer border-4 bg-[#144a36] text-white border-[#144a36] hover:bg-[#88b62c] transition hover:text-[#144a36]"
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
