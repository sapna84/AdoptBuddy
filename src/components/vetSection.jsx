import VetCard from "./vetCard";
import vets from "../data/vets";
import { useNavigate } from "react-router-dom";
import PointingArrow from "../assets/images/icons/pointing_left.svg";

export default function VetSection() {
  const navigate = useNavigate();
  return (
<section className="w-full bg-white/50 px-5 sm:px-8 lg:px-40 py-16 lg:py-14">
      <h2 className="playpen text-[#144a36] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        Our Trusted Veterinarians
      </h2>

      <p className="inter text-center text-base sm:text-lg md:text-xl lg:text-3xl mt-4 lg:mt-6 text-black max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto leading-tight">
  Regular veterinary care ensures a healthier future for your loyal companion,
  so you can create more happy and healthy moments together.
</p>
      <div
  className=" mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 justify-items-center">
        {vets.slice(0,3).map((vet) => (
  <VetCard key={vet.id} vet={vet} />
))}
      </div>

      
           <div className="flex items-center justify-center gap-6 lg:gap-10 mt-10 lg:mt-15">
           <img
             src={PointingArrow}
             alt="Left Arrow"
             className="w-12 md:w-40 lg:w-58 h-full float-arrow scale-x-[-1]"
           />
                   <button
                     onClick={() => navigate("/lostfound")}
                     className="inter px-10 py-4 lg:px-14 lg:py-5 text-lg md:text-xl lg:text-3xl font-bold rounded-2xl cursor-pointer border-4 bg-[#144a36] text-white border-[#144a36] shadow-lg transition-all duration-300 hover:-translate-x-2 hover:bg-[#88b62c] hover:text-[#144a36] hover:scale-105" 
                   >
                     Book an Appointment
                   </button>
           
           <img
             src={PointingArrow}
             alt="Right Arrow"
             className="w-12 md:w-40 lg:w-58 h-full float-arrow "
           />
                 </div>
    </section>
  );
}