export default function PetCard({pet}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">
      <div className="h-120 bg-gray-200 flex items-center justify-center">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-[#88b62c] font-bold text-2xl md:text-3xl">
          {pet.name}
        </h3>

        <p className="text-lg mt-2 text-black">
          {pet.breed}<br />
           {pet.age}<br />
          {pet.gender} • {pet.location}
        </p>
        <button
        className="md:px-6 lg:px-8 lg:ml-20 mt-4 bg-[#144a36] text-white rounded-xl py-4 hover:opacity-90 cursor-pointer">
          Contact Owner &gt;
        </button>
      </div>
    </div>
  );
}