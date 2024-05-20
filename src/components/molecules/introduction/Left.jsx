import { useEffect, useRef } from "react";
import { IoLogoInstagram, IoLogoGithub } from "react-icons/io5";
import { PiLinkedinLogo } from "react-icons/pi";
import gsap from "gsap";
import Button from "../../atoms/Button";

const Left = () => {
  const titleRef = useRef(null);
  const hrRef = useRef(null);
  const navRef = useRef(null);
  const cardMessageRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: -200 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(
      hrRef.current,
      { width: 0 },
      { width: "5rem", duration: 1, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.2 },
      "-=0.5"
    )
    .fromTo(
      cardMessageRef.current,
      { width: 0 },
      { width: "12rem", duration: 1, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(
      messageRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
      "-=0.5"
    );
  }, []);
  

  return (
    <>
      <div className="w-[11.5rem] mb-10 md:mt-12">
        <h1 ref={titleRef} className="font-neue tracking-widest text-40 font-semibold leading-10 mb-2">
          Dimas Pamungkas Mursidi.
        </h1>
        <hr ref={hrRef} className="border-tertiary border-2 rounded w-20" />
        <nav ref={navRef} className="flex gap-1 mt-2 text-2xl">
          <ul className="flex gap-1 mb-6">
            <li>
              <a href="https://www.instagram.com/dmspamungkass/">
                <IoLogoInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/dimas-pamungkas-mursidi-7511b9262/">
                <PiLinkedinLogo />
              </a>
            </li>
            <li>
              <a href="https://github.com/dimaspamungkasmursidi">
                <IoLogoGithub />
              </a>
            </li>
          </ul>
        </nav>
        <a href="#contact">
          <Button>Contact</Button>
        </a>
        <div ref={cardMessageRef} className="mt-12 bg-secondary rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          <p ref={messageRef} className="text-white text-1 font-montserrat px-4 py-3 leading-4">
            Let's design, code, and create remarkable digital experiences together!
          </p>
        </div>
      </div>
    </>
  );
};

export default Left;
