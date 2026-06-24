import Navbar from "../components/navbar.jsx";
import Footer from"../components/footer.jsx";
import pets from "../data/pets";
import Petcard from "../components/petCard";
export default function Adopt() {
  return (<>
  <Navbar />
  
  <section className="max-w-[1440px] mx-auto py-20">
     <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap- mt-12">
        {pets.map((pet) => (
          <Petcard key={pet.id} pet={pet} />
        ))}
      </div>
    </section>
  <Footer/>
  </>
   );
  }