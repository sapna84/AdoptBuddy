import happyAdoptions from "../assets/images/icons/happy_adoptions.svg";
import petAvailable from "../assets/images/icons/paw_lightgreen.svg";
import veterinarians from "../assets/images/icons/vet_lightgreen.svg";
import communityMembers from "../assets/images/icons/group_lightgrren.svg";
import { useEffect, useRef, useState } from "react";
export default function Stats() {

  const stats = [
  {
    icon: happyAdoptions,
    value: 100,
    suffix: "+",
    label: "Happy Adoptions",
  },
  {
    icon: petAvailable,
    value: 300,
    suffix: "",
    label: "Pets Available",
  },
  {
    icon: veterinarians,
    value: 100,
    suffix: "+",
    label: "Veterinarians",
  },
  {
    icon: communityMembers,
    value: 300,
    suffix: "+",
    label: "Community Members",
  },
];
const [counts, setCounts] = useState(stats.map(() => 0));
const sectionRef = useRef(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;

      stats.forEach((stat, index) => {
        let start = 0;

        const increment = Math.ceil(stat.value / 40);

        const timer = setInterval(() => {
          start += increment;

          if (start >= stat.value) {
            start = stat.value;
            clearInterval(timer);
          }

          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = start;
            return updated;
          });
        }, 25);
      });

      observer.disconnect();
    },
    {
      threshold: 0.4,
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);

  return (
    <section
  ref={sectionRef}
  className="max-w-full bg-[#f7f2e8] lg:py-8 py-6 shadow-lg"
>
      <div className="max-w-full mx-auto lg:px-20">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-2 lg:gap-x-8 xl:gap-x-10 px-8">
        {stats.map((stat, index) => (
          <div
  key={stat.label}
  className="flex flex-col items-center text-center"
>
  {/* Icon + Number */}
  <div className="flex items-center justify-center gap-5">
    <img
      src={stat.icon}
      alt={stat.label}
      className="w-12 h-12 md:w-18 md:h-18"
    />

    <h3 className="text-[#144A36] font-bold text-4xl md:text-[48px] leading-none">
      {counts[index]}
      {stat.suffix}
    </h3>
  </div>

  {/* Label */}
  <p className="mt-3 text-[#144A36] text-lg md:text-[24px] font-medium">
    {stat.label}
  </p>
</div>
        ))}
        </div>
      </div>
    </section>
  );
}
