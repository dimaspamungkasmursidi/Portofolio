// FOOTER 1 ------------------------------------------------------------------------------------------------
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const Footer = () => {
//   const footerRef = useRef(null);
//   const logoRef = useRef(null);
//   const navLinksRef = useRef([]);

//   useEffect(() => {
//     gsap.fromTo(
//       footerRef.current,
//       { opacity: 0, y: 100, skewY: 10 },
//       {
//         opacity: 1,
//         y: 0,
//         skewY: 0,
//         duration: 1.5,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: footerRef.current,
//           start: "top 80%",
//           end: "top 20%",
//           toggleActions: "play none none none",
//         },
//       }
//     );

//     gsap.fromTo(
//       logoRef.current,
//       { opacity: 0, x: -100, rotate: -10 },
//       {
//         opacity: 1,
//         x: 0,
//         rotate: 0,
//         duration: 1.5,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: footerRef.current,
//           start: "top 80%",
//           end: "top 20%",
//           toggleActions: "play none none none",
//         },
//       }
//     );

//     navLinksRef.current.forEach((link, index) => {
//       gsap.fromTo(
//         link,
//         { opacity: 0, y: 50, rotate: 5 },
//         {
//           opacity: 1,
//           y: 0,
//           rotate: 0,
//           duration: 1,
//           ease: "power3.out",
//           delay: index * 0.2,
//           scrollTrigger: {
//             trigger: footerRef.current,
//             start: "top 80%",
//             end: "top 20%",
//             toggleActions: "play none none none",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <>
//       <footer id="footer" ref={footerRef} className="px-6 py-6 smm:px-14 bg-secondary text-white mt-4">
//         <div className="flex flex-wrap-reverse justify-between gap-6 items-center">
//           <figure ref={logoRef}>
//             <img src="/logosecondary.svg" alt="Logo" width="90" />
//             <figcaption className="text-2 font-montserrat">
//               Copyright © Dimas Pamungkas Mursidi 2024.
//             </figcaption>
//           </figure>
//           <div>
//             <nav className="flex flex-wrap smm:gap-6">
//               {["#introduction", "#myskills", "#education", "#portofolio", "#contact"].map((href, index) => (
//                 <a
//                   key={index}
//                   href={href}
//                   className="link link-hover pr-6"
//                   ref={el => navLinksRef.current[index] = el}
//                 >
//                   {href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
//                 </a>
//               ))}
//             </nav>
//             <hr className="border-tertiary border-y border-x rounded mt-4" />
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;


// FOOTER 2 ------------------------------------------------------------------------------------------------
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const Footer = () => {
//   const footerRef = useRef(null);

//   useEffect(() => {
//     const footer = footerRef.current;
//     gsap.fromTo(
//       footer,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: footer,
//           start: "top 90%",
//           toggleActions: "play none none none",
//         },
//       }
//     );
//   }, []);

//   return (
//     <>
//       <footer
//         ref={footerRef}
//         id="footer"
//         className="px-6 py-6 smm:px-14 bg-secondary text-white mt-4"
//       >
//         <div className="flex flex-wrap-reverse justify-between gap-6 items-center">
//           <figure>
//             <img src="/logosecondary.svg" alt="Logo" width="90" />
//             <figcaption className="text-2 font-montserrat">
//               Copyright © Dimas Pamungkas Mursidi 2024.
//             </figcaption>
//           </figure>
//           <div>
//             <nav className="flex flex-wrap smm:gap-6">
//               <a href="#introduction" className="link link-hover pr-6">Introduction</a>
//               <a href="#myskills" className="link link-hover pr-6">My Skills</a>
//               <a href="#education" className="link link-hover pr-6">Education</a>
//               <a href="#portofolio" className="link link-hover pr-6">Portofolio</a>
//               <a href="#contact" className="link link-hover">Contact</a>
//             </nav>
//             <hr className="border-tertiary border-y border-x rounded mt-4" />
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

