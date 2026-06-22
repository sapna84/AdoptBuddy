import Navbar from "../components/navbar.jsx";
import Hero from"../components/hero.jsx";
import Stats from"../components/stats.jsx";
import Footer from"../components/footer.jsx";
import LostFound from "../components/lostFound";
function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Stats/>
      <LostFound />
      <Footer/>
    </>
  );
}

export default Home;