import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SecCard = ({ image, title }) => {
  const cardRef = useRef(null);
  const titleRef = useRef(null);

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
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    )

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef} className="relative max-w-60 flex overflow-hidden rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <div className="group relative m-0 flex max-h-60 rounded-lg sm:mx-auto sm:max-w-lg">
        <div className="z-10 max-h-full max-w-full overflow-hidden rounded-lg opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:opacity-70">
          <img
            src={image}
            className="animate-fade-in block max-h-60 max-w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
            alt="Project"
          />
        </div>
        <div className="absolute bottom-0 z-20 m-0 pb-2 smm:pb-4 ps-2 smm:ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
          <div className="bg-slate-900 px-4 pb-1 rounded bg-opacity-20 backdrop-blur-[2px]">
            <h1 ref={titleRef} className="font-Montserrat text-1xl smm:text2 font-bold bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = [
  {
    image:
      "/images/porto2.png",
    title: "Project 1",
  },
  {
    image:
      "https://as2.ftcdn.net/v2/jpg/03/15/18/09/1000_F_315180932_rhiXFrJN27zXCCdrgx8V5GWbLd9zTHHA.jpg",
    title: "Project 2",
  },
  {
    image:
      "https://as2.ftcdn.net/v2/jpg/03/15/18/09/1000_F_315180932_rhiXFrJN27zXCCdrgx8V5GWbLd9zTHHA.jpg",
    title: "Project 3",
  },
];

const Card = () => {
  const [numCards, setNumCards] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setNumCards(2); // Tampilkan 2 kartu di desktop
      } else {
        setNumCards(3); // Tambahkan 1 kartu di layar yang lebih kecil
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex gap-4">
      {Projects.slice(0, numCards).map((item, index) => (
        <SecCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Card;
