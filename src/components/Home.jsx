import About from "./About";
import Cities from "./Cities";
import Cta from "./Cta";
import Footer from "./Footer";
import Hero from "./Hero";
import Hostels from "./Hostels";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Cities />
      <About />
      {/* <Hostels /> */}
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
