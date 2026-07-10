import VetCard from "./vetCard";
import vets from "../data/vets";
import { useNavigate } from "react-router-dom";
import background from "../assets/images/background/background2.png";
import PointingArrow from "../assets/images/icons/pointing_left.svg";

export default function VetSection() {
  const navigate = useNavigate();
  return (
 <section
  className="py-20 px-5 bg-white/50 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${background})`,
  }}
>
<div className="flex justify-center items-center gap-6 mb-4">

            <h2 className="playpen text-[#144a36] text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
             Our Trusted Veterinarian
            </h2>

          </div>

      <p className="inter lg:max-w-6xl text-center text-xl sm:text-lg md:text-xl lg:text-3xl mt-4 md:mt-5 mx-auto leading-relaxed">
  Regular veterinary care ensures a healthier future for your loyal companion,
  so you can create more happy and healthy moments together.
</p>
     <div className="max-w-[1600px] mx-auto">
  <div
    className="
      mt-12
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-10
      justify-items-center
      
    "
  >
    {vets.slice(0, 3).map((vet) => (
      <VetCard key={vet.id} vet={vet} />
    ))}
  </div>
</div>
      
           <div className="flex items-center justify-center gap-6 lg:gap-10 mt-10 lg:mt-15">
           <img
             src={PointingArrow}
             alt="Left Arrow"
             className="w-25 md:w-40 lg:w-58 h-full float-arrow scale-x-[-1]"
           />
                   <button
                     onClick={() => navigate("/book-appointment")}
                     className="inter px-3 py-4 lg:px-14 lg:py-5 text-lg md:text-xl lg:text-3xl font-bold rounded-2xl cursor-pointer border-4 bg-[#144a36] text-white border-[#144a36] shadow-lg transition-all duration-300 hover:-translate-x-2 hover:bg-[#88b62c] hover:text-[#144a36] hover:scale-105" 
                   >
                     Book an Appointment
                   </button>
           
           <img
             src={PointingArrow}
             alt="Right Arrow"
             className="w-25 md:w-40 lg:w-58 h-full float-arrow "
           />
                 </div>
    </section>
  );
}