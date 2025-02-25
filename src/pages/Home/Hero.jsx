import HeroBG from "../../assets/HeroBG.png";
import ContactusBtn from "../../components/ContactusBtn";
import { MouseParallax } from "react-just-parallax";

const Hero = () => {
  return (
    <div className="w-full h-full relative lg:h-screen overflow-hidden">
      {/* Large Screen Background Section */}
      <div className="absolute hidden inset-0 w-full h-full lg:block">
        <div
          style={{
            backgroundImage: `url(${HeroBG})`,
            backgroundSize: "contain",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            clipPath: "polygon(0 0, 100% 0%, 100% 80%, 0% 95%)",
          }}
          className="w-full h-full relative overflow-hidden z-10"
        >
          {/* Overlay ClipPath */}
          <div
            style={{
              clipPath: "polygon(0 0, 75% 0, 45% 100%, 0% 100%)",
            }}
            className="absolute inset-0 bg-blue-700"
          ></div>

          {/* SVG Container */}
          <MouseParallax strength={0.05} isAbsolutelyPositioned>
            <div className="absolute inset-0">
              <svg
                className="absolute w-[120%] h-[120%] top-[-10%] left-[-10%]"
                width="1920"
                height="929"
                viewBox="0 0 1920 929"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="hero-background-desktop">
                  <g
                    id="background"
                    style={{
                      transform: "translate3d(-0.668009%, -0.322581%, 0px)",
                      transition:
                        "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      "--motion-translateX": "0px",
                      "--motion-translateY": "0px",
                    }}
                  >
                    <g id="Vector" style={{ mixBlendMode: "multiply" }}>
                      <path
                        d="M668 23.4954V-382L-643 929H-237.504L668 23.4954Z"
                        fill="url(#paint0_linear_132_3263)"
                      ></path>
                    </g>
                    <g id="Vector_2" style={{ mixBlendMode: "multiply" }}>
                      <path
                        d="M1195 -226.405V-592L13 590H378.596L1195 -226.405Z"
                        fill="url(#paint1_linear_132_3263)"
                      ></path>
                    </g>
                    <g id="Vector_3" style={{ mixBlendMode: "multiply" }}>
                      <path
                        d="M1011 -629.405V-995L-171 187H194.596L1011 -629.405Z"
                        fill="url(#paint2_linear_132_3263)"
                      ></path>
                    </g>
                    <g id="Vector_4" style={{ mixBlendMode: "multiply" }}>
                      <path
                        d="M313 -161.212V-357L-320 276H-124.211L313 -161.212Z"
                        fill="url(#paint3_linear_132_3263)"
                      ></path>
                    </g>
                    <g id="Vector_5">
                      <path
                        d="M396.6 -357L-76 115.6H-42.2001L396.6 -323.2V-357Z"
                        fill="url(#paint4_linear_132_3263)"
                      ></path>
                      <path
                        d="M396.6 -357L-76 115.6H-42.2001L396.6 -323.2V-357Z"
                        fill="url(#paint5_linear_132_3263)"
                      ></path>
                    </g>
                    <g id="Vector_6" filter="url(#filter0_f_132_3263)">
                      <path
                        d="M52 428.656V347L-212 611H-130.344L52 428.656Z"
                        fill="url(#paint6_linear_132_3263)"
                      ></path>
                    </g>
                    <g id="Vector_7" filter="url(#filter1_f_132_3263)">
                      <path
                        d="M146 50L-189 385H-165.061L146 73.9394V50Z"
                        fill="url(#paint7_linear_132_3263)"
                      ></path>
                    </g>
                    <g id="Vector_8" filter="url(#filter2_f_132_3263)">
                      <path
                        d="M345.1 -154L124 67.1H139.8L345.1 -138.2V-154Z"
                        fill="url(#paint8_linear_132_3263)"
                      ></path>
                    </g>
                    <g id="Vector_9" filter="url(#filter3_f_132_3263)">
                      <path
                        d="M140 131H313L140 304V131Z"
                        fill="url(#paint9_linear_132_3263)"
                      ></path>
                      <path
                        d="M140 131H313L140 304V131Z"
                        fill="url(#paint10_linear_132_3263)"
                      ></path>
                    </g>
                    <g id="Vector_10" style={{ mixBlendMode: "multiply" }}>
                      <path
                        d="M1315 316.788V121L682 754H877.789L1315 316.788Z"
                        fill="url(#paint11_linear_132_3263)"
                      ></path>
                    </g>
                    <g id="Vector_11" style={{ mixBlendMode: "multiply" }}>
                      <path
                        d="M1220 -28.2093V-121L920 179H1012.79L1220 -28.2093Z"
                        fill="url(#paint12_linear_132_3263)"
                      ></path>
                    </g>
                    <g id="Vector_12" style={{ mixBlendMode: "multiply" }}>
                      <path
                        d="M1968 388.791V296L1668 596H1760.79L1968 388.791Z"
                        fill="url(#paint13_linear_132_3263)"
                      ></path>
                    </g>
                  </g>
                  <g
                    id="foreground"
                    style={{
                      transform: "translate3d(-0.668009%, -0.322581%, 0px)",
                      transition:
                        "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      "--motion-translateX": "0px",
                      "--motion-translateY": "0px",
                    }}
                  >
                    <path
                      id="Vector_13"
                      d="M1563 30.6791V-85L1189 289H1304.68L1563 30.6791Z"
                      fill="url(#paint14_linear_132_3263)"
                    ></path>
                    <g id="Vector_14" filter="url(#filter4_f_132_3263)">
                      <path
                        d="M1909 -173.321V-289L1535 85H1650.68L1909 -173.321Z"
                        fill="url(#paint15_linear_132_3263)"
                      ></path>
                    </g>
                    <g id="Vector_15" filter="url(#filter5_f_132_3263)">
                      <path
                        d="M761.1 577L540 798.1H555.8L761.1 592.8V577Z"
                        fill="url(#paint16_linear_132_3263)"
                      ></path>
                    </g>
                    <path
                      id="Vector_16"
                      d="M2042 259.679V144L1668 518H1783.68L2042 259.679Z"
                      fill="url(#paint17_linear_132_3263)"
                    ></path>
                    <g id="Vector_17" filter="url(#filter6_f_132_3263)">
                      <path
                        d="M1729.1 -57L1508 164.1H1523.8L1729.1 -41.2V-57Z"
                        fill="url(#paint18_linear_132_3263)"
                      ></path>
                    </g>
                    <g id="Vector_18" filter="url(#filter7_f_132_3263)">
                      <path
                        d="M1721 49H1774L1721 102V49Z"
                        fill="url(#paint19_linear_132_3263)"
                      ></path>
                    </g>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_f_132_3263"
                    x="-263"
                    y="296"
                    width="366"
                    height="366"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="25.5"
                      result="effect1_foregroundBlur_132_3263"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="filter1_f_132_3263"
                    x="-210"
                    y="29"
                    width="377"
                    height="377"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="10.5"
                      result="effect1_foregroundBlur_132_3263"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="filter2_f_132_3263"
                    x="112"
                    y="-166"
                    width="245.1"
                    height="245.1"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="6"
                      result="effect1_foregroundBlur_132_3263"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="filter3_f_132_3263"
                    x="107"
                    y="98"
                    width="239"
                    height="239"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="16.5"
                      result="effect1_foregroundBlur_132_3263"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="filter4_f_132_3263"
                    x="1504"
                    y="-320"
                    width="436"
                    height="436"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="15.5"
                      result="effect1_foregroundBlur_132_3263"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="filter5_f_132_3263"
                    x="519"
                    y="556"
                    width="263.1"
                    height="263.1"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="10.5"
                      result="effect1_foregroundBlur_132_3263"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="filter6_f_132_3263"
                    x="1487"
                    y="-78"
                    width="263.1"
                    height="263.1"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="10.5"
                      result="effect1_foregroundBlur_132_3263"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="filter7_f_132_3263"
                    x="1703"
                    y="31"
                    width="89"
                    height="89"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="9"
                      result="effect1_foregroundBlur_132_3263"
                    ></feGaussianBlur>
                  </filter>
                  <linearGradient
                    id="paint0_linear_132_3263"
                    x1="-788.962"
                    y1="1499.58"
                    x2="691.884"
                    y2="18.7308"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0"></stop>
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_132_3263"
                    x1="945.5"
                    y1="1007"
                    x2="375"
                    y2="333.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0"></stop>
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_132_3263"
                    x1="761.5"
                    y1="604"
                    x2="191"
                    y2="-69.4999"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0"></stop>
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_132_3263"
                    x1="-596.41"
                    y1="862.58"
                    x2="123.1"
                    y2="11.195"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0"></stop>
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_132_3263"
                    x1="-233.5"
                    y1="188.5"
                    x2="203.5"
                    y2="-153"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white"></stop>
                    <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_132_3263"
                    x1="-161.927"
                    y1="154.141"
                    x2="385.227"
                    y2="-312.773"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA"></stop>
                    <stop
                      offset="1"
                      stopColor="#1F80F0"
                      stopOpacity="0.49"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_132_3263"
                    x1="-260"
                    y1="632.529"
                    x2="45.6469"
                    y2="371.706"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA"></stop>
                    <stop
                      offset="1"
                      stopColor="#1F80F0"
                      stopOpacity="0.49"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_132_3263"
                    x1="-179.152"
                    y1="375.758"
                    x2="137.938"
                    y2="81.3501"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#40FEFF"></stop>
                    <stop
                      offset="1"
                      stopColor="#1F80F0"
                      stopOpacity="0.49"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear_132_3263"
                    x1="83.7999"
                    y1="85.1308"
                    x2="339.779"
                    y2="-133.309"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA"></stop>
                    <stop
                      offset="1"
                      stopColor="#1F80F0"
                      stopOpacity="0.49"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint9_linear_132_3263"
                    x1="140"
                    y1="217.15"
                    x2="313"
                    y2="217.15"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white"></stop>
                    <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint10_linear_132_3263"
                    x1="35.9711"
                    y1="331.992"
                    x2="280.76"
                    y2="76.952"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA"></stop>
                    <stop offset="1" stopColor="#1F80F0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint11_linear_132_3263"
                    x1="405.59"
                    y1="1340.58"
                    x2="1125.1"
                    y2="489.195"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0"></stop>
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint12_linear_132_3263"
                    x1="789"
                    y1="457"
                    x2="1130"
                    y2="53.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0"></stop>
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint13_linear_132_3263"
                    x1="1537"
                    y1="874"
                    x2="1878"
                    y2="470.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0"></stop>
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint14_linear_132_3263"
                    x1="1294"
                    y1="306.5"
                    x2="1649.5"
                    y2="-40.0002"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0"></stop>
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint15_linear_132_3263"
                    x1="1467"
                    y1="115.5"
                    x2="1900"
                    y2="-254"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA"></stop>
                    <stop
                      offset="1"
                      stopColor="#1F80F0"
                      stopOpacity="0.49"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint16_linear_132_3263"
                    x1="407.047"
                    y1="833.875"
                    x2="719.896"
                    y2="507.925"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA"></stop>
                    <stop offset="1" stopColor="#1F80F0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint17_linear_132_3263"
                    x1="1600"
                    y1="548.5"
                    x2="2033"
                    y2="179"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA"></stop>
                    <stop
                      offset="1"
                      stopColor="#1F80F0"
                      stopOpacity="0.49"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint18_linear_132_3263"
                    x1="1467.8"
                    y1="182.131"
                    x2="1723.78"
                    y2="-36.3089"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA"></stop>
                    <stop
                      offset="1"
                      stopColor="#1F80F0"
                      stopOpacity="0.49"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint19_linear_132_3263"
                    x1="1711.36"
                    y1="106.322"
                    x2="1772.72"
                    y2="53.9599"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA"></stop>
                    <stop
                      offset="1"
                      stopColor="#1F80F0"
                      stopOpacity="0.49"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </MouseParallax>
        </div>
      </div>

      {/* Mobile Screen Background Section */}
      <div className="w-full h-full overflow-hidden flex justify-center items-center flex-col lg:hidden">
        <div
          style={{
            clipPath: "polygon(0% 0%, 0% 100%, 100% 90%, 100% 0%)",
          }}
          className="bg-blue-700 w-full h-screen relative flex justify-between items-end flex-col sm:h-full"
        >
          {/* SVG Containers */}
          <MouseParallax strength={0.05} isAbsolutelyPositioned>
            <div className="absolute w-full h-full inset-0 sm:hidden">
              <svg
                className="absolute w-[120%] h-[120%] top-[-10%] left-[-10%]"
                xmlns="http://www.w3.org/2000/svg"
                width="390"
                height="641"
                viewBox="0 0 390 641"
                fill="none"
              >
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M361 -192.212V-388L-272 245H-76.2114L361 -192.212Z"
                    fill="url(#paint0_linear_17_106)"
                  />
                </g>
                <g filter="url(#filter0_f_17_106)">
                  <path
                    d="M-45 140H128L-45 313V140Z"
                    fill="url(#paint1_linear_17_106)"
                  />
                  <path
                    d="M-45 140H128L-45 313V140Z"
                    fill="url(#paint2_linear_17_106)"
                  />
                </g>
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M949 -445.405V-811L-233 371H132.596L949 -445.405Z"
                    fill="url(#paint3_linear_17_106)"
                  />
                </g>
                <g filter="url(#filter1_f_17_106)">
                  <path
                    d="M658 -95.3209V-211L284 163H399.679L658 -95.3209Z"
                    fill="url(#paint4_linear_17_106)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_17_106"
                    x="-78"
                    y="107"
                    width="239"
                    height="239"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="16.5"
                      result="effect1_foregroundBlur_17_106"
                    />
                  </filter>
                  <filter
                    id="filter1_f_17_106"
                    x="253"
                    y="-242"
                    width="436"
                    height="436"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="15.5"
                      result="effect1_foregroundBlur_17_106"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_17_106"
                    x1="-548.41"
                    y1="831.58"
                    x2="171.1"
                    y2="-19.805"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0" />
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_17_106"
                    x1="-45"
                    y1="226.15"
                    x2="128"
                    y2="226.15"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#4B4B4B" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_17_106"
                    x1="-149.029"
                    y1="340.992"
                    x2="95.7598"
                    y2="85.952"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_17_106"
                    x1="699.5"
                    y1="788"
                    x2="129"
                    y2="114.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0" />
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_17_106"
                    x1="216"
                    y1="193.5"
                    x2="649"
                    y2="-176"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute w-full h-full left-0 sm:bottom-96 md:bottom-80 lg:hidden">
              <svg
                className="absolute w-[120%] h-[120%] top-[-10%] left-[-10%]"
                xmlns="http://www.w3.org/2000/svg"
                width="390"
                height="571"
                viewBox="0 0 390 571"
                fill="none"
              >
                <path
                  d="M188 354.656V273L-76 537H5.6559L188 354.656Z"
                  fill="url(#paint0_linear_17_104)"
                />
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M512 349.398V273L265 520H341.398L512 349.398Z"
                    fill="url(#paint1_linear_17_104)"
                  />
                </g>
                <path
                  d="M456 421.695V362L265 555H324.077L456 421.695Z"
                  fill="url(#paint2_linear_17_104)"
                />
                <g filter="url(#filter0_f_17_104)">
                  <path
                    d="M669 -94.3209V-210L295 164H410.679L669 -94.3209Z"
                    fill="url(#paint3_linear_17_104)"
                  />
                </g>
                <g filter="url(#filter1_f_17_104)">
                  <path
                    d="M405.1 328L184 549.1H199.8L405.1 343.8V328Z"
                    fill="url(#paint4_linear_17_104)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_17_104"
                    x="264"
                    y="-241"
                    width="436"
                    height="436"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="15.5"
                      result="effect1_foregroundBlur_17_104"
                    />
                  </filter>
                  <filter
                    id="filter1_f_17_104"
                    x="163"
                    y="307"
                    width="263.1"
                    height="263.1"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="10.5"
                      result="effect1_foregroundBlur_17_104"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_17_104"
                    x1="-124"
                    y1="558.529"
                    x2="181.647"
                    y2="297.706"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_17_104"
                    x1="157.143"
                    y1="748.887"
                    x2="437.9"
                    y2="416.672"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0" />
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_17_104"
                    x1="230.273"
                    y1="570.739"
                    x2="453.342"
                    y2="382.356"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_17_104"
                    x1="51.0474"
                    y1="584.875"
                    x2="363.896"
                    y2="258.925"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </MouseParallax>

          {/* mobile screen context part */}
          <div className="flex flex-col items-start justify-center h-full w-4/5 mx-auto space-y-5 z-20 relative sm:h-screen lg:hidden">
            <h1 className="text-lg text-white font-bold leading-tight sm:text-5xl">
              Embrace the <br /> future of finance
            </h1>
            <p className="text-white text-sm sm:text-lg md:text-xl">
              Enabling financial institutions to create unparalleled <br />{" "}
              customer experiences
            </p>
            <ContactusBtn data={"Reach Out to Us"} />
          </div>

          {/* background image part */}
          <figure
            className=""
            style={{ clipPath: "polygon(0 24%, 100% 0%, 100% 78%, 0 100%)" }}
          >
            <img src={HeroBG} alt="Hero Section image" />
          </figure>
        </div>
      </div>

      {/* Large Screen SVG Container */}
      <MouseParallax strength={0.05} isAbsolutelyPositioned>
        <div className="absolute inset-0 w-full h-full hidden xl:block">
          <svg
            className="absolute w-[120%] h-[120%] top-[-10%] left-[-10%]"
            width="1920"
            height="929"
            viewBox="0 0 1920 929"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="hero-background-desktop">
              <g
                id="background"
                style={{
                  transform: "translate3d(-0.668009%, -0.322581%, 0px)",
                  transition:
                    "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  "--motion-translateX": "0px",
                  "--motion-translateY": "0px",
                }}
              >
                <g id="Vector" style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M668 23.4954V-382L-643 929H-237.504L668 23.4954Z"
                    fill="url(#paint0_linear_132_3263)"
                  ></path>
                </g>
                <g id="Vector_2" style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M1195 -226.405V-592L13 590H378.596L1195 -226.405Z"
                    fill="url(#paint1_linear_132_3263)"
                  ></path>
                </g>
                <g id="Vector_3" style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M1011 -629.405V-995L-171 187H194.596L1011 -629.405Z"
                    fill="url(#paint2_linear_132_3263)"
                  ></path>
                </g>
                <g id="Vector_4" style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M313 -161.212V-357L-320 276H-124.211L313 -161.212Z"
                    fill="url(#paint3_linear_132_3263)"
                  ></path>
                </g>
                <g id="Vector_5">
                  <path
                    d="M396.6 -357L-76 115.6H-42.2001L396.6 -323.2V-357Z"
                    fill="url(#paint4_linear_132_3263)"
                  ></path>
                  <path
                    d="M396.6 -357L-76 115.6H-42.2001L396.6 -323.2V-357Z"
                    fill="url(#paint5_linear_132_3263)"
                  ></path>
                </g>
                <g id="Vector_6" filter="url(#filter0_f_132_3263)">
                  <path
                    d="M52 428.656V347L-212 611H-130.344L52 428.656Z"
                    fill="url(#paint6_linear_132_3263)"
                  ></path>
                </g>
                <g id="Vector_7" filter="url(#filter1_f_132_3263)">
                  <path
                    d="M146 50L-189 385H-165.061L146 73.9394V50Z"
                    fill="url(#paint7_linear_132_3263)"
                  ></path>
                </g>
                <g id="Vector_8" filter="url(#filter2_f_132_3263)">
                  <path
                    d="M345.1 -154L124 67.1H139.8L345.1 -138.2V-154Z"
                    fill="url(#paint8_linear_132_3263)"
                  ></path>
                </g>
                <g id="Vector_9" filter="url(#filter3_f_132_3263)">
                  <path
                    d="M140 131H313L140 304V131Z"
                    fill="url(#paint9_linear_132_3263)"
                  ></path>
                  <path
                    d="M140 131H313L140 304V131Z"
                    fill="url(#paint10_linear_132_3263)"
                  ></path>
                </g>
                <g id="Vector_10" style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M1315 316.788V121L682 754H877.789L1315 316.788Z"
                    fill="url(#paint11_linear_132_3263)"
                  ></path>
                </g>
                <g id="Vector_11" style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M1220 -28.2093V-121L920 179H1012.79L1220 -28.2093Z"
                    fill="url(#paint12_linear_132_3263)"
                  ></path>
                </g>
                <g id="Vector_12" style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M1968 388.791V296L1668 596H1760.79L1968 388.791Z"
                    fill="url(#paint13_linear_132_3263)"
                  ></path>
                </g>
              </g>
              <g
                id="foreground"
                style={{
                  transform: "translate3d(-0.668009%, -0.322581%, 0px)",
                  transition:
                    "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  "--motion-translateX": "0px",
                  "--motion-translateY": "0px",
                }}
              >
                <path
                  id="Vector_13"
                  d="M1563 30.6791V-85L1189 289H1304.68L1563 30.6791Z"
                  fill="url(#paint14_linear_132_3263)"
                ></path>
                <g id="Vector_14" filter="url(#filter4_f_132_3263)">
                  <path
                    d="M1909 -173.321V-289L1535 85H1650.68L1909 -173.321Z"
                    fill="url(#paint15_linear_132_3263)"
                  ></path>
                </g>
                <g id="Vector_15" filter="url(#filter5_f_132_3263)">
                  <path
                    d="M761.1 577L540 798.1H555.8L761.1 592.8V577Z"
                    fill="url(#paint16_linear_132_3263)"
                  ></path>
                </g>
                <path
                  id="Vector_16"
                  d="M2042 259.679V144L1668 518H1783.68L2042 259.679Z"
                  fill="url(#paint17_linear_132_3263)"
                ></path>
                <g id="Vector_17" filter="url(#filter6_f_132_3263)">
                  <path
                    d="M1729.1 -57L1508 164.1H1523.8L1729.1 -41.2V-57Z"
                    fill="url(#paint18_linear_132_3263)"
                  ></path>
                </g>
                <g id="Vector_18" filter="url(#filter7_f_132_3263)">
                  <path
                    d="M1721 49H1774L1721 102V49Z"
                    fill="url(#paint19_linear_132_3263)"
                  ></path>
                </g>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_132_3263"
                x="-263"
                y="296"
                width="366"
                height="366"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="25.5"
                  result="effect1_foregroundBlur_132_3263"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter1_f_132_3263"
                x="-210"
                y="29"
                width="377"
                height="377"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_132_3263"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter2_f_132_3263"
                x="112"
                y="-166"
                width="245.1"
                height="245.1"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="6"
                  result="effect1_foregroundBlur_132_3263"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter3_f_132_3263"
                x="107"
                y="98"
                width="239"
                height="239"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="16.5"
                  result="effect1_foregroundBlur_132_3263"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter4_f_132_3263"
                x="1504"
                y="-320"
                width="436"
                height="436"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="15.5"
                  result="effect1_foregroundBlur_132_3263"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter5_f_132_3263"
                x="519"
                y="556"
                width="263.1"
                height="263.1"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_132_3263"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter6_f_132_3263"
                x="1487"
                y="-78"
                width="263.1"
                height="263.1"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_132_3263"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter7_f_132_3263"
                x="1703"
                y="31"
                width="89"
                height="89"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="9"
                  result="effect1_foregroundBlur_132_3263"
                ></feGaussianBlur>
              </filter>
              <linearGradient
                id="paint0_linear_132_3263"
                x1="-788.962"
                y1="1499.58"
                x2="691.884"
                y2="18.7308"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1F80F0"></stop>
                <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_132_3263"
                x1="945.5"
                y1="1007"
                x2="375"
                y2="333.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1F80F0"></stop>
                <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_132_3263"
                x1="761.5"
                y1="604"
                x2="191"
                y2="-69.4999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1F80F0"></stop>
                <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear_132_3263"
                x1="-596.41"
                y1="862.58"
                x2="123.1"
                y2="11.195"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1F80F0"></stop>
                <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint4_linear_132_3263"
                x1="-233.5"
                y1="188.5"
                x2="203.5"
                y2="-153"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white"></stop>
                <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint5_linear_132_3263"
                x1="-161.927"
                y1="154.141"
                x2="385.227"
                y2="-312.773"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
              </linearGradient>
              <linearGradient
                id="paint6_linear_132_3263"
                x1="-260"
                y1="632.529"
                x2="45.6469"
                y2="371.706"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
              </linearGradient>
              <linearGradient
                id="paint7_linear_132_3263"
                x1="-179.152"
                y1="375.758"
                x2="137.938"
                y2="81.3501"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#40FEFF"></stop>
                <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
              </linearGradient>
              <linearGradient
                id="paint8_linear_132_3263"
                x1="83.7999"
                y1="85.1308"
                x2="339.779"
                y2="-133.309"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
              </linearGradient>
              <linearGradient
                id="paint9_linear_132_3263"
                x1="140"
                y1="217.15"
                x2="313"
                y2="217.15"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white"></stop>
                <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint10_linear_132_3263"
                x1="35.9711"
                y1="331.992"
                x2="280.76"
                y2="76.952"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="1" stopColor="#1F80F0"></stop>
              </linearGradient>
              <linearGradient
                id="paint11_linear_132_3263"
                x1="405.59"
                y1="1340.58"
                x2="1125.1"
                y2="489.195"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1F80F0"></stop>
                <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint12_linear_132_3263"
                x1="789"
                y1="457"
                x2="1130"
                y2="53.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1F80F0"></stop>
                <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint13_linear_132_3263"
                x1="1537"
                y1="874"
                x2="1878"
                y2="470.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1F80F0"></stop>
                <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint14_linear_132_3263"
                x1="1294"
                y1="306.5"
                x2="1649.5"
                y2="-40.0002"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1F80F0"></stop>
                <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint15_linear_132_3263"
                x1="1467"
                y1="115.5"
                x2="1900"
                y2="-254"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
              </linearGradient>
              <linearGradient
                id="paint16_linear_132_3263"
                x1="407.047"
                y1="833.875"
                x2="719.896"
                y2="507.925"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="1" stopColor="#1F80F0"></stop>
              </linearGradient>
              <linearGradient
                id="paint17_linear_132_3263"
                x1="1600"
                y1="548.5"
                x2="2033"
                y2="179"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
              </linearGradient>
              <linearGradient
                id="paint18_linear_132_3263"
                x1="1467.8"
                y1="182.131"
                x2="1723.78"
                y2="-36.3089"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
              </linearGradient>
              <linearGradient
                id="paint19_linear_132_3263"
                x1="1711.36"
                y1="106.322"
                x2="1772.72"
                y2="53.9599"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E9EA"></stop>
                <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </MouseParallax>

      {/*  Content Part */}
      <div className="relative hidden z-20 flex-col items-start justify-center h-full w-4/5 mx-auto space-y-5 lg:flex">
        <h1 className="text-5xl text-white font-bold leading-tight">
          Embrace the <br /> future of finance
        </h1>
        <p className="text-white text-lg">
          Enabling financial institutions to create unparalleled <br /> customer
          experiences
        </p>
        <ContactusBtn data={"Reach Out to Us"} />
      </div>
    </div>
  );
};

export default Hero;
