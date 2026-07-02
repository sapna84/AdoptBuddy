import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import newBow from "../assets/images/icons/newbow.svg";
import { useState } from "react";
import {
  faLocationDot,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
export default function PetCard({ pet }) {
const [liked, setLiked] = useState(false);
  return (
    
    <div className="relative bg-white rounded-3xl overflow-visible shadow-md shadow-[#88b62c] hover:-translate-y-2 hover:shadow-lg transition-all duration-300">

      {/* NEW Ribbon */}
      {pet.isNew && (
       <img
  src={newBow}
  alt="New"
  className="absolute top-2 -left-6 w-30 z-30 pointer-events-none"
/>
      )}
      {/* Favourite Icon */}
     <button
  onClick={() => setLiked(!liked)}
  className={`absolute top-5 right-5 z-20 p-1 text-4xl rounded-full
    transition-all duration-300 hover:scale-110 active:scale-150
    ${liked ? "text-red-500" : "text-white/50"}`}
>
  <FontAwesomeIcon icon={faHeart} />
</button>

      {/* Pet Image */}
      <div className="relative rounded-t-3xl h-[300px] overflow-hidden">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="playpen text-[#88b62c] pl-4 text-4xl font-extrabold">
          {pet.name}
        </h3>

        <p className="mt-3 pl-4 text-2xl">
          {pet.breed}
        </p>

        <p className="text-2xl pl-4">
          {pet.age}
        </p>

        <div className="flex pl-4 justify-between items-center mt-1">

          <span className="text-2xl">
            {pet.gender}
          </span>

          <span className="flex items-center pr-4 gap-2 text-2xl">
            <FontAwesomeIcon icon={faLocationDot} />
            {pet.location}
          </span>

        </div>

        <div className="flex justify-center mt-7">

          <button className="bg-[#144a36] text-white text-3xl px-4 py-4 rounded-2xl shadow-lg hover:bg-[#0f3b2c] transition cursor-pointer flex items-center gap-3">
            Contact Owner
            <span className="text-3xl">›</span>
          </button>

        </div>

      </div>

    </div>
  );
}