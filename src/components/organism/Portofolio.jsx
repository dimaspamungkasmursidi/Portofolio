import BigCard from "../molecules/portofolio/BigCard";

const Portofolio = () => {
  return (
    <>
      <section className="px-6 smm:px-14 border-2 py-8">
        <div className="py-4">
          <h1 className="font-inter text-36 font-bold mb-1">Portofolio</h1>
          <hr className="border-tertiary border-2 rounded w-20" />
        </div>
        <BigCard />
      </section>
    </>
  );
};

export default Portofolio;
