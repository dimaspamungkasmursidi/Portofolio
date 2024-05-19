import { useEffect, useRef } from "react";
import gsap from "gsap";
import Left from "../molecules/introduction/Left";
import Right from "../molecules/introduction/Right";

const Introduction = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(imageRef.current, 
      { opacity: 0, scale: 0.5 }, 
      { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <section className="flex flex-wrap justify-between px-6 smm:px-14 mb-8">
        {/* Left */}
        <Left />
        {/* Center */}
        <div 
          ref={imageRef} 
          className="hidden mobile:block mobile:w-[300px] mobile:h-[300px] smm:w-[300px] smm:h-[300px] md:w-[500px] md:h-[500px]"
        >
          <img src="/images/introduction.svg" alt="Introduction" />
        </div>
        {/* Right */}
        <Right />
      </section>
    </>
  );
};

export default Introduction;
