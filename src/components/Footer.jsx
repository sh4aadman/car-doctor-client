import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex items-center justify-between px-36 py-10">
      <img
        className="h-24"
        src="../../public/footer.png"
        alt="car-doctor-footer-logo"
      />
      <Link to="/about">About</Link>
      <Link to="/company">Company</Link>
      <Link to="/support">Support</Link>
    </footer>
  );
};

export default Footer;
