import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const SmallCard = () => {
  const cardRef1 = useRef(null);
  const titleRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const titleRef2 = useRef(null);
  const cardRef3 = useRef(null);
  const titleRef3 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef1.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef1.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      titleRef1.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef1.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      cardRef2.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef2.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      titleRef2.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef2.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      cardRef3.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef3.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      titleRef3.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef3.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-row gap-4">
      {/* CARD 1 */}
      <Link to="https://dinosource.vercel.app/">
        <div
          ref={cardRef2}
          className="relative max-w-60 flex overflow-hidden rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
        >
          <div className="group relative m-0 flex max-h-60 rounded-lg sm:mx-auto sm:max-w-lg">
            <div className="z-10 max-h-full max-w-full overflow-hidden rounded-lg opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:opacity-70">
              <img
                src="https://dinosource.vercel.app/assets/tirex-YyfsT7vk.png"
                className="max-h-60 max-w-full"
                alt="Project"
              />
            </div>
            <div className="absolute bottom-0 z-20 m-0 pb-2 smm:pb-4 ps-2 smm:ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <div className="bg-slate-900 px-4 pb-1 rounded bg-opacity-20 backdrop-blur-[2px]">
                <h1
                  ref={titleRef1}
                  className="font-Montserrat text-1xl smm:text2 font-bold bg-gradient-to-r from-black to-secondary b bg-clip-text text-transparent"
                >
                  Dinosource
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* CARD 2 */}
      <Link to="https://itisfun.vercel.app/">
        <div
          ref={cardRef2}
          className="relative max-w-60 flex overflow-hidden rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
        >
          <div className="group relative m-0 flex max-h-60 rounded-lg sm:mx-auto sm:max-w-lg">
            <div className="z-10 max-h-full max-w-full overflow-hidden rounded-lg opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:opacity-70">
              <img
                src="/images/itisfun.png"
                className="animate-fade-in block max-h-60 max-w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                alt="Project"
              />
            </div>
            <div className="absolute bottom-0 z-20 m-0 pb-2 smm:pb-4 ps-2 smm:ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <div className="bg-slate-900 px-4 pb-1 rounded bg-opacity-20 backdrop-blur-[2px]">
                <h1
                  ref={titleRef2}
                  className="font-Montserrat text-1xl smm:text2 font-bold bg-gradient-to-r from-black to-secondary bg-clip-text text-transparent"
                >
                  IT Is Fun
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* CARD 2 */}
      <div
        ref={cardRef3}
        className="relative max-w-60 overflow-hidden rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hidden sm:block"
      >
        <div className="group relative m-0 flex max-h-60 rounded-lg sm:mx-auto sm:max-w-lg">
          <div className="z-10 max-h-full max-w-full overflow-hidden rounded-lg opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:opacity-70">
            <img
              src="https://as2.ftcdn.net/v2/jpg/03/15/18/09/1000_F_315180932_rhiXFrJN27zXCCdrgx8V5GWbLd9zTHHA.jpg"
              className="animate-fade-in block max-h-60 max-w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
              alt="Project"
            />
          </div>
          <div className="absolute bottom-0 z-20 m-0 pb-2 smm:pb-4 ps-2 smm:ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
            <div className="bg-slate-900 px-4 pb-1 rounded bg-opacity-20 backdrop-blur-[2px]">
              <h1
                ref={titleRef3}
                className="font-Montserrat text-1xl smm:text2 font-bold bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent"
              >
                Project 3
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;

// const Projects = [
//   {
//     image:
//       "/images/porto2.png",
//     title: "Project 1",
//   },
//   {
//     image:
//       "https://as2.ftcdn.net/v2/jpg/03/15/18/09/1000_F_315180932_rhiXFrJN27zXCCdrgx8V5GWbLd9zTHHA.jpg",
//     title: "Project 2",
//   },
//   {
//     image:
//       "https://as2.ftcdn.net/v2/jpg/03/15/18/09/1000_F_315180932_rhiXFrJN27zXCCdrgx8V5GWbLd9zTHHA.jpg",
//     title: "Project 3",
//   },
// ];
