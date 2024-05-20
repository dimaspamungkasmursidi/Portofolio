import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiLinkedinLogo } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Talk = () => {
  const email = 'dimaspamungkas.m19@gmail.com';
  const subject = 'Subject Here';
  const body = 'Body text here';
  
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
  
  const talkRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -100, rotate: -10 },
      {
        opacity: 1,
        x: 0,
        rotate: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: talkRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, x: 100, rotate: 10 },
      {
        opacity: 1,
        x: 0,
        rotate: 0,
        duration: 1.5,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: talkRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      talkRef.current,
      { opacity: 0, y: 100, rotate: 10 },
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: talkRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <div ref={talkRef} className="hidden smm:block">
        <h1 ref={titleRef} className="font-montserrat text-32 font-bold drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-secondary">
          Let's Talk
        </h1>
        <p ref={descriptionRef} className="font-montserrat mr-6">Ask me anything or just say hi..</p>
        <nav className="flex gap-1 mt-2 text-3xl">
          <ul className="flex gap-1 mb-6">
            <li>
              <Link to="/CommingSoon">
                <IoLogoWhatsapp />
              </Link>
              {/* <a href="https://wa.me/+6288297894942">
                <IoLogoWhatsapp />
              </a> */}
            </li>
            <li>
              <a href={gmailUrl} target="_blank" rel="noopener noreferrer">
                <MdOutlineMailOutline />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/dimas-pamungkas-mursidi-7511b9262/">
                <PiLinkedinLogo />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dmspamungkass/">
                <IoLogoInstagram />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Talk;
