import { useEffect, useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = (props) => {
  const { children } = props;
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
    <div
      ref={cardRef}
      className="px-2 py-3 border-x border-y border-white rounded flex items-center xxs:justify-between mobile:w-44 mobile:px-2 shadow-[4px_4px_4px_rgba(0,0,0,0.38)]"
    >
      {children}
    </div>
  );
};

const Image = (props) => {
  const { image } = props;
  return (
    <div>
      <img src={image} width="30" alt="Tech Stack" />
    </div>
  );
};

const Title = (props) => {
  const { title, level, modalName } = props;
  return (
    <>
      <div className="w-full max-w-xl ml-1 hidden xs:block">
        <p className="font-montserrat text-0.5 text-white font-semibold">
          {title}
        </p>
        <p className="font-montserrat text-0 text-gray-300">{level}</p>
      </div>
      <div className="w-6 h-6">
        <IoIosArrowRoundForward
          className="w-6 h-6 text-white cursor-pointer border-y border-x border-white rounded-full animate-pulse hover:scale-125 transition duration-300 ease-in-out"
          onClick={() => document.getElementById(modalName).showModal()}
        />
      </div>
    </>
  );
};

const Modal = ({ description, modalName, image }) => {
  return (
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
        <img src={image} alt="Tech Stack" className="w-24 mb-2" />
        <p className="font-montserrat">{description}</p>
      </div>
    </dialog>
  );
};

Card.Image = Image;
Card.Title = Title;
Card.Modal = Modal;

export default Card;
