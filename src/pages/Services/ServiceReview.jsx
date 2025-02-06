import Marquee from "react-fast-marquee";
import datas from "../../lib/ReviewData.json";

const ServiceReview = () => {
  return (
    <div className="w-full h-full">
      <div className="w-4/5 h-full mx-auto">
        <p className="text-[#0057BB] font-extrabold text-center p-5 mb-2 tracking-wider text-base sm:text-xl">
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
      </div>
    </div>
  );
};

export default ServiceReview;
