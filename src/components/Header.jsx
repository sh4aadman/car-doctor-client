import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex items-center justify-between max-w-7xl mx-auto text-lg font-semibold py-5">
            <img src="../../public/logo.png" alt="car-doctor-logo" />
            <nav className="flex gap-8">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            <section>
                <button className="">Appointment</button>
            </section>
        </header>
    );
};

export default Header;