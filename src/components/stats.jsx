import happyAdoptions from "../assets/images/icons/happy_adoptions.svg";
import petAvailable from "../assets/images/icons/pet_available.svg";
import veterinarians from "../assets/images/icons/veterinarians.svg";
import communityMembers from "../assets/images/icons/community_members.svg";

function Stats() {
  const stats = [
    {
      icon: happyAdoptions,
      value: "10K+",
      label: "Happy Adoptions",
    },
    {
      icon: petAvailable,
      value: "5K",
      label: "Pets Available",
    },
    {
      icon: veterinarians,
      value: "120+",
      label: "Veterinarians",
    },
    {
      icon: communityMembers,
      value: "50K",
      label: "Community Members",
    },
  ];

  return (
    <section className="max-w-auto mx-auto lg:px-20 lg:py-6 px-6 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-2 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <img
              src={stat.icon}
              alt={stat.label}
              className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3"
            />

            <h3 className="font-bold text-3xl md:text-4xl">
              {stat.value}
            </h3>

            <p className="text-lg md:text-2xl">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;