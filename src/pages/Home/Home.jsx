import { Helmet } from "react-helmet-async";
import Hero from "../../components/Home/Hero/Hero";
// import HotelFeatures from "../../components/Home/HotelFeatures/HotelFeatures";
import About from "../../components/Home/About/About";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Kinsley-Hotel | Home</title>
      </Helmet>
      <Hero />
      {/* <HotelFeatures /> */}
      <About />
    </main>
  );
};

export default Home;
