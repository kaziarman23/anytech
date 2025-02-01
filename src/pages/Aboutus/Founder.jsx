import ServiceSection from "../../components/ServiceSection";

const Founder = () => {
  const SvgIcons = [
    {
      bottom: 12,
      right: 0,
      width: 229,
      height: 229,
      viewBox: "0 0 229 229",
      SvgClass: "-z-10",
      content: (
        <>
          <path
            d="M229 168.016V0L0 229H168.016L229 168.016Z"
            fill="url(#paint0_linear_6237_24709)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_6237_24709"
              x1="8.41232e-05"
              y1="229"
              x2="203.462"
              y2="11.5062"
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
      top: 10,
      left: 60,
      width: 158,
      height: 158,
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
        title={"Our Founder"}
        heading={"A trailblazer in finance"}
        description={
          "Trong Lau is an experienced executive with extensive knowledge in the field of credit card systems. Throughout her career spanning over 30 years, she has played a pivotal role in introducing and executing advanced credit card and intelligent retail financial systems across the region."
        }
        secondDescription={
          "Her unwavering dedication to innovation and impactful leadership has been instrumental in shaping the industry and driving the creation of pragmatic and user-centric financial technologies."
        }
        image={
          "https://cdn.sanity.io/images/6jywt20u/production/e06d263063531f1b8cbe4a259e2fd946a0195972-422x493.png?w=640&auto=format"
        }
        imageSize={"h-4/5"}
        svgs={SvgIcons}
        TopBackgroundImage={"https://anytxn.com/backgrounds/about/frame2.svg"}
      />
    </div>
  );
};

export default Founder;
