import AnyBaaSSection from "./AnyBaaSSection";
import BankingBenefits from "./BankingBenefits";
import BankingFeatures from "./BankingFeatures";
import BankingOtherSolutions from "./BankingOtherSolutions";
import BankingReview from "./BankingReview";
import BankingService from "./BankingService";

const AnyBaaS = () => {
  return (
    <div>
      <AnyBaaSSection />
      <BankingService />
      <BankingFeatures />
      <BankingBenefits />
      <BankingReview />
      <BankingOtherSolutions />
    </div>
  );
};

export default AnyBaaS;
