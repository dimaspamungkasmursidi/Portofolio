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
        <img src={image} width="30" alt="Tech Stack"/>
      </>
  );
};

const Title = (props) => {
  const { title, level, modalName } = props;
  return (
      <>
        <div className="ml-2">
          <p className="font-montserrat text-0.5 text-white font-semibold">
            {title}
          </p>
          <p className="font-montserrat text-0 text-gray-300">{level}</p>
        </div>
        <IoIosArrowRoundForward className="w-6 h-6 ml-8 text-white"
                                onClick={() => document.getElementById(modalName).showModal()}/>
      </>
  );
};

const Modal = ({desc, modalName}) => {
  return (
      <>
        <dialog
            id={modalName}
            className="modal"
            onClick={(e) => e.target.close()}
        >
          <div
              className="modal-box bg-primary rounded"
              onClick={(e) => e.stopPropagation()}
          >
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg mb-6">Hello there!</h3>
            <p className="font-montserrat text-1">{desc}</p>
          </div>
        </dialog>
      </>
  );
};


Card.Image = Image;
Card.Title = Title;
Card.Modal = Modal;

export default Card;
