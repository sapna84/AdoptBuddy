import Navbar from "../components/navbar.jsx";
import Footer from"../components/footer.jsx";
import vets from "../data/vets";
import VetCard from "../components/vetCard";
import Banner from "../components/listBanner.jsx";
import bannerImg from "../assets/images/banners/listBanner.png";
export default function VetBooking() {
  return (<>
  <Navbar />

  {/*banner*/}
      <Banner
      BannerImage = {bannerImg}
      title ="Our Trusted Veterinarians "
      description ="Explore qualified veterinary specialists, compare their experience, and schedule an appointment for personalized pet healthcare."
      />
      {/*vet cards*/}
  
  <section className="max-w p-20 mx-auto py-20">
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