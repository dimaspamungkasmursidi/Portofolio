import Left from "../molecules/introduction/Left";
import Right from "../molecules/introduction/Right";

const Introduction = () => {
  return (
    <>
      <section className="flex justify-between px-12 mt-2 mb-8">
        {/* Left */}
        <Left />
        {/* Center */}
        <div>
          <img src="/images/introduction.svg" alt="Intoduction" width="420" />
        </div>
        {/* Right */}
        <Right />
      </section>
    </>
  );
};

export default Introduction;
