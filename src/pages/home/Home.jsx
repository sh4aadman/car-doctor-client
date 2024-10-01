import AboutUs from "./AboutUs";
import Carousel from "./Carousel";
import CoreFeatures from "./CoreFeatures";
import Info from "./Info";
import MeetTeam from "./MeetTeam";
import PopularProducts from "./PopularProducts";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Carousel />
      <AboutUs />
      <Services />
      <Info />
      <PopularProducts />
      <MeetTeam />
      <CoreFeatures />
      <Testimonial />
    </div>
  );
};

export default Home;
