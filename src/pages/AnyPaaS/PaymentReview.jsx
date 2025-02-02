import Marquee from "react-fast-marquee";
import datas from "../../lib/ReviewData.json";

const PaymentReview = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-5">
      <p className="font-extrabold uppercase tracking-[4px] text-[#00DFE0]">
        TRUSTED BY THE BEST
      </p>
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

export default PaymentReview;
