import SectionHeading from "../../components/SectionHeading";
import data from "../../lib/PhilosophyFeatureData.json";

const Philosophy = () => {
  return (
    <div className="w-4/5 h-full mx-auto space-y-10">
      <SectionHeading
        title={"OUR PHILOSOPHY"}
        description={"Human-centred innovation"}
      />
      {/* Image Section */}
      <figure>
        <img
          src="https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?w=1600&auto=format"
          alt="Philosophy Section Image"
          className="w-full h-full object-cover"
        />
      </figure>

      {/* content section */}
      <div className="flex justify-evenly items-center gap-5 ">
        {data.map((content) => (
          <div
            key={content.id}
            className="w-1/3 h-80 bg-[#F9FCFE] rounded-2xl p-5 space-y-5"
          >
            <img src={content.icon} alt={content.title} />
            <h1 className="text-[#1E4068] text-2xl font-bold">
              {content.title}
            </h1>
            <p className="text-[#3d6f9c]">{content.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Philosophy;
