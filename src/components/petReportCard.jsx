import { useState } from "react";
import ContactPopup from "./ContactPopup";
export default function PetReportCard({ pet, type }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 mb-8">

      <div className="grid lg:grid-cols-[320px_1fr] gap-8">

        {/* Image */}
        <div>

  {/* Main Image */}

  <div className="relative">

    <img
      src={pet.images[currentImage]}
      alt={pet.name || pet.category}
      className="w-full h-72 object-cover rounded-xl"
    />

    {/* Previous */}

    {pet.images.length > 1 && (
      <button
        onClick={() =>
          setCurrentImage(
            currentImage === 0
              ? pet.images.length - 1
              : currentImage - 1
          )
        }
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow text-xl hover:bg-gray-100 cursor-pointer"
      >
        ❮
      </button>
    )}

    {/* Next */}

    {pet.images.length > 1 && (
      <button
        onClick={() =>
          setCurrentImage(
            currentImage === pet.images.length - 1
              ? 0
              : currentImage + 1
          )
        }
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow text-xl hover:bg-gray-100 cursor-pointer"
      >
        ❯
      </button>
    )}

  </div>

  {/* Thumbnails */}

  {pet.images.length > 1 && (

    <div className="flex gap-3 mt-4 justify-center">

      {pet.images.map((image, index) => (

        <img
          key={index}
          src={image}
          alt=""
          onClick={() => setCurrentImage(index)}
          className={`w-16 h-16 rounded-lg object-cover cursor-pointer border-2 transition
            ${
              currentImage === index
                ? "border-[#88b62c]"
                : "border-transparent"
            }`}
        />

      ))}

    </div>

  )}

</div>

        {/* Details */}
        <div>

          {/* Name */}
          <h2 className="text-4xl font-bold text-[#144a36]">
            {pet.name || "Not Mentioned"}
          </h2>

          {/* Breed */}
          <p className="text-[#88b62c] text-xl mt-1">
            {pet.breed || "Not Mentioned"}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-6">

            {/* Left */}
            <div className="space-y-4">

              <p>
                <span className="font-semibold">Category:</span>{" "}
                {pet.category}
              </p>

              <p>
                <span className="font-semibold">Gender:</span>{" "}
                {pet.gender}
              </p>

              <p>
                <span className="font-semibold">Age:</span>{" "}
                {pet.age}
              </p>

              <p>
                <span className="font-semibold">Color:</span>{" "}
                {pet.color}
              </p>

            </div>

            {/* Right */}
            <div>

              <h3 className="text-xl font-semibold text-[#144a36]">
                Description
              </h3>

              <p className=" text-gray-700">
                {pet.description.length > 120
                  ? pet.description.slice(0, 120) + "..."
                  : pet.description}
              </p>

              <div className="mt-5 space-y-2">

                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  {pet.location}
                </p>

                <p>
                  <span className="font-semibold">Date:</span>{" "}
                  {pet.date}
                </p>

                <p>
                  <span className="font-semibold">Time:</span>{" "}
                  {pet.time}
                </p>

              </div>

            </div>

          </div>
<div className="flex justify-center">
          <button
  onClick={() => setShowPopup(true)}
  className="mt-8 text-2xl px-8 py-4 rounded-lg cursor-pointer border-2 bg-[#144a36] text-white border-[#144a36] hover:bg-[#144a36]/80 hover:text-white transition"
>
            {type === "lost"
              ? "Contact Owner"
              : "Contact Founder"}
          </button>
          </div>

        </div>

      </div>
      {showPopup && (
  <ContactPopup
    title={
      type === "lost"
        ? "Owner Contact Details"
        : "Founder Contact Details"
    }
    contact={type === "lost" ? pet.owner : pet.founder}
    onClose={() => setShowPopup(false)}
  />
)}

    </div>
  );
}