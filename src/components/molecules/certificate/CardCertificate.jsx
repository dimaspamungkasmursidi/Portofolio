import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardCertificate = ({ image, title, imageFull, modalCertif }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%", // When the top of the card is 80% from the top of the viewport
          end: "bottom 20%", // When the bottom of the card is 20% from the top of the viewport
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <div
        ref={cardRef}
        className="relative max-w-60 max-h-60 mb-6 overflow-hidden rounded-md shadow-lg cursor-move"
      >
        <div onClick={() => document.getElementById(modalCertif).showModal()}>
          <img
            src={image}
            alt="Ceritificate"
            className="object-cover w-full h-full transition duration-500 transform hover:scale-110"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full pl-2  bg-secondary backdrop-blur-[2px] bg-opacity-50 text-white">
          <h3 className="font-montserrat">{title}</h3>
        </div>
      </div>

      <dialog
        id={modalCertif}
        className="modal"
        onClick={(e) => e.target.close()}
      >
        <div
          className="modal-box bg-secondary"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="">
            <img src={imageFull} alt="Certificate" className="w-full" />
          </div>
        </div>
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost text-xl bg-secondary rounded-full w-12 h-12 text-white">
            ✕
          </button>
        </form>
      </dialog>
    </>
  );
};

const Certificate = [
  {
    image: "/images/cover-il.svg",
    title: "IL Fullstack Web",
    imageFull: "/images/certif-il.svg",
    category: "Bootcamp & SI",
  },
  {
    image: "/images/cover-hacktiv.svg",
    title: "Hacktiv8 FE",
    imageFull: "/images/certif-hacktiv.svg",
    category: "Bootcamp & SI",
  },
  {
    image: "/images/certif-cintessa.svg",
    title: "FE ReactJS",
    imageFull: "/images/certif-cintessa.svg",
    category: "Bootcamp & SI",
  },
  {
    image: "/images/certif-devfest.svg",
    title: "Devfest Speaker",
    imageFull: "/images/certif-devfest.svg",
    category: "Web Development",
  },
  {
    image: "/images/certif-hacktivalgo.svg",
    title: "Hacktiv8 Algo",
    imageFull: "/images/certif-hacktivalgo.svg",
    category: "Web Development",
  },
  {
    image: "/images/certif-hacktivdom.svg",
    title: "Hacktiv8 DOM",
    imageFull: "/images/certif-hacktivdom.svg",
    category: "Web Development",
  },
  {
    image: "/images/certif-hacktivasync.svg",
    title: "Hacktiv8 Async",
    imageFull: "/images/certif-hacktivasync.svg",
    category: "Web Development",
  },
  {
    image: "/images/certif-hacktivmaterial.svg",
    title: "Hacktiv8 Mater",
    imageFull: "/images/certif-hacktivmaterial.svg",
    category: "Web Development",
  },
  {
    image: "/images/certif-dicoding.svg",
    title: "Dicoding Basic",
    imageFull: "/images/certif-dicoding.svg",
    category: "Web Development",
  },
  {
    image: "/images/certif-dicoding2.svg",
    title: "Dicoding FE",
    imageFull: "/images/certif-dicoding2.svg",
    category: "Web Development",
  },
  {
    image: "/images/certif-dicoding3.jpg",
    title: "Soft Skill",
    imageFull: "/images/certif-dicoding3.jpg",
    category: "Other",
  },
  {
    image: "/images/certif-dibimbing.svg",
    title: "Dibimbing FE",
    imageFull: "/images/certif-dibimbing.svg",
    category: "Web Development",
  },
  {
    image: "/images/cover-edspert.svg",
    title: "Edspert ReactJS",
    imageFull: "/images/certif-edspert.svg",
    category: "Web Development",
  },
  {
    image: "/images/certif-web.svg",
    title: "Trends In Web",
    imageFull: "/images/certif-web.svg",
    category: "Web Development",
  },
  {
    image: "/images/certif-uiux.svg",
    title: "UI/UI with AI",
    imageFull: "/images/certif-uiux.svg",
    category: "Web Development",
  },
  {
    image: "/images/certif-digitalmarketing.svg",
    title: "Digital Marketing",
    imageFull: "/images/certif-digitalmarketing.svg",
    category: "Other",
  },
  {
    image: "/images/cover-praktikum.svg",
    title: "Practical",
    imageFull: "/images/certif-praktikum.svg",
    category: "University Certificate",
  },
  {
    image: "/images/certif-bem.svg",
    title: "BEM Univ",
    imageFull: "/images/certif-bem.svg",
    category: "University Certificate",
  },
  {
    image: "/images/certif-bemlaravel.svg",
    title: "BEM Laravel",
    imageFull: "/images/certif-bemlaravel.svg",
    category: "University Certificate",
  },
  {
    image: "/images/certif-alumni.svg",
    title: "Univ Backend",
    imageFull: "/images/certif-alumni.svg",
    category: "University Certificate",
  },
  {
    image: "/images/certif-digital.svg",
    title: "Digital",
    imageFull: "/images/certif-digital.svg",
    category: "Other",
  },
];

