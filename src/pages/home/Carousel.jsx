import carousel1 from "../../../public/homeCarousel/1.jpg";
import carousel2 from "../../../public/homeCarousel/2.jpg";
import carousel3 from "../../../public/homeCarousel/3.jpg";
import carousel4 from "../../../public/homeCarousel/4.jpg";
import CarouselContent from "./CarouselContent";

const Carousel = () => {
  return (
    <div className="carousel">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={carousel1} className="w-full" />
        <div className="absolute">
          <CarouselContent />
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={carousel2} className="w-full" />
        <div className="absolute">
          <CarouselContent />
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={carousel3} className="w-full" />
        <div className="absolute">
          <CarouselContent />
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={carousel4} className="w-full" />
        <div className="absolute">
          <CarouselContent />
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
