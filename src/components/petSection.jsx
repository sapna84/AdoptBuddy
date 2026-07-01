import PetCard from "./petCard";
import pets from "../data/pets";

export default function PetSection() {
  return (
    <section className="max-w-auto mx-auto px-5 sm:px-6 md:px-10 lg:px-20 py-12 md:py-16 lg:py-20">

      {/* Heading */}
      <h2 className="playpen text-[#144a36] text-base sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        Find Your Favorite Buddy
      </h2>

      {/* Description */}
      <p className="inter text-center text-base sm:text-lg md:text-xl lg:text-3xl mt-4 md:mt-5 mx-auto leading-relaxed">
        One small connection can create a lifetime of unconditional love.
      </p>

      {/* Pet Cards */}
      <div className="mt-10 md:mt-12 lg:mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-4 justify-items-center">
        {pets
          .filter((pet) => pet.featured)
          .map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
      </div>

    </section>
  );
}
