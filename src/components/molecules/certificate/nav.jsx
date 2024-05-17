import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Nav = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;

    gsap.fromTo(
      nav,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div
      ref={navRef}
      className="w-full bg-secondary mb-6"
    >
      <nav className="flex justify-between px-6 py-4 smm:px-14">
        <Link to="/Home">
          <img src="/logosecondary.svg" alt="Logo" width="80" />
        </Link>
        <Link to="/Home">
          <IoHomeOutline className="w-7 h-7 text-primary" />
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
