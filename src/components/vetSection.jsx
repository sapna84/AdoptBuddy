import VetCard from "./vetCard";
import vets from "../data/vets";
import { useNavigate } from "react-router-dom";

export default function VetSection() {
  const navigate = useNavigate();
  return (
    <section className="max-w-auto mx-auto lg:mx-20 px-6 py-20">
      <h2 className="playpen text-[#144a36] text-4xl md:text-5xl font-bold text-center">
        Our Trusted Veterinarians
      </h2>

      <p className="text-center lg:text-2xl mt-4 lg:mt-6 text-black">
        Regular veterinary care ensures a healthier future.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12 ">
        {vets.map((vet) => (
  <VetCard key={vet.id} vet={vet} />
))}
      </div>

      <div className="text-center mt-10">
        <button onClick={() => navigate("/book-appointment")} 
        className="bg-[#144a36] text-white px-8 py-3 lg:px-10 lg:py-4 lg:text-2xl rounded-xl hover:opacity-90 cursor-pointer">
          Book Appointment
        </button>
      </div>
    </section>
  );
}