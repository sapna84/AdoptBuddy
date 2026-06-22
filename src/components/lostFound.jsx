import LostFoundCard from "./lostFoundCard";
import foundPet from "../assets/images/banners/found_pet.png";
import lostPet from "../assets/images/banners/lost_pet.png";
import { useNavigate } from "react-router-dom";

function LostFound() {
  const navigate = useNavigate();
  return (
    
    <section className="max-w-[1440px] mx-auto px-6 py-20">

      <h2 className="playpen text-[#144a36] text-4xl md:text-5xl font-bold text-center">
        Reunite Pets With Their Families
      </h2>
      <p className="text-center text-lg md:text-xl mt-4 max-w-3xl mx-auto">
        Help lost pets find their way home or report a missing companion
        to connect with people in your area.
      </p>

      <div className="grid lg:grid-cols-2 gap-10 mt-12">

        <LostFoundCard
         
          title="Found Pet?"
          description="Help reunite them with their families."
          buttonText="Report Now"
          image={foundPet}
          reverse
        />

        <LostFoundCard
          title="Lost Your Pet?"
          description="Report instantly and connect with people in your area."
          buttonText="Report Now"
          image={lostPet}
        />

      </div>

      <div className="text-center mt-10">
        <button onClick={() => navigate("/lostfound")} 
        className="bg-[#144a36] text-white px-8 py-3 rounded-lg font-semibold cursor-pointer">
          View Lost & Found Pets
        </button>
      </div>

    </section>
  );
}

export default LostFound;