import Navbar from "../components/navbar.jsx";
import Footer from"../components/footer.jsx";
import pets from "../data/pets";
import Petcard from "../components/petCard";
import Banner from "../components/listBanner.jsx";
import bannerImg from "../assets/images/banners/listBanner.png";
export default function Adopt() {
  return (<>
  <Navbar />

  {/*banner*/}
    <Banner
    BannerImage = {bannerImg}
    title ="Adopt Pets"
    description ="Find your perfect companion from a variety of pets."
    />

    {/*pet cards*/}
  
  <section className="max-w-full lg:px-20 mx-auto py-20">
     <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5 mt-12">
        {pets.map((pet) => (
          <Petcard key={pet.id} pet={pet} />
        ))}
      </div>
    </section>
  <Footer/>
  </>
   );
  }