import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AdoptPets from "./pages/adoptPets";
import LostFound from "./pages/lostFound_list";
import VetBooking from "./pages/vetBooking";
import About from "./pages/about";
import Contact from "./pages/contact";
import Report from "./pages/report";


function App() {
  return(
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adopt" element={<AdoptPets />} />
      <Route path="/lostfound" element={<LostFound/>}/>
      <Route path="/adopt-pets" element={<AdoptPets />} />
      <Route path="/vet-booking" element={<VetBooking />} />
      <Route path="/report_" element={<Report />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    )
}
export default App;