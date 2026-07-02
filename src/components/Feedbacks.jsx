import { useEffect, useState } from "react";

import smile from "../assets/images/icons/smile.svg";
import paw from "../assets/images/icons/pawfeed.svg";

import feedback1 from "../assets/images/feedback/feedback1.jpg";
import feedback2 from "../assets/images/feedback/feedback2.jpg";
import feedback3 from "../assets/images/feedback/feedback3.jpg";

const feedbacks = [
  {
    id: 1,
    name: "Monika Sharma",
    image: feedback1,
    review:
      "I really had a very good experience in using this website. I found my friend Lilly through it. She is so loving and friendly. I directly contacted her past owner and adopted her. I can also find vets here for her healthcare. Happy to say that this year gonna adopt one more friend. Recommended to future pet parents.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Mehta",
    image: feedback2,
    review:
      "The adoption process was very smooth and transparent. The previous owner was very helpful and my puppy settled in quickly. Highly recommend this platform.",
    rating: 4,
  },
  {
    id: 3,
    name: "Priya Kapoor",
    image: feedback3,
    review:
      "Amazing experience! I was able to adopt my lovely cat and also found nearby veterinarians for vaccinations. Everything was easy to use.",
    rating: 4,
  },
];

export default function Feedbacks() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % feedbacks.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? feedbacks.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % feedbacks.length);
  };

  const item = feedbacks[current];

  return (
    <section className="bg-[#F7F1E6] py-20 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-12">

          <div className="flex justify-center items-center gap-6 mb-4">

            <img
              src={smile}
              alt=""
              className="w-20 h-20 -scale-x-100 origin-bottom animate-swing"
            />

            <h2 className="playpen text-[#144a36] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              Hear From Our Happy Pet Parents
            </h2>

            <img
              src={smile}
              alt=""
              className="w-20 h-20 origin-bottom animate-swing"
            />

          </div>

          <p className="inter text-center text-base sm:text-xl md:text-3xl lg:text-3xl mt-4 mx-auto leading-relaxed">
            Discover real stories and experiences shared by pet owners who found
            their perfect companions through AdoptBuddy.
          </p>

        </div>

        {/* Card */}

        <div className="relative">

  {/* Left Button */}
  <button
    onClick={prevSlide}
    className="
      absolute
      left-2 sm:left-4 lg:left-[-80px]
      top-1/2
      -translate-y-1/2
      bg-white
      shadow-lg
      rounded-full
      w-8 h-8
      sm:w-10 sm:h-10
      lg:w-12 lg:h-12
      flex
      items-center
      justify-center
      z-10
      hover:scale-105
      transition
    "
  >
    ❮
  </button>

  {/* Right Button */}
  <button
    onClick={nextSlide}
    className="
      absolute
      right-2 sm:right-4 lg:right-[-80px]
      top-1/2
      -translate-y-1/2
      bg-white
      shadow-lg
      rounded-full
      w-8 h-8
      sm:w-10 sm:h-10
      lg:w-12 lg:h-12
      flex
      items-center
      justify-center
      z-10
      hover:scale-105
      transition
    "
  >
    ❯
  </button>

  {/* Card */}
  <div
    className="
      bg-white
      rounded-3xl
      shadow-lg
      border
      border-gray-200
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-6
      lg:gap-10
      items-center
      p-5
      sm:p-8
      lg:p-10
      min-h-auto
      lg:min-h-[380px]
    "
  >

    {/* Left */}
    <div>

      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#86B71F] mb-3">
        {item.name}
      </h3>

      <div className="text-yellow-400 text-xl sm:text-2xl lg:text-3xl mb-4 lg:mb-6">
        {"★".repeat(item.rating)}
      </div>

      <p className="text-gray-700 text-base sm:text-lg lg:text-lg leading-7 lg:leading-9">
        {item.review}
      </p>

    </div>

    {/* Right */}
    <div className="flex justify-center lg:justify-end">

      <div className="relative">

        <div
          className="
            relative
            group
            w-[220px]
            h-[220px]
            sm:w-[280px]
            sm:h-[260px]
            lg:w-[350px]
            lg:h-[300px]
            overflow-hidden
            rounded-tl-md
            rounded-bl-[60px]
            sm:rounded-bl-[70px]
            lg:rounded-bl-[80px]
            rounded-tr-[60px]
            sm:rounded-tr-[70px]
            lg:rounded-tr-[80px]
            rounded-br-md
            border-4
            border-[#144a36]
            bg-[#F7F1E6]
          "
        >
          <img
            src={item.image}
            alt={item.name}
            className="
              w-full
              h-full
              object-cover
              transition-all
              duration-500
              ease-in-out
              group-hover:scale-90
              group-hover:object-contain
              cursor-pointer
            "
          />
        </div>

        <img
          src={paw}
          alt=""
          className="
            absolute
            -bottom-3
            -right-3
            sm:-bottom-4
            sm:-right-4
            lg:-bottom-5
            lg:-right-5
            w-14
            h-14
            sm:w-18
            sm:h-18
            lg:w-24
            lg:h-24
            animate-swing
          "
        />

      </div>

    </div>

  </div>

  {/* Dots */}
  <div className="flex justify-center gap-2 sm:gap-3 mt-6 lg:mt-8">
    {feedbacks.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrent(index)}
        className={`h-3 rounded-full transition-all ${
          current === index
            ? "bg-[#184F3B] w-7 sm:w-8"
            : "bg-gray-300 w-3"
        }`}
      />
    ))}
  </div>

</div>

      </div>
    </section>
  );
}