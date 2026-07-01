import { useEffect, useState } from "react";

import smile from "../assets/images/icons/smile.svg";
import paw from "../assets/images/icons/pawfeed.svg";

import feedback1 from "../assets/images/feedback/feedback1.png";
//import feedback2 from "../assets/images/feedback2.png";
//import feedback3 from "../assets/images/feedback3.png";

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
    image: feedback1,
    review:
      "The adoption process was very smooth and transparent. The previous owner was very helpful and my puppy settled in quickly. Highly recommend this platform.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Kapoor",
    image: feedback1,
    review:
      "Amazing experience! I was able to adopt my lovely cat and also found nearby veterinarians for vaccinations. Everything was easy to use.",
    rating: 5,
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
    <section className="bg-[#F8F2E8] py-20 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-12">

          <div className="flex justify-center items-center gap-6 mb-4">

            <img
              src={smile}
              alt=""
              className="w-12 h-12"
            />

            <h2 className="text-[#184F3B] text-4xl font-bold">
              Hear From Our Happy Pet Parents
            </h2>

            <img
              src={smile}
              alt=""
              className="w-12 h-12"
            />

          </div>

          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            Discover real stories and experiences shared by pet owners who found
            their perfect companions through AdoptBuddy.
          </p>

        </div>

        {/* Card */}

        <div className="relative">

          {/* Left Button */}

          <button
            onClick={prevSlide}
            className="absolute left-[-25px] top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center z-10 hover:scale-105 transition"
          >
            ❮
          </button>

          {/* Right Button */}

          <button
            onClick={nextSlide}
            className="absolute right-[-25px] top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center z-10 hover:scale-105 transition"
          >
            ❯
          </button>

          <div
            className="bg-white rounded-3xl shadow-lg border border-gray-200
            grid lg:grid-cols-2 gap-10 items-center p-10 min-h-[380px]"
          >

            {/* Left */}

            <div>

              <h3 className="text-5xl font-bold text-[#86B71F] mb-3">
                {item.name}
              </h3>

              <div className="text-yellow-400 text-3xl mb-6">
                {"★".repeat(item.rating)}
              </div>

              <p className="text-gray-700 text-lg leading-9">
                {item.review}
              </p>

            </div>

            {/* Right */}

            <div className="flex justify-center lg:justify-end">

              <div className="relative">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[380px] h-[260px] object-cover border-4 border-black rounded-tl-md rounded-bl-[80px] rounded-tr-[80px] rounded-br-md"
                />

                <img
                  src={paw}
                  alt=""
                  className="absolute -bottom-5 -right-5 w-24 h-24"
                />

              </div>

            </div>

          </div>

          {/* Dots */}

          <div className="flex justify-center gap-3 mt-8">

            {feedbacks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index
                    ? "bg-[#184F3B] w-8"
                    : "bg-gray-300"
                }`}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}