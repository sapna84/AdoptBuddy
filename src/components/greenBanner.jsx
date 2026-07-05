
export default function FormBanner({ BannerImage, title, description }) {
  return (
    <section className="relative overflow-hidden">
      {/* Banner */}
      <img
        src={BannerImage}
        alt="Banner"
        className="w-full h-[280px] sm:h-[350px] lg:h-full"
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6">

        {/* Center Text */}
        <div className="text-center lg:mb-40 md:mb-8">
          <h1 className="playpen text-white font-extrabold text-3xl sm:text-5xl mb-10 lg:text-8xl">
            {title}
          </h1>

          <p className="mt-4 lg:w-7xl w-2xl  text-[#88b62c] text-base sm:text-lg md:text-xl lg:text-4xl font-medium leading-loose ">
            {description}
          </p>
        </div>

      </div>
    </section>
  );
}