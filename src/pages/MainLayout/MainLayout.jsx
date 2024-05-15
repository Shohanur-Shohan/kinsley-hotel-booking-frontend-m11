import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const MainLayout = () => {
  return (
    <>
      <ScrollRestoration
        getKey={(location, matches) => {
          const paths = ["/home", "/notifications"];
          return paths.includes(location.pathname)
            ? // home and notifications restore by pathname
              location.pathname
            : // everything else by location like the browser
              location.key;
        }}
      />
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
