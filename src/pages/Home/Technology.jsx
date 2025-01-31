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
    <div className="w-full h-full">
      <div className="w-4/5 h-full mx-auto">
        <SectionHeading
          title={"TECHNOLOGY BUILT FOR YOU"}
          description={"The future of finance"}
        />
        {/* Carousel Button Part */}
        <div className="w-full h-full my-5 text-[#2985f1] flex justify-evenly items-center">
          {CarouselData.map((slide, index) => (
            <button
              key={index}
              className={`px-10 py-3 text-xl rounded-2xl cursor-pointer transition-all ${
                selectedIndex === index ? "bg-[#b8d8ff]" : "hover:bg-[#f5fbfe]"
              }`}
              onClick={() => scrollTo(index)}
            >
              {slide.title}
            </button>
          ))}
        </div>
        {/* Carousel card Part */}
        <div
          className="embla overflow-hidden rounded-xl shadow-2xl p-5"
          ref={emblaRef}
        >
          <div className="flex">
            {CarouselData.map((data, index) => (
              <div key={index} className="flex-none w-full p-5">
                <div className="flex justify-center items-center">
                  <div className="w-1/2 flex flex-col gap-7">
                    <p className="text-[#579FF3] font-extrabold tracking-[4px]">
                      {data.title}
                    </p>
                    <h1 className="text-4xl text-[#1E4068] font-bold">
                      {data.content}
                    </h1>
                    <p className="text-[#1E4068] font-bold">
                      {data.description}
                    </p>
                    <p className="text-[#94a8c0] font-bold">
                      {data.secondDescription}
                    </p>
                  </div>
                  <div className="w-1/2 flex justify-center items-center p-5">
                    <figure className="w-full object-cover">
                      <img
                        src={data.image}
                        alt={data.title}
                        className="h-full w-full object-cover rounded-2xl"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <svg
        className="undefined max-h-[240px] md:my-sm my-lg w-full min-h-[60px]"
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
