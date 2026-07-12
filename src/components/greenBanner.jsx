
import bannerMobile from "../assets/images/banners/banner3_mobile.png";
export default function FormBanner({ BannerImage, title, description }) {
  return (
    <section className="relative overflow-hidden">
      {/* Banner */}
      {/* Mobile Banner */}
<img
  src={bannerMobile}
  alt="Banner"
  className="block lg:hidden md:hidden w-full sm:h-[350px] object-cover"
/>

{/* Desktop Banner */}
<img
  src={BannerImage}
  alt="Banner"
  className="hidden lg:block md:block w-full h-full object-cover"
/>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6">

        {/* Center Text */}
        <div className="text-center lg:mb-40 md:mb-8">
          <h1 className="playpen text-white font-extrabold text-6xl sm:text-5xl md:text-6xl  mb-10 lg:text-8xl">
            {title}
          </h1>

          <p className="lg:mt-4 mb-15 lg:w-7xl md:w-5xl w-md  text-white text-base sm:text-lg md:text-xl lg:text-4xl font-medium lg:leading-loose ">
            {description}
          </p>
        </div>

      </div>
    </section>
  );
}