import CustomerReview from "./CustomerReview";
import customer1 from "../../../public/customers/1.jpg"
import customer2 from "../../../public/customers/2.jpg"

const CustomerReviews = () => {
    return (
        <div className="grid grid-cols-2 gap-6 mt-12 mb-32">
            <CustomerReview img={customer1} />
            <CustomerReview img={customer2} />
        </div>
    );
};

export default CustomerReviews;