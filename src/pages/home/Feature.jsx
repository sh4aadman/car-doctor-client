import PropTypes from "prop-types";

const Feature = (props) => {

    const { img, title } = props;

    return (
        <div className="border rounded-lg p-7 text-center">
            <img className="w-12 h-12 mx-auto" src={img} alt={title} />
            <p className="text-[#444444] font-bold text-sm mt-5">{title}</p>
        </div>
    );
};

export default Feature;

Feature.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
}