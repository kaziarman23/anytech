const ServiceSolution = () => {
  return (
    <div className="w-full h-full">
      <div className="w-11/12 h-full mx-auto sm:w-4/5">
        <h1 className="text-2xl text-center text-[#1E4068] font-bold mb-5 xl:text-5xl">
          Our solutions
        </h1>

        {/* card part */}
        <div className="flex justify-center items-center flex-col gap-5 lg:flex-row lg:gap-2">
          <div className="w-full rounded-2xl p-5 space-y-5 border-2 border-white hover:border-[#1CC800] cursor-pointer shadow-2xl lg:w-1/3">
            <h1 className="bg-gradient-to-r from-[#1CC800] via-[#1CC800] to-[#014AB8] text-5xl w-4/5 bg-clip-text text-transparent font-bold">
              AnyCaaS
            </h1>
            <div className="flex items-center gap-1 text-blue-600 font-bold text-xs">
              By
              <img
                src="https://anytxn.com/icons/logo-small.svg"
                alt="AnyCaaS Image"
              />
            </div>
            <p className="">
              Reimagine your card programmes with our{" "}
              <span className="font-bold text-[#1E4068]">
                Cards-as-a-Service (CaaS)
              </span>{" "}
              solution. Streamline card management, deliver superior customer
              experiences, and more.
            </p>
          </div>
          <div className="w-full rounded-2xl p-5 space-y-5 border-2 border-white hover:border-[#9747FF] cursor-pointer shadow-2xl lg:w-1/3">
            <h1 className="bg-gradient-to-r from-[#9747FF] via-[#9747FF] to-[#014AB8] text-5xl w-4/5 bg-clip-text text-transparent font-bold">
              AnyBaaS
            </h1>
            <div className="flex items-center gap-1 text-blue-600 font-bold text-xs">
              By
              <img
                src="https://anytxn.com/icons/logo-small.svg"
                alt="AnyCaaS Image"
              />
            </div>
            <p className="">
              Dive into the future of banking with our
              <span className="font-bold text-[#1E4068]">
                Banking-as-a-Service (BaaS)
              </span>{" "}
              platform that gives you the tools you need to adapt and scale in
              today’s fast-paced digital environment.
            </p>
          </div>
          <div className="w-full rounded-2xl p-5 space-y-5 border-2 border-white hover:border-[#40FEFF] cursor-pointer shadow-2xl lg:w-1/3">
            <h1 className="bg-gradient-to-r from-[#40FEFF] via-[#40FEFF] to-[#014AB8] text-5xl w-4/5 bg-clip-text text-transparent font-bold">
              AnyPaaS
            </h1>
            <div className="flex items-center gap-1 text-blue-600 font-bold text-xs">
              By
              <img
                src="https://anytxn.com/icons/logo-small.svg"
                alt="AnyCaaS Image"
              />
            </div>
            <p className="">
              Enhance your payment processing capabilities with our
              <span className="font-bold text-[#1E4068]">
                Payment-as-a-Service (PaaS)
              </span>{" "}
              solution. Experience scalable and secure infrastructure that
              handles transactions with ease.
            </p>
          </div>
        </div>
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

export default ServiceSolution;
