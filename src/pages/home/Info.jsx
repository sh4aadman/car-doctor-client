import { FaCalendarCheck } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";

const Info = () => {
  return (
    <div className="flex justify-between bg-black text-white px-16 py-24 mt-32 mb-32 rounded-lg">
      <div className="flex items-center gap-2">
        <FaCalendarCheck className="text-5xl text-[#FF3811]" />
        <div>
          <p className="font-medium">We are open monday-friday</p>
          <p className="font-bold text-2xl">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <IoCall className="text-5xl text-[#FF3811]" />
        <div>
          <p className="font-medium">Have a question?</p>
          <p className="font-bold text-2xl">+2546 251 2658</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FaMapLocationDot className="text-5xl text-[#FF3811]" />
        <div>
          <p className="font-medium">Need a repair? our address</p>
          <p className="font-bold text-2xl">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
