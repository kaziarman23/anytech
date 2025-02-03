import { Helmet } from "react-helmet";
import AnyPaaSSection from "./AnyPaaSSection";
import PaymentBenefits from "./PaymentBenefits";
import PaymentFeatures from "./PaymentFeatures";
import PaymentOtherSolution from "./PaymentOtherSolution";
import PaymentReview from "./PaymentReview";
import PaymentService from "./PaymentService";

const AnyPaaS = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Payment Services | AnyTech</title>
      </Helmet>
      <div>
        <AnyPaaSSection />
        <PaymentService />
        <PaymentFeatures />
        <PaymentBenefits />
        <PaymentReview />
        <PaymentOtherSolution />
      </div>
    </>
  );
};

export default AnyPaaS;
