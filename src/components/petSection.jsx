import PetCard from "./petCard";
import pets from "../data/pets";

export default function PetSection() {
  return (
    <section className="max-w-full mx-auto px-5 sm:px-6 md:px-10 lg:px-20 py-12 md:py-16 lg:py-20">

      {/* Heading */}
      <h2 className="playpen text-[#144a36] text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        Find Your Favorite Buddy
      </h2>

      {/* Description */}
      <p className="inter text-center text-xl sm:text-lg md:text-xl lg:text-3xl mt-4 md:mt-5 mx-auto leading-relaxed">
        One small connection can create a lifetime of unconditional love.
      </p>

      {/* Pet Cards */}
       <section className="max-w-full lg:px-20 mx-auto py-10">
     <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 md:gap-15 px-10 lg:gap-20 mt-6">
        {pets
          .filter((pet) => pet.featured)
          .map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
      </div>
    </section>
    </section>
  );
}

