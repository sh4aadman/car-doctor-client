import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const PopularProduct = (props) => {
  const { img, title } = props;

  return (
    <div className="p-6 border rounded-lg text-center">
      <figure>
        <img
          className="rounded-lg h-[200px] bg-[#F3F3F3] px-20 py-7"
          src={img}
          alt="service-img"
        />
      </figure>
      <div className="mt-5">
        <div className="flex justify-center mb-2 text-[#FF912C]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <h2 className="font-bold text-2xl text-[#444444] mb-3">{title}</h2>
        <p className="text-[#FF3811] font-semibold text-sm">Price: $20.00</p>
      </div>
    </div>
  );
};

export default PopularProduct;

PopularProduct.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};
