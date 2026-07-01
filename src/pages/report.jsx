
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import Footer from"../components/footer.jsx";
import Banner from "../components/formBanner.jsx";
import Reportform from"../components/reportForm.jsx";
export default function Report_L_F() {
 const location = useLocation();

const [reportType, setReportType] = useState(location.state?.reportType);
  const navigate = useNavigate();
  return (<>
  <Navbar />
  {/*banner*/}
    <Banner
     title="Report Lost or Found Pet"
  description="Help reunite pets with their families by providing accurate information."
/>


 <section className="max-w-auto lg:p-20 mx-auto px-6 py-10">
  <div>
  <label className="text-4xl font-bold text-[#144a36]">
    I am reporting a <span className="text-red-500">*</span>
  </label>

  <div className="flex gap-16 mt-6">

    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="radio"
        name="reportType"
        value="lost"
        checked={reportType === "lost"}
        onChange={(e) => setReportType(e.target.value)}
      />
      <span className="text-2xl">Lost Pets</span>
    </label>

    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="radio"
        name="reportType"
        value="found"
        checked={reportType === "found"}
        onChange={(e) => setReportType(e.target.value)}
      />
      <span className="text-2xl">Found Pets</span>
    </label>

  </div>
</div>

  <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
    <div >
<Reportform />

</div>
<div  className="space-y-10">
  <div className="bg-[#88b62c]/35 rounded-2xl shadow-lg px-6 pt-8 pb-15">

  <h2 className="text-2xl font-bold text-[#144a36]">
    How It Works
  </h2>
  <h3 className="text-lg font-bold mt-8">
    1.  Report
  </h3>
  <p className="text-lg mt-2">Fill out the form with as
much details as possible.
</p>
 <h3 className="text-lg font-bold mt-5">
    2. Review
  </h3>
  <p className="text-lg mt-2">Our team will review your report.
</p>
 <h3 className="text-lg font-bold mt-5">
    3. Connect
  </h3>
  <p className="text-lg mt-2">we'll help connect you
with the owner.
</p>
  </div>

<div className="bg-[#88b62c]/35 rounded-2xl shadow-lg px-6 pt-8 pb-15">

  <h2 className="text-2xl font-bold text-[#144a36]">
    Important Tips
  </h2>
 
  <p className="mt-8 text-lg"> <span className="text-xl font-bold text-[#88b62c]">
               ✓
              </span>&nbsp; Provide clear and recent photos.
    <br /><br/>
     <span className="font-bold text-xl text-[#88b62c]">
               ✓
              </span>&nbsp;
Include distrinctive features. 
<br /><br/>
 <span className="font-bold text-xl text-[#88b62c]">
                ✓
              </span> &nbsp;
   Double-check the location and details.
   <br/><br/>
    <span className="font-bold text-xl text-[#88b62c]">
                ✓
              </span>&nbsp;
We respect your privacy and do not share your contact information publicly.
</p>
  </div>
  <div className="bg-[#88b62c]/35 rounded-2xl shadow-lg px-6 pt-8 pb-16">

  <h2 className="text-2xl font-bold text-[#144a36]">
    Need Help?
  </h2>
  <p className="mt-8 text-lg">Contact our support team if
you have any questions.
</p>

         {/*submit button*/}
         <div className="mt-8 px-40">
        <button onClick={() => navigate("/contact")} 
          className="w-[150px] bg-white border-2 border-[#144a36] text-[#144a36] py-3 rounded-xl  text-lg font-semibold cursor-pointer hover:bg-[#144a36]/80 hover:text-white"
        >
          Contact Us
        </button>
        </div>
  </div>
  </div>

</div>
</section>
  <Footer/>
  </>
   );
  }