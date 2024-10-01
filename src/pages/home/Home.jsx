import AboutUs from "./AboutUs";
import Carousel from "./Carousel";
import Services from "./Services";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Carousel />
      <AboutUs />
      <Services />
    </div>
  );
};

export default Home;
