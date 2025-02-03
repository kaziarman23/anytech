import Hero from "./Hero";
import Advertisement from "./Advertisement";
import Philosophy from "./Philosophy";
import Technology from "./Technology";
import Review from "./Review";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page | AnyTech</title>
      </Helmet>
      <div>
        <Hero />
        <Advertisement />
        <Philosophy />
        <Technology />
        <Review />
      </div>
    </>
  );
};

export default Home;
