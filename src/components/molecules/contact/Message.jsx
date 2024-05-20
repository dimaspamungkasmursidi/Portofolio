import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiLinkedinLogo } from "react-icons/pi";
import Button from "../../atoms/Button";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Message = () => {
  
  const email = 'dimaspamungkas.m19@gmail.com';
  const subject = 'Subject Here';
  const body = 'Body text here';
  
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;


  const [state, handleSubmit] = useForm("mpzvnpjb");
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const inputRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -100, rotate: -10 },
      {
        opacity: 1,
        x: 0,
        rotate: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, x: 100, rotate: 10 },
      {
        opacity: 1,
        x: 0,
        rotate: 0,
        duration: 1.5,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    inputRefs.current.forEach((input, index) => {
      gsap.fromTo(
        input,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: input,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none none",
          },
          delay: index * 0.2,
        }
      );
    });

  }, []);

  if (state.succeeded) {
    return (
      <div className="w-full h-40 max-w-2xl flex items-center justify-center p-6 bg-secondary text-primary rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <h1 className="font-montserrat text-center text-28 font-semibold drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-black">
          Thanks for the message!
        </h1>
      </div>
    );
  }

  return (
    <>
      <div
        ref={formRef}
        className="w-full max-w-2xl flex flex-col py-6 bg-secondary text-primary rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
      >
        {/* Description */}
        <div className="w-full px-6 smm:hidden">
          <h1 ref={titleRef} className="font-montserrat text-28 font-bold drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-secondary">
            Let's Talk
          </h1>
          <p ref={descriptionRef} className="font-montserrat">Ask me anything or just say hi..</p>
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
                <a href={gmailUrl} target="_blank" rel="noopener noreferrer">
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
        <form
          onSubmit={handleSubmit}
          action=""
          className="w-full flex flex-col gap-4 px-6 pb-4"
        >
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
                  placeholder="Your Name..."
                  required=""
                  ref={(el) => inputRefs.current[0] = el}
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
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
                  ref={(el) => inputRefs.current[1] = el}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
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
                placeholder="Write your message here..."
                required=""
                ref={(el) => inputRefs.current[2] = el}
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
          </fieldset>
          <Button
            variant="text-white w-3/4 smm:w-full self-center mt-2 -mb-4"
            border="border-primary hover:border-secondary"
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
