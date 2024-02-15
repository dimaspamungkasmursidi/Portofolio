import Left from "../molecules/introduction/Left";
import Right from "../molecules/introduction/Right";

const Introduction = () => {
  return (
    <>
      <section id="introduction" className="flex flex-wrap justify-between px-6 smm:px-14 mb-8">
        {/* Left */}
        <Left />
        {/* Center */}
        <div className="hidden mobile:block mobile:w-[300px] mobile:h-[300px] smm:w-[300px] smm:h-[300px] md:w-[500px] md:h-[500px]">
          <img src="/images/introduction.svg" alt="Intoduction" className="" />
        </div>
        {/* Right */}
        <Right />
      </section>
    </>
  );
};

export default Introduction;
