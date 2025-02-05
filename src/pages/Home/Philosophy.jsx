import { animateBottom } from "../../Animation/Animation";
import SectionHeading from "../../components/SectionHeading";
import data from "../../lib/PhilosophyFeatureData.json";
import { motion } from "framer-motion";

const Philosophy = () => {
  return (
    <div className="w-4/5 h-full mx-auto space-y-10 my-10">
      <SectionHeading
        title={"OUR PHILOSOPHY"}
        description={"Human-centred innovation"}
      />
      {/* Image Section */}
      <figure>
        {/* Small Screen Image */}
        <img
          src="https://cdn.sanity.io/images/6jywt20u/production/50bc481601f8adb912da12788f7d0143eb5b5eb3-1710x1965.png?w=640&auto=format"
          alt="Philosophy Section Small Screen Image"
          className="w-full h-full object-cover md:hidden"
        />
        <img
          src="https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?w=1600&auto=format"
          alt="Philosophy Section Large Screen Image"
          className="w-full h-full object-cover hidden md:block"
        />
      </figure>

      {/* content section */}
      <div className="flex justify-cneter items-center gap-5 flex-col  lg:justify-evenly lg:flex-row">
        {data.map((content) => (
          <motion.div
            {...animateBottom}
            key={content.id}
            className="w-full h-80 bg-[#F9FCFE] rounded-2xl p-5 space-y-5 lg:w-1/3"
          >
            <img src={content.icon} alt={content.title} />
            <h1 className="text-[#1E4068] text-lg md:text-2xl lg:text-lg font-bold">
              {content.title}
            </h1>
            <p className="text-[#3d6f9c]">{content.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Philosophy;
