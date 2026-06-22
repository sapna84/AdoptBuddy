import Navbar from "../components/navbar.jsx";
import Hero from"../components/hero.jsx";
import Stats from"../components/stats.jsx";
import Footer from"../components/footer.jsx";
import LostFound from "../components/lostFound";
import PetSection from "../components/petSection";
import VetSection from "../components/VetSection";
import Community from "../components/Community.jsx";
function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Stats/>
      <LostFound />
      <PetSection/>
      <VetSection/>
      <Community/>
      <Footer/>
      
    </>
  );
}

export default Home;