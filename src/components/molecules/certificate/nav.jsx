import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full bg-secondary mb-6">
      <nav className="flex justify-between px-6 py-4 smm:px-14">
        <Link to="/">
          <img src="/logosecondary.svg" alt="Logo" width="80" />
        </Link>
        <Link to="/">
          <IoHomeOutline className="w-7 h-7 text-primary" />
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
