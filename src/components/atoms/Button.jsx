import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Button = (props) => {
  const { children, variant = "text-secondary", border = "border-secondary", hover = "hover:bg-secondary hover:text-white" } = props;
  const buttonRef = useRef(null);
  const hrRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, ease: "power3.in", scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    )
  }, []);

  
  useEffect(() => {
    gsap.fromTo(
      hrRef.current,
      { width: 0 },
      {
        duration: 1,
        width: "8.5rem",
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
      titleRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
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
  }, []);

  return (
    <button
      ref={hrRef}
      className={`font-montserrat text-2 px-6 py-2 bg-transparent border-2 ${border} rounded-md ${variant} shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition duration-300 ease-in-out ${hover}`}
    >
      <p ref={titleRef}>
      {children}
      </p>
        
    </button>
  );
};

export default Button;




// const Button = (props) => {
//   const { children, variant = "text-secondary", border = "border-secondary", hover = "hover:bg-secondary hover:text-white" } = props;
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       buttonRef.current,
//       { backgroundColor: "#ff0000", opacity: 0 },
//       { backgroundColor: "#00ff00", opacity: 1, duration: 1, ease: "power3.out" }
//     );
//   }, []);

//   return (
//     <button
//       ref={buttonRef}
//       className={`font-montserrat text-2 px-6 py-2 border-2 ${border} rounded-md ${variant} shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition duration-300 ease-in-out ${hover}`}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;
