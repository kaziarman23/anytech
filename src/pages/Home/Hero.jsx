const Hero = ({ title, subtitle }) => {
  return (
    <section
      id="home-hero__content__container"
      className="lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white lg:bg-clip-hero-container overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%]"
    >
      <div className="container relative z-10 w-full h-full md:flex md:items-center md:justify-center">
        <div className="h-fit lg:flex-[65] xl:flex-[75]">
          <header className="max-w-2xl lg:space-y-sm space-y-[16px] mb-[32px]">
            <h1 className="lg:max-w-max lg:whitespace-pre-line lg:text-head-1 font-Montserrat text-res-head-1 text-white">
              {title}
            </h1>
            <h5 className="!text-white max-w-[37rem] lg:mr-5 text-res-head-5 text-blue-main lg:text-head-5 font-Montserrat">
              {subtitle}
            </h5>
          </header>
          <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full lg:mb-0 mb-md max-w-xl">
            <a
              className="md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link text-white flex items-center justify-center space-x-[8px] bg-orange-main"
              href="/contact-us"
            >
              <span>Reach Out to Us</span>
              <svg
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="lg:flex-[35] xl:flex-[25] lg:block hidden"> </div>
        <div className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full bg-clip-hero-image pointer-events-none">
          <figure className="h-[115%] w-[115%] object-cover">
            <img
              src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?auto=format" // Replace with your image URL
              alt="background image"
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="gradient-overlay"></div>
        </div>

        {/* SVG Background (Desktop) - You'll likely want to extract this to a separate component */}
        <svg
          className="hidden lg:block absolute h-full w-full object-cover inset-0"
          width="1920"
          height="929"
          viewBox="0 0 1920 929"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="hero-background-desktop">
            <g id="background">
              <g id="Vector" style="mix-blend-mode:multiply">
                <path
                  d="M668 23.4954V-382L-643 929H-237.504L668 23.4954Z"
                  fill="url(#paint0_linear_132_3263)"
                ></path>
              </g>
              <g id="Vector_2" style="mix-blend-mode:multiply">
                <path
                  d="M1195 -226.405V-592L13 590H378.596L1195 -226.405Z"
                  fill="url(#paint1_linear_132_3263)"
                ></path>
              </g>
              <g id="Vector_3" style="mix-blend-mode:multiply">
                <path
                  d="M1011 -629.405V-995L-171 187H194.596L1011 -629.405Z"
                  fill="url(#paint2_linear_132_3263)"
                ></path>
              </g>
              <g id="Vector_4" style="mix-blend-mode:multiply">
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
              <g id="Vector_10" style="mix-blend-mode:multiply">
                <path
                  d="M1315 316.788V121L682 754H877.789L1315 316.788Z"
                  fill="url(#paint11_linear_132_3263)"
                ></path>
              </g>
              <g id="Vector_11" style="mix-blend-mode:multiply">
                <path
                  d="M1220 -28.2093V-121L920 179H1012.79L1220 -28.2093Z"
                  fill="url(#paint12_linear_132_3263)"
                ></path>
              </g>
              <g id="Vector_12" style="mix-blend-mode:multiply">
                <path
                  d="M1968 388.791V296L1668 596H1760.79L1968 388.791Z"
                  fill="url(#paint13_linear_132_3263)"
                ></path>
              </g>
            </g>
            <g id="foreground">
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
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
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
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
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
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
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
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
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
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
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
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
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
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
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
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
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
              <stop stop-color="#1F80F0"></stop>
              <stop offset="1" stop-color="#0059BF" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_132_3263"
              x1="945.5"
              y1="1007"
              x2="375"
              y2="333.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1F80F0"></stop>
              <stop offset="1" stop-color="#0059BF" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_132_3263"
              x1="761.5"
              y1="604"
              x2="191"
              y2="-69.4999"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1F80F0"></stop>
              <stop offset="1" stop-color="#0059BF" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_132_3263"
              x1="-596.41"
              y1="862.58"
              x2="123.1"
              y2="11.195"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1F80F0"></stop>
              <stop offset="1" stop-color="#0059BF" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint4_linear_132_3263"
              x1="-233.5"
              y1="188.5"
              x2="203.5"
              y2="-153"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white"></stop>
              <stop offset="1" stop-color="#4B4B4B" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint5_linear_132_3263"
              x1="-161.927"
              y1="154.141"
              x2="385.227"
              y2="-312.773"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00E9EA"></stop>
              <stop offset="1" stop-color="#1F80F0" stop-opacity="0.49"></stop>
            </linearGradient>
            <linearGradient
              id="paint6_linear_132_3263"
              x1="-260"
              y1="632.529"
              x2="45.6469"
              y2="371.706"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00E9EA"></stop>
              <stop offset="1" stop-color="#1F80F0" stop-opacity="0.49"></stop>
            </linearGradient>
            <linearGradient
              id="paint7_linear_132_3263"
              x1="-179.152"
              y1="375.758"
              x2="137.938"
              y2="81.3501"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#40FEFF"></stop>
              <stop offset="1" stop-color="#1F80F0" stop-opacity="0.49"></stop>
            </linearGradient>
            <linearGradient
              id="paint8_linear_132_3263"
              x1="83.7999"
              y1="85.1308"
              x2="339.779"
              y2="-133.309"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00E9EA"></stop>
              <stop offset="1" stop-color="#1F80F0" stop-opacity="0.49"></stop>
            </linearGradient>
            <linearGradient
              id="paint9_linear_132_3263"
              x1="140"
              y1="217.15"
              x2="313"
              y2="217.15"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white"></stop>
              <stop offset="1" stop-color="#4B4B4B" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint10_linear_132_3263"
              x1="35.9711"
              y1="331.992"
              x2="280.76"
              y2="76.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00E9EA"></stop>
              <stop offset="1" stop-color="#1F80F0"></stop>
            </linearGradient>
            <linearGradient
              id="paint11_linear_132_3263"
              x1="405.59"
              y1="1340.58"
              x2="1125.1"
              y2="489.195"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1F80F0"></stop>
              <stop offset="1" stop-color="#0059BF" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint12_linear_132_3263"
              x1="789"
              y1="457"
              x2="1130"
              y2="53.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1F80F0"></stop>
              <stop offset="1" stop-color="#0059BF" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint13_linear_132_3263"
              x1="1537"
              y1="874"
              x2="1878"
              y2="470.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1F80F0"></stop>
              <stop offset="1" stop-color="#0059BF" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint14_linear_132_3263"
              x1="1294"
              y1="306.5"
              x2="1649.5"
              y2="-40.0002"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1F80F0"></stop>
              <stop offset="1" stop-color="#0059BF" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint15_linear_132_3263"
              x1="1467"
              y1="115.5"
              x2="1900"
              y2="-254"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00E9EA"></stop>
              <stop offset="1" stop-color="#1F80F0" stop-opacity="0.49"></stop>
            </linearGradient>
            <linearGradient
              id="paint16_linear_132_3263"
              x1="407.047"
              y1="833.875"
              x2="719.896"
              y2="507.925"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00E9EA"></stop>
              <stop offset="1" stop-color="#1F80F0"></stop>
            </linearGradient>
            <linearGradient
              id="paint17_linear_132_3263"
              x1="1600"
              y1="548.5"
              x2="2033"
              y2="179"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00E9EA"></stop>
              <stop offset="1" stop-color="#1F80F0" stop-opacity="0.49"></stop>
            </linearGradient>
            <linearGradient
              id="paint18_linear_132_3263"
              x1="1467.8"
              y1="182.131"
              x2="1723.78"
              y2="-36.3089"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00E9EA"></stop>
              <stop offset="1" stop-color="#1F80F0" stop-opacity="0.49"></stop>
            </linearGradient>
            <linearGradient
              id="paint19_linear_132_3263"
              x1="1711.36"
              y1="106.322"
              x2="1772.72"
              y2="53.9599"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00E9EA"></stop>
              <stop offset="1" stop-color="#1F80F0" stop-opacity="0.49"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Mobile Image */}
        <div className="block lg:hidden translate-y-[-20%] -mb-[10%]">
          <figure
            style={{ clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0% 100%)" }}
            className="object-cover overflow-hidden"
          >
            <img
              src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?auto=format" // Replace with your image URL
              alt="background image"
              className="h-full w-full object-cover scale-150"
            />
          </figure>
          <div className="gradient-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// <div className="w-full h-screen">
//   <div className="w-full h-11/12 relative">
//     <img
//       src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gorillatrades.com%2Fwp-content%2Fuploads%2F2021%2F03%2FDepositphotos_222465812_l-2015.jpg&f=1&nofb=1&ipt=696ecad042b45c6067fad1512c6b6f416fdc4c98f3f8909ad0098cb480f9f005&ipo=images"
//       alt="Hero section image"
//       className="w-full h-full object-cover     "
//     />
//     <div className="bg-[#0C68D4] absolute w-1/2 h-full top-0 left-0 -rotate-6"/>
//   </div>
// </div>

{
  /* <figure className="h-[115%] w-[115%] object-cover">
          <img
            src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg"
            alt="background image"
            className="h-full w-full object-cover"
          />
        </figure> */
}
