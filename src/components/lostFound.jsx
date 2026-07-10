import LostFoundCard from "./lostFoundCard";
import foundPet from "../assets/images/banners/found_pet.png";
import lostPet from "../assets/images/banners/lost_pet.png";
import PointingArrow from "../assets/images/icons/pointing_left.svg";
import { useNavigate } from "react-router-dom";

export default function LostFound() {
  const navigate = useNavigate();

  return (
    <section className="max-w-full mx-auto bg-white/50 px-5 md:px-8 lg:px-[250px] py-16 lg:py-30"
   >
      <h2 className="playpen text-[#144a36] text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        Reunite Pets With Their Families
      </h2>

     <p className="inter lg:max-w-6xl text-center text-xl sm:text-lg md:text-xl lg:text-3xl mt-4 md:mt-5 mx-auto leading-relaxed">
        Help lost pets find their way home or report a missing companion
        to connect with people in your area.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-18 mt-10 px-8 lg:px-0">

        <LostFoundCard
          title="Found Pet?"
          description="Help reunite them with their families."
          buttonText="Report Now"
          image={foundPet}
          reverse
          reportType="found"
        />

        <LostFoundCard
          title="Lost Your Pet?"
          description="Report instantly and connect with people in your area."
          buttonText="Report Now"
          image={lostPet}
          reportType="lost"
        />

      </div>

     <div className="flex items-center justify-center gap-6 lg:gap-10 mt-20 lg:mt-30">
<img
  src={PointingArrow}
  alt="Left Arrow"
  className="w-23 md:w-40 lg:w-58 h-full float-arrow scale-x-[-1]"
/>
        <button
          onClick={() => navigate("/lostfound")}
         className="inter px-3 py-4 lg:px-14 lg:py-5 text-lg md:text-xl lg:text-3xl font-bold rounded-2xl cursor-pointer border-4 bg-[#144a36] text-white border-[#144a36] shadow-lg transition-all duration-300 hover:-translate-x-2 hover:bg-[#88b62c] hover:text-[#144a36] hover:scale-105"
        >
          View Lost & Found Pets
        </button>

<img
  src={PointingArrow}
  alt="Right Arrow"
  className="w-23 md:w-40 lg:w-58 h-full float-arrow "
/>
      </div>


    </section>
  );
}
