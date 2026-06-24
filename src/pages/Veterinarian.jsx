import Navbar from "../components/navbar.jsx";
import Footer from"../components/footer.jsx";
import vets from "../data/vets";
import VetCard from "../components/VetCard";
export default function VetBooking() {
  return (<>
  <Navbar />
  
  <section className="max-w-[1440px] mx-auto py-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {vets.map((vet) => (
          <VetCard
            key={vet.id}
            vet={vet}
          />
        ))}

      </div>
    </section>

  <Footer/>
  </>
   );
  }