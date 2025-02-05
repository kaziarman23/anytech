import datas from "../../lib/ReviewData.json";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Review = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="w-full h-full py-10">
      {/* Header */}
      <div className="w-4/5 h-full mx-auto mb-8 text-center">
        <p className="text-[#0057BB] font-extrabold tracking-wider text-lg md:text-xl lg:text-2xl">
          TRUSTED BY THE BEST
        </p>
      </div>

      {/* Statistics Section */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-20 text-center">
        <div>
          <span className="text-[#0057BB] text-4xl md:text-6xl lg:text-7xl font-bold">
            {inView && <CountUp start={0} end={20} duration={2} />}
          </span>
          <h5 className="text-md md:text-lg">Years of Experience</h5>
        </div>
        <div>
          <span className="text-[#0057BB] text-4xl md:text-6xl lg:text-7xl font-bold">
            {inView && <CountUp start={0} end={40} duration={2.5} />}+
          </span>
          <h5 className="text-md md:text-lg">Financial Institutions</h5>
        </div>
        <div>
          <span className="text-[#0057BB] text-4xl md:text-6xl lg:text-7xl font-bold">
            {inView && <CountUp start={0} end={200} duration={3} />}m
          </span>
          <h5 className="text-md md:text-lg">Customers Each</h5>
        </div>
      </div>

      {/* Brands Section */}
      <div className="w-11/12 mx-auto mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
        {datas.map((data, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={data.image}
              alt={data.title}
              className="w-3/4 md:w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
