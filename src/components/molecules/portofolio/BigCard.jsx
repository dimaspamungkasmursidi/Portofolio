const BigCard = () => {
  return (
    <>
      <div className="w-80 rounded-lg bg-secondary text-primary shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <div className="p-4">
          <img
            src="/images/porto1.png"
            alt="Project"
            className="rounded-lg object-cover h-72 w-80"
          />
        </div>
        <div className="px-4">
          <h1 className="font-montserrat text-24 font-bold pb-2">
            Portofolio Web
          </h1>
          <div className="flex pb-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              alt="Figma"
              className="w-8 h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              alt="ReactJS"
              className="w-8 h-10"
            />
            <img
              src="https://cdn.simpleicons.org/tailwindcss/06B6D4.svg"
              alt="TailwindCSS"
              className="w-12 h-10"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BigCard;
