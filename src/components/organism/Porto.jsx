import Button from "../atoms/Button";
import BigCard from "../molecules/portofolio/BigCard";
// import SecCard from "../molecules/portofolio/SecCard";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import SmallCard from "../molecules/portofolio/SmallCard";

gsap.registerPlugin(ScrollTrigger);

const Porto = () => {
  const titleRef = useRef(null);
  const hrRef = useRef(null);
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
    )

    gsap.fromTo(
      messageRef.current,
      { opacity: 0, y: 100 },
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
      <section className="px-6 smm:px-14 py-6">
        <div className="py-4">
          <h1 ref={titleRef} className="font-neue text-36 font-bold">Portofolio</h1>
          <hr ref={hrRef} className="border-tertiary border-2 rounded w-20" />
        </div>
        <div className="smm:flex gap-4">
          <div className="flex items-center justify-center pb-4 smm:justify-between">
            <BigCard />
          </div>
          <div>
            <SmallCard />
            {/* <SecCard /> */}
            {/* MOBILE */}
            <div className="">
              <p ref={messageRef} className="font-montserrat py-4 smm:max-w-[52rem] block sm:hidden">
                Click the "Explore" button to uncover more of my
                diverse projects, each illustrating a dedication to crafting
                engaging and dynamic web experiences.
              </p>
              {/* WEB */}
              <p ref={messageRef} className="font-montserrat py-4 smm:max-w-[52rem] hidden sm:block">
                Dive into a collection of my projects, showcasing proficiency in
                HTML, CSS, JavaScript, React.js, Tailwind CSS, and various other
                technologies. Click the "Explore" button to uncover more of my
                diverse projects, each illustrating a dedication to crafting
                engaging and dynamic web experiences.
              </p>
              <Link to="/portofolio">
                <Button>Explore</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Porto;
