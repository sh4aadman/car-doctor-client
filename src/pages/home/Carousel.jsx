import carousel1 from "../../../public/homeCarousel/1.jpg";
import carousel2 from "../../../public/homeCarousel/2.jpg";
import carousel3 from "../../../public/homeCarousel/3.jpg";
import carousel4 from "../../../public/homeCarousel/4.jpg";
import CarouselContent from "./CarouselContent";

const Carousel = () => {
  return (
    <div className="carousel mt-8">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={carousel1} className="w-full h-[600px] rounded-xl" />
        <div className="absolute w-full">
          <CarouselContent />
          <a
            href="#slide4"
            className="absolute btn btn-circle bg-transparent text-white border-none bottom-12 right-32"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="absolute btn btn-circle bg-[#FF3811] text-white border-none bottom-12 right-16"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={carousel2} className="w-full h-[600px] rounded-xl" />
        <div className="absolute w-full">
          <CarouselContent />
          <a
            href="#slide1"
            className="absolute btn btn-circle bg-transparent text-white border-none bottom-12 right-32"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="absolute btn btn-circle bg-[#FF3811] text-white border-none bottom-12 right-16"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={carousel3} className="w-full h-[600px] rounded-xl" />
        <div className="absolute w-full">
          <CarouselContent />
          <a
            href="#slide2"
            className="absolute btn btn-circle bg-transparent text-white border-none bottom-12 right-32"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="absolute btn btn-circle bg-[#FF3811] text-white border-none bottom-12 right-16"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={carousel4} className="w-full h-[600px] rounded-xl" />
        <div className="absolute w-full">
          <CarouselContent />
          <a
            href="#slide3"
            className="absolute btn btn-circle bg-transparent text-white border-none bottom-12 right-32"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="absolute btn btn-circle bg-[#FF3811] text-white border-none bottom-12 right-16"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
