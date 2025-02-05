import SectionHeading from "../../components/SectionHeading";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import CarouselData from "../../lib/CarouselData.json";

const Technology = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnMouseEnter: true, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () =>
        setSelectedIndex(emblaApi.selectedScrollSnap())
      );
    }
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div className="w-full h-full px-4 md:px-8 lg:px-16">
      <div className="w-full mx-auto">
        <SectionHeading
          title="TECHNOLOGY BUILT FOR YOU"
          description="The future of finance"
        />

        {/* Navigation Buttons */}
        <div className="w-full flex justify-center my-5 text-[#2985f1]">
          {/* Show Text Buttons on md & Larger | Dots on sm */}
          <div className="hidden md:flex flex-wrap gap-2 lg:gap-4">
            {CarouselData.map((slide, index) => (
              <button
                key={index}
                className={`px-5 md:px-6 py-2 md:py-3 text-base md:text-xs lg:text-base xl:text-2xl rounded-lg transition-all ${
                  selectedIndex === index
                    ? "bg-[#b8d8ff]"
                    : "hover:bg-[#f5fbfe]"
                }`}
                onClick={() => scrollTo(index)}
              >
                {slide.title}
              </button>
            ))}
          </div>

          {/* Dots for Small Screens */}
          <div className="flex md:hidden gap-2">
            {CarouselData.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  selectedIndex === index
                    ? "bg-[#2985f1] scale-125"
                    : "bg-gray-300"
                }`}
                onClick={() => scrollTo(index)}
              ></div>
            ))}
          </div>
        </div>

        {/* Carousel Content */}
        <div
          className="embla overflow-hidden rounded-xl shadow-2xl p-5"
          ref={emblaRef}
        >
          <div className="flex">
            {CarouselData.map((data, index) => (
              <div key={index} className="flex-none w-full p-5">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                  {/* Left Side - Text (Always Left Aligned) */}
                  <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-7 text-left">
                    <p className="text-[#579FF3] font-extrabold tracking-[2px] md:tracking-[4px]">
                      {data.title}
                    </p>
                    <h1 className="text-2xl md:text-4xl text-[#1E4068] font-bold">
                      {data.content}
                    </h1>
                    <p className="text-[#1E4068] font-bold text-sm md:text-base">
                      {data.description}
                    </p>
                    <p className="text-[#94a8c0] font-bold text-xs md:text-sm">
                      {data.secondDescription}
                    </p>
                  </div>

                  {/* Right Side - Image */}
                  <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center p-5">
                    <figure className="w-full max-w-xs md:max-w-sm lg:max-w-md">
                      <img
                        src={data.image}
                        alt={data.title}
                        className="h-auto w-full object-cover rounded-2xl"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative SVG */}
      <svg
        className="w-full h-auto max-h-[120px] md:max-h-[180px] lg:max-h-[240px] mt-10"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.7"
          d="M-240 0L1680 0L-240 280L-240 0Z"
          fill="url(#paint0_linear_6055_471)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_6055_471"
            x1="458.5"
            y1="1561.14"
            x2="392.705"
            y2="52.1879"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1F80F0"></stop>
            <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Technology;
