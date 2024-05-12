import { Helmet } from "react-helmet-async";
import Hero from "../../components/Home/Hero/Hero";
import About from "../../components/Home/About/About";
import Featured from "../../components/Home/Featured/Featured";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Kinsley-Hotel | Home</title>
      </Helmet>
      <Hero />
      <About />
      <Featured />
    </main>
  );
};

export default Home;
