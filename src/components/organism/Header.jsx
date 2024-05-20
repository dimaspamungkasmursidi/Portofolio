import { useState, useEffect, useRef } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <header
        className={`flex flex-col justify-between py-3 px-6 smm:px-14 md:flex-row md:items-center transition duration-300 ease-in-out ${
          menuOpen
            ? "bg-secondary text-white fixed w-full z-50"
            : "bg-transparent"
        }`}
      >
        <div className="mb-6 md:mb-0">
            {menuOpen ? (
              <Link to="/Home">
                <img ref={logoRef} src="/logosecondary.svg" alt="Logo" width="90" />
              </Link>
            ) : (
              <Link to="/Home">
                <img ref={logoRef} src="/logo.svg" alt="Logo" width="90" />
              </Link>
            )}
        </div>
{/* WEB */}
        <nav ref={navRef}>
          <ul className="hidden text-2 font-montserrat font-semibold tracking-wide md:flex md:gap-6">
            <li className="active py-3">
              <Link to="/Home"
                className="active:text-secondary hover:text-secondary transition duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li className="active py-3">
              <Link to="/Certificates"
                className="active:text-secondary hover:text-secondary transition duration-300 ease-in-out"
              >
                Certificates
              </Link>
            </li>
            <li className="active py-3">
              <Link to="/Portofolio"
                className="active:text-secondary hover:text-secondary transition duration-300 ease-in-out"
              >
                My Project
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden absolute right-4 top-3 text-4xl transition duration-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
        </button>
{/* Mobile */}
        <nav className={`${menuOpen ? "block" : "hidden"} md:hidden`}>
          <ul className="font-montserrat font-medium md:flex md:gap-6">
            <li className="active py-3">
              <Link to="/Home"
                className="active:text-secondary hover:text-secondary transition duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li className="active py-3">
              <Link to="/Certificates"
                className="active:text-secondary hover:text-secondary transition duration-300 ease-in-out"
              >
                Certificates
              </Link>
            </li>
            <li className="active py-3">
              <Link to="/Portofolio"
                className="active:text-secondary hover:text-secondary transition duration-300 ease-in-out"
              >
                My Project
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
