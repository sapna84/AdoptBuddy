import { useNavigate } from "react-router-dom";

export default function LostFoundCard({
  title,
  description,
  buttonText,
  image,
  reverse = false,
  reportType,
}) {
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile + Tablet */}
      <div className="lg:hidden bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300">

        <img
          src={image}
          alt={title}
          className="w-full h-64 sm:h-72 md:h-80 object-cover"
        />

        <div className="bg-[#f7f1e6] border-4 md:border-6 border-[#88b62c] p-6 sm:p-8 text-center">

          <h3 className="playpen text-[#144a36] text-3xl sm:text-4xl font-bold">
            {title}
          </h3>

          <p className="inter mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed">
            {description}
          </p>

          <button
            onClick={() =>
              navigate("/report_", {
                state: {
                  reportType,
                },
              })
            }
            className="inter mt-8 px-8 py-3 md:px-10 md:py-4 text-lg md:text-xl font-semibold rounded-xl border-4 border-[#2D9216] bg-[#2D9216] text-white hover:bg-[#7ca628] transition"
          >
            {buttonText}
          </button>

        </div>
      </div>

      {/* Desktop (UNCHANGED) */}
      <div className="hidden lg:block relative h-[360px]">

        {/* Image */}
        <div
          className={`absolute top-0 h-full w-[80%] ${
            reverse ? "right-0" : "left-0"
          }`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full rounded-3xl shadow-lg"
          />
        </div>

        {/* Floating Card */}
        <div
          className={`absolute mt-4 top-1/2 -translate-y-1/3
          w-[60%] h-[365px]
          bg-[#f7f1e6]
          border-8 border-[#88b62c]
          shadow-xl
          flex flex-col justify-center items-center text-center
          px-6 z-10
          ${
            reverse
              ? "-left-25 rounded-tr-[100px] rounded-bl-[100px]"
              : "-right-25 rounded-tl-[100px] rounded-br-[100px]"
          }`}
        >

          <h3 className="playpen mt-2 text-[#144a36] text-5xl font-bold leading-tight">
            {title}
          </h3>

          <p className="inter mt-2 text-3xl leading-tight">
            {description}
          </p>

          <button
            onClick={() =>
              navigate("/report_", {
                state: {
                  reportType,
                },
              })
            }
            className="inter mt-8 px-10 py-4 text-xl font-semibold rounded-xl border-4 border-[#2D9216] bg-[#2D9216] text-white transition-all duration-300 hover:bg-[#7ca628] hover:scale-105 hover:shadow-lg"
          >
            {buttonText}
          </button>

        </div>

      </div>
    </>
  );
}