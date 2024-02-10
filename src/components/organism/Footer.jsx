const Footer = () => {
  return (
    <>
      <footer className="flex px-6 py-6 smm:px-14 bg-secondary text-white mt-4">
        <div className="flex flex-wrap-reverse items-center gap-6">
          <figure>
            <img src="/logosecondary.svg" alt="Logo" width="90" />
            <figcaption className="text-2 font-montserrat">
              Copyright © Dimas Pamungkas Mursidi.
            </figcaption>
          </figure>
          <div>
            <nav className="flex flex-wrap smm:gap-6">
              <a className="link link-hover pr-6">Introduction</a>
              <a className="link link-hover pr-6">My Skills</a>
              <a className="link link-hover pr-6">Education</a>
              <a className="link link-hover pr-6">Portofolio</a>
              <a className="link link-hover">Contact</a>
            </nav>
            <hr className="border-tertiary border-y border-x rounded mt-4" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
