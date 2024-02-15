import Talk from "../molecules/contact/Talk";
import Message from "../molecules/contact/Message";

const Contact = () => {
  return (
    <>
      <section id="contact" className="flex flex-col smm:flex-row items-center justify-center smm:gap-4 px-6 smm:px-14 py-10">
        <Talk />
        <Message />
      </section>
    </>
  );
};

export default Contact;
