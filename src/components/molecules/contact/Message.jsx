import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiLinkedinLogo } from "react-icons/pi";
import Button from "../../atoms/Button";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';

const Message = () => {

  const [state, handleSubmit] = useForm("mpzvnpjb");
  if (state.succeeded) {
      return <div className="w-full h-40 max-w-2xl flex items-center justify-center p-6 bg-secondary text-primary rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"> <h1 className="font-inter text-center text-28 font-bold drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-black">Thanks for the message!</h1> </div>;
  }

  return (
    <>
      <div className="w-full max-w-2xl flex flex-col py-6 bg-secondary text-primary rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        {/* Description */}
        <div className="w-full px-6 smm:hidden">
          <h1 className="font-inter text-28 font-bold drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-secondary">
            Let's Talk
          </h1>
          <p className="font-montserrat">Ask me anything or just say hi..</p>
          <nav className="flex gap-1 mt-2 text-2xl">
            <ul className="flex gap-1 mb-6">
              <li>
                <Link to="/CommingSoon">
                  <IoLogoWhatsapp />
                </Link>
                {/* <a href="https://wa.me/+6288297894942">
                  <IoLogoWhatsapp />
                </a> */}
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
        {/* Form */}
        <form onSubmit={handleSubmit} action="" className="w-full flex flex-col gap-4 px-6 pb-4">
            <fieldset id="fs-frm-inputs">
          <div className="flex flex-col smm:flex-row gap-4">
            <div className="flex flex-col smm:w-full smm:max-w-m">
              <label htmlFor="full-name" className="font-montserrat">
                Name
              </label>
              <input
                id="full-name"
                type="text"
                name="Name"
                className="bg-primary border text-gray-900 text-sm rounded-lg outline-none w-full p-2.5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                placeholder="Ur Name..."
                required=""
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col smm:w-full smm:max-w-2xl">
              <label htmlFor="email-address" className="font-montserrat">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="Reply to"
                className="bg-primary border text-gray-900 text-sm rounded-lg outline-none w-full p-2.5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                placeholder="example@gmail.com"
                required=""
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="message" className="font-montserrat">
              Message
            </label>
            <textarea
              className="bg-primary border text-gray-900 text-sm rounded-lg outline-none w-full p-2.5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              name="Message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Write ur message here.."
              required=""
            ></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
            </fieldset>
          <Button
            variant="text-white w-3/4 smm:w-full self-center mt-2 -mb-4"
            border="border-primary"
            hover="hover:bg-primary hover:text-secondary"
            type="submit"
            disabled={state.submitting}
          >
            Send
          </Button>
        </form>
      </div>
    </>
  );
};

export default Message;
