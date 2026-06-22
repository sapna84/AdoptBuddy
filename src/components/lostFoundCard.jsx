import { useNavigate } from "react-router-dom";
function LostFoundCard({
  title,
  description,
  buttonText,
  image,
  reverse = false,
}) {
const navigate = useNavigate();
  return (
    <div
      className={`bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="md:w-1/2 bg-[#ffffff] rounded-3xl p-8 flex flex-col justify-center border-[#88b62c] border-8">
        <h3 className="playpen text-[#144a36] text-3xl font-bold">
          {title}
        </h3>

        <p className="mt-4 text-lg">
          {description}
        </p>
        <button onClick={() => navigate("/report_")} 
        className="mt-6 bg-[#88b62c] text-white px-6 py-3 rounded-lg w-fit cursor-pointer">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default LostFoundCard;