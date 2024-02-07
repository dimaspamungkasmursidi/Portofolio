import Coba from "../molecules/Coba";

const items = [
  {
    id: 1,
    image: "/logo.svg",
    title: "HTML",
    level: "Pemula",
    description: "Aku mah masih pemula",
  },
  {
    id: 2,
    image: "/logo.svg",
    title: "css",
    level: "Pemula",
    description: "ajarin dong puh sepuuhh",
  },
];

const MySkills = () => {
  return (
    <>
      <section className="w-full bg-secondary p-10 px-12 mt-2">
        {/* Title */}
        <div className="w-full mb-20">
          <h1 className="font-inter text-primary text-28 font-bold mb-1">
            My Skills
          </h1>
          <hr className="border-tertiary border-2 rounded w-20" />
        </div>

        {/* Card */}
        <div className="grid grid-cols-5 gap-2">
          {items.map((item) => (
            <Coba
              className
              key={item.id}
              image={item.image}
              title={item.title}
              level={item.level}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default MySkills;
