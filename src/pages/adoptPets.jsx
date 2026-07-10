import Navbar from "../components/navbar.jsx";
import Footer from"../components/footer.jsx";
import pets from "../data/pets";
import Petcard from "../components/petCard";
import Banner from "../components/greenBanner.jsx";
import bannerImg from "../assets/images/banners/banner3.png";
export default function Adopt() {
  return (<>
  <Navbar />

  {/*banner*/}
      <section className="relative overflow-hidden lg:pt-32 pt-15">
    <Banner
    BannerImage = {bannerImg}
    title ="Adopt Pets"
    description ="Find your perfect companion from a variety of pets."
    />
</section>
    {/*pet cards*/}
  
  <section className="max-w-full lg:px-20 mx-auto py-20">
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 lg:gap-20 mt-6">
        {pets.map((pet) => (
          <Petcard key={pet.id} pet={pet} />
        ))}
      </div>
    </section>
  <Footer/>
  </>
   );
  }