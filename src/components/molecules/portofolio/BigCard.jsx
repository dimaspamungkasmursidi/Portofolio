import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BigCard = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 100 },
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
            <img
              src="https://camo.githubusercontent.com/4f15f0c693cdabe01aeb238dd83bc8abb92efa3604dd42aaa8851f4de9ad0c06/68747470733a2f2f677265656e736f636b2e636f6d2f75706c6f6164732f6d6f6e74686c795f323032305f30332f747765656e6d61782e706e672e63663237393136653932366662623332386666323134663636623463383432392e706e67"
              alt="GitHub"
              className="w-8 h-10"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BigCard;
