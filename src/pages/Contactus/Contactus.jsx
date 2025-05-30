import { Helmet } from "react-helmet";
import ContactusBtn from "../../components/ContactusBtn";

const Contactus = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us | AnyTech</title>
      </Helmet>
      <div className="w-full h-full relative overflow-hidden">
        {/* SVG Part*/}
        <div
          className="w-full h-screen absolute top-0 left-0"
          style={{
            background:
              "radial-gradient(300.77% 113.48% at 0% 99.92%, #FE8B53 15.56%, #1F80F0 25.98%, #014AB8 40%), #1F80F0",
            clipPath: "polygon(0 0, 100% 0%, 100% 60%, 0 93%)",
          }}
        >
          <div
            className="w-full h-full relative"
            style={{ clipPath: "polygon(0 0, 100% 0%, 100% 52%, 0 93%)" }}
          >
            <div className="absolute z-0 w-full h-full top-0 left-0">
              <svg
                className="w-full h-full"
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
          </div>
        </div>
        {/* Content Part */}
        <div className="w-full h-full p-5 mt-20 mx-auto flex justify-center items-center flex-col relative z-10 lg:justify-between lg:items-start lg:flex-row lg:gap-2 xl:w-4/5">
          {/* Left Side Content */}
          <div className="w-full space-y-5 lg:w-1/4">
            <p className="text-[#05cae1] font-extrabold tracking-[4px]">
              Contact US
            </p>
            <h1 className="text-3xl text-white font-bold sm:text-5xl lg:text-3xl">
              Let’s <br />
              talk
            </h1>
            <p className="text-white text-sm sm:text-lg lg:text-base">
              Have questions about building the next generation of banking
              experiences, our pricing, or our customer success stories?
            </p>
          </div>
          {/* Right Side Content */}
          <div className="w-full h-full mt-5 space-y-5 shadow-2xl shadow-white lg:w-3/4">
            {/* Contact Form */}
            <form className="bg-white border border-gray-300 space-y-10 p-6 rounded-2xl">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-700 font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-3 border border-black rounded-md w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-700 font-medium">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-3 border border-black rounded-md w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-700 font-medium">Job Title</label>
                  <input
                    type="text"
                    placeholder="Job Title"
                    className="p-3 border border-black rounded-md w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-700 font-medium">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="p-3 border border-black rounded-md w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 border border-black rounded-md w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">Message</label>
                <textarea
                  placeholder="Message"
                  className="p-3 border border-black rounded-md w-full h-32"
                ></textarea>
              </div>
              <p className="text-[#1E4078]">
                By submitting this form, you confirm that you agree to the
                processing of your personal data by{" "}
                <span className="font-bold text-[#1E4068]">AnyTech</span> as
                described in the{" "}
                <span className="underline">privacy policy</span>.
              </p>
              <ContactusBtn data={"Submit"} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
