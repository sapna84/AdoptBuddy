export default function PetCard({ image, name, breed, age, gender, location }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:-translate-y-2 transition duration-300">
      <div className="h-64 bg-gray-200 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-[#88b62c] font-bold text-2xl md:text-3xl">
          {name}
        </h3>

        <p className="text-m mt-2 text-black">
          {breed}<br />
           {age}<br />
          {gender} • {location}
        </p>
        <button
        className="w-full mt-4 bg-[#144a36] text-white rounded-md py-4 hover:opacity-90 cursor-pointer">
          Contact Owner &gt;
        </button>
      </div>
    </div>
  );
}