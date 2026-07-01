import {
  faLocationDot,
  faStar,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function VetCard({ vet }) {
  return (
    <div className="bg-white rounded-[24px] overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 w-full max-w-[280px] sm:max-w-[330px] lg:max-w-[380px]">
      {/* Doctor Image */}
      <div className="h-[220px] sm:h-[260px] lg:h-[320px]">
        <img
          src={vet.image}
          alt={vet.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="p-4 lg:p-5">

        {/* Name */}
        <h3 className="playpen text-[#88b62c] font-extrabold text-2xl sm:text-3xl lg:text-4xl">
          {vet.name}
        </h3>

        {/* Rating */}
        <p className="mt-4 flex items-center text-lg lg:text-2xl">

          <span className="text-yellow-400 mr-3">
            ★★★★☆
          </span>

          {vet.reviews}

        </p>

        {/* Experience */}
        <div className="flex items-center gap-4 mt-4">

          <FontAwesomeIcon
            icon={faStar}
            className="text-xl lg:text-2xl"
          />

          <span className="text-lg lg:text-2xl">
            {vet.experience}
          </span>

        </div>

        {/* Qualification + Location */}

        <div className="flex justify-between items-center mt-4">

          <div className="flex items-center gap-4">

            <FontAwesomeIcon
              icon={faGraduationCap}
              className="text-xl lg:text-2xl"
            />

            <span className="text-lg lg:text-2xl">
              {vet.qualification}
            </span>

          </div>

          <div className="flex items-center gap-2">

            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-[#88b62c] text-xl lg:text-2xl"
            />

            <span className="text-lg lg:text-2xl">
              {vet.location}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}