import Marquee from "react-fast-marquee";
import datas from "../../lib/ReviewData.json";

const FinancialInstitutionSection = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-4/5 h-full mx-auto flex justify-center items-center flex-col gap-10">
        <div className="h-32 relative flex justify-center items-end">
          <h1 className="text-base sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-left text-[#1E4068] font-bold">
            Empowering more than{" "}
            <span className="text-blue-500"> 40 financial institutions</span> to
            transform in a digital-first world.
          </h1>
          <figure className="absolute top-0 left-0">
            <img
              src="https://anytxn.com/icons/about-us/empower.svg"
              alt="FinancialInstitutionSection"
            />
          </figure>
        </div>

        <hr className="w-full border-t border-[#cfe7f1]" />
        {/* Auto Scroll Part */}
        <Marquee speed={80} pauseOnHover={true}>
          {datas.map((data, index) => (
            <img
              key={index}
              src={data.image}
              alt={data.title}
              className="w-60 h-20 mx-10 object-cover"
            />
          ))}
        </Marquee>
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

export default FinancialInstitutionSection;
