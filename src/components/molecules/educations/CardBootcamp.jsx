import { IoIosArrowRoundForward } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const CardBootcamp = ({ image, title, desc, descModal, modalName }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%", // When the top of the card is 80% from the top of the viewport
          end: "bottom 20%", // When the bottom of the card is 20% from the top of the viewport
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <div ref={cardRef}   className="flex flex-col xs:flex-row items-center justify-between gap-2 w-full max-w-xl border-black border-2 rounded-md p-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
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
          <h3 className="font-neue text-3 font-semibold">{title}</h3>
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
    image: "https://storage.googleapis.com/kampusmerdeka_kemdikbud_go_id/mitra/mitra_f6fccdce-1cdb-4977-adf2-b4b5c3c52cc8.png",
    title: "Infinite Learning",
    desc: "Web Development",
    descModal:
      "I have undertaken a 6-month Independent Study program at Infinite Learning, focusing on Web Development with a specialization in UI/UX Design. Throughout the program, I delved into various aspects of web development using the MERN stack (MySQL, ExpressJS, ReactJS, NodeJS) and honed my UI/UX design skills using Figma. The learning approach was project and problem-based, allowing for a comprehensive understanding of concepts.",
  },
  {
    image: "https://pbs.twimg.com/profile_images/1303645505465974785/BAedfmOT_400x400.jpg",
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
