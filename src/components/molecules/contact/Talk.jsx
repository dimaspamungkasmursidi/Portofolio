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
        <nav className="flex gap-1 mt-2 text-xl">
          <ul className="flex gap-1 mb-6">
            <li>
              <a href="https://wa.me/+6288297894942">
                <IoLogoWhatsapp />
              </a>
            </li>
            <li>
              <a href="mailto:dimaspamungkas.m19@gmail.com">
                <MdOutlineMailOutline />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/dimas-pamungkas-mursidi-7511b9262/">
                <PiLinkedinLogo />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dmspamungkass/">
                <IoLogoInstagram />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Talk;
