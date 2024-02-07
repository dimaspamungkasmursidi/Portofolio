import { IoIosArrowRoundForward } from "react-icons/io";

const Card = (props) => {
  const { children } = props;
  return (
    <>
      {/* Modal Button */}
      <div className="w-44 border-x border-y border-white rounded flex items-center px-3 py-3">
        {children}
      </div>
    </>
  );
};

const Image = (props) => {
  const { image } = props;
  return (
    <>
      <img src={image} width="30" alt="Tech Stack" />
    </>
  );
};

const Title = (props) => {
  const { title, level } = props;
  return (
    <>
        <div className="ml-2">
          <p className="font-montserrat text-0.5 text-white font-semibold">
            {title}
          </p>
          <p className="font-montserrat text-0 text-gray-300">{level}</p>
        </div>
        <IoIosArrowRoundForward className="w-6 h-6 ml-8 text-white" />
    </>
  );
};


Card.Image = Image;
Card.Title = Title;

export default Card;
