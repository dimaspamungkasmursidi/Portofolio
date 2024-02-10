import { IoIosArrowRoundForward } from "react-icons/io";

const CardBootcamp = ({ image, title, desc }) => {
  return (
    <div className="flex flex-col xs:flex-row items-center justify-between gap-2 w-full max-w-xl border-black border-2 rounded-md p-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <img src={image} alt="Education" className="max-w-14 max-h-14" />
      <div className="hidden w-full max-w-96 ml-2 2md:block">
        <p className="font-montserrat text-3 font-semibold">{title}</p>
        <p className="font-montserrat text-2">{desc}</p>
      </div>
      <div className="w-10">
        <IoIosArrowRoundForward className="w-10 h-10 cursor-pointer border-y border-x border-black rounded-full animate-pulse hover:scale-125 transition duration-300 ease-in-out" />
      </div>
    </div>
  );
};

const cardItems = [
  {
    image: "/images/infinite.png",
    title: "Infinite Learning",
    desc: "Web Development",
  },
  {
    image: "/images/hacktiv.png",
    title: "Hacktiv8",
    desc: "Web Developer",
  },
];

const CardList = () => {
  return (
    <div className="flex justify-between gap-2">
      {cardItems.map((item, index) => (
        <CardBootcamp key={index} {...item} className="" />
      ))}
    </div>
  );
};

// const ModalEdu = ({ modalName, title, desc }) => {
//   return (
//     <>
//       <dialog
//         id={modalName}
//         className="modal"
//         onClick={(e) => e.target.close()}
//       >
//         <div
//           className="modal-box bg-primary rounded"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <h3 className="font-inter text-3 font-semibold">{title}</h3>
//           <p className="font-montserrat text-2">{desc}</p>
//           <div className="modal-action"></div>
//           <button
//             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//             onClick={() => document.getElementById(modalName).close()}
//           >
//             ✕
//           </button>
//         </div>
//       </dialog>
//     </>
//   );
// };

export default CardList;