const Card = () => {
  const [filter, setFilter] = useState("All Certificates");

  const handleFilter = (category) => {
    setFilter(category);
  };

  const filteredCertificates =
    filter === "All Certificates"
      ? Certificate
      : Certificate.filter((cert) => cert.category === filter);

  return (
    <>
      <div className="flex tablet:items-center tablet:justify-between flex-col-reverse tablet:flex-row sm:mt-4 mb-6 gap-4">
        <div className="flex items-center overflow-x-scroll overflow-y-hidden categories-filter px-6 smm:px-14">
          {/* Filter */}
          <button
            onClick={() => handleFilter("All Certificates")}
            className={`btn btn-sm capitalize whitespace-nowrap bg-secondary text-left w-auto px-3 py-1.5 rounded-full text-white mr-2 ${
              filter === "All Certificates" ? "btn-active" : ""
            }`}
          >
            All Certificates
          </button>
          <button
            onClick={() => handleFilter("Bootcamp & SI")}
            className={`btn btn-sm capitalize whitespace-nowrap bg-secondary text-left w-auto px-3 py-1.5 rounded-full text-white mr-2 ${
              filter === "Bootcamp & SI" ? "btn-active" : ""
            }`}
          >
            Bootcamp & SI
          </button>
          <button
            onClick={() => handleFilter("Web Development")}
            className={`btn btn-sm capitalize whitespace-nowrap bg-secondary text-left w-auto px-3 py-1.5 rounded-full text-white mr-2 ${
              filter === "Web Development" ? "btn-active" : ""
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => handleFilter("University Certificate")}
            className={`btn btn-sm capitalize whitespace-nowrap bg-secondary text-left w-auto px-3 py-1.5 rounded-full text-white mr-2 ${
              filter === "University Certificate" ? "btn-active" : ""
            }`}
          >
            University Certificate
          </button>
          <button
            onClick={() => handleFilter("Other")}
            className={`btn btn-sm capitalize whitespace-nowrap bg-secondary text-left w-auto px-3 py-1.5 rounded-full text-white mr-2 ${
              filter === "Other" ? "btn-active" : ""
            }`}
          >
            Other
          </button>
        </div>
        {/* Search Bar */}
        <div className="flex items-center space-x-2.5 px-6 smm:px-14">
          <div className="relative w-full">
            <input
              disabled
              type="text"
              placeholder="Search"
              className="w-full pl-9 pr-20 py-2 rounded-full bg-white focus:outline-none focus:border-transparent"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-search stroke-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-2 smm:grid-cols-3 2md:grid-cols-4 lg:grid-cols-5 gap-3 px-6 smm:px-14 py-2">
        {filteredCertificates.map((item, index) => (
          <CardCertificate key={index} {...item} modalCertif={index} />
        ))}
      </section>
    </>
  );
};

export default Card;
