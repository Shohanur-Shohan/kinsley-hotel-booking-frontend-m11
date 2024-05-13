import { Helmet } from "react-helmet-async";
import Heading from "../../components/Heading";
import AboutFeatures from "../../components/Home/About/AboutFeatures";
import Team from "../../components/Home/About/Team";
import Testimonials from "../../components/Home/Testimonials/Testimonials";

const About = () => {
  return (
    <main>
      <Helmet>
        <title>Kinsley-Hotel | About</title>
      </Helmet>

      <div className="w-full bg-[#ECFAFB]  border-t-[20px] border-white py-[100px] px-2 sm:px-4">
        <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4">
          <Heading
            title={"What We Offer For You "}
            des={
              "Select your perfect retreat from our range of meticulously curated rooms. Find comfort, style, and convenience tailored to your preferences."
            }
            btn={"Services"}
          />
          <AboutFeatures />
          <div className="w-full my-[60px] md:my-[100px]">
            <Heading
              title={"Our awesome Team "}
              des={
                "Meet our dedicated team of professionals, committed to delivering exceptional service. Experience personalized care and expertise from our knowledgeable staff"
              }
            />
            <Team />
          </div>
          <Testimonials />
        </div>
      </div>
    </main>
  );
};

export default About;
