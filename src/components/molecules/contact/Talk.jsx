import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiLinkedinLogo } from "react-icons/pi";

const Talk = () => {
  return (
    <>
      <div className="hidden smm:block">
        <h1 className="font-inter text-28 font-bold drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-secondary">
          Let's Talk
        </h1>
        <p className="font-montserrat">Ask me anything or just say hi..</p>
        <div className="flex gap-1 mt-2 text-xl">
          <ul className="flex gap-1 mb-6">
            <li>
              <a href="https://wa.me/+6281311111111">
                <IoLogoWhatsapp />
              </a>
            </li>
            <li>
              <a href="mailto:">
                <MdOutlineMailOutline />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/dimasmursidi/">
                <PiLinkedinLogo />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dimasmursidi/">
                <IoLogoInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Talk;
