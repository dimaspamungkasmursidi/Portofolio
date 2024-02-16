const Button = (props) => {
  const { children, variant = "text-secondary", border = "border-secondary", hover = "hover:bg-secondary hover:text-white" } = props;
  return (
    <>
      <button className={`font-montserrat text-2 px-6 py-2 bg-transparent border-2 ${border} rounded-md ${variant} shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition duration-300 ease-in-out ${hover}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
