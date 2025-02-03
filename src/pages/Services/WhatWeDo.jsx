import CardSection from "../../components/CardSection";
import ServiceSection from "../../components/ServiceSection";
import data from "../../lib/WhatWeDoSectionData.json";

const WhatWeDo = () => {
  const SvgIcons = [
    {
      top: 20,
      left: 75,
      width: 148,
      height: 147,
      viewBox: "0 0 148 147",
      animation: "true",
      content: (
        <>
          <ellipse
            style={{ mixBlendMode: "multiply" }}
            fill="url(#paint0_linear_6335_13649)"
            transform="matrix(1 0 0.00431928 0.999991 0.385742 0.0209961)"
            ry="73.4798"
            rx="73.2968"
            cy="73.4798"
            cx="73.2968"
          />
          <ellipse
            fill="url(#paint1_radial_6335_13649)"
            transform="matrix(1 0 0.00431928 0.999991 0.385742 0.0209961)"
            ry="73.4798"
            rx="73.2968"
            cy="73.4798"
            cx="73.2968"
          />
          <ellipse
            fill="white"
            ry="53.2851"
            rx="53.02"
            cy="69.9787"
            cx="73.8374"
          />
          <path
            fill="black"
            d="M48.8571 47C45.0893 47 42 50.1086 42 53.9V86.1C42 89.8734 45.0893 93 48.8571 93H99.1429C102.911 93 106 89.8914 106 86.1V53.9C106 50.1086 102.893 47 99.1429 47H48.8571ZM48.8571 51.6H99.1429C100.429 51.6 101.429 52.6062 101.429 53.9V86.1C101.429 87.3937 100.429 88.4 99.1429 88.4H48.8571C47.5714 88.4 46.5714 87.3937 46.5714 86.1V53.9C46.5714 52.5883 47.5536 51.6 48.8571 51.6ZM51.1429 60.8V70H64.8571V60.8H51.1429ZM69.4286 65.4V70H96.8571V65.4H69.4286ZM51.1429 79.2V83.8H55.7143V79.2H51.1429ZM60.2857 79.2V83.8H69.4286V79.2H60.2857ZM74 79.2V83.8H83.1429V79.2H74ZM87.7143 79.2V83.8H96.8571V79.2H87.7143Z"
          />
          <path
            fill="url(#paint2_linear_6335_13649)"
            d="M48.8571 47C45.0893 47 42 50.1086 42 53.9V86.1C42 89.8734 45.0893 93 48.8571 93H99.1429C102.911 93 106 89.8914 106 86.1V53.9C106 50.1086 102.893 47 99.1429 47H48.8571ZM48.8571 51.6H99.1429C100.429 51.6 101.429 52.6062 101.429 53.9V86.1C101.429 87.3937 100.429 88.4 99.1429 88.4H48.8571C47.5714 88.4 46.5714 87.3937 46.5714 86.1V53.9C46.5714 52.5883 47.5536 51.6 48.8571 51.6ZM51.1429 60.8V70H64.8571V60.8H51.1429ZM69.4286 65.4V70H96.8571V65.4H69.4286ZM51.1429 79.2V83.8H55.7143V79.2H51.1429ZM60.2857 79.2V83.8H69.4286V79.2H60.2857ZM74 79.2V83.8H83.1429V79.2H74ZM87.7143 79.2V83.8H96.8571V79.2H87.7143Z"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="243.853"
              x2="73.2967"
              y1="0"
              x1="73.2967"
              id="paint0_linear_6335_13649"
            >
              <stop stopColor="#F0FAFF" />
              <stop stopOpacity="0" stopColor="#F0FAFF" offset="1" />
            </linearGradient>
            <radialGradient
              gradientTransform="translate(44.6144 -0.0210097) rotate(52.67) scale(148.4 149.523)"
              gradientUnits="userSpaceOnUse"
              r="1"
              cy="0"
              cx="0"
              id="paint1_radial_6335_13649"
            >
              <stop stopColor="#1F80F0" />
              <stop stopOpacity="0" stopColor="#00E9EA" offset="1" />
            </radialGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="100.796"
              x2="117.03"
              y1="55.5"
              x1="89.5"
              id="paint2_linear_6335_13649"
            >
              <stop stopColor="#1F80F0" />
              <stop stopColor="#00E9EA" offset="0.856761" />
            </linearGradient>
          </defs>
        </>
      ),
    },
    {
      top: 60,
      left: 0,
      width: 108,
      height: 109,
      viewBox: "0 0 108 109",
      animation: "true",
      content: (
        <>
          <ellipse
            style={{ mixBlendMode: "multiply" }}
            fill="url(#paint0_linear_6335_13653)"
            transform="matrix(1 0 0.00431936 0.999991 0.291992 0.756836)"
            ry="53.7262"
            rx="53.5924"
            cy="53.7262"
            cx="53.5924"
          />
          <ellipse
            fill="url(#paint1_radial_6335_13653)"
            transform="matrix(1 0 0.00431936 0.999991 0.291992 0.756836)"
            ry="53.7262"
            rx="53.5924"
            cy="53.7262"
            cx="53.5924"
          />
          <ellipse
            fill="white"
            ry="38.9605"
            rx="38.7666"
            cy="51.908"
            cx="53.9981"
          />
          <path
            fill="black"
            d="M73.5276 30L63.6911 39.8543L53.4976 36.4371L43.3702 47.4305L33.2428 43.5629L32.0397 46.7285L44.3221 51.404L54.5024 40.3576L64.6166 43.7219L75.9339 32.3841L73.5276 30ZM52.3077 53.6556V74H55.6923V53.6556H52.3077ZM72.6154 53.6556V74H76V53.6556H72.6154ZM45.5385 57.0464V74H48.9231V57.0464H45.5385ZM59.0769 57.0464V74H62.4615V57.0464H59.0769ZM32 60.4371V74H35.3846V60.4371H32ZM38.7692 60.4371V74H42.1538V60.4371H38.7692ZM65.8462 60.4371V74H69.2308V60.4371H65.8462Z"
          />
          <path
            fill="url(#paint2_linear_6335_13653)"
            d="M73.5276 30L63.6911 39.8543L53.4976 36.4371L43.3702 47.4305L33.2428 43.5629L32.0397 46.7285L44.3221 51.404L54.5024 40.3576L64.6166 43.7219L75.9339 32.3841L73.5276 30ZM52.3077 53.6556V74H55.6923V53.6556H52.3077ZM72.6154 53.6556V74H76V53.6556H72.6154ZM45.5385 57.0464V74H48.9231V57.0464H45.5385ZM59.0769 57.0464V74H62.4615V57.0464H59.0769ZM32 60.4371V74H35.3846V60.4371H32ZM38.7692 60.4371V74H42.1538V60.4371H38.7692ZM65.8462 60.4371V74H69.2308V60.4371H65.8462Z"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="178.298"
              x2="53.5924"
              y1="0"
              x1="53.5924"
              id="paint0_linear_6335_13653"
            >
              <stop stopColor="#F0FAFF" />
              <stop stopOpacity="0" stopColor="#F0FAFF" offset="1" />
            </linearGradient>
            <radialGradient
              gradientTransform="translate(53.707 0.243166) rotate(81.214) scale(108.271 108.78)"
              gradientUnits="userSpaceOnUse"
              r="1"
              cy="0"
              cx="0"
              id="paint1_radial_6335_13653"
            >
              <stop stopColor="#1F80F0" />
              <stop stopOpacity="0" stopColor="#00E9EA" offset="1" />
            </radialGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="82.3559"
              x2="74.1509"
              y1="52"
              x1="50.5079"
              id="paint2_linear_6335_13653"
            >
              <stop stopColor="#1F80F0" />
              <stop stopColor="#00E9EA" offset="0.856761" />
            </linearGradient>
          </defs>
        </>
      ),
    },
  ];

  return (
    <div className="w-full h-full">
      <ServiceSection
        title={"What We Do"}
        heading={"The power of data"}
        description={
          "In today's rapidly evolving financial landscape, banks and financial institutions face unprecedented challenges. At AnyTech, we understand the critical need for continuous innovation and strategic decision-making in order to thrive."
        }
        secondDescription={
          "With our global perspective and cutting-edge solutions, we are here to help you create unparalleled customer experiences that will set you apart from the competition. Embark on a journey of transformation with AnyTech—one that will redefine what’s possible for your institution."
        }
        image={
          "https://cdn.sanity.io/images/6jywt20u/production/df3fa35d203ad1fc9b3515af8205cabd45cd20e5-1020x1097.png?w=640&auto=format"
        }
        imageSize={"h-4/5"}
        TopBackgroundImage={
          "https://anytxn.com/backgrounds/home/futureOfFinance/background.svg"
        }
        svgs={SvgIcons}
      />
      {/* Card Part */}
      <div className="w-4/5 h-full mx-auto">
        <CardSection
          data={data}
          className={
            "border-[#dfecff] border cursor-pointer hover:bg-[#eaf4fe]"
          }
        />
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

export default WhatWeDo;
