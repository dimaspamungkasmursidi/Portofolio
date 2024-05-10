import CardUniv from "../molecules/educations/CardUniv";
import CardBootcamp from "../molecules/educations/CardBootcamp";
import Button from "../atoms/Button";
import { IoIosArrowRoundBack, IoIosArrowRoundUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <>
      <section
        id="education"
        className="smm:flex smm:items-center smm:justify-between px-6 smm:px-14 pt-10"
      >
        <div>
          <div className="smm:hidden">
            <h1 className="font-inter text-36 font-bold mb-1">Education</h1>
            <hr className="border-tertiary border-2 rounded w-20" />
          </div>
          <img
            src="/images/edu.svg"
            alt="Education"
            width="320"
          />
        </div>
        <div className="w-full max-w-3xl smm:ml-4">
          <div className="hidden smm:block">
            <h1 className="font-inter text-36 font-bold mb-1">Education</h1>
            <hr className="border-tertiary border-2 rounded w-20" />
          </div>
          <br />
          <CardUniv />
          <CardBootcamp />
          <div className="flex flex-col items-center mt-8 smm:flex-row smm:justify-between">
            <Link to="/certificates">
              <Button>Certificates</Button>
            </Link>
            <div className="py-2">
              <IoIosArrowRoundUp className="w-10 h-10 smm:hidden" />
            </div>
            <div className="smm:px-4">
              <IoIosArrowRoundBack className="w-10 h-10 hidden smm:block" />
            </div>
            <p className="font-montserrat">
              Click the “Certificate” button to view all the certificates I
              possess.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
