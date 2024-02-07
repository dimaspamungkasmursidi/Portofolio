const Modal = (props) => {
  const { children } = props;

  return (
    <>
      {/* Modal Button */}
      <div
        className="flex items-center cursor-pointer border-2 border-zinc-500"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      ></div>
      {/* Modal Content */}
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
          <p className="font-montserrat text-1">{children}</p>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
