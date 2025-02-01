import SectionHeading from "../../components/SectionHeading";

const Mission = () => {
  return (
    <div className="w-full h-full">
      <SectionHeading
        title={"OUR MISSION"}
        description={"Redefining tomorrow"}
      />
      <div className="w-4/5 h-80 p-5 mx-auto mt-10 flex justify-between items-center relative">
        <div className="w-full h-full flex justify-center p-5 items-start flex-col gap-5 z-10">
          <h1 className="text-[#01dce0] font-extrabold  tracking-wider">
            Our Mission
          </h1>
          <p className="text-white text-5xl">
            To redefine global finance by empowering institutions with
            technology that drives value and growth.
          </p>
        </div>

        {/* SVG Part*/}
        <svg
          className="absolute w-full h-full top-0 left-0 rounded-2xl"
          style={{
            background:
              "radial-gradient(52.71% 158.13% at 3.13% 104.53%, #00E9EA 0%, #1F80F0 52.08%, #014AB8 100%)",
          }}
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1920 640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="hero-background-desktop">
            <g
              id="background"
              style={{
                transform: `translate3d(var(--motion-translateX, 0px), var(--motion-translateY, 0px), 0px)`,
                transition:
                  "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <path
                d="M1508 424.015V-81.5L819 607.5H1324.52L1508 424.015Z"
                fill="url(#paint0_linear_157_2640)"
              ></path>
              <path
                d="M2050 332.036V-352.5L1117 580.5H1801.54L2050 332.036Z"
                fill="url(#paint1_linear_157_2640)"
              ></path>
              <path
                d="M2055 -128.5L1198 728.5H1259.24L2055 -67.258V-128.5Z"
                fill="url(#paint2_linear_157_2640)"
              ></path>
              <path
                d="M2299 261.015V-244.5L1610 444.5H2115.52L2299 261.015Z"
                fill="url(#paint3_linear_157_2640)"
              ></path>
            </g>
            <g
              id="foreground"
              style={{
                transform: `translate3d(var(--motion-translateX, 0px), var(--motion-translateY, 0px), 0px)`,
                transition:
                  "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <g style={{ mixBlendMode: "multiply" }}>
                <path
                  d="M1839 -53.9093V-226.5L1281 331.5H1453.59L1839 -53.9093Z"
                  fill="url(#paint4_linear_157_2640)"
                ></path>
              </g>
              <g style={{ mixBlendMode: "multiply" }}>
                <path
                  d="M1451 20.0814V-32.5L1281 137.5H1333.58L1451 20.0814Z"
                  fill="url(#paint5_linear_157_2640)"
                ></path>
              </g>
              <g style={{ mixBlendMode: "multiply" }}>
                <path
                  d="M2295 -166.033V-344.5L1718 232.5H1896.47L2295 -166.033Z"
                  fill="url(#paint6_linear_157_2640)"
                ></path>
              </g>
              <g style={{ mixBlendMode: "multiply" }}>
                <path
                  d="M527 51.5023V-111.5L0 415.5H163.002L527 51.5023Z"
                  fill="url(#paint7_linear_157_2640)"
                ></path>
              </g>
              <g style={{ mixBlendMode: "multiply" }}>
                <path
                  d="M357 -25.7791V-149.5L-43 250.5H80.7211L357 -25.7791Z"
                  fill="url(#paint8_linear_157_2640)"
                ></path>
              </g>
              <g style={{ mixBlendMode: "multiply" }}>
                <path
                  d="M423 -23.9791V-94.5L195 133.5H265.521L423 -23.9791Z"
                  fill="url(#paint9_linear_157_2640)"
                ></path>
              </g>
              <g style={{ mixBlendMode: "multiply" }}>
                <path
                  d="M715 60.893V-221.5L-198 691.5H84.3933L715 60.893Z"
                  fill="url(#paint10_linear_157_2640)"
                ></path>
              </g>
              <g style={{ mixBlendMode: "multiply" }}>
                <path
                  d="M329 250.884V88.5L-196 613.5H-33.6161L329 250.884Z"
                  fill="url(#paint11_linear_157_2640)"
                ></path>
              </g>
              <g style={{ mixBlendMode: "multiply" }}>
                <path
                  d="M1282 102.851V-38.5L825 418.5H966.351L1282 102.851Z"
                  fill="url(#paint12_linear_157_2640)"
                ></path>
              </g>
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_157_2640"
              x1="373.328"
              y1="759.626"
              x2="1177.9"
              y2="99.796"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA"></stop>
              <stop offset="1" stopColor="#0D7DFE" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_157_2640"
              x1="513.5"
              y1="786.5"
              x2="1603"
              y2="-107.001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA"></stop>
              <stop offset="1" stopColor="#0D7DFE" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_157_2640"
              x1="878.224"
              y1="1024.63"
              x2="1657.77"
              y2="21.979"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA"></stop>
              <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_157_2640"
              x1="1164.33"
              y1="596.626"
              x2="1968.9"
              y2="-63.204"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA"></stop>
              <stop offset="1" stopColor="#0D7DFE" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint4_linear_157_2640"
              x1="1037.34"
              y1="848.58"
              x2="1671.6"
              y2="98.07"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint5_linear_157_2640"
              x1="1206.77"
              y1="295.033"
              x2="1400"
              y2="66.3833"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint6_linear_157_2640"
              x1="1466.04"
              y1="767.187"
              x2="2121.9"
              y2="-8.87829"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint7_linear_157_2640"
              x1="-230.123"
              y1="903.854"
              x2="368.9"
              y2="195.038"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint8_linear_157_2640"
              x1="-217.667"
              y1="621.167"
              x2="237"
              y2="83.1667"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint9_linear_157_2640"
              x1="95.4401"
              y1="344.78"
              x2="354.6"
              y2="38.12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint10_linear_157_2640"
              x1="-596.676"
              y1="1537.55"
              x2="441.1"
              y2="309.562"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint11_linear_157_2640"
              x1="-425.25"
              y1="1100"
              x2="171.5"
              y2="393.875"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint12_linear_157_2640"
              x1="625.444"
              y1="841.987"
              x2="1144.9"
              y2="227.322"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
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

export default Mission;
