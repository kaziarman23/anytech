import ContactusBtn from "../../components/ContactusBtn";
import Logo from "../../assets/Logo.png";
import { MouseParallax } from "react-just-parallax";
const Footer = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center flex-col overflow-hidden">
        {/* Clipped Background */}
        <div
          className="w-full h-screen bg-[#025ec8] relative flex justify-center items-end"
          style={{
            clipPath: "polygon(0% 10%, 100% 64%, 100% 100%, 0% 100%)",
          }}
        >
          {/* Content Section */}
          <div className="w-4/5 h-1/2 space-y-6 text-white relative z-10 text-center md:text-left md:w-3/5 lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold">
              Legacy no longer
            </h1>
            <p className="text-base md:text-lg">
              Talk to us to find out how we can transform your organisation for
              the future
            </p>
            <div className="flex justify-center md:justify-start">
              <ContactusBtn />
            </div>
          </div>

          {/* SVGs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <MouseParallax strength={0.1}>
              <svg
                className="absolute w-[120%] h-[120%] top-[-10%] left-[-10%]"
                width="1920"
                height="693"
                viewBox="0 0 1920 693"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M828 -327.405V-693L-354 489H11.5957L828 -327.405Z"
                    fill="url(#paint0_linear_26_269)"
                  />
                </g>
                <g filter="url(#filter0_f_26_269)">
                  <path
                    d="M1350 445H1469L1350 564V445Z"
                    fill="url(#paint1_linear_26_269)"
                  />
                  <path
                    d="M1350 445H1469L1350 564V445Z"
                    fill="url(#paint2_linear_26_269)"
                  />
                </g>
                <path
                  d="M2028 148.679V33L1654 407H1769.68L2028 148.679Z"
                  fill="url(#paint3_linear_26_269)"
                />
                <g filter="url(#filter1_f_26_269)">
                  <path
                    d="M1940 78.9349V-12L1646 282H1736.93L1940 78.9349Z"
                    fill="url(#paint4_linear_26_269)"
                  />
                </g>
                <g filter="url(#filter2_f_26_269)">
                  <path
                    d="M546 -179L167 200H194.084L546 -151.916V-179Z"
                    fill="url(#paint5_linear_26_269)"
                  />
                  <path
                    d="M546 -179L167 200H194.084L546 -151.916V-179Z"
                    fill="url(#paint6_linear_26_269)"
                  />
                </g>
                <g filter="url(#filter3_f_26_269)">
                  <path
                    d="M225 337L-110 672H-86.0607L225 360.939V337Z"
                    fill="url(#paint7_linear_26_269)"
                  />
                </g>
                <path
                  opacity="0.73"
                  d="M38 151H135L38 248V151Z"
                  fill="url(#paint8_linear_26_269)"
                />
                <g filter="url(#filter4_f_26_269)">
                  <path
                    d="M1966.1 304L1745 525.1H1760.8L1966.1 319.8V304Z"
                    fill="url(#paint9_linear_26_269)"
                  />
                </g>
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M2028 321.567V183L1580 631H1718.57L2028 321.567Z"
                    fill="url(#paint10_linear_26_269)"
                  />
                </g>
                <g filter="url(#filter5_f_26_269)">
                  <path
                    d="M1989 -173.321V-289L1615 85H1730.68L1989 -173.321Z"
                    fill="url(#paint11_linear_26_269)"
                  />
                </g>
                <path
                  d="M705 -543L44 118H91.2741L705 -495.726V-543Z"
                  fill="url(#paint12_linear_26_269)"
                />
                <path
                  d="M705 -543L44 118H91.2741L705 -495.726V-543Z"
                  fill="url(#paint13_linear_26_269)"
                />
                <g filter="url(#filter6_f_26_269)">
                  <path
                    d="M465.1 -154L244 67.1H259.8L465.1 -138.2V-154Z"
                    fill="url(#paint14_linear_26_269)"
                  />
                </g>
                <g filter="url(#filter7_f_26_269)">
                  <path
                    d="M1809.1 -57L1588 164.1H1603.8L1809.1 -41.2V-57Z"
                    fill="url(#paint15_linear_26_269)"
                  />
                </g>
                <g filter="url(#filter8_f_26_269)">
                  <path
                    d="M1801 49H1854L1801 102V49Z"
                    fill="url(#paint16_linear_26_269)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_26_269"
                    x="1317"
                    y="412"
                    width="185"
                    height="185"
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
                      result="effect1_foregroundBlur_26_269"
                    />
                  </filter>
                  <filter
                    id="filter1_f_26_269"
                    x="1595"
                    y="-63"
                    width="396"
                    height="396"
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
                      stdDeviation="25.5"
                      result="effect1_foregroundBlur_26_269"
                    />
                  </filter>
                  <filter
                    id="filter2_f_26_269"
                    x="146"
                    y="-200"
                    width="421"
                    height="421"
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
                      result="effect1_foregroundBlur_26_269"
                    />
                  </filter>
                  <filter
                    id="filter3_f_26_269"
                    x="-131"
                    y="316"
                    width="377"
                    height="377"
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
                      result="effect1_foregroundBlur_26_269"
                    />
                  </filter>
                  <filter
                    id="filter4_f_26_269"
                    x="1724"
                    y="283"
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
                      result="effect1_foregroundBlur_26_269"
                    />
                  </filter>
                  <filter
                    id="filter5_f_26_269"
                    x="1584"
                    y="-320"
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
                      result="effect1_foregroundBlur_26_269"
                    />
                  </filter>
                  <filter
                    id="filter6_f_26_269"
                    x="232"
                    y="-166"
                    width="245.1"
                    height="245.1"
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
                      stdDeviation="6"
                      result="effect1_foregroundBlur_26_269"
                    />
                  </filter>
                  <filter
                    id="filter7_f_26_269"
                    x="1567"
                    y="-78"
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
                      result="effect1_foregroundBlur_26_269"
                    />
                  </filter>
                  <filter
                    id="filter8_f_26_269"
                    x="1783"
                    y="31"
                    width="89"
                    height="89"
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
                      stdDeviation="9"
                      result="effect1_foregroundBlur_26_269"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_26_269"
                    x1="578.5"
                    y1="906"
                    x2="7.99988"
                    y2="232.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0" />
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_26_269"
                    x1="1350"
                    y1="504.259"
                    x2="1469"
                    y2="504.259"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#4B4B4B" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_26_269"
                    x1="1278.44"
                    y1="583.255"
                    x2="1446.82"
                    y2="407.822"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_26_269"
                    x1="1586"
                    y1="437.5"
                    x2="2019"
                    y2="67.9998"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_26_269"
                    x1="1592.55"
                    y1="305.976"
                    x2="1932.92"
                    y2="15.5132"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_26_269"
                    x1="303.276"
                    y1="132.977"
                    x2="663.248"
                    y2="-117.29"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#4B4B4B" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_26_269"
                    x1="-60.9016"
                    y1="261.323"
                    x2="475.37"
                    y2="-297.406"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" />
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_26_269"
                    x1="-100.152"
                    y1="662.758"
                    x2="216.938"
                    y2="368.35"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#40FEFF" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear_26_269"
                    x1="-20.3284"
                    y1="263.695"
                    x2="116.923"
                    y2="120.696"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" />
                  </linearGradient>
                  <linearGradient
                    id="paint9_linear_26_269"
                    x1="1612.05"
                    y1="560.875"
                    x2="1924.9"
                    y2="234.925"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" />
                  </linearGradient>
                  <linearGradient
                    id="paint10_linear_26_269"
                    x1="1384.37"
                    y1="1046.15"
                    x2="1893.6"
                    y2="443.587"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0" />
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint11_linear_26_269"
                    x1="1547"
                    y1="115.5"
                    x2="1980"
                    y2="-254"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint12_linear_26_269"
                    x1="-176.287"
                    y1="219.961"
                    x2="434.922"
                    y2="-257.676"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#4B4B4B" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint13_linear_26_269"
                    x1="-76.1821"
                    y1="171.905"
                    x2="689.093"
                    y2="-481.142"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint14_linear_26_269"
                    x1="203.8"
                    y1="85.1308"
                    x2="459.779"
                    y2="-133.309"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint15_linear_26_269"
                    x1="1547.8"
                    y1="182.131"
                    x2="1803.78"
                    y2="-36.3089"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint16_linear_26_269"
                    x1="1791.36"
                    y1="106.322"
                    x2="1852.72"
                    y2="53.9599"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                </defs>
              </svg>
            </MouseParallax>
          </div>

          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <MouseParallax strength={0.1}>
              <svg
                className="absolute w-[120%] h-[120%] top-[-10%] left-[-10%]"
                xmlns="http://www.w3.org/2000/svg"
                width="2355"
                height="1770"
                viewBox="0 0 2355 1770"
                fill="none"
              >
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M1836 1147.79V952L1203 1585H1398.79L1836 1147.79Z"
                    fill="url(#paint0_linear_13_92)"
                  />
                </g>
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M1634 768.595V403L452 1585H817.596L1634 768.595Z"
                    fill="url(#paint1_linear_13_92)"
                  />
                </g>
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M1450 365.595V0L268 1182H633.596L1450 365.595Z"
                    fill="url(#paint2_linear_13_92)"
                  />
                </g>
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M752 833.788V638L119 1271H314.789L752 833.788Z"
                    fill="url(#paint3_linear_13_92)"
                  />
                </g>
                <g filter="url(#filter0_f_13_92)">
                  <path
                    d="M2308 821.679V706L1934 1080H2049.68L2308 821.679Z"
                    fill="url(#paint4_linear_13_92)"
                  />
                </g>
                <path
                  d="M835.6 638L363 1110.6H396.8L835.6 671.8V638Z"
                  fill="url(#paint5_linear_13_92)"
                />
                <path
                  d="M835.6 638L363 1110.6H396.8L835.6 671.8V638Z"
                  fill="url(#paint6_linear_13_92)"
                />
                <g filter="url(#filter1_f_13_92)">
                  <path
                    d="M491 1423.66V1342L227 1606H308.656L491 1423.66Z"
                    fill="url(#paint7_linear_13_92)"
                  />
                </g>
                <g filter="url(#filter2_f_13_92)">
                  <path
                    d="M585 1045L250 1380H273.939L585 1068.94V1045Z"
                    fill="url(#paint8_linear_13_92)"
                  />
                </g>
                <g filter="url(#filter3_f_13_92)">
                  <path
                    d="M784.1 841L563 1062.1H578.8L784.1 856.8V841Z"
                    fill="url(#paint9_linear_13_92)"
                  />
                </g>
                <g filter="url(#filter4_f_13_92)">
                  <path
                    d="M1568.1 1177L1347 1398.1H1362.8L1568.1 1192.8V1177Z"
                    fill="url(#paint10_linear_13_92)"
                  />
                </g>
                <path
                  opacity="0.73"
                  d="M361 1487H438L361 1564V1487Z"
                  fill="url(#paint11_linear_13_92)"
                />
                <path
                  d="M2355 1254.68V1139L1981 1513H2096.68L2355 1254.68Z"
                  fill="url(#paint12_linear_13_92)"
                />
                <g filter="url(#filter5_f_13_92)">
                  <path
                    d="M2128.1 938L1907 1159.1H1922.8L2128.1 953.8V938Z"
                    fill="url(#paint13_linear_13_92)"
                  />
                </g>
                <g filter="url(#filter6_f_13_92)">
                  <path
                    d="M452 1200H625L452 1373V1200Z"
                    fill="url(#paint14_linear_13_92)"
                  />
                  <path
                    d="M452 1200H625L452 1373V1200Z"
                    fill="url(#paint15_linear_13_92)"
                  />
                </g>
                <g filter="url(#filter7_f_13_92)">
                  <path
                    d="M400 1370L21 1749H48.0835L400 1397.08V1370Z"
                    fill="url(#paint16_linear_13_92)"
                  />
                  <path
                    d="M400 1370L21 1749H48.0835L400 1397.08V1370Z"
                    fill="url(#paint17_linear_13_92)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_13_92"
                    x="1903"
                    y="675"
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
                      result="effect1_foregroundBlur_13_92"
                    />
                  </filter>
                  <filter
                    id="filter1_f_13_92"
                    x="176"
                    y="1291"
                    width="366"
                    height="366"
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
                      stdDeviation="25.5"
                      result="effect1_foregroundBlur_13_92"
                    />
                  </filter>
                  <filter
                    id="filter2_f_13_92"
                    x="229"
                    y="1024"
                    width="377"
                    height="377"
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
                      result="effect1_foregroundBlur_13_92"
                    />
                  </filter>
                  <filter
                    id="filter3_f_13_92"
                    x="551"
                    y="829"
                    width="245.1"
                    height="245.1"
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
                      stdDeviation="6"
                      result="effect1_foregroundBlur_13_92"
                    />
                  </filter>
                  <filter
                    id="filter4_f_13_92"
                    x="1326"
                    y="1156"
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
                      result="effect1_foregroundBlur_13_92"
                    />
                  </filter>
                  <filter
                    id="filter5_f_13_92"
                    x="1886"
                    y="917"
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
                      result="effect1_foregroundBlur_13_92"
                    />
                  </filter>
                  <filter
                    id="filter6_f_13_92"
                    x="419"
                    y="1167"
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
                      result="effect1_foregroundBlur_13_92"
                    />
                  </filter>
                  <filter
                    id="filter7_f_13_92"
                    x="0"
                    y="1349"
                    width="421"
                    height="421"
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
                      result="effect1_foregroundBlur_13_92"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_13_92"
                    x1="926.59"
                    y1="2171.58"
                    x2="1646.1"
                    y2="1320.2"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0" />
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_13_92"
                    x1="1384.5"
                    y1="2002"
                    x2="814"
                    y2="1328.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0" />
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_13_92"
                    x1="1200.5"
                    y1="1599"
                    x2="630"
                    y2="925.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0" />
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_13_92"
                    x1="-157.41"
                    y1="1857.58"
                    x2="562.1"
                    y2="1006.2"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0" />
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_13_92"
                    x1="1866"
                    y1="1110.5"
                    x2="2299"
                    y2="741"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_13_92"
                    x1="205.5"
                    y1="1183.5"
                    x2="642.5"
                    y2="842"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#4B4B4B" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_13_92"
                    x1="277.073"
                    y1="1149.14"
                    x2="824.227"
                    y2="682.227"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_13_92"
                    x1="179"
                    y1="1627.53"
                    x2="484.647"
                    y2="1366.71"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear_13_92"
                    x1="259.848"
                    y1="1370.76"
                    x2="576.938"
                    y2="1076.35"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#40FEFF" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint9_linear_13_92"
                    x1="522.8"
                    y1="1080.13"
                    x2="778.779"
                    y2="861.691"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint10_linear_13_92"
                    x1="1214.05"
                    y1="1433.87"
                    x2="1526.9"
                    y2="1107.92"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" />
                  </linearGradient>
                  <linearGradient
                    id="paint11_linear_13_92"
                    x1="314.698"
                    y1="1576.46"
                    x2="423.65"
                    y2="1462.94"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" />
                  </linearGradient>
                  <linearGradient
                    id="paint12_linear_13_92"
                    x1="1913"
                    y1="1543.5"
                    x2="2346"
                    y2="1174"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint13_linear_13_92"
                    x1="1866.8"
                    y1="1177.13"
                    x2="2122.78"
                    y2="958.691"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint14_linear_13_92"
                    x1="452"
                    y1="1286.15"
                    x2="625"
                    y2="1286.15"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#4B4B4B" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint15_linear_13_92"
                    x1="347.971"
                    y1="1400.99"
                    x2="592.76"
                    y2="1145.95"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" />
                  </linearGradient>
                  <linearGradient
                    id="paint16_linear_13_92"
                    x1="157.276"
                    y1="1681.98"
                    x2="517.248"
                    y2="1431.71"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#4B4B4B" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint17_linear_13_92"
                    x1="-206.902"
                    y1="1810.32"
                    x2="329.37"
                    y2="1251.59"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" />
                  </linearGradient>
                </defs>
              </svg>
            </MouseParallax>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden">
            <MouseParallax strength={0.1}>
              <svg
                className="absolute w-[120%] h-[120%] top-[-10%] left-[-10%]"
                xmlns="http://www.w3.org/2000/svg"
                width="1920"
                height="693"
                viewBox="0 0 1920 693"
                fill="none"
              >
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M828 -327.405V-693L-354 489H11.5957L828 -327.405Z"
                    fill="url(#paint0_linear_26_269)"
                  />
                </g>
                <g filter="url(#filter0_f_26_269)">
                  <path
                    d="M1350 445H1469L1350 564V445Z"
                    fill="url(#paint1_linear_26_269)"
                  />
                  <path
                    d="M1350 445H1469L1350 564V445Z"
                    fill="url(#paint2_linear_26_269)"
                  />
                </g>
                <path
                  d="M2028 148.679V33L1654 407H1769.68L2028 148.679Z"
                  fill="url(#paint3_linear_26_269)"
                />
                <g filter="url(#filter1_f_26_269)">
                  <path
                    d="M1940 78.9349V-12L1646 282H1736.93L1940 78.9349Z"
                    fill="url(#paint4_linear_26_269)"
                  />
                </g>
                <g filter="url(#filter2_f_26_269)">
                  <path
                    d="M546 -179L167 200H194.084L546 -151.916V-179Z"
                    fill="url(#paint5_linear_26_269)"
                  />
                  <path
                    d="M546 -179L167 200H194.084L546 -151.916V-179Z"
                    fill="url(#paint6_linear_26_269)"
                  />
                </g>
                <g filter="url(#filter3_f_26_269)">
                  <path
                    d="M225 337L-110 672H-86.0607L225 360.939V337Z"
                    fill="url(#paint7_linear_26_269)"
                  />
                </g>
                <path
                  opacity="0.73"
                  d="M38 151H135L38 248V151Z"
                  fill="url(#paint8_linear_26_269)"
                />
                <g filter="url(#filter4_f_26_269)">
                  <path
                    d="M1966.1 304L1745 525.1H1760.8L1966.1 319.8V304Z"
                    fill="url(#paint9_linear_26_269)"
                  />
                </g>
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M2028 321.567V183L1580 631H1718.57L2028 321.567Z"
                    fill="url(#paint10_linear_26_269)"
                  />
                </g>
                <g filter="url(#filter5_f_26_269)">
                  <path
                    d="M1989 -173.321V-289L1615 85H1730.68L1989 -173.321Z"
                    fill="url(#paint11_linear_26_269)"
                  />
                </g>
                <path
                  d="M705 -543L44 118H91.2741L705 -495.726V-543Z"
                  fill="url(#paint12_linear_26_269)"
                />
                <path
                  d="M705 -543L44 118H91.2741L705 -495.726V-543Z"
                  fill="url(#paint13_linear_26_269)"
                />
                <g filter="url(#filter6_f_26_269)">
                  <path
                    d="M465.1 -154L244 67.1H259.8L465.1 -138.2V-154Z"
                    fill="url(#paint14_linear_26_269)"
                  />
                </g>
                <g filter="url(#filter7_f_26_269)">
                  <path
                    d="M1809.1 -57L1588 164.1H1603.8L1809.1 -41.2V-57Z"
                    fill="url(#paint15_linear_26_269)"
                  />
                </g>
                <g filter="url(#filter8_f_26_269)">
                  <path
                    d="M1801 49H1854L1801 102V49Z"
                    fill="url(#paint16_linear_26_269)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_26_269"
                    x="1317"
                    y="412"
                    width="185"
                    height="185"
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
                      result="effect1_foregroundBlur_26_269"
                    />
                  </filter>
                  <filter
                    id="filter1_f_26_269"
                    x="1595"
                    y="-63"
                    width="396"
                    height="396"
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
                      stdDeviation="25.5"
                      result="effect1_foregroundBlur_26_269"
                    />
                  </filter>
                  <filter
                    id="filter2_f_26_269"
                    x="146"
                    y="-200"
                    width="421"
                    height="421"
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
                      result="effect1_foregroundBlur_26_269"
                    />
                  </filter>
                  <filter
                    id="filter3_f_26_269"
                    x="-131"
                    y="316"
                    width="377"
                    height="377"
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
                      result="effect1_foregroundBlur_26_269"
                    />
                  </filter>
                  <filter
                    id="filter4_f_26_269"
                    x="1724"
                    y="283"
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
                      result="effect1_foregroundBlur_26_269"
                    />
                  </filter>
                  <filter
                    id="filter5_f_26_269"
                    x="1584"
                    y="-320"
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
                      result="effect1_foregroundBlur_26_269"
                    />
                  </filter>
                  <filter
                    id="filter6_f_26_269"
                    x="232"
                    y="-166"
                    width="245.1"
                    height="245.1"
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
                      stdDeviation="6"
                      result="effect1_foregroundBlur_26_269"
                    />
                  </filter>
                  <filter
                    id="filter7_f_26_269"
                    x="1567"
                    y="-78"
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
                      result="effect1_foregroundBlur_26_269"
                    />
                  </filter>
                  <filter
                    id="filter8_f_26_269"
                    x="1783"
                    y="31"
                    width="89"
                    height="89"
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
                      stdDeviation="9"
                      result="effect1_foregroundBlur_26_269"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_26_269"
                    x1="578.5"
                    y1="906"
                    x2="7.99988"
                    y2="232.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0" />
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_26_269"
                    x1="1350"
                    y1="504.259"
                    x2="1469"
                    y2="504.259"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#4B4B4B" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_26_269"
                    x1="1278.44"
                    y1="583.255"
                    x2="1446.82"
                    y2="407.822"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_26_269"
                    x1="1586"
                    y1="437.5"
                    x2="2019"
                    y2="67.9998"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_26_269"
                    x1="1592.55"
                    y1="305.976"
                    x2="1932.92"
                    y2="15.5132"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_26_269"
                    x1="303.276"
                    y1="132.977"
                    x2="663.248"
                    y2="-117.29"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#4B4B4B" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_26_269"
                    x1="-60.9016"
                    y1="261.323"
                    x2="475.37"
                    y2="-297.406"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" />
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_26_269"
                    x1="-100.152"
                    y1="662.758"
                    x2="216.938"
                    y2="368.35"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#40FEFF" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear_26_269"
                    x1="-20.3284"
                    y1="263.695"
                    x2="116.923"
                    y2="120.696"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" />
                  </linearGradient>
                  <linearGradient
                    id="paint9_linear_26_269"
                    x1="1612.05"
                    y1="560.875"
                    x2="1924.9"
                    y2="234.925"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" />
                  </linearGradient>
                  <linearGradient
                    id="paint10_linear_26_269"
                    x1="1384.37"
                    y1="1046.15"
                    x2="1893.6"
                    y2="443.587"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0" />
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint11_linear_26_269"
                    x1="1547"
                    y1="115.5"
                    x2="1980"
                    y2="-254"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint12_linear_26_269"
                    x1="-176.287"
                    y1="219.961"
                    x2="434.922"
                    y2="-257.676"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#4B4B4B" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint13_linear_26_269"
                    x1="-76.1821"
                    y1="171.905"
                    x2="689.093"
                    y2="-481.142"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint14_linear_26_269"
                    x1="203.8"
                    y1="85.1308"
                    x2="459.779"
                    y2="-133.309"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint15_linear_26_269"
                    x1="1547.8"
                    y1="182.131"
                    x2="1803.78"
                    y2="-36.3089"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                  <linearGradient
                    id="paint16_linear_26_269"
                    x1="1791.36"
                    y1="106.322"
                    x2="1852.72"
                    y2="53.9599"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                </defs>
              </svg>
            </MouseParallax>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden">
            <MouseParallax strength={0.1}>
              <svg
                className="absolute w-[120%] h-[120%] top-[-10%] left-[-10%]"
                xmlns="http://www.w3.org/2000/svg"
                width="1920"
                height="628"
                viewBox="0 0 1920 628"
                fill="none"
              >
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M1509 -371.405V-737L327 445H692.596L1509 -371.405Z"
                    fill="url(#paint0_linear_26_268)"
                  />
                </g>
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M596 -133.212V-329L-37 304H158.789L596 -133.212Z"
                    fill="url(#paint1_linear_26_268)"
                  />
                </g>
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M1856 -55.7907V-362L866 628H1172.21L1856 -55.7907Z"
                    fill="url(#paint2_linear_26_268)"
                  />
                </g>
                <path
                  d="M1967 168.744V11L1457 521H1614.74L1967 168.744Z"
                  fill="url(#paint3_linear_26_268)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_26_268"
                    x1="1259.5"
                    y1="862"
                    x2="689"
                    y2="188.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0" />
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_26_268"
                    x1="-313.41"
                    y1="890.58"
                    x2="406.1"
                    y2="39.195"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0" />
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_26_268"
                    x1="433.7"
                    y1="1545.4"
                    x2="1559"
                    y2="213.85"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1F80F0" />
                    <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_26_268"
                    x1="1327"
                    y1="717.5"
                    x2="1786"
                    y2="258.499"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E9EA" />
                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                  </linearGradient>
                </defs>
              </svg>
            </MouseParallax>
          </div>
        </div>
      </div>

      {/* Footer Center Section */}
      <div className="w-full bg-[#002045] p-5">
        <div className="w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <img
            src={Logo}
            alt="Logo"
            className="max-w-[150px] md:max-w-[200px] object-contain"
          />

          {/* Navigation */}
          <div className="text-[#01dce0] flex flex-col md:flex-row items-center gap-3 md:gap-5 text-center mt-3 md:mt-0">
            <h1 className="text-lg font-bold">Our Solutions</h1>
            <div className="flex gap-3 md:gap-5 p-3 md:p-5 border-t-2 md:border-t-0 md:border-l-2 border-[#01dce0]">
              <button className="cursor-pointer hover:text-blue-500">
                AnyCaaS
              </button>
              <button className="cursor-pointer hover:text-blue-500">
                AnyBaaS
              </button>
              <button className="cursor-pointer hover:text-blue-500">
                AnyPaaS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer End Section */}
      <div className="w-full bg-[#00142c] p-5">
        <div className="w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <p className="text-sm">
            <span className="text-[#4489d8]">©2023 All rights reserved.</span>
            <span className="text-[#186ed1]">Any Technology Pte Ltd.</span>
          </p>
          <p className="text-[#186ed1] mt-3 md:mt-0">Privacy Policy</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
