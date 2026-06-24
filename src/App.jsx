import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AdoptPets from "./pages/adoptPets";
import LostFound from "./pages/lostFound_list";
import Veterinarian from "./pages/Veterinarian";
import About from "./pages/about";
import Contact from "./pages/contact";
import Report from "./pages/report";
import BookingAppointment from "./pages/bookAppointment";


function App() {
  return(
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adopt" element={<AdoptPets />} />
      <Route path="/lostfound" element={<LostFound/>}/>
      <Route path="/adopt-pets" element={<AdoptPets />} />
      <Route path="/Vets-list" element={<Veterinarian />} />
      <Route path="/report_" element={<Report />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/book-appointment" element={<BookingAppointment />}/>
    </Routes>
    )
}
export default App;