import Feature from "./Feature";
import team from "../../../public/icons/group.svg"
import clock from "../../../public/icons/clock.svg"
import support from "../../../public/icons/person.svg"
import equipment from "../../../public/icons/Wrench.svg"
import check from "../../../public/icons/check.svg"
import delivery from "../../../public/icons/deliveryt.svg"

const Features = () => {
    return (
        <div className="grid grid-cols-6 gap-6 mt-12">
            <Feature img={team} title="Expert Team" />
            <Feature img={clock} title="Timely Delivery" />
            <Feature img={support} title="24/7 Support" />
            <Feature img={equipment} title="Best Equipment" />
            <Feature img={check} title="100% Guaranty" />
            <Feature img={delivery} title="Timely Delivery" />
        </div>
    );
};

export default Features;