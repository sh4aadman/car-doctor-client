import AboutUs from "./AboutUs";
import Carousel from "./Carousel";
import Info from "./Info";
import PopularProducts from "./PopularProducts";
import Services from "./Services";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Carousel />
      <AboutUs />
      <Services />
      <Info />
      <PopularProducts />
    </div>
  );
};

export default Home;
