import { useEffect, useRef } from "react";
import gsap from "gsap";

const Right = () => {
  const introRef = useRef(null);
  const titleRef = useRef(null);
  const articleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      introRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(
      titleRef.current,
      { opacity: 0, y: 150 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(
      articleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.2 },
      "-=0.6"
    );
  }, []);

  return (
    <>
      <div className="w-full md:mt-12 lg:w-1/3">
        <p ref={introRef} className=" text-secondary font-montserrat text-2 font-medium mb-4">
          INTRODUCTION
        </p>
        <h1 ref={titleRef} className="font-montserrat text-36 font-bold leading-8 mb-4">
          Front-End Web Developer
        </h1>
        <article ref={articleRef} className="font-montserrat text-2 leading-4">
          <p className="">
            Hello there! I am passionate about crafting engaging web experiences
            as a Front-End Web Developer.
          </p>
          <p className=" mt-2">
            My expertise is HTML, CSS, and JavaScript, languages that allow me
            to structure content, and bring websites to life with dynamic
            features.
          </p>
          <div className="hidden mobile:block">
            <p className=" mt-2">
              With a keen eye for detail and a love for creativity, I strive to
              design interfaces that captivate users and enhance their online
              journey.
            </p>
          </div>
        </article>
      </div>
    </>
  );
};

export default Right;





            // <p className=" mt-2">
            //   Through HTML, I shape the foundation of each web page, ensuring
            //   accessibility and semantic structure. <br />
            //   CSS then adds the visual appeal, painting a vibrant canvas that
            //   invites exploration. <br />
            //   With JavaScript, I breathe life into static elements, infusing
            //   interactivity and responsiveness into every interaction.
            // </p>