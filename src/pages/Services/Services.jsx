import { Helmet } from "react-helmet";
import Consult from "./Consult";
import Implement from "./Implement";
import Operate from "./Operate";
import Service from "./Service";
import ServiceReview from "./ServiceReview";
import ServiceSolution from "./ServiceSolution";
import WhatWeDo from "./WhatWeDo";

const Services = () => {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Our Services | AnyTech</title>
      </Helmet>
    <div>
      <Service />
      <WhatWeDo />
      <Consult />
      <Implement />
      <Operate />
      <ServiceSolution />
      <ServiceReview />
    </div>
    </>
  );
};

export default Services;
