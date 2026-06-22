import PetCard from "./petCard";
import pets from "../data/pets";

export default function PetSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-0 py-25">
      <h2 className="text-[#144a36] text-4xl md:text-5xl font-bold text-center">
        Find Your Favorite Buddy
      </h2>

      <p className="text-center mt-4 text-gray-700">
        One small connection can create a lifetime of unconditional love.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap- mt-12">
        {pets.map((pet) => (
          <PetCard key={pet.id} {...pet} />
        ))}
      </div>
    </section>
  );
}
