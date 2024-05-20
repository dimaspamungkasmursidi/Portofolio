import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);


const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 100%", // When the top of the card is 80% from the top of the viewport
          end: "bottom 20%", // When the bottom of the card is 20% from the top of the viewport
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <>
      <footer className="px-6 py-6 smm:px-14 bg-secondary text-white mt-4">
        <div ref={footerRef} className="flex flex-wrap-reverse items-center justify-center sm:justify-between gap-6">
          <figure className="flex flex-col items-center justify-center sm:items-start">
            <Link to="/Home">
            <img src="/logosecondary.svg" alt="Logo" width="90" />
            </Link>
            <figcaption className="text-2 font-montserrat text-center">
              Copyright © Dimas Pamungkas Mursidi 2024.
            </figcaption>
          </figure>
          <div className="w-full sm:w-auto">
            <nav className="flex flex-wrap items-center justify-center font-semibold gap-4 smm:gap-6">
              <Link to="/Home" className="active:text-black hover:text-black transition duration-300 ease-in-out">Home</Link>
              <Link to="/Certificates" className="active:text-black hover:text-black transition duration-300 ease-in-out">Certificates</Link>
              <Link to="/Portofolio" className="active:text-black hover:text-black transition duration-300 ease-in-out">My Project</Link>
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
