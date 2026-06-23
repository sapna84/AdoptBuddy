import heartIcon from "../assets/images/icons/manwithheart.svg";

export default function Community() {
  return (
    <section className="bg-[#88b62c6b] py-30 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 text-center relative">
        

        {/* Heading */}
        <h2 className="playpen text-[#144a36] text-4xl md:text-5xl font-bold leading-tight">
          More Than a Platform, A Community for Pets
        </h2>

        {/* Description */}
        <p className="mt-8 text-lg md:text-2xl text-black max-w-3xl mx-auto">
          Connecting loving families, caring pet owners, and trusted veterinary support
          to create happier lives for pets and the people who care for them.
        </p>

          {/* Icon (decorative) */}
        <img
          src={heartIcon}
          alt="Heart"
          className="hidden md:block absolute right-6 -top-23 md:right-70 lg:right-120 w-100 opacity-30"
        />
      </div>
    </section>
  );
}