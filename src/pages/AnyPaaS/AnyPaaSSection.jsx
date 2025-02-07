import { MouseParallax } from "react-just-parallax";

const AnyPaaSSection = () => {
  return (
    <div
      className="w-full h-screen relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to right, #00E9EA 26.04%, #1F80F0 52.08%, #014AB8 100%)",
        clipPath: "polygon(0 0, 100% 0%, 100% 60%, 0 93%)",
      }}
    >
      <div
        className="w-full h-full flex justify-start items-center relative"
        style={{ clipPath: "polygon(0 0, 100% 0%, 100% 52%, 0 93%)" }}
      >
        {/* Content Part */}
        <div className="w-4/5 h-full mx-auto flex items-center z-20">
          <div className="w-4/5 space-y-2 lg:space-y-5">
            <p className="text-blue-500 font-extrabold  tracking-[4px]">
              our solutions
            </p>
            <h1 className="text-base text-blue-500 font-bold sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl">
              High-velocity
              <br />
              payment processing
            </h1>
            <figure>
              <img
                src="https://cdn.sanity.io/images/6jywt20u/production/fee2ed2ac2799cd94b607584e398a76499cb9a59-234x43.svg?w=234&auto=format"
                alt="AnyPaaS hero section image"
              />
            </figure>
          </div>
        </div>
        {/* SVG Part*/}
        <MouseParallax strength={0.1} isAbsolutelyPositioned>
          <svg
            style={{ background: "transparent" }}
            className="absolute w-[120%] h-[120%] top-[-10%] left-[-10%]"
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 1920 590"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_6494_21404"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1921"
              height="640"
            >
              <path
                d="M0.5 0H1920.5L1920 358.5L0 640L0.5 0Z"
                fill="url(#paint0_radial_6494_21404)"
              ></path>
            </mask>
            <g id="hero-background-desktop">
              <path
                d="M0 0H1920V358.5L0 640L0 0Z"
                fill="url(#paint1_radial_5944_24825)"
              ></path>
              <g
                id="background"
                style={{
                  transform: "translate3d(0.871157%, 0.564516%, 0px)",
                  transition:
                    "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  "--motion-translateX": "0px",
                  "--motion-translateY": "0px",
                }}
              >
                <path
                  d="M1263 590.515V85L574 774H1079.52L1263 590.515Z"
                  fill="url(#paint4_linear_5944_24825)"
                ></path>
                <path
                  d="M950 671.515V166L261 855H766.516L950 671.515Z"
                  fill="url(#paint5_linear_5944_24825)"
                ></path>
                <path
                  d="M1765 -128.5L908 728.5H969.242L1765 -67.258V-128.5Z"
                  fill="url(#paint6_linear_5944_24825)"
                ></path>
                <path
                  d="M1802 -391L1259 153H1297.8L1802 -352.125V-391Z"
                  fill="url(#paint7_linear_5944_24825)"
                ></path>
                <path
                  d="M1940 -75L1200 665H1252.88L1940 -22.1189V-75Z"
                  fill="url(#paint8_linear_5944_24825)"
                ></path>
                <path
                  d="M545 265L42 768H77.9447L545 300.945V265Z"
                  fill="url(#paint9_linear_5944_24825)"
                ></path>
                <path
                  d="M669 -128.5L-188 728.5H-126.758L669 -67.258V-128.5Z"
                  fill="url(#paint10_linear_5944_24825)"
                ></path>
                <path
                  d="M2226 261.015V-244.5L1537 444.5H2042.52L2226 261.015Z"
                  fill="url(#paint11_linear_5944_24825)"
                ></path>
              </g>
              <g
                id="foreground"
                style={{
                  transform: "translate3d(0.871157%, 0.564516%, 0px)",
                  transition:
                    "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  "--motion-translateX": "0px",
                  "--motion-translateY": "0px",
                }}
              >
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M2067 -263.216V-532L1198 337H1466.78L2067 -263.216Z"
                    fill="url(#paint2_linear_5944_24825)"
                  ></path>
                </g>
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M912 -146.033V-524L-310 698H67.9678L912 -146.033Z"
                    fill="url(#paint3_linear_5944_24825)"
                  ></path>
                </g>
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M2020 -66.0535V-174L1671 175H1778.95L2020 -66.0535Z"
                    fill="url(#paint12_linear_5944_24825)"
                  ></path>
                </g>
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M1788 -10.0535V-118L1439 231H1546.95L1788 -10.0535Z"
                    fill="url(#paint13_linear_5944_24825)"
                  ></path>
                </g>
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M447 11.2581V-127L0 320H138.258L447 11.2581Z"
                    fill="url(#paint14_linear_5944_24825)"
                  ></path>
                </g>
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M2175 -109.533V-288L1598 289H1776.47L2175 -109.533Z"
                    fill="url(#paint15_linear_5944_24825)"
                  ></path>
                </g>
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M2339 27.4675V-151L1762 426H1940.47L2339 27.4675Z"
                    fill="url(#paint16_linear_5944_24825)"
                  ></path>
                </g>
              </g>
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_5944_24825"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(1354.5 700) rotate(-135) scale(1123.59 1123.59)"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="0.534562" stopColor="#005BC4"></stop>
                <stop offset="1" stopColor="#004594"></stop>
              </radialGradient>
              <radialGradient
                id="paint1_radial_5944_24825"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(1566.5 1797) rotate(-103.625) scale(1874.24 1874.24)"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="1" stopColor="white"></stop>
              </radialGradient>
              <linearGradient
                id="paint2_linear_5944_24825"
                x1="909.163"
                y1="870.606"
                x2="1702.97"
                y2="76.7981"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="1" stopColor="#00E9EA" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear_5944_24825"
                x1="-716.166"
                y1="1448.36"
                x2="400.097"
                y2="332.1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="1" stopColor="#00E9EA" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint4_linear_5944_24825"
                x1="344.992"
                y1="1197.08"
                x2="1263"
                y2="294"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1F80F0"></stop>
                <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint5_linear_5944_24825"
                x1="31.9918"
                y1="1278.08"
                x2="950"
                y2="375"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1F80F0"></stop>
                <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint6_linear_5944_24825"
                x1="1138.5"
                y1="728"
                x2="1543.5"
                y2="318.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1F80F0"></stop>
                <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint7_linear_5944_24825"
                x1="1423.33"
                y1="-26.6407"
                x2="1601.61"
                y2="-255.523"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="1" stopColor="#00E9EA" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint8_linear_5944_24825"
                x1="1423.95"
                y1="420.636"
                x2="1666.35"
                y2="108.855"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="1" stopColor="#00E9EA" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint9_linear_5944_24825"
                x1="177.288"
                y1="767.707"
                x2="414.995"
                y2="527.358"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1F80F0"></stop>
                <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint10_linear_5944_24825"
                x1="-95.0003"
                y1="619.5"
                x2="234.007"
                y2="120.312"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="1" stopColor="#00E9EA" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint11_linear_5944_24825"
                x1="1307.99"
                y1="867.577"
                x2="1937.37"
                y2="238.195"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="1" stopColor="#00E9EA" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint12_linear_5944_24825"
                x1="1739.5"
                y1="210.5"
                x2="1928.5"
                y2="14.4999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="1" stopColor="#00E9EA" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint13_linear_5944_24825"
                x1="1323"
                y1="445.302"
                x2="1641.8"
                y2="126.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="1" stopColor="#00E9EA" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint14_linear_5944_24825"
                x1="-148.573"
                y1="594.478"
                x2="259.749"
                y2="186.156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="1" stopColor="#00E9EA" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint15_linear_5944_24825"
                x1="1406.22"
                y1="643.304"
                x2="1933.29"
                y2="116.231"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="1" stopColor="#00E9EA" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint16_linear_5944_24825"
                x1="1510.04"
                y1="960.687"
                x2="2165.9"
                y2="184.622"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1F80F0"></stop>
                <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </MouseParallax>
      </div>
    </div>
  );
};

export default AnyPaaSSection;
