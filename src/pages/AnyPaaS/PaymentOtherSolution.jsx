import SectionHeading from "../../components/SectionHeading";
import ServiceCard from "../../components/serviceCard";
import data from "../../lib/PaymentOtherSolutionData.json";

const PaymentOtherSolution = () => {
  return (
    <div className="w-4/5 h-full mx-auto space-y-10">
      <SectionHeading
        title={"Solutions"}
        titleColor={"text-[#00DFE0]"}
        description={"Designed for your needs"}
      />
      <ServiceCard data={data} />
    </div>
  );
};

export default PaymentOtherSolution;
