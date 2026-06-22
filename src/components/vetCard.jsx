export default function VetCard({image, name, experience, qualification, reviews, location
}){
   return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:-translate-y-2 transition">
      <div className="h-72 bg-gray-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-[#144a36] text-2xl font-bold">{name}</h3>

        <p className="mt-2 text-gray-700 text-sm leading-relaxed">
          {reviews}
          <br />
          {experience}
          <br />
          {qualification} • {location}
        </p>
      </div>
    </div>
  );
}