import { IoIosArrowRoundForward } from "react-icons/io";


const Coba = (props) => {
  
  const { image, title, level } = props;
  
  const modals = [
    {
      id: 1,
      description: "Aku mah masih pemula",
    },
    {
      id: 2,
      description: "ajarin dong puh sepuuhh",
    },
  ]


  return (
    <>
      {/* Modal Button */}
      <div
        className="border-2 border-zinc-500"
      >
        <div className="w-44 border-x border-y border-white rounded flex items-center px-3 py-3">
          <img src={image} width="30" alt="Tech Stack" />
          <div className="ml-2">
            <p className="font-montserrat text-0.5 text-white font-semibold">
              {title}
            </p>
            <p className="font-montserrat text-0 text-gray-300">{level}</p>
          </div>
          <IoIosArrowRoundForward className="w-6 h-6 ml-8 text-white" />
        </div>
      </div>
      {/* Modal Content */}
      {modals.map((modal) => (
        <dialog
          id="my_modal_3"
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
            <p className="font-montserrat text-1">{modal.description}</p>
          </div>
        </dialog>
      ))}
    </>
  );
};

export default Coba;
