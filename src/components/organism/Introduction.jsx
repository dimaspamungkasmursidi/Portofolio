import { IoLogoInstagram, IoLogoGithub } from "react-icons/io5";
import { PiLinkedinLogo } from "react-icons/pi";
import Button from "../atoms/Button";

const Introduction = () => {
  return (
    <>
      <section className="flex items-center justify-between px-12 mt-2">
        {/* Left */}
        <div className="w-[11.5rem]">
          <h1 className="font-inter text-28 font-bold leading-8">
            Dimas Pamungkas Mursidi.
          </h1>
          <p className="w-20 border-b-4 border-tertiary mt-4 rounded"></p>
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
          <div className="mt-12 bg-secondary rounded-md">
            <p className="text-white text-1 font-montserrat px-4 py-3 leading-4">
              Let's design, code, and create remarkable digital experiences
              together!
            </p>
          </div>
        </div>
        {/* Center */}
        <div>
          <img src="/images/introduction.svg" alt="Intoduction" width="420" />
        </div>
        {/* Right */}
        <div className="w-64">
          <p className=" text-secondary font-montserrat text-2 font-medium mb-4">
            INTRODUCTION
          </p>
          <h1 className="font-inter text-28 font-bold leading-8 mb-4">
            Front-End Web Developer
          </h1>
          <p className="font-montserrat text-2 leading-4">
            Hello there! I am passionate about crafting engaging web experiences
            as a Front-End Web Developer. <br />
            My expertise is HTML, CSS, and JavaScript, languages that allow me
            to structure content, and bring websites to life with dynamic
            features.
          </p>
        </div>
      </section>
    </>
  );
};

export default Introduction;
