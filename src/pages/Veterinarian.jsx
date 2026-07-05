import Navbar from "../components/navbar.jsx";
import Footer from"../components/footer.jsx";
import vets from "../data/vets";
import VetCard from "../components/vetCard";
import Banner from "../components/greenBanner.jsx";
import bannerImg from "../assets/images/banners/banner3.png";
export default function VetBooking() {
  return (<>
  <Navbar />
       {/*banner*/}
            <section className="relative overflow-hidden pt-35">
          <Banner
          BannerImage = {bannerImg}
          title ="Our Trusted Veterinarians "
          description ="Explore qualified veterinary specialists, compare their experience, and schedule an appointment for personalized pet healthcare."
          />
      </section>
      {/*vet cards*/}
  
  <section className="max-w p-20 mx-auto py-20">
      <div className=" mt-12
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-8
      justify-items-center">

        {vets.map((vet) => (
          <VetCard
            key={vet.id}
            vet={vet}
            showButton={true}
          />
        ))}

      </div>
    </section>

  <Footer/>
  </>
   );
  }