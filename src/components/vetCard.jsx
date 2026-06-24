import { useNavigate } from "react-router-dom";
export default function VetCard({vet}){
   console.log(vet);
  const navigate = useNavigate();
   return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition">
      <div className="h-72 bg-gray-200">
        <img
          src={vet.image}
          alt={vet.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-[#88b62c] text-2xl font-bold">
          {vet.name}</h3>

        <p className="mt-2 text-black lg:text-m text-sm leading-relaxed">
          {vet.reviews}
          <br />
          {vet.experience}
          <br />
          {vet.qualification} • {vet.location}
        </p>
      </div>
      
      <button
  onClick={() =>
    navigate("/book-appointment", {
      state: { vet },
    })
  }
  className="w-full mt-4 bg-[#144a36] text-white rounded-full py-3 font-medium"
>
  Book Appointment
</button>
    </div>
  );
}