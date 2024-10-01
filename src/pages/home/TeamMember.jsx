import PropTypes from "prop-types";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const TeamMember = (props) => {
  const { img, name, title } = props;

  return (
    <div className="p-6 border rounded-lg">
      <figure>
        <img
          className="rounded-lg w-full h-[250px]"
          src={img}
          alt="service-img"
        />
      </figure>
      <div className="mt-5">
        <h2 className="font-bold text-2xl text-[#444444] mb-2">{name}</h2>
        <p className="text-[#737373] font-semibold text-sm mb-3">{title}</p>
        <div className="flex justify-center gap-3 text-[#FF3811]">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

TeamMember.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};
