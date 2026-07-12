import { useNavigate } from "react-router-dom";
import bannerImg from "../assets/images/banners/banner3.png";
import bannerMobile from "../assets/images/banners/LFlist_Mobile.png";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <section className="relative lg:mt-32 mt-15 overflow-hidden">
  <img
    src={bannerImg}
    alt=""
    className="hidden lg:block object-cover w-full h-auto"
  />
        {/* Mobile Banner */}
  <img
    src={bannerMobile}
    alt="Banner"
    className="block lg:hidden w-full sm:h-[350px] object-cover"
  />

      <div className="lg:mb-40 md:mb-20 mb-20 absolute inset-0 flex flex-col items-center justify-center">

      <div className=" relative">
        <h1 className="playpen text-center text-white font-extrabold mb-10 text-6xl sm:text-5xl lg:text-8xl">

          Lost <span className="text-[#88b62c]">&amp;</span> Found Pet
        </h1>
        <p className="inter lg:mt-8 lg:mb-0 mb-10 text-center lg:w-7xl w-lg  text-white text-lg sm:text-lg md:text-xl lg:text-3xl font-medium lg:leading-loose">
          Help reunite lost pets with their families or report a pet you've
          found. Together we can bring them home.
        </p>
</div>
        <div className="lg:mt-20 md:mt-10 inter font-medium flex flex-wrap items-center justify-center gap-6">
          <button
            onClick={() =>
              navigate("/report_", {
                state: { reportType: "lost" },
              })
            }
            className="text-xl rounded-lg border-4 border-[#88b62c] bg-[#88b62c] px-6 py-3 text-white cursor-pointer hover:bg-[#88b62c]/80 transition"
          >
            Report Lost Pet
          </button>

          <button
            onClick={() =>
              navigate("/report_", {
                state: { reportType: "found" },
              })
            }
            className="text-xl rounded-lg border-4 border-white bg-transparent px-6 py-3 text-white cursor-pointer hover:bg-white hover:text-[#144a36] transition"
          >
            Report Found Pet
          </button>
        </div>
      </div>
    </section>
  );
}
