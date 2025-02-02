import AnyPaaSSection from "./AnyPaaSSection";
import PaymentBenefits from "./PaymentBenefits";
import PaymentFeatures from "./PaymentFeatures";
import PaymentOtherSolution from "./PaymentOtherSolution";
import PaymentReview from "./PaymentReview";
import PaymentService from "./PaymentService";

const AnyPaaS = () => {
  return (
    <div>
      <AnyPaaSSection />
      <PaymentService />
      <PaymentFeatures />
      <PaymentBenefits />
      <PaymentReview />
      <PaymentOtherSolution />
    </div>
  );
};

export default AnyPaaS;
