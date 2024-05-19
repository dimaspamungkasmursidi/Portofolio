import { Link } from "react-router-dom";

const FooterCertif = () => {
  return (
    <footer
      className="flex items-center justify-center px-6 py-6 smm:px-14 bg-secondary text-white mt-4"
    >
      <div className="flex flex-wrap-reverse justify-between gap-6 items-center">
        <figure className="flex flex-col items-center justify-center">
          <Link to="/Home">
          <img src="/logosecondary.svg" alt="Logo" width="90" />
          </Link>
          <figcaption className="text-2 font-montserrat">
            Copyright © Dimas Pamungkas Mursidi 2024.
          </figcaption>
        </figure>
      </div>
    </footer>
  );
};

export default FooterCertif;
