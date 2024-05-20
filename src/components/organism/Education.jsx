import CardUniv from "../molecules/educations/CardUniv";
import CardBootcamp from "../molecules/educations/CardBootcamp";
import Button from "../atoms/Button";
import { IoIosArrowRoundBack, IoIosArrowRoundUp } from "react-icons/io";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const titleRef = useRef(null);
  const hrRef = useRef(null);
  const titleRefMobile = useRef(null);
  const hrRefMobile = useRef(null);
  const imageRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      hrRef.current,
      { width: 0 },
      {
        width: "5rem",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: hrRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  
  useEffect(() => {
    gsap.fromTo(
      titleRefMobile.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRefMobile.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      hrRefMobile.current,
      { width: 0 },
      {
        width: "5rem",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: hrRefMobile.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    )
    gsap.fromTo(
      messageRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: messageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <section
        className="smm:flex smm:items-center smm:justify-between px-6 smm:px-14 pt-10"
      >
        <div>
          <div className="smm:hidden">
            <h1 ref={titleRef} className="font-neue tracking-wider text-36 font-bold">Education</h1>
            <hr ref={hrRef} className="border-tertiary border-2 rounded w-20 mb-4" />
          </div>
          <img
            ref={imageRef}
            src="/images/edu.svg"
            alt="Education"
            width="300"
          />
        </div>
        <div className="w-full max-w-3xl smm:ml-4">
          <div className="hidden smm:block">
            <h1 ref={titleRefMobile} className="font-neue tracking-wider text-36 font-bold">Education</h1>
            <hr ref={hrRefMobile} className="border-tertiary border-2 rounded w-20" />
          </div>
          <br />
          <CardUniv />
          <CardBootcamp />
          <div className="flex flex-col items-center mt-8 smm:flex-row smm:justify-between">
            <Link to="/certificates">
              <Button>Certificates</Button>
            </Link>
            <div className="py-2">
              <IoIosArrowRoundUp className="w-10 h-10 smm:hidden" />
            </div>
            <div className="smm:px-4">
              <IoIosArrowRoundBack className="w-10 h-10 hidden smm:block" />
            </div>
            <p ref={messageRef} className="font-montserrat">
              Click the “Certificate” button to view all the certificates I
              possess.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
