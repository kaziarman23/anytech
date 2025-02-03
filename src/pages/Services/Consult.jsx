import ContactusBtn from "../../components/ContactusBtn";
import ServiceSection from "../../components/ServiceSection";

const Consult = () => {
  const SvgIcons = [
    {
      top: 20,
      left: 0,
      width: 162,
      height: 182,
      viewBox: "0 0 162 182",
      content: (
        <>
          <g filter="url(#filter0_d_6237_25011)">
            <ellipse
              style={{ mixBlendMode: "multiply" }}
              fill="url(#paint0_linear_6237_25011)"
              transform="matrix(0.864942 0.501871 -0.498131 0.867102 60.1797 0)"
              ry="57.3946"
              rx="57.2517"
              cy="57.3946"
              cx="57.2517"
            />
            <ellipse
              fill="url(#paint1_radial_6237_25011)"
              transform="matrix(0.864942 0.501871 -0.498131 0.867102 60.1797 0)"
              ry="57.3946"
              rx="57.2517"
              cy="57.3946"
              cx="57.2517"
            />
            <ellipse
              fill="white"
              ry="41.6207"
              rx="41.4136"
              cy="75.7495"
              cx="80.983"
            />
          </g>
          <path
            fill="url(#paint2_linear_6237_25011)"
            d="M77.7418 79.2263C84.7716 79.2263 90.4834 84.9381 90.4834 91.9679C90.4834 93.3593 89.3118 94.4577 87.9204 94.4577H60.1672C58.7758 94.4577 57.6774 93.3593 57.6774 91.9679C57.6774 84.9381 63.3159 79.2263 70.3458 79.2263H77.7418ZM74.0804 75.7114C68.8812 75.7114 64.7073 71.5374 64.7073 66.3383C64.7073 61.2123 68.8812 56.9651 74.0804 56.9651C79.2063 56.9651 83.4535 61.2123 83.4535 66.3383C83.4535 71.5374 79.2063 75.7114 74.0804 75.7114ZM103.957 66.8509C104.69 67.5099 104.69 68.6083 104.031 69.3406L96.4148 77.5421C96.1219 77.9082 95.6093 78.0547 95.17 78.0547C94.6574 78.0547 94.218 77.9082 93.9251 77.5421L89.8243 73.4414C89.0921 72.7823 89.0921 71.6839 89.8243 71.0248C90.4834 70.2926 91.5818 70.2926 92.2409 71.0248L95.0967 73.8075L101.468 66.9241C102.127 66.1918 103.225 66.1918 103.957 66.8509Z"
          />
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="203.866"
              width="203.084"
              y="-1.56219"
              x="-20.4328"
              id="filter0_d_6237_25011"
            >
              <feFlood result="BackgroundImageFix" floodOpacity="0" />
              <feColorMatrix
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                type="matrix"
                in="SourceAlpha"
              />
              <feOffset dy="21.8706" />
              <feGaussianBlur stdDeviation="11.7164" />
              <feComposite operator="out" in2="hardAlpha" />
              <feColorMatrix
                values="0 0 0 0 0.0862745 0 0 0 0 0.262745 0 0 0 0 0.466667 0 0 0 0.22 0"
                type="matrix"
              />
              <feBlend
                result="effect1_dropShadow_6237_25011"
                in2="BackgroundImageFix"
                mode="multiply"
              />
              <feBlend
                result="shape"
                in2="effect1_dropShadow_6237_25011"
                in="SourceGraphic"
                mode="normal"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="190.472"
              x2="57.2517"
              y1="0"
              x1="57.2517"
              id="paint0_linear_6237_25011"
            >
              <stop stopColor="#F0FAFF" />
              <stop stopOpacity="0" stopColor="#F0FAFF" offset="1" />
            </linearGradient>
            <radialGradient
              gradientTransform="translate(-21.6464 69.0455) rotate(-6.35255) scale(131.785 132.106)"
              gradientUnits="userSpaceOnUse"
              r="1"
              cy="0"
              cx="0"
              id="paint1_radial_6237_25011"
            >
              <stop stopColor="#1F80F0" />
              <stop stopOpacity="0" stopColor="#00E9EA" offset="1" />
            </radialGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="37.8831"
              x2="110.401"
              y1="89.8258"
              x1="88.1401"
              id="paint2_linear_6237_25011"
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
    <div id="consult" className="w-full h-full">
      <ServiceSection
        title={"Taking the First Step"}
        heading={"Consult"}
        description={
          "Taking the leap towards digital transformation with the ambition of delivering augmented value in financial services can be daunting."
        }
        secondDescription={
          "Tap on the vast experience and deep knowledge of our experts. Our breadth of consulting expertise spans from applying the latest financial technological innovations to implementing risk-control strategies."
        }
        image={
          "https://cdn.sanity.io/images/6jywt20u/production/75de4e417de603ce210bea0f109e45a9e37d9a23-1206x816.png?w=640&auto=format"
        }
        imageSize={"w-full h-1/2"}
        svgs={SvgIcons}
        TopBackgroundImage={
          "https://anytxn.com/backgrounds/home/futureOfFinance/background.svg"
        }
      />
      <div className="w-4/5 h-52  mx-auto flex justify-between items-center relative">
        <div className="w-2/3 h-full flex justify-center p-5 items-start flex-col gap-5 z-10">
          <h1 className="text-white text-5xl font-bold">
            Start your transformation
          </h1>
          <p className="text-white">
            We are ready to serve as strategic partners to provide your
            organisation with the support you need.
          </p>
        </div>
        <div className="w-1/3 h-full flex justify-center items-center z-10">
          <ContactusBtn data={"Talk To Us"} />
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

export default Consult;
