import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const ServiceCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("../../../public/services.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <>
      <div className="mt-12 grid grid-cols-3 gap-6">
        {cards.map((card) => (
          <ServiceCard key={card._id} data={card} />
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="text-[#FF3811] font-semibold border border-[#FF3811] px-7 py-4 rounded-md">
          More Services
        </button>
      </div>
    </>
  );
};

export default ServiceCards;
