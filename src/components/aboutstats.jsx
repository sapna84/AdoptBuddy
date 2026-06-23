import VetIcon from "../assets/images/icons/vet_lightgreen.svg";
import PeopleIcon from "../assets/images/icons/group_lightgrren.svg";
import PetsIcon from "../assets/images/icons/paw_lightgreen.svg";

const stats = [
  {
    icon: PeopleIcon,
    number: "50,000+",
    label: "Successful Adoptions",
  },
  {
    icon: PetsIcon,
    number: "5000+",
    label: "Available Pets",
  },
  {
    icon: VetIcon,
    number: "120+",
    label: "Veterinarians",
  },
  {
    icon: PeopleIcon,
    number: "50,000+",
    label: "Community Members",
  },
];

export default function AboutStats() {
  return (
    <div className="bg-[#144a36] rounded-[30px] p-10 pt-16 shadow-lg h-full">
      {stats.map((item, index) => (
        <div key={index}>
          <div className="flex items-center gap-6 py-6">
            <img
              src={item.icon}
              alt={item.label}
              className="w-14 h-14 flex-shrink-0"
            />

            <div>
              <h3 className="text-white text-4xl font-bold">
                {item.number}
              </h3>

              <p className="text-white text-xl font-medium">
                {item.label}
              </p>
            </div>
          </div>

          {index !== stats.length - 1 && (
            <div className="border-b border-white/40"></div>
          )}
        </div>
      ))}
    </div>
  );
}