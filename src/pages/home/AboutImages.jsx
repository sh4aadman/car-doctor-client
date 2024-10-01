import person from "../../../public/about_us/person.jpg";
import parts from "../../../public/about_us/parts.jpg";

const AboutImages = () => {
  return (
    <div className="w-1/2">
      <img className="w-3/4 rounded-lg" src={person} alt="an image of a mechanic" />
      <img className="relative -top-20 left-48 w-1/2 rounded-lg border-8 border-white" src={parts} alt="an image of a car part" />
    </div>
  );
};

export default AboutImages;
