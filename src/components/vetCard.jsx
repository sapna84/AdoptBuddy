import { useNavigate } from "react-router-dom";
import {
  faLocationDot,
  faStar,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function VetCard({ vet, showButton=false }) {

   const navigate = useNavigate();

  return (
    <div className="bg-white rounded-[24px] overflow-hidden shadow-md shadow-[#88b62c] hover:-translate-y-2 hover:shadow-lg transition-all duration-300 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[460px]">
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
      {showButton && (
  <div className="px-4 pb-5 lg:px-5 lg:pb-6">
    <button
      onClick={() =>
        navigate("/book-appointment", {
          state: { vet },
        })
      }
      className="w-full bg-[#144a36] text-white text-lg lg:text-xl font-semibold py-3 rounded-xl cursor-pointer border-4 border-[#144a36] transition-all duration-300 hover:bg-[#88b62c] hover:text-[#144a36]"
    >
      Book Appointment
    </button>
  </div>
)}

    </div>
  );
}