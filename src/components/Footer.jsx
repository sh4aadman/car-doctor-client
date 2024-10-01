import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black full-bleed text-white flex items-start justify-between py-32 text-lg">
      <div>
        <figure>
          <img
            className="h-24"
            src="../../public/footer.png"
            alt="car-doctor-footer-logo"
          />
        </figure>
        <p className="my-5 text-sm leading-6">
          Edwin Diaz is a software and web <br /> technologies engineer, a life
          coach <br />
          trainer who is also a serial .
        </p>
        <div className="flex gap-3 text-[#FF3811]">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <Link to="/about">About</Link>
        <div className="flex flex-col text-sm gap-7">
          <Link to="/about">Home</Link>
          <Link to="/about">Service</Link>
          <Link to="/about">Contact</Link>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <Link to="/company">Company</Link>
        <div className="flex flex-col text-sm gap-7">
          <Link to="/company">Why Car Doctor</Link>
          <Link to="/company">About</Link>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <Link to="/support">Support</Link>
        <div className="flex flex-col text-sm gap-7">
          <Link to="/support">Support Center</Link>
          <Link to="/support">Feedback</Link>
          <Link to="/support">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
