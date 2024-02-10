import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiLinkedinLogo } from "react-icons/pi";

const Message = () => {
  return (
    <>
      <div className="w-full max-w-2xl flex flex-col py-6 bg-secondary text-primary rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        {/* Description */}
        <div className="w-full px-6 smm:hidden">
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
        {/* Form */}
        <form action="" className="w-full flex flex-col gap-4 px-6 pb-4">
          <div className="flex flex-col smm:flex-row gap-4">
            <div className="flex flex-col smm:w-full smm:max-w-m">
              <label htmlFor="Name" className="font-montserrat">
                Name
              </label>
              <input
                type="text"
                className="bg-primary border text-gray-900 text-sm rounded-lg outline-none w-full p-2.5"
                placeholder="Ur Name..."
              />
            </div>
            <div className="flex flex-col smm:w-full smm:max-w-2xl">
              <label htmlFor="Name" className="font-montserrat">
                Email
              </label>
              <input
                type="text"
                className="bg-primary border text-gray-900 text-sm rounded-lg outline-none w-full p-2.5"
                placeholder="example@gmail.com"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="Name" className="font-montserrat">
              Message
            </label>
            <textarea
              className="bg-primary border text-gray-900 text-sm rounded-lg outline-none w-full p-2.5"
              name="Message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Write ur message here.."
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
};

export default Message;
