import Nav from "../components/molecules/certificate/nav";

const Portofolio = () => {
  return (
    <>
      <Nav />
      <marquee className="mt-20">
        <div className="flex flex-col items-center justify-center w-96 h-80">
          <img
            src="https://i.pinimg.com/564x/a1/cf/12/a1cf12881191b2ef19164a67c030a111.jpg"
            alt="Image"
            className="animate-bounce w-40"
          />
          <h1 className="font-inter text-5xl font-bold animate-bounce">
            COMMING SOON!
          </h1>
        </div>
      </marquee>
    </>
  );
};

export default Portofolio;
