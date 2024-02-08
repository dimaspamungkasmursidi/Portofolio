import { IoLogoInstagram, IoLogoGithub } from "react-icons/io5";
import { PiLinkedinLogo } from "react-icons/pi";
import Button from "../../atoms/Button";

const Left = () => {
  return (
    <>
      <div className="w-[11.5rem] mb-10 md:mt-12">
        <h1 className="font-inter text-36 font-bold leading-10 mb-4">
          Dimas Pamungkas Mursidi.
        </h1>
        <hr className="border-tertiary border-2 rounded w-20" />
        <div className="flex gap-1 mt-2 text-xl">
          <ul className="flex gap-1">
            <li>
              <a href="">
                <IoLogoInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <IoLogoGithub />
              </a>
            </li>
            <li>
              <a href="">
                <PiLinkedinLogo />
              </a>
            </li>
          </ul>
        </div>
        <Button>Contact</Button>
        <div className="mt-12 bg-secondary rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          <p className="text-white text-1 font-montserrat px-4 py-3 leading-4">
            Let's design, code, and create remarkable digital experiences
            together!
          </p>
        </div>
      </div>
    </>
  );
};

export default Left;
<></>;
