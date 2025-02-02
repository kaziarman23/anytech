import AnyCaaSSection from "./AnyCaaSSection";
import CardBenefits from "./CardBenefits";
import CardFeatures from "./CardFeatures";
import CardReview from "./CardReview";
import CardService from "./CardService";
import OtherSolutions from "./OtherSolutions";

const AnyCaaS = () => {
  return (
    <div>
      <AnyCaaSSection />
      <CardService />
      <CardFeatures />
      <CardBenefits />
      <CardReview />
      <OtherSolutions />
    </div>
  );
};

export default AnyCaaS;
