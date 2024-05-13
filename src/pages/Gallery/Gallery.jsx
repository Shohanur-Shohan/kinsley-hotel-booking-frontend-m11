import { Helmet } from "react-helmet-async";
import PageHeading from "../../components/PageHeading/PageHeading";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import Featured from "../../components/Home/Featured/Featured";

const Gallery = () => {
  return (
    <main>
      <Helmet>
        <title>Kinsley-Hotel | Gallery</title>
      </Helmet>

      <PageHeading
        title={"Photo Gallery"}
        des={
          "Select your perfect retreat from our range of meticulously curated rooms. Find comfort, style, and convenience tailored to your preferences."
        }
        btn={"Home > Gallery"}
      />

      <div className="w-full bg-[#F2FFFF] py-[60px] md:py-[100px]">
        <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 [&>img:not(:first-child)]:mt-6">
          <img
            className="rounded-md"
            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-1-950x633.jpg"
            alt="img"
          />
          <img
            className="rounded-md"
            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-2-950x713.jpg"
            alt="img"
          />
          <img
            className="rounded-md"
            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-5-950x633.jpg"
            alt="img"
          />
          <img
            className="rounded-md"
            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-6-950x713.jpg"
            alt="img"
          />
          <img
            className="rounded-md"
            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/about-v5-950x1344.jpg"
            alt="img"
          />
          <img
            className="rounded-md"
            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/about-v4-950x1241.jpg"
            alt="img"
          />
          <img
            className="rounded-md"
            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/about-v3-950x1266.jpg"
            alt="img"
          />
          <img
            className="rounded-md"
            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3-950x633.jpg"
            alt="img"
          />
          <img
            className="rounded-md"
            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/about-v2-950x1383.jpg"
            alt="img"
          />
          <img
            className="rounded-md"
            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-2-950x713.jpg"
            alt="img"
          />
          <img
            className="rounded-md"
            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/about-v1-950x1377.jpg"
            alt="img"
          />
          <img
            className="rounded-md"
            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-8-950x616.jpg"
            alt="img"
          />

          <img
            className="rounded-md"
            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/about-v2-950x1383.jpg"
            alt="img"
          />
        </div>
        <Featured />
        <Testimonials />
      </div>
    </main>
  );
};

export default Gallery;
