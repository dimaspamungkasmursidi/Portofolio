import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";
import ButtonPorto from "../../atoms/ButtonPorto";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const PortoPage = ({
  image,
  title,
  desc,
  livePreview,
  stack,
  modalName,
  link,
  descStack,
}) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

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
          start: "top 80%", // When the top of the card is 80% from the top of the viewport
          end: "bottom 20%", // When the bottom of the card is 20% from the top of the viewport
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      imageRef.current,
      { width: 0 },
      {
        duration: 1,
        width: "100%",
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      {/* ------------------------------------------------CARD------------------------------------------- */}
      <div ref={cardRef}>
        <div className="w-full flex items-center justify-center p-2">
          <div className="sm:flex bg-secondary text-primary rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
            {/* IMAGE */}
            <div className="flex">
              {/* MOBILE */}
              <div
                className="block sm:hidden items-center justify-center w-full"
                ref={imageRef}
              >
                <img
                  src={image}
                  alt="Project 1"
                  className="object-cover h-56 xs2:h-64 w-full rounded-t-md sm:h-52 sm:w-[100%]"
                />
              </div>
              {/* WEB */}
              <div
                className="hidden sm:block h-48 min-w-64 sm:w-full md:w-52 bg-cover rounded-t md:rounded-t-none md:rounded-l overflow-hidden"
                style={{ backgroundImage: `url(${image})` }}
                title="website"
              ></div>
            </div>
            {/* DESC */}
            <div className="w-full flex flex-col justify-between gap-2 p-2 pl-4">
              <div className="sm:w-56 text-white">
                <h1 className="font-neue font-bold text-2xl">{title}</h1>
                <p className="font-montserrat text-2 line-clamp-2">{desc}</p>
              </div>
              <div className="flex items-center mb-2">
                {stack.map((stack, index) => (
                  <img
                    key={index}
                    className="w-8 h-8"
                    src={stack}
                    alt="stack"
                  />
                ))}
              </div>
              <div
                onClick={() => document.getElementById(modalName).showModal()}
                className="max-w-24"
              >
                <ButtonPorto
                  variant="text-primary mb-2"
                  border="border-primary hover:border-secondary"
                  hover="hover:bg-primary hover:text-white"
                >
                  Detail
                </ButtonPorto>
              </div>
            </div>
          </div>
        </div>
      </div>

      <dialog
        id={modalName}
        className="modal"
        onClick={(e) => e.target.close()}
      >
        <div
          className="modal-box bg-primary rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="font-neue text-2xl font-bold">{title}</h3>
          <br />
          <img src={image} alt="Tech Stack" className="w-32 mb-2 sm:w-56" />
          <p className="font-montserrat text-2 text-justify indent-10 mb-2">
            {desc}
          </p>
          <h2 className="font-montserrat text-2 font-semibold mb-1">
            {descStack}
          </h2>
          <div className="flex items-center">
            {stack.map((stack, index) => (
              <img key={index} className="w-8 h-8" src={stack} alt="stack" />
            ))}
          </div>
          <br />
          <Link to={link}>
            <p className="font-montserrat text-2 text-blue-700">
              {livePreview}
            </p>
          </Link>
          <div className="modal-action"></div>
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById(modalName).close()}
          >
            ✕
          </button>
        </div>
      </dialog>
    </>
  );
};

const portoItems = [
  {
    image: "/images/dinosource.png",
    title: "Dinosource",
    desc: "Dinosource is a website that provides information about dinosaurs. Discover a variety of information, interesting facts, and stunning images that take you back to a time when dinosaurs dominated the Earth.",
    descStack: "Tech Stack",
    livePreview: "Live Preview : https://dinosource.vercel.app/",
    link: "https://dinosource.vercel.app/",
    stack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg",
      "https://camo.githubusercontent.com/4f15f0c693cdabe01aeb238dd83bc8abb92efa3604dd42aaa8851f4de9ad0c06/68747470733a2f2f677265656e736f636b2e636f6d2f75706c6f6164732f6d6f6e74686c795f323032305f30332f747765656e6d61782e706e672e63663237393136653932366662623332386666323134663636623463383432392e706e67",
    ],
    category: "Web Development",
  },
  {
    image: "/images/itisfun.png",
    title: "IT Is Fun Studio",
    desc: "IT Is Fun Studio is a provider of website creation services that prioritizes quality and customer satisfaction. We specialize in designing and developing responsive, modern, and functional websites, ensuring an optimal user experience on all devices. With our experienced professional team, we are ready to help you build a strong and attractive online presence.",
    descStack: "Tech Stack",
    livePreview: "Live preview : https://itisfun.vercel.app/",
    link: "https://itisfun.vercel.app/",
    stack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg",
      "https://cdn.simpleicons.org/framer/#000000.svg",
    ],
    category: "Web Development",
  },
  {
    image:
      "https://user-images.githubusercontent.com/6929121/87441911-486bf600-c611-11ea-9d45-94c215733cf7.png",
    title: "Cooming Soon",
    desc: "this website is coming soon",
    descStack: "Tech Stack",
    livePreview: "Live preview : ",
    link: "",
    stack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg",
    ],
    category: "Web Design",
  },
  {
    image:
      "https://user-images.githubusercontent.com/6929121/87441911-486bf600-c611-11ea-9d45-94c215733cf7.png",
    title: "Cooming Soon",
    desc: "this website is coming soon",
    descStack: "Tech Stack",
    livePreview: "Live preview : ",
    link: "",
    stack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg",
    ],
    category: "Slicing",
  },
];

const PortofolioList = () => {
  const [filter, setFilter] = useState("All Certificates");

  const handleFilter = (category) => {
    setFilter(category);
  };

  const filteredPortfolio =
    filter === "All Certificates"
      ? portoItems
      : portoItems.filter((cert) => cert.category === filter);

  return (
    <>
      {/* ------------------------------------------------FILTER------------------------------------------- */}
      <div className="flex tablet:items-center tablet:justify-between flex-col-reverse tablet:flex-row mb-6 gap-4">
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
            onClick={() => handleFilter("Web Development")}
            className={`btn btn-sm capitalize whitespace-nowrap bg-secondary text-left w-auto px-3 py-1.5 rounded-full text-white mr-2 ${
              filter === "Web Development" ? "btn-active" : ""
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => handleFilter("Web Design")}
            className={`btn btn-sm capitalize whitespace-nowrap bg-secondary text-left w-auto px-3 py-1.5 rounded-full text-white mr-2 ${
              filter === "Web Design" ? "btn-active" : ""
            }`}
          >
            Web Design
          </button>
          <button
            onClick={() => handleFilter("Slicing")}
            className={`btn btn-sm capitalize whitespace-nowrap bg-secondary text-left w-auto px-3 py-1.5 rounded-full text-white mr-2 ${
              filter === "Slicing" ? "btn-active" : ""
            }`}
          >
            Slicing
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

      {/* ------------------------------------------------CONTENT------------------------------------------- */}
      <div className="flex flex-wrap items-center justify-center gap-2 px-6 sm:items-start smm:px-14">
        {filteredPortfolio.map((item, index) => (
          <PortoPage key={index} {...item} modalName={index} />
        ))}
      </div>
    </>
  );
};

export default PortofolioList;
