import { Helmet } from "react-helmet";
import AnyBaaSSection from "./AnyBaaSSection";
import BankingBenefits from "./BankingBenefits";
import BankingFeatures from "./BankingFeatures";
import BankingOtherSolutions from "./BankingOtherSolutions";
import BankingReview from "./BankingReview";
import BankingService from "./BankingService";

const AnyBaaS = () => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Banking Services | AnyTech</title>
      </Helmet>
    <div>
      <AnyBaaSSection />
      <BankingService />
      <BankingFeatures />
      <BankingBenefits />
      <BankingReview />
      <BankingOtherSolutions />
    </div>
    </>
  );
};

export default AnyBaaS;
