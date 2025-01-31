const Footer = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      {/* Footer Middle Part */}
      <div className="w-full h-full bg-[#002045]">
        <div className="w-4/5 h-full mx-auto">
          <div className="w-full h-40 flex justify-between items-center">
            {/* logo part */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 200 32"
              height="32"
              width="200"
            >
              <g clipPath="url(#clip0_3940_240)">
                <path
                  fill="white"
                  d="M80.4531 4.06999H90.6886V29.89H95.5378V4.06999H106.208V0.421875H80.4531V4.06999Z"
                ></path>
                <path
                  fill="white"
                  d="M185.343 0.421875V13.2371H170.881V0.421875H166.031V29.89H170.881V16.8864H185.343V29.89H190.145V0.421875H185.343Z"
                ></path>
                <path
                  fill="white"
                  d="M108.619 12.9244V17.3862C108.619 24.2916 114.356 29.89 121.432 29.89H132.37V26.0304H121.539C117.361 26.0304 113.973 22.7245 113.973 18.6471V17.1145H132.37V13.1986H113.973V11.6661C113.973 7.58869 117.361 4.2827 121.539 4.2827H132.37V0.421875H121.432C114.356 0.421875 108.619 6.02027 108.619 12.9257V12.9244Z"
                ></path>
                <path
                  fill="white"
                  d="M137 12.9244V17.3862C137 24.2916 142.736 29.89 149.813 29.89H160.751V26.0304H149.92C145.742 26.0304 142.354 22.7245 142.354 18.6471V11.6648C142.354 7.5874 145.742 4.28142 149.92 4.28142H160.751V0.421875H149.813C142.736 0.421875 137 6.02027 137 12.9257V12.9244Z"
                ></path>
                <path
                  fill="white"
                  d="M33.2767 0.971489L55.1999 20.4319C55.3365 20.5524 55.4139 20.7241 55.4139 20.9035V29.4914C55.4139 30.0449 54.7416 30.3345 54.3214 29.9629L32.3996 10.5012C32.263 10.3807 32.1855 10.209 32.1855 10.0296V1.44304C32.1855 0.88948 32.8578 0.599886 33.278 0.971489H33.2767Z"
                ></path>
                <path
                  fill="white"
                  d="M32.1855 16.3965V30.2932C32.1855 30.6443 32.4771 30.93 32.8381 30.93H48.0909L32.1855 16.3965Z"
                ></path>
                <path
                  fill="white"
                  d="M28.2582 9.68413V0.629834C28.2582 0.282577 27.9706 0.00195312 27.6148 0.00195312H16.1227C15.8811 0.00195312 15.6592 0.133936 15.5502 0.344084L0.099202 29.925C-0.118769 30.3427 0.192431 30.8373 0.671705 30.8373H9.78842C10.0326 30.8373 10.2559 30.7028 10.3635 30.49L13.7749 23.8076C13.8839 23.5949 14.1071 23.4603 14.3501 23.4603H27.6135C27.9693 23.4603 28.2569 23.1797 28.2569 22.8325V17.0239C28.2569 16.678 27.9693 16.3973 27.6148 16.396L18.6044 16.3755C18.1278 16.3755 17.8179 15.8848 18.0306 15.4683L20.4848 10.6605C20.5937 10.4478 20.817 10.3133 21.0599 10.3133H27.6135C27.9693 10.3133 28.2569 10.0327 28.2569 9.68541L28.2582 9.68413Z"
                ></path>
                <path
                  fill="white"
                  d="M55.4141 14.5355V0.637522C55.4141 0.286422 55.1226 0.00195312 54.7628 0.00195312H39.5088L55.4141 14.5355Z"
                ></path>
                <path
                  fill="white"
                  d="M67.1846 0.294855L59.2864 14.4773C59.2483 14.5465 59.2273 14.6234 59.2273 14.7015V30.4139C59.2273 30.674 59.4426 30.8842 59.7092 30.8842H69.3104C69.577 30.8842 69.7923 30.674 69.7923 30.4139V14.7015C69.7923 14.6234 69.812 14.5465 69.8514 14.4773L77.5027 0.743341C77.6774 0.430682 77.445 0.0488281 77.0799 0.0488281H67.6087C67.4327 0.0488281 67.2699 0.143651 67.1859 0.294855H67.1846Z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_3940_240">
                  <rect
                    transform="translate(0.0283203 0.00195312)"
                    fill="white"
                    height="30.9276"
                    width="190.117"
                  ></rect>
                </clipPath>
              </defs>
            </svg>

            <div className=" text-[#01dce0] flex justify-center items-center gap-5">
              <h1 className=" text-lg font-bold">Our Solutions</h1>
              <div className="flex justify-center items-center gap-5 p-5 border-l-2 border-[#01dce0] ">
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
      </div>
      {/* Footer Ending Part */}
      <div className="w-full h-full bg-[#00142c]">
        <div className="w-4/5 h-full mx-auto">
          <div className="w-full h-20 flex justify-between items-center">
            <p className="">
              <span className="text-[#4489d8]">©2023 All rights reserved.</span>{" "}
              <span className="text-[#186ed1]">Any Technology Pte Ltd.</span>
            </p>
            <p className="text-[#186ed1]">Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
// <section
//   id="common-cta_container"
//   className="relative h-[60vh] lg:h-[530px] w-full text-white bg-clip-cta overflow-hidden bg-[url('/backgrounds/ctaMobileWaveLines.svg')] bg-no-repeat bg-cover md:z-20 z-0 svelte-vr11vg"
// >
//   <div className="container flex w-full items-start justify-center h-full relative z-10 flex-col mt-6">
//     <h2 className="font-Montserrat text-res-head-2 text-white lg:text-head-2 font-semibold mb-[24px]">
//       Legacy no longer
//     </h2>{" "}
//     <p className="text-base lg:text-lg 2xl:text-xl lg:whitespace-pre-line mb-[30px]">
//       Talk to us to find out how we can transform your organisation for the
//       future
//     </p>{" "}
//     <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full">
//       <a
//         className="md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link text-white flex items-center justify-center space-x-[8px] bg-orange-main false"
//         href="/en/contact-us"
//       >
//         <span>Contact Us</span>
//         <svg
//           width="6"
//           height="9"
//           viewBox="0 0 6 9"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
//             fill="white"
//           ></path>
//         </svg>
//       </a>
//     </div>
//   </div>
//   <svg
//     className="lg:block hidden absolute h-[120%] w-[120%] left-[-10%] top-[-10%]"
//     preserveAspectRatio="xMidYMid slice"
//     viewBox="0 0 2316 1021"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <g id="cta-background-patterns">
//       <g
//         id="dark-patterns"
//         style={{
//           transform: "translate3d(-0.0841874%, 1.21736%, 0px)",
//           "--motion-translateX": "0px",
//           "--motion-translateY": "0px",
//           transition:
//             "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
//         }}
//       >
//         <g id="Vector" style={{ mixBlendMode: "multiply" }}>
//           <path
//             d="M1968.32 314.946V192.878L1492.64 587.535H1639.77L1968.32 314.946Z"
//             fill="url(#paint0_linear_1_547)"
//           ></path>
//         </g>
//         <g id="Vector_2" style={{ mixBlendMode: "multiply" }}>
//           <path
//             d="M2036.7 424.054V301.985L1561.03 696.643H1708.15L2036.7 424.054Z"
//             fill="url(#paint1_linear_1_547)"
//           ></path>
//         </g>
//         <g id="Vector_3" style={{ mixBlendMode: "multiply" }}>
//           <path
//             d="M856.409 397.443V212.315L135 810.849H358.134L856.409 397.443Z"
//             fill="url(#paint2_linear_1_547)"
//           ></path>
//         </g>
//         <g id="Vector_4" style={{ mixBlendMode: "multiply" }}>
//           <path
//             d="M819.587 305.826V188L360.44 568.941H502.456L819.587 305.826Z"
//             fill="url(#paint3_linear_1_547)"
//           ></path>
//         </g>
//         <g id="Vector_5" style={{ mixBlendMode: "multiply" }}>
//           <path
//             d="M2315.5 349.533V143L1510.68 810.739H1759.61L2315.5 349.533Z"
//             fill="url(#paint4_linear_1_547)"
//           ></path>
//         </g>
//         <g id="Vector_6" style={{ mixBlendMode: "multiply" }}>
//           <path
//             d="M1688.78 477.271V395.506L1370.15 659.858H1468.7L1688.78 477.271Z"
//             fill="url(#paint5_linear_1_547)"
//           ></path>
//         </g>
//         <g id="Vector_7" style={{ mixBlendMode: "multiply" }}>
//           <path
//             d="M1739.88 320.611V252.731L1475.36 472.193H1557.17L1739.88 320.611Z"
//             fill="url(#paint6_linear_1_547)"
//           ></path>
//         </g>
//         <g id="Vector_8" style={{ mixBlendMode: "multiply" }}>
//           <path
//             d="M1641.43 402.256V312.585L1292 602.499H1400.08L1641.43 402.256Z"
//             fill="url(#paint7_linear_1_547)"
//           ></path>
//         </g>
//         <g id="Vector_9" filter="url(#filter0_f_1_547)">
//           <path
//             d="M2098.33 317.372V245.249L1817.28 478.428H1904.21L2098.33 317.372Z"
//             fill="url(#paint8_linear_1_547)"
//           ></path>
//         </g>
//         <g id="Vector_10" filter="url(#filter1_f_1_547)">
//           <path
//             d="M1872.34 193.563V121.44L1591.29 354.619H1678.22L1872.34 193.563Z"
//             fill="url(#paint9_linear_1_547)"
//           ></path>
//         </g>
//         <g id="Vector_11">
//           <path
//             d="M2013.32 46L1658.17 340.653H1683.57L2013.32 67.0733V46Z"
//             fill="url(#paint10_linear_1_547)"
//           ></path>
//           <path
//             d="M2013.32 46L1658.17 340.653H1683.57L2013.32 67.0733V46Z"
//             fill="url(#paint11_linear_1_547)"
//           ></path>
//         </g>
//         <g id="Vector_12" filter="url(#filter2_f_1_547)">
//           <path
//             d="M1854.1 284.937V234.027L1655.71 398.623H1717.07L1854.1 284.937Z"
//             fill="url(#paint12_linear_1_547)"
//           ></path>
//         </g>
//       </g>
//       <g
//         id="light-patterns"
//         style={{
//           transform: "translate3d(0.0505124%, -0.730418%, 0px)",
//           "--motion-translateX": "0px",
//           "--motion-translateY": "0px",
//           opacity: 1,
//           transition:
//             "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
//         }}
//       >
//         <g id="Vector_13" filter="url(#filter3_f_1_547)">
//           <path
//             d="M1764 384.676V268.997L1390 642.997H1505.68L1764 384.676Z"
//             fill="url(#paint13_linear_1_547)"
//           ></path>
//         </g>
//         <g id="Vector_14" filter="url(#filter4_f_1_547)">
//           <path
//             d="M1345 579.677V463.998L971 837.998H1086.68L1345 579.677Z"
//             fill="url(#paint14_linear_1_547)"
//           ></path>
//         </g>
//         <g id="Vector_15" filter="url(#filter5_f_1_547)">
//           <path
//             d="M623 351.677V235.998L249 609.998H364.679L623 351.677Z"
//             fill="url(#paint15_linear_1_547)"
//           ></path>
//         </g>
//         <g id="Vector_16" filter="url(#filter6_f_1_547)">
//           <path
//             d="M2138 558.86V466.997L1841 763.997H1932.86L2138 558.86Z"
//             fill="url(#paint16_linear_1_547)"
//           ></path>
//         </g>
//         <path
//           id="Vector_17"
//           d="M1406 435.302V361.997L1169 598.997H1242.3L1406 435.302Z"
//           fill="url(#paint17_linear_1_547)"
//         ></path>
//         <g id="Vector_18" filter="url(#filter7_f_1_547)">
//           <path
//             d="M1442 229.997L1107 564.997H1130.94L1442 253.937V229.997Z"
//             fill="url(#paint18_linear_1_547)"
//           ></path>
//         </g>
//         <g id="Vector_19" filter="url(#filter8_f_1_547)">
//           <path
//             d="M684 113.998L349 448.998H372.939L684 137.937V113.998Z"
//             fill="url(#paint19_linear_1_547)"
//           ></path>
//         </g>
//         <g id="Vector_20" filter="url(#filter9_f_1_547)">
//           <path
//             d="M427 132.998L92 467.998H115.939L427 156.937V132.998Z"
//             fill="url(#paint20_linear_1_547)"
//           ></path>
//         </g>
//         <g id="Vector_21" filter="url(#filter10_f_1_547)">
//           <path
//             d="M1886 335.997L1507 714.997H1534.08L1886 363.081V335.997Z"
//             fill="url(#paint21_linear_1_547)"
//           ></path>
//           <path
//             d="M1886 335.997L1507 714.997H1534.08L1886 363.081V335.997Z"
//             fill="url(#paint22_linear_1_547)"
//           ></path>
//         </g>
//         <g id="Vector_22" filter="url(#filter11_f_1_547)">
//           <path
//             d="M1693 281.998L1314 660.998H1341.08L1693 309.082V281.998Z"
//             fill="url(#paint23_linear_1_547)"
//           ></path>
//           <path
//             d="M1693 281.998L1314 660.998H1341.08L1693 309.082V281.998Z"
//             fill="url(#paint24_linear_1_547)"
//           ></path>
//         </g>
//         <g id="Vector_23" filter="url(#filter12_f_1_547)">
//           <path
//             d="M400 620.998L21 999.998H48.0835L400 648.082V620.998Z"
//             fill="url(#paint25_linear_1_547)"
//           ></path>
//           <path
//             d="M400 620.998L21 999.998H48.0835L400 648.082V620.998Z"
//             fill="url(#paint26_linear_1_547)"
//           ></path>
//         </g>
//         <g id="Vector_24" filter="url(#filter13_f_1_547)">
//           <path
//             d="M614 21.9982L235 400.998H262.084L614 49.0819V21.9982Z"
//             fill="url(#paint27_linear_1_547)"
//           ></path>
//           <path
//             d="M614 21.9982L235 400.998H262.084L614 49.0819V21.9982Z"
//             fill="url(#paint28_linear_1_547)"
//           ></path>
//         </g>
//       </g>
//     </g>
//     <defs>
//       <filter
//         id="filter0_f_1_547"
//         x="1795.28"
//         y="223.249"
//         width="325.049"
//         height="277.179"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//         <feBlend
//           mode="normal"
//           in="SourceGraphic"
//           in2="BackgroundImageFix"
//           result="shape"
//         ></feBlend>
//         <feGaussianBlur
//           stdDeviation="11"
//           result="effect1_foregroundBlur_1_547"
//         ></feGaussianBlur>
//       </filter>
//       <filter
//         id="filter1_f_1_547"
//         x="1540.29"
//         y="70.4401"
//         width="383.049"
//         height="335.179"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//         <feBlend
//           mode="normal"
//           in="SourceGraphic"
//           in2="BackgroundImageFix"
//           result="shape"
//         ></feBlend>
//         <feGaussianBlur
//           stdDeviation="25.5"
//           result="effect1_foregroundBlur_1_547"
//         ></feGaussianBlur>
//       </filter>
//       <filter
//         id="filter2_f_1_547"
//         x="1604.71"
//         y="183.027"
//         width="300.387"
//         height="266.597"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//         <feBlend
//           mode="normal"
//           in="SourceGraphic"
//           in2="BackgroundImageFix"
//           result="shape"
//         ></feBlend>
//         <feGaussianBlur
//           stdDeviation="25.5"
//           result="effect1_foregroundBlur_1_547"
//         ></feGaussianBlur>
//       </filter>
//       <filter
//         id="filter3_f_1_547"
//         x="1339"
//         y="217.997"
//         width="476"
//         height="476"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//         <feBlend
//           mode="normal"
//           in="SourceGraphic"
//           in2="BackgroundImageFix"
//           result="shape"
//         ></feBlend>
//         <feGaussianBlur
//           stdDeviation="25.5"
//           result="effect1_foregroundBlur_1_547"
//         ></feGaussianBlur>
//       </filter>
//       <filter
//         id="filter4_f_1_547"
//         x="949"
//         y="441.998"
//         width="418"
//         height="418"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//         <feBlend
//           mode="normal"
//           in="SourceGraphic"
//           in2="BackgroundImageFix"
//           result="shape"
//         ></feBlend>
//         <feGaussianBlur
//           stdDeviation="11"
//           result="effect1_foregroundBlur_1_547"
//         ></feGaussianBlur>
//       </filter>
//       <filter
//         id="filter5_f_1_547"
//         x="227"
//         y="213.998"
//         width="418"
//         height="418"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//         <feBlend
//           mode="normal"
//           in="SourceGraphic"
//           in2="BackgroundImageFix"
//           result="shape"
//         ></feBlend>
//         <feGaussianBlur
//           stdDeviation="11"
//           result="effect1_foregroundBlur_1_547"
//         ></feGaussianBlur>
//       </filter>
//       <filter
//         id="filter6_f_1_547"
//         x="1819"
//         y="444.997"
//         width="341"
//         height="341"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//         <feBlend
//           mode="normal"
//           in="SourceGraphic"
//           in2="BackgroundImageFix"
//           result="shape"
//         ></feBlend>
//         <feGaussianBlur
//           stdDeviation="11"
//           result="effect1_foregroundBlur_1_547"
//         ></feGaussianBlur>
//       </filter>
//       <filter
//         id="filter7_f_1_547"
//         x="1086"
//         y="208.997"
//         width="377"
//         height="377"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//         <feBlend
//           mode="normal"
//           in="SourceGraphic"
//           in2="BackgroundImageFix"
//           result="shape"
//         ></feBlend>
//         <feGaussianBlur
//           stdDeviation="10.5"
//           result="effect1_foregroundBlur_1_547"
//         ></feGaussianBlur>
//       </filter>
//       <filter
//         id="filter8_f_1_547"
//         x="328"
//         y="92.9979"
//         width="377"
//         height="377"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//         <feBlend
//           mode="normal"
//           in="SourceGraphic"
//           in2="BackgroundImageFix"
//           result="shape"
//         ></feBlend>
//         <feGaussianBlur
//           stdDeviation="10.5"
//           result="effect1_foregroundBlur_1_547"
//         ></feGaussianBlur>
//       </filter>
//       <filter
//         id="filter9_f_1_547"
//         x="71"
//         y="111.998"
//         width="377"
//         height="377"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//         <feBlend
//           mode="normal"
//           in="SourceGraphic"
//           in2="BackgroundImageFix"
//           result="shape"
//         ></feBlend>
//         <feGaussianBlur
//           stdDeviation="10.5"
//           result="effect1_foregroundBlur_1_547"
//         ></feGaussianBlur>
//       </filter>
//       <filter
//         id="filter10_f_1_547"
//         x="1486"
//         y="314.997"
//         width="421"
//         height="421"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//         <feBlend
//           mode="normal"
//           in="SourceGraphic"
//           in2="BackgroundImageFix"
//           result="shape"
//         ></feBlend>
//         <feGaussianBlur
//           stdDeviation="10.5"
//           result="effect1_foregroundBlur_1_547"
//         ></feGaussianBlur>
//       </filter>
//       <filter
//         id="filter11_f_1_547"
//         x="1293"
//         y="260.998"
//         width="421"
//         height="421"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//         <feBlend
//           mode="normal"
//           in="SourceGraphic"
//           in2="BackgroundImageFix"
//           result="shape"
//         ></feBlend>
//         <feGaussianBlur
//           stdDeviation="10.5"
//           result="effect1_foregroundBlur_1_547"
//         ></feGaussianBlur>
//       </filter>
//       <filter
//         id="filter12_f_1_547"
//         x="0"
//         y="599.998"
//         width="421"
//         height="421"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//         <feBlend
//           mode="normal"
//           in="SourceGraphic"
//           in2="BackgroundImageFix"
//           result="shape"
//         ></feBlend>
//         <feGaussianBlur
//           stdDeviation="10.5"
//           result="effect1_foregroundBlur_1_547"
//         ></feGaussianBlur>
//       </filter>
//       <filter
//         id="filter13_f_1_547"
//         x="214"
//         y="0.998169"
//         width="421"
//         height="421"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//         <feBlend
//           mode="normal"
//           in="SourceGraphic"
//           in2="BackgroundImageFix"
//           result="shape"
//         ></feBlend>
//         <feGaussianBlur
//           stdDeviation="10.5"
//           result="effect1_foregroundBlur_1_547"
//         ></feGaussianBlur>
//       </filter>
//       <linearGradient
//         id="paint0_linear_1_547"
//         x1="1284.93"
//         y1="953.252"
//         x2="1712.65"
//         y2="343.23"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#1F80F0"></stop>
//         <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint1_linear_1_547"
//         x1="1353.31"
//         y1="1062.36"
//         x2="1781.04"
//         y2="452.338"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#1F80F0"></stop>
//         <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint2_linear_1_547"
//         x1="-180.015"
//         y1="1365.49"
//         x2="468.664"
//         y2="440.338"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#1F80F0"></stop>
//         <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint3_linear_1_547"
//         x1="159.946"
//         y1="921.947"
//         x2="572.804"
//         y2="333.127"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#1F80F0"></stop>
//         <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint4_linear_1_547"
//         x1="1159.24"
//         y1="1429.51"
//         x2="1882.92"
//         y2="397.388"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#1F80F0"></stop>
//         <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint5_linear_1_547"
//         x1="1231.02"
//         y1="904.825"
//         x2="1517.52"
//         y2="496.216"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#1F80F0"></stop>
//         <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint6_linear_1_547"
//         x1="1359.85"
//         y1="675.562"
//         x2="1597.7"
//         y2="336.34"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#1F80F0"></stop>
//         <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint7_linear_1_547"
//         x1="1139.41"
//         y1="871.153"
//         x2="1453.62"
//         y2="423.033"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#1F80F0"></stop>
//         <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint8_linear_1_547"
//         x1="1766.18"
//         y1="497.444"
//         x2="2039.43"
//         y2="216.389"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00E9EA"></stop>
//         <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint9_linear_1_547"
//         x1="1621.35"
//         y1="343.084"
//         x2="1757.38"
//         y2="186.949"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#1F80F0"></stop>
//         <stop offset="1" stopColor="#005CC7"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint10_linear_1_547"
//         x1="1539.82"
//         y1="386.104"
//         x2="1820.1"
//         y2="122.109"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="white"></stop>
//         <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint11_linear_1_547"
//         x1="1593.6"
//         y1="364.682"
//         x2="1938.9"
//         y2="9.53058"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00E9EA"></stop>
//         <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint12_linear_1_547"
//         x1="1619.64"
//         y1="412.046"
//         x2="1812.53"
//         y2="213.655"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00E9EA"></stop>
//         <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint13_linear_1_547"
//         x1="1322"
//         y1="673.497"
//         x2="1755"
//         y2="303.997"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00E9EA"></stop>
//         <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint14_linear_1_547"
//         x1="903"
//         y1="868.498"
//         x2="1336"
//         y2="498.998"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00E9EA"></stop>
//         <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint15_linear_1_547"
//         x1="181"
//         y1="640.498"
//         x2="614"
//         y2="270.998"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00E9EA"></stop>
//         <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint16_linear_1_547"
//         x1="1787"
//         y1="788.218"
//         x2="2130.85"
//         y2="494.791"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00E9EA"></stop>
//         <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint17_linear_1_547"
//         x1="1133.51"
//         y1="606.285"
//         x2="1275.78"
//         y2="429.168"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00E9EA"></stop>
//         <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint18_linear_1_547"
//         x1="1116.85"
//         y1="555.755"
//         x2="1433.94"
//         y2="261.347"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#40FEFF"></stop>
//         <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint19_linear_1_547"
//         x1="358.848"
//         y1="439.755"
//         x2="675.938"
//         y2="145.348"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#40FEFF"></stop>
//         <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint20_linear_1_547"
//         x1="101.848"
//         y1="458.755"
//         x2="418.938"
//         y2="164.348"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#40FEFF"></stop>
//         <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint21_linear_1_547"
//         x1="1643.28"
//         y1="647.974"
//         x2="2003.25"
//         y2="397.707"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="white"></stop>
//         <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint22_linear_1_547"
//         x1="1279.1"
//         y1="776.321"
//         x2="1815.37"
//         y2="217.592"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00E9EA"></stop>
//         <stop offset="1" stopColor="#1F80F0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint23_linear_1_547"
//         x1="1450.28"
//         y1="593.974"
//         x2="1810.25"
//         y2="343.707"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="white"></stop>
//         <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint24_linear_1_547"
//         x1="1086.1"
//         y1="722.321"
//         x2="1622.37"
//         y2="163.592"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00E9EA"></stop>
//         <stop offset="1" stopColor="#1F80F0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint25_linear_1_547"
//         x1="157.276"
//         y1="932.975"
//         x2="517.248"
//         y2="682.708"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="white"></stop>
//         <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint26_linear_1_547"
//         x1="-206.902"
//         y1="1061.32"
//         x2="329.37"
//         y2="502.593"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00E9EA"></stop>
//         <stop offset="1" stopColor="#1F80F0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint27_linear_1_547"
//         x1="371.276"
//         y1="333.975"
//         x2="731.248"
//         y2="83.7077"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="white"></stop>
//         <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint28_linear_1_547"
//         x1="7.09845"
//         y1="462.322"
//         x2="543.37"
//         y2="-96.4076"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00E9EA"></stop>
//         <stop offset="1" stopColor="#1F80F0"></stop>
//       </linearGradient>
//     </defs>
//   </svg>
//   <svg
//     id="cta-mobile-background-pattern"
//     className="block lg:hidden absolute inset-0 top-0 left-0 h-full w-full"
//     preserveAspectRatio="xMidYMid slice"
//     viewBox="0 0 390 348"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <g clipPath="url(#clip0_6_119)">
//       <mask
//         id="mask0_6_119"
//         style={{ maskType: "luminance" }}
//         maskUnits="userSpaceOnUse"
//         x="0"
//         y="0"
//         width="390"
//         height="348"
//       >
//         <path
//           d="M0 347.583L390 347.583L390 0.0220032L0 0.0220032L0 347.583Z"
//           fill="white"
//         ></path>
//       </mask>
//       <g mask="url(#mask0_6_119)">
//         <g filter="url(#filter0_f_6_119)">
//           <path
//             d="M458 134.145L79 513.145H106.084L458 161.228V134.145Z"
//             fill="url(#paint0_linear_6_119)"
//           ></path>
//           <path
//             d="M458 134.145L79 513.145H106.084L458 161.228V134.145Z"
//             fill="url(#paint1_linear_6_119)"
//           ></path>
//         </g>
//         <g style={{ mixBlendMode: "multiply" }}>
//           <path
//             d="M424 144.289V13.1445L0 437.145H131.144L424 144.289Z"
//             fill="url(#paint2_linear_6_119)"
//           ></path>
//         </g>
//         <g style={{ mixBlendMode: "multiply" }}>
//           <path
//             d="M513 107.782V0.144531L165 348.145H272.637L513 107.782Z"
//             fill="url(#paint3_linear_6_119)"
//           ></path>
//         </g>
//         <g filter="url(#filter1_f_6_119)">
//           <path
//             d="M222 152.145L13.0001 360.145H27.9354L222 167.008V152.145Z"
//             fill="url(#paint4_linear_6_119)"
//           ></path>
//           <path
//             d="M222 152.145L13.0001 360.145H27.9354L222 167.008V152.145Z"
//             fill="url(#paint5_linear_6_119)"
//           ></path>
//         </g>
//         <g style={{ mixBlendMode: "multiply" }}>
//           <path
//             d="M603 180.782V73.1445L255 421.145H362.637L603 180.782Z"
//             fill="url(#paint6_linear_6_119)"
//           ></path>
//         </g>
//         <g style={{ mixBlendMode: "multiply" }}>
//           <path
//             d="M358 -141.629V-337.417L-275 295.583H-79.2115L358 -141.629Z"
//             fill="url(#paint7_linear_6_119)"
//           ></path>
//         </g>
//         <g filter="url(#filter2_f_6_119)">
//           <path
//             d="M530 216.521V144.145L297 378.145H369.068L530 216.521Z"
//             fill="url(#paint8_linear_6_119)"
//           ></path>
//         </g>
//       </g>
//     </g>
//     <defs>
//       <filter
//         id="filter0_f_6_119"
//         x="58"
//         y="113.145"
//         width="421"
//         height="421"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//         <feBlend
//           mode="normal"
//           in="SourceGraphic"
//           in2="BackgroundImageFix"
//           result="shape"
//         ></feBlend>
//         <feGaussianBlur
//           stdDeviation="10.5"
//           result="effect1_foregroundBlur_6_119"
//         ></feGaussianBlur>
//       </filter>
//       <filter
//         id="filter1_f_6_119"
//         x="-7.99988"
//         y="131.145"
//         width="251"
//         height="250"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//         <feBlend
//           mode="normal"
//           in="SourceGraphic"
//           in2="BackgroundImageFix"
//           result="shape"
//         ></feBlend>
//         <feGaussianBlur
//           stdDeviation="10.5"
//           result="effect1_foregroundBlur_6_119"
//         ></feGaussianBlur>
//       </filter>
//       <filter
//         id="filter2_f_6_119"
//         x="246"
//         y="93.145"
//         width="335"
//         height="336"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//         <feBlend
//           mode="normal"
//           in="SourceGraphic"
//           in2="BackgroundImageFix"
//           result="shape"
//         ></feBlend>
//         <feGaussianBlur
//           stdDeviation="25.5"
//           result="effect1_foregroundBlur_6_119"
//         ></feGaussianBlur>
//       </filter>
//       <linearGradient
//         id="paint0_linear_6_119"
//         x1="215.276"
//         y1="446.121"
//         x2="575.248"
//         y2="195.854"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="white"></stop>
//         <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint1_linear_6_119"
//         x1="-148.902"
//         y1="574.468"
//         x2="387.37"
//         y2="15.7388"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00E9EA"></stop>
//         <stop offset="1" stopColor="#1F80F0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint2_linear_6_119"
//         x1="-185.147"
//         y1="830.051"
//         x2="296.8"
//         y2="259.771"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#1F80F0"></stop>
//         <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint3_linear_6_119"
//         x1="13.0401"
//         y1="670.625"
//         x2="408.6"
//         y2="202.565"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#1F80F0"></stop>
//         <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint4_linear_6_119"
//         x1="88.1494"
//         y1="323.361"
//         x2="286.035"
//         y2="185.122"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="white"></stop>
//         <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint5_linear_6_119"
//         x1="-112.676"
//         y1="393.8"
//         x2="181.575"
//         y2="85.7519"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00E9EA"></stop>
//         <stop offset="1" stopColor="#1F80F0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint6_linear_6_119"
//         x1="103.04"
//         y1="743.625"
//         x2="498.6"
//         y2="275.565"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#1F80F0"></stop>
//         <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint7_linear_6_119"
//         x1="-551.41"
//         y1="882.163"
//         x2="168.1"
//         y2="30.7781"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#1F80F0"></stop>
//         <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
//       </linearGradient>
//       <linearGradient
//         id="paint8_linear_6_119"
//         x1="254.636"
//         y1="397.227"
//         x2="525.366"
//         y2="167.188"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00E9EA"></stop>
//         <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
//       </linearGradient>
//       <clipPath id="clip0_6_119">
//         <rect width="390" height="348" fill="white"></rect>
//       </clipPath>
//     </defs>
//   </svg>
// </section>
