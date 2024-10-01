import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const CustomerReview = (props) => {
  const { img } = props;

  return (
    <div className="border rounded-lg p-12">
      <div className="flex items-center gap-5">
        <figure>
          <img className="h-14 w-14" src={img} alt="image of customer" />
        </figure>
        <div>
          <h3 className="text-[#444444] font-bold text-2xl">Awlad Hossain</h3>
          <p className="text-[#737373] font-semibold text-xl">Businessman</p>
        </div>
      </div>
      <p className="text-[#737373] text-sm my-5 leading-7 ">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomized words which do not look even slightly believable.{" "}
      </p>
      <div className="flex text-[#FF912C]">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    </div>
  );
};

export default CustomerReview;

CustomerReview.propTypes = {
  img: PropTypes.string,
};
