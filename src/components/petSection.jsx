import PetCard from "./petCard";
import pets from "../data/pets";

export default function PetSection() {
  return (
    <section className="max-w-auto mx-auto px-6 lg:px-20 py-20">
      <h2 className="playpen text-[#144a36] text-4xl md:text-5xl font-bold text-center">
        Find Your Favorite Buddy
      </h2>

      <p className="text-center mt-4 lg:mt-6 lg:text-2xl text-black">
        One small connection can create a lifetime of unconditional love.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap- mt-12">
        {pets.filter((pet) => pet.featured).map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </section>
  );
}
