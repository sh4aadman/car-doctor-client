import AboutUs from "./AboutUs";
import Carousel from "./Carousel";
import Info from "./Info";
import MeetTeam from "./MeetTeam";
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
      <MeetTeam />
    </div>
  );
};

export default Home;
