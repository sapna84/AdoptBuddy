import { useState } from "react";
import ContactPopup from "./ContactPopup";

export default function ReportedPetCard({ pet, type }) {
  const [activeImage, setActiveImage] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="rounded-2xl bg-white p-6 md:p-8 shadow-lg hover:-translate-y-2 transition-all duration-300">
      <h3 className="playpen text-5xl font-bold text-[#144a36] mb-6">
        {pet.category}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Images */}
        <div>
          <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
            <img
              src={pet.images[activeImage]}
              alt={`${pet.category} ${pet.name || ""}`}
              className="h-full w-full object-cover"
            />
          </div>

          {pet.images.length > 1 && (
            <div className="mt-3 flex gap-2">
              {pet.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`h-16 w-16 overflow-hidden rounded-lg border-2 cursor-pointer transition ${
                    activeImage === index
                      ? "border-[#88b62c]"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
          <div className="flex justify-center">
        <button
          onClick={() => setShowPopup(true)}
          className="mt-8 text-2xl px-8 py-4 rounded-xl font-bold cursor-pointer border-4 bg-[#144a36] text-white border-[#144a36] hover:bg-[#88b62c] transition hover:text-[#144a36]"
        >
          {type === "lost" ? "Contact Owner" : "Contact Finder"}
        </button>
      </div>
        </div>

        <div className="md:col-span-2">
  <div className="grid md:grid-cols-2 gap-8">

        {/* Pet Details */}
        <div>
          <h4 className="text-2xl font-semibold text-[#144a36] mb-3">
            Pet Details
          </h4>
          <dl className="text-xl space-y-2 text-black">
            {pet.name && (
              <div className="flex gap-2">
                <dt className="font-semibold text-[#88b62c]">Name:</dt>
                <dd>{pet.name}</dd>
              </div>
            )}
            <div className="flex gap-2">
              <dt className="font-semibold text-[#88b62c]">Gender:</dt>
              <dd>{pet.gender}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-[#88b62c]">Breed:</dt>
              <dd>{pet.breed}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-[#88b62c]">Age:</dt>
              <dd>{pet.age}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-[#88b62c]">Colour/Marking:</dt>
              <dd>{pet.color}</dd>
            </div>
          </dl>
          

        </div>
        

        {/* Location & Time */}
        <div>
          <h4 className="text-2xl font-semibold text-[#144a36] mb-3">
            Location &amp; Time
          </h4>
          <dl className="text-xl space-y-2 text-black">
            <div className="flex gap-2">
              <dt className="font-semibold text-[#88b62c]">Location:</dt>
              <dd>{pet.location}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-[#88b62c]">Date:</dt>
              <dd>{pet.date}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-[#88b62c]">Time:</dt>
              <dd>{pet.time}</dd>
            </div>
          </dl>
        </div>
        {/* Description */}
<div className="md:col-span-2">
  <h4 className="text-2xl font-semibold text-[#144a36] mb-2">
    Description
  </h4>

  <p className="text-black text-xl leading-relaxed">
    {pet.description}
  </p>
</div>
 </div>
</div>
      </div>
      {showPopup && (
        <ContactPopup
          title={
            type === "lost" ? "Owner Contact Details" : "Founder Contact Details"
          }
          contact={type === "lost" ? pet.owner : pet.founder}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}