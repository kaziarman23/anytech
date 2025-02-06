import CardSection from "../../components/CardSection";
import ServiceSection from "../../components/ServiceSection";
import datas from "../../lib/OperateSectionData.json";

const Operate = () => {
  const SvgIcons = [
    {
      Positions: `-top-10 -left-10 lg:top-10 lg:left-0`,
      width: `400`,
      height: `400`,
      viewBox: "0 0 400 400",
      SvgClass: "-z-10",
      animation: "true",
      content: (
        <>
          <path
            d="M444 379.38V284L314 414H409.38L444 379.38Z"
            fill="url(#paint0_linear_151_2375)"
          />
          <path
            d="M39 61.4841L39 229.5L268 0.499998L99.9839 0.500013L39 61.4841Z"
            fill="url(#paint1_linear_151_2375)"
          />
          <defs>
            <filter
              id="filter0_d_151_2375"
              x="0"
              y="259"
              width="233"
              height="233"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="28" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0862745 0 0 0 0 0.262745 0 0 0 0 0.466667 0 0 0 0.22 0"
              />
              <feBlend
                mode="multiply"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_151_2375"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_151_2375"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_151_2375"
              x="293"
              y="243"
              width="181"
              height="189"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="28" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0862745 0 0 0 0 0.262745 0 0 0 0 0.466667 0 0 0 0.22 0"
              />
              <feBlend
                mode="multiply"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_151_2375"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_151_2375"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_151_2375"
              x="69"
              y="259"
              width="193"
              height="193"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="28" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0862745 0 0 0 0 0.262745 0 0 0 0 0.466667 0 0 0 0.22 0"
              />
              <feBlend
                mode="multiply"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_151_2375"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_151_2375"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_151_2375"
              x1="314"
              y1="414"
              x2="429.502"
              y2="290.532"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA" />
              <stop offset="1" stopColor="#0D7DFE" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_151_2375"
              x1="268"
              y1="0.499897"
              x2="64.538"
              y2="217.994"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA" />
              <stop offset="1" stopColor="#0D7DFE" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_151_2375"
              x1="230.745"
              y1="259.694"
              x2="79.8326"
              y2="410.607"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA" />
              <stop offset="1" stopColor="#1F80F0" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_151_2375"
              x1="463.406"
              y1="244.026"
              x2="351.106"
              y2="349.362"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA" />
              <stop offset="1" stopColor="#1F80F0" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_151_2375"
              x1="253.33"
              y1="259.996"
              x2="137.311"
              y2="376.016"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA" />
              <stop offset="1" stopColor="#1F80F0" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </>
      ),
    },
    {
      Positions:`top-20 left-0 sm:top-80 sm:left-10`,
      width: `60`,
      height: 115,
      viewBox: "0 0 116 115",
      animation: "true",
      content: (
        <>
          <ellipse
            style={{ mixBlendMode: "multiply" }}
            fill="url(#paint0_linear_6335_13648)"
            transform="matrix(1 0 0.00431928 0.999991 0.609375 0.105835)"
            ry="57.3946"
            rx="57.2517"
            cy="57.3946"
            cx="57.2517"
          />
          <ellipse
            fill="url(#paint1_radial_6335_13648)"
            transform="matrix(1 0 0.00431928 0.999991 0.609375 0.105835)"
            ry="57.3946"
            rx="57.2517"
            cy="57.3946"
            cx="57.2517"
          />
          <ellipse
            fill="white"
            ry="41.6207"
            rx="41.4136"
            cy="56.6207"
            cx="57.983"
          />
          <path
            fill="url(#paint2_linear_6335_13648)"
            d="M58 33C52.1206 33 43.7597 35.0299 39.3275 36.1788C36.7883 36.8368 35 39.1878 35 41.8503V54.4664C35 64.1249 40.6269 72.3083 46.0732 78.0825C51.5196 83.8566 56.9818 87.3444 56.9818 87.3444L58.015 88L59.0332 87.3292C59.0332 87.3292 64.4856 83.7638 69.9268 77.9529C75.3679 72.1419 81 63.9758 81 54.4664V41.8503C81 39.187 79.2126 36.8424 76.68 36.1788H76.6725C72.2405 35.0299 63.8794 33 58 33ZM58 36.903C62.9592 36.903 71.3893 38.837 75.7217 39.9598C76.5855 40.1861 77.1667 40.9463 77.1667 41.8503V54.4664C77.1667 62.3721 72.2571 69.8147 67.1566 75.262C62.5693 80.161 58.8678 82.5737 57.9925 83.167C57.1184 82.5877 53.4259 80.2422 48.8434 75.3839C43.7481 69.9819 38.8333 62.5509 38.8333 54.4664V41.8503C38.8333 40.9377 39.406 40.1839 40.2708 39.9598C44.6017 38.8372 53.0387 36.903 58 36.903ZM58 44.7089C53.7885 44.7089 50.3333 48.2269 50.3333 52.5149C50.3333 54.6066 51.166 56.5057 52.4971 57.912C48.945 59.9095 46.5 63.7207 46.5 68.1268H50.3333C50.3333 63.791 53.7415 60.3209 58 60.3209C62.2585 60.3209 65.6667 63.791 65.6667 68.1268H69.5C69.5 63.7207 67.055 59.9095 63.5029 57.912C64.834 56.5057 65.6667 54.6066 65.6667 52.5149C65.6667 48.2269 62.2115 44.7089 58 44.7089ZM58 48.6119C60.1398 48.6119 61.8333 50.3362 61.8333 52.5149C61.8333 54.6936 60.1398 56.4179 58 56.4179C55.8602 56.4179 54.1667 54.6936 54.1667 52.5149C54.1667 50.3362 55.8602 48.6119 58 48.6119Z"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="190.472"
              x2="57.2517"
              y1="0"
              x1="57.2517"
              id="paint0_linear_6335_13648"
            >
              <stop stopColor="#F0FAFF" />
              <stop stopOpacity="0" stopColor="#F0FAFF" offset="1" />
            </linearGradient>
            <radialGradient
              gradientTransform="translate(41.8911 -0.105844) rotate(71.2441) scale(116.698 117.402)"
              gradientUnits="userSpaceOnUse"
              r="1"
              cy="0"
              cx="0"
              id="paint1_radial_6335_13648"
            >
              <stop stopColor="#1F80F0" />
              <stop stopOpacity="0" stopColor="#00E9EA" offset="1" />
            </radialGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="73.727"
              x2="90.7551"
              y1="45"
              x1="70"
              id="paint2_linear_6335_13648"
            >
              <stop stopColor="#1F80F0" />
              <stop stopColor="#00E9EA" offset="0.856761" />
            </linearGradient>
          </defs>
        </>
      ),
    },
    {
      Positions:`-top-10 right-0 sm:right-8 lg:top-10 lg:right-12 xl:top-20 xl:right-8`,
      width: `80`,
      height: 100,
      viewBox: "0 0 100 100",
      animation: "true",
      content: (
        <>
          <ellipse
            style={{ mixBlendMode: "multiply" }}
            fill="url(#paint0_linear_6335_13650)"
            transform="matrix(1 0 0.00431928 0.999991 0.193359 0.282959)"
            ry="49.7177"
            rx="49.5938"
            cy="49.7177"
            cx="49.5938"
          />
          <ellipse
            fill="url(#paint1_radial_6335_13650)"
            transform="matrix(1 0 0.00431928 0.999991 0.193359 0.282959)"
            ry="49.7177"
            rx="49.5938"
            cy="49.7177"
            cx="49.5938"
          />
          <ellipse
            fill="white"
            ry="36.0536"
            rx="35.8742"
            cy="47.6176"
            cx="49.8923"
          />
          <path
            fill="black"
            d="M55.4411 30L59.357 33.9159L54.1538 39.119L51.3846 36.3498L43.0769 44.6575L40.3077 41.8882L32.0649 50.1418L34.012 52.0889L40.3077 45.8041L43.0769 48.5733L51.3846 40.2656L54.1538 43.0349L61.3149 35.8738L65.2308 39.7897V30H55.4411ZM65.2308 43.8462V66H68V43.8462H65.2308ZM59.6923 46.6154V66H62.4615V46.6154H59.6923ZM54.1538 49.3846V66H56.9231V49.3846H54.1538ZM48.6154 52.1538V66H51.3846V52.1538H48.6154ZM43.0769 54.9231V66H45.8462V54.9231H43.0769ZM37.5385 57.6923V66H40.3077V57.6923H37.5385ZM32 60.4615V66H34.7692V60.4615H32Z"
          />
          <path
            fill="url(#paint2_linear_6335_13650)"
            d="M55.4411 30L59.357 33.9159L54.1538 39.119L51.3846 36.3498L43.0769 44.6575L40.3077 41.8882L32.0649 50.1418L34.012 52.0889L40.3077 45.8041L43.0769 48.5733L51.3846 40.2656L54.1538 43.0349L61.3149 35.8738L65.2308 39.7897V30H55.4411ZM65.2308 43.8462V66H68V43.8462H65.2308ZM59.6923 46.6154V66H62.4615V46.6154H59.6923ZM54.1538 49.3846V66H56.9231V49.3846H54.1538ZM48.6154 52.1538V66H51.3846V52.1538H48.6154ZM43.0769 54.9231V66H45.8462V54.9231H43.0769ZM37.5385 57.6923V66H40.3077V57.6923H37.5385ZM32 60.4615V66H34.7692V60.4615H32Z"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="164.995"
              x2="49.5938"
              y1="0"
              x1="49.5938"
              id="paint0_linear_6335_13650"
            >
              <stop stopColor="#F0FAFF" />
              <stop stopOpacity="0" stopColor="#F0FAFF" offset="1" />
            </linearGradient>
            <radialGradient
              gradientTransform="translate(49.8079 -0.282963) rotate(90.2475) scale(119.002 119.401)"
              gradientUnits="userSpaceOnUse"
              r="1"
              cy="0"
              cx="0"
              id="paint1_radial_6335_13650"
            >
              <stop stopColor="#1F80F0" />
              <stop stopOpacity="0" stopColor="#00E9EA" offset="1" />
            </radialGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="64.9568"
              x2="82.6534"
              y1="36.6522"
              x1="58.7187"
              id="paint2_linear_6335_13650"
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
    <div id="operate" className="w-full h-full">
      <ServiceSection
        title={"long-term efficiency"}
        heading={"Operate"}
        description={
          "Setting up operational efficiencies to deliver the promised value to your customers is pivotal to long-term growth."
        }
        secondDescription={
          "We provide a full suite of operational and support services that continue throughout the product life cycle.Continually drive success with our dedicated experts who are ready to assist you at every step of the way."
        }
        image={
          "https://cdn.sanity.io/images/6jywt20u/production/60924eb07b75e8432610c0ba14db5bfa20f8b0c9-1002x1023.png?auto=format"
        }
        imageSize={"h-4/5"}
        BottomBackgroundImage={
          "https://anytxn.com/backgrounds/execution/foreground.png"
        }
        svgs={SvgIcons}
      />
      <div className="w-4/5 h-full mx-auto mt-10 lg:mt-0">
        <CardSection data={datas} className={"border border-blue-300"} />
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

export default Operate;
