import PopularProduct from "./PopularProduct";
import PopularProductsHeading from "./PopularProductsHeading";
import carBreakShoe from "../../../public/products/1.png";
import carBreakPump from "../../../public/products/2.png";
import carAirFilter from "../../../public/products/3.png";
import carECU from "../../../public/products/4.png";
import carTyres from "../../../public/products/5.png";
import carEnginePlug from "../../../public/products/6.png";

const PopularProducts = () => {
  return (
    <div className="mb-32">
      <PopularProductsHeading />
      <>
        <div className="mt-12 grid grid-cols-3 gap-6">
          <PopularProduct img={carBreakShoe} title="Car Break Shoe" />
          <PopularProduct img={carBreakPump} title="Car Break Pump" />
          <PopularProduct img={carAirFilter} title="Car Air Filter" />
          <PopularProduct img={carECU} title="Car ECU" />
          <PopularProduct img={carTyres} title="Car Tyres" />
          <PopularProduct img={carEnginePlug} title="Car Engine Plug" />
        </div>
        <div className="text-center mt-12">
          <button className="text-[#FF3811] font-semibold border border-[#FF3811] px-7 py-4 rounded-md">
            More Products
          </button>
        </div>
      </>
    </div>
  );
};

export default PopularProducts;
