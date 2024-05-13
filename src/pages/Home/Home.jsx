import { Helmet } from "react-helmet-async";
import Hero from "../../components/Home/Hero/Hero";
import About from "../../components/Home/About/About";
import Featured from "../../components/Home/Featured/Featured";
import AllRooms from "../../components/Home/AllRooms/AllRooms";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import Newsletter from "../../components/Newsletter";
import Map from "../../components/Map/Map";
import Modal from "./Modal";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Kinsley-Hotel | Home</title>
      </Helmet>
      <Hero />
      <About />
      <Featured />
      <AllRooms />
      <Testimonials />
      <Map />
      <Newsletter />
      <Modal />
    </main>
  );
};

export default Home;
