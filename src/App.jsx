import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AdoptPets from "./pages/adoptPets";
import VetBooking from "./pages/vetBooking";
import About from "./pages/about";
import Contact from "./pages/contact";


function App() {
  return(
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adopt-pets" element={<AdoptPets />} />
      <Route path="/vet-booking" element={<VetBooking />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    )
}
export default App;