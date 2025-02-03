import SectionHeading from "../../components/SectionHeading";
import ServiceCard from "../../components/ServiceCard";
import data from "../../lib/CardOtherSectionData.json";

const OtherSolutions = () => {
  return (
    <div className="w-4/5 h-full mx-auto space-y-10">
      <SectionHeading
        title={"Solutions"}
        titleColor={"text-green-500"}
        description={"Designed for your needs"}
      />
      <ServiceCard data={data} />
    </div>
  );
};

export default OtherSolutions;
