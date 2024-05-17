import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%", // When the top of the card is 80% from the top of the viewport
          end: "bottom 20%", // When the bottom of the card is 20% from the top of the viewport
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <>
      <footer id="footer" className="px-6 py-6 smm:px-14 bg-secondary text-white mt-4">
        <div ref={footerRef} className="flex flex-wrap-reverse justify-between gap-6 items-center">
          <figure className="flex flex-col items-center justify-center sm:items-start">
            <img src="/logosecondary.svg" alt="Logo" width="90" />
            <figcaption className="text-2 font-montserrat">
              Copyright © Dimas Pamungkas Mursidi 2024.
            </figcaption>
          </figure>
          <div>
            <nav className="flex flex-wrap items-center justify-center gap-4 smm:gap-6">
              <a href="#introduction" className="link link-hover">Introduction</a>
              <a href="#myskills" className="link link-hover">My Skills</a>
              <a href="#education" className="link link-hover">Education</a>
              <a href="#portofolio" className="link link-hover">Portofolio</a>
              <a href="#contact" className="link link-hover">Contact</a>
            </nav>
            <hr className="border-tertiary border-y border-x rounded mt-4" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;



// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-4 px-6 flex flex-col sm:flex-row items-center justify-between">
//       {/* Logo dan Copyright */}
//       <div className="flex flex-col items-center mb-4 sm:mb-0">
//         <img src="/logosecondary.svg" alt="Logo" className="h-12 mr-2" />
//         <span className="text-sm">Copyright © Dimas Pamungkas Mursidi 2024.</span>
//       </div>

//       {/* Navigation */}
//       <nav className="flex flex-wrap sm:flex-row items-center justify-center">
//         <a href="#introduction" className="block py-2 px-4 hover:text-gray-300">Introduction</a>
//         <a href="#my-skills" className="block py-2 px-4 hover:text-gray-300">My Skills</a>
//         <a href="#education" className="block py-2 px-4 hover:text-gray-300">Education</a>
//         <a href="#portfolio" className="block py-2 px-4 hover:text-gray-300">Portfolio</a>
//         <a href="#contact" className="block py-2 px-4 hover:text-gray-300">Contact</a>
//       </nav>
//     </footer>
//   );
// };

// export default Footer;
