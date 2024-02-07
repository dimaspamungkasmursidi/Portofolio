const Button = (props) => {
  const { children } = props;
  return (
    <>
      <button className="font-montserrat text-2 mt-6 px-6 py-1 bg-transparent border-2 border-secondary rounded-md text-secondary shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition duration-300 ease-in-out hover:bg-secondary hover:text-white">
        {children}
      </button>
    </>
  );
};

export default Button;
