import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="flex justify-between p-6 smm:px-14">
        <Link to="/">
          <img src="/logo.svg" alt="Logo" width="90" />
        </Link>
        <Link to="/">
          <IoHomeOutline className="w-8 h-8 text-secondary" />
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
