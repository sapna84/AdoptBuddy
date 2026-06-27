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
    <div
      className={`bg-white overflow-hidden shadow-lg flex flex-col md:flex-row  hover:-translate-y-2 transition ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="md:w-1/2 ">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="md:w-[55%] bg-[#ffffff] rounded-tr-3xl p-8 lg:p-14 flex flex-col justify-center border-[#88b62c] border-8 ">
        <h3 className="playpen text-[#144a36] text-3xl lg:text-4xl font-bold">
          {title}
        </h3>

        <p className="mt-4 text-xl">
          {description}
        </p>
        <button onClick={() => navigate("/report_",{
          state:{
            reportType,
          },
          }
        )
      }
        className="mt-6 bg-[#88b62c] text-white px-6 py-3 rounded-lg w-fit cursor-pointer hover:opacity-90">
          {buttonText}
        </button>
      </div>
    </div>
  );
}