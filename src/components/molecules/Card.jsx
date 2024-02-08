import { IoIosArrowRoundForward } from "react-icons/io";

const Card = (props) => {
  const { children } = props;
  return (
    <>
      <div className="px-1 py-3 border-x border-y border-white rounded flex items-center mobile:w-44 mobile:px-2 shadow-[4px_4px_4px_rgba(0,0,0,0.38)]">
        {children}
      </div>
    </>
  );
};

const Image = (props) => {
  const { image } = props;
  return (
    <>
      <div>
        <img src={image} width="30" alt="Tech Stack" />
      </div>
    </>
  );
};

const Title = (props) => {
  const { title, level, modalName } = props;
  return (
    <>
      <div className="w-[3.7rem] xsm:w-[5rem] mobile:w-[5.6rem] ml-2">
        <p className="font-montserrat text-0.5 text-white font-semibold">
          {title}
        </p>
        <p className="font-montserrat text-0 text-gray-300">{level}</p>
      </div>
      <IoIosArrowRoundForward
        className="w-6 h-6 ml-2 text-white cursor-pointer border-y border-x border-white rounded-full animate-pulse"
        onClick={() => document.getElementById(modalName).showModal()}
      />
    </>
  );
};

const Modal = ({ description, modalName }) => {
  return (
    <>
      {/* Modal Content */}
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
          <h3 className="font-montserrat font-bold text-lg mb-6">
            Hello there!
          </h3>
          <p className="font-montserrat text-1">{description}</p>
        </div>
      </dialog>
    </>
  );
};

Card.Image = Image;
Card.Title = Title;
Card.Modal = Modal;

export default Card;
