import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CommingSoon = () => {
  return (
    <div className="grid place-items-center h-screen">
      <marquee>
        <div className="flex flex-col items-center justify-center w-[26rem] h-80">
          <img
            src="https://i.pinimg.com/564x/a1/cf/12/a1cf12881191b2ef19164a67c030a111.jpg"
            alt="Image"
            className="animate-bounce w-40"
          />
          <h1 className="font-neue text-5xl font-bold animate-bounce">
            COMMING SOON!
          </h1>
        </div>
      </marquee>
      <div className="flex flex-col items-center justify-center animate-bounce">
        <Link to="/Home">
          <IoHomeOutline className="w-16 h-16" />
        </Link>
        <p className="font-montserrat text-lg font-semibold">Go to Home</p>
      </div>
    </div>
  );
};

export default CommingSoon;
