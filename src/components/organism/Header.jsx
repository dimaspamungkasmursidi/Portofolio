import { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <a href="">
            {menuOpen ? (
              <img src="/logosecondary.svg" alt="Logo" width="90" />
            ) : (
              <img src="/logo.svg" alt="Logo" width="90" />
            )}
          </a>
        </div>
        <nav>
          <ul className="hidden text-2 font-montserrat font-medium md:flex md:gap-6">
            <li className="active py-3">
              <a
                href="#"
                className="active:text-secondary hover:text-secondary transition duration-300 ease-in-out"
              >
                Introduction
              </a>
            </li>
            <li className="active py-3">
              <a
                href="#"
                className="active:text-secondary hover:text-secondary transition duration-300 ease-in-out"
              >
                My Skills
              </a>
            </li>
            <li className="active py-3">
              <a
                href="#"
                className="active:text-secondary hover:text-secondary transition duration-300 ease-in-out"
              >
                Education
              </a>
            </li>
            <li className="active py-3">
              <a
                href="#"
                className="active:text-secondary hover:text-secondary transition duration-300 ease-in-out"
              >
                Portofolio
              </a>
            </li>
            <li className="active py-3">
              <a
                href="#"
                className="active:text-secondary hover:text-secondary transition duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden absolute right-4 top-4 text-4xl transition duration-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
        </button>

        <nav className={`${menuOpen ? "block" : "hidden"} md:hidden`}>
          <ul className="font-montserrat font-medium md:flex md:gap-6">
            <li className="active py-3">
              <a
                href="#"
                className="active:text-secondary hover:text-secondary transition duration-300 ease-in-out"
              >
                Introduction
              </a>
            </li>
            <li className="active py-3">
              <a
                href="#"
                className="active:text-secondary hover:text-secondary transition duration-300 ease-in-out"
              >
                My Skills
              </a>
            </li>
            <li className="active py-3">
              <a
                href="#"
                className="active:text-secondary hover:text-secondary transition duration-300 ease-in-out"
              >
                Education
              </a>
            </li>
            <li className="active py-3">
              <a
                href="#"
                className="active:text-secondary hover:text-secondary transition duration-300 ease-in-out"
              >
                Portofolio
              </a>
            </li>
            <li className="active py-3">
              <a
                href="#"
                className="active:text-secondary hover:text-secondary transition duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default App;
