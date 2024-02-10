import Talk from "../molecules/contact/Talk";
import Message from "../molecules/contact/Message";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col smm:flex-row items-center justify-center smm:gap-4 px-6 smm:px-14 py-10">
        <Talk />
        <Message />
      </div>
    </>
  );
};

export default Contact;
