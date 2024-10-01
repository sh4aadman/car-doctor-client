import PropTypes from "prop-types";

const ServiceCard = (props) => {
  const { data } = props;

  return (
    <div className="p-6 border rounded-lg">
      <figure>
        <img
          className="rounded-lg w-full h-[200px]"
          src={data.img}
          alt="service-img"
        />
      </figure>
      <div className="mt-5">
        <h2 className="font-bold text-2xl text-[#444444] mb-5">{data.title}</h2>
        <div className="flex justify-between">
          <p className="text-[#FF3811] font-semibold text-sm">
            Price: ${data.price}
          </p>
          <button className="text-[#FF3811] text-sm"> ❯ </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  data: PropTypes.object,
};
