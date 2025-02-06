import CardSection from "../../components/CardSection";
import ServiceSection from "../../components/ServiceSection";
import datas from "../../lib/StorySectionData.json";

const StorySection = () => {
  const SvgIcons = [
    {
      Positions: `-bottom-48 right-0 sm:right-10 lg:-bottom-8 lg:right-5`,
      width: `100`,
      height: 408,
      viewBox: "0 0 408 408",
      animation: "true",
      SvgClass: "-z-10",
      content: (
        <>
          <path
            d="M408 299.347V0L0 408H299.347L408 299.347Z"
            fill="url(#paint0_linear_5178_22426)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_5178_22426"
              x1="0.000149879"
              y1="408"
              x2="362.5"
              y2="20.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA" />
              <stop offset="1" stopColor="#0D7DFE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </>
      ),
    },
    {
      Positions: `top-0 right-0 lg:top-20`,
      width: 158,
      height: 158,
      animation: "true",
      viewBox: "0 0 158 158",
      content: (
        <>
          <path
            d="M158 0L0.5 157.5H23.0446L158 22.5448V0Z"
            fill="url(#paint0_linear_5178_22429)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_5178_22429"
              x1="-140.36"
              y1="266.729"
              x2="224.893"
              y2="-44.9581"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA" />
              <stop offset="1" stopColor="#1F80F0" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </>
      ),
    },
  ];

  return (
    <div className="w-full h-full">
      <ServiceSection
        title={"OUR STORY"}
        heading={"Building the future today"}
        description={
          "Founded in January 2020, Any Technology is a Singapore-based fintech enterprise committed to helping the global financial services industry reimagine banking and payment services."
        }
        image={
          "https://cdn.sanity.io/images/6jywt20u/production/45215835736396e2687121e2610eca30b0a8ca2a-2121x1414.jpg?w=1600&auto=format"
        }
        imageSize={"w-full h-1/2"}
        ExtraImage={"/storyImage.png"}
        ExtraImageClass={"w-2/5 top-0 left-0 lg:top-28"}
        svgs={SvgIcons}
      />
      <div className="w-4/5 h-full mx-auto mt-10 lg:mt-0">
        <CardSection data={datas} className={"shadow-2xl"} hight={"h-96"} />
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

export default StorySection;
