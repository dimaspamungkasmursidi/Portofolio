import { IoIosArrowRoundForward } from "react-icons/io";

const CardBootcamp = ({ image, title, desc, descModal, modalName }) => {
  return (
    <>
      <div className="flex flex-col xs:flex-row items-center justify-between gap-2 w-full max-w-xl border-black border-2 rounded-md p-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <img src={image} alt="Education" className="max-w-14 max-h-14" />
        <div className="hidden w-full max-w-96 ml-2 2md:block">
          <p className="font-montserrat text-3 font-semibold">{title}</p>
          <p className="font-montserrat text-2">{desc}</p>
        </div>
        <div
          className="w-10"
          onClick={() => document.getElementById(modalName).showModal()}
        >
          <IoIosArrowRoundForward className="w-10 h-10 cursor-pointer border-y border-x border-black rounded-full animate-pulse hover:scale-125 transition duration-300 ease-in-out" />
        </div>
      </div>

      <dialog
        id={modalName}
        className="modal"
        onClick={(e) => e.target.close()}
      >
        <div
          className="modal-box bg-primary rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="font-inter text-3 font-semibold">{title}</h3>
          <br />
          <img src={image} alt="Tech Stack" className="w-24 mb-2" />
          <p className="font-montserrat text-2">{descModal}</p>
          <div className="modal-action"></div>
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById(modalName).close()}
          >
            ✕
          </button>
        </div>
      </dialog>
    </>
  );
};

const cardItems = [
  {
    image: "/images/infinite.png",
    title: "Infinite Learning",
    desc: "Web Development",
    descModal:
      "I have undertaken a 6-month Independent Study program at Infinite Learning, focusing on Web Development with a specialization in UI/UX Design. Throughout the program, I delved into various aspects of web development using the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS) and honed my UI/UX design skills using Figma. The learning approach was project and problem-based, allowing for a comprehensive understanding of concepts. For more details and to explore the course modules, you can visit the following link: https://kampusmerdeka.kemdikbud.go.id/program/studi-independen/browse/863c3409-8b4e-4c96-9edd-71ee61e9fc41/0fd194d0-6751-11ee-aa55-9668c84beb67",
  },
  {
    image: "/images/hacktiv.png",
    title: "Hacktiv8",
    desc: "Web Developer",
    descModal:
      "I have undergone a 6-month Independent Study program at Hacktiv8, specializing in Web Development. The program primarily focused on Frontend development using the JavaScript programming language.",
  },
];

const CardList = () => {
  return (
    <div className="flex justify-between gap-2">
      {cardItems.map((item, index) => (
        <CardBootcamp key={index} {...item} modalName={index} />
      ))}
    </div>
  );
};

export default CardList;
