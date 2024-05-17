import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BigCard = () => {
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
      <div ref={cardRef} className="w-80 rounded-lg bg-secondary text-primary shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <div className="p-4">
          <img
            src="/images/porto1.png"
            alt="Project"
            className="rounded-lg object-cover h-72 w-80"
          />
        </div>
        <div className="px-4">
          <h1 className="font-montserrat text-24 font-bold pb-2">
            Portofolio Web
          </h1>
          <div className="flex pb-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              alt="Figma"
              className="w-8 h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              alt="ReactJS"
              className="w-8 h-10"
            />
            <img
              src="https://cdn.simpleicons.org/tailwindcss/06B6D4.svg"
              alt="TailwindCSS"
              className="w-12 h-10"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BigCard;
