import { Helmet } from "react-helmet-async";
import Hero from "../../components/Home/Hero/Hero";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Kinsley-Hotel | Home</title>
      </Helmet>
      <Hero />
      <div className="h-screen"></div>
    </main>
  );
};

export default Home;
