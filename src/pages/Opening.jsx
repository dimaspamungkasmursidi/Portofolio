import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import Button from "../components/atoms/Button";

const Opening = () => {
  const opening = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#opening-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3, #logo"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3, #logo"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#opening-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 1.5,
        });
    }, opening);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={opening}>
      <div
        id="opening-slider"
        className="h-screen p-10 bg-primary absolute font-neue tracking-widest z-10 w-full flex flex-col items-center justify-center gap-10"
      >
        <div className="flex flex-col items-center justify-center text-center text-black">
          <h1 className="text-4xl font-neue tracking-widest font-extrabold uppercase md:text-5xl" id="title-1">
            Welcome to
          </h1>
          <h1 className="text-4xl font-neue tracking-widest font-extrabold uppercase md:text-5xl" id="title-2">
            My Portofolio
          </h1>
          <h1 className="text-4xl font-neue tracking-widest font-extrabold uppercase md:text-5xl" id="title-3">
            Website
          </h1>
        </div>
        <div className="w-52 md:w-96">
          <img
            src="/logo.svg"
            alt="logo.svg"
            id="logo"
          />
        </div>
      </div>
      <div className="flex flex-col bg-slate-950">
        <div
          id="welcome"
          className="h-screen flex flex-col items-center justify-center text-center text-white"
        >
          {/* <h1 className="text-2xl font-montserrat font-bold text-white">
            Attention!
          </h1>
          <p className="font-montserrat">This website is unfinished, still under development. Animation coming soon.</p>
          <p className="font-montserrat">but you can still try it, let`s go...</p> */}
          <p className="font-montserrat px-4 xs2:px-6">This website is built using React JS, Tailwind CSS and GSAP for animation.</p>
          <br /> 
          <h1 className="text-2xl font-montserrat font-bold text-white mb-4">Let's get started</h1>
          <Link to="/Home">
            <Button>Click here!</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Opening;
