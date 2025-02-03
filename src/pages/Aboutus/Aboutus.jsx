import { Helmet } from "react-helmet";
import AboutUsSection from "./AboutUsSection";
import FinancialInstitutionSection from "./FinancialInstitutionSection";
import Founder from "./Founder";
import Mission from "./Mission";
import StorySection from "./StorySection";
import Values from "./Values";

const Aboutus = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us | AnyTech</title>
      </Helmet>
      <div>
        <AboutUsSection />
        <StorySection />
        <FinancialInstitutionSection />
        <Mission />
        <Values />
        <Founder />
      </div>
    </>
  );
};

export default Aboutus;
