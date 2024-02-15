const Footer = () => {
  return (
    <>
      <footer id="footer" className="px-6 py-6 smm:px-14 bg-secondary text-white mt-4">
        <div className="flex flex-wrap-reverse justify-between gap-6 items-center">
          <figure>
            <img src="/logosecondary.svg" alt="Logo" width="90" />
            <figcaption className="text-2 font-montserrat">
              Copyright © Dimas Pamungkas Mursidi 2024.
            </figcaption>
          </figure>
          <div>
            <nav className="flex flex-wrap smm:gap-6">
              <a href="#introduction" className="link link-hover pr-6">Introduction</a>
              <a href="#myskills" className="link link-hover pr-6">My Skills</a>
              <a href="#education" className="link link-hover pr-6">Education</a>
              <a href="#portofolio" className="link link-hover pr-6">Portofolio</a>
              <a href="#contact" className="link link-hover">Contact</a>
            </nav>
            <hr className="border-tertiary border-y border-x rounded mt-4" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
