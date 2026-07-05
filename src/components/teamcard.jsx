export default function TeamCard({ image, name, role, motivation }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:-translate-y-2 transition duration-300">
      <div className="h-75 bg-black flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-[#88b62c] font-bold text-3xl md:text-3xl">
          {name}
        </h3>

        <p className="text-xl mt-4 text-black">
          {role}<br />
           {motivation}<br />
        </p>
      </div>
    </div>
  );
}