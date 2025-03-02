import SectionHeading from "../../components/SectionHeading";
import ServiceCard from "../../components/ServiceCard";
import data from "../../lib/BankingOtherSectionData.json";

const BankingOtherSolutions = () => {
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

export default BankingOtherSolutions;
