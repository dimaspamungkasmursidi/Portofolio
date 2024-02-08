import { IoCodeSlashOutline, IoCopyOutline } from "react-icons/io5";
import { CiPen } from "react-icons/ci";

const Skills = ({ icon: Icon, title, desc }) => {
  return (
    <div className="xsm:w-[12rem] xsm:h-[12rem] p-4 bg-primary rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <Icon className="w-12 h-12 text-secondary" />
      <h1 className="font-inter text-black font-semibold">{title}</h1>
      <p className="font-montserrat text-0 text-black">{desc}</p>
    </div>
  );
};

const skillItems = [
  {
    icon: IoCodeSlashOutline,
    title: "Front End Web",
    desc: "I have expertise in developing front-end interfaces using React JS and Tailwind to create responsive and engaging user interfaces.",
  },
  {
    icon: IoCopyOutline,
    title: "Slicing Design",
    desc: "With my experience, I am able to transform designs into professional and responsive websites. I am ready to provide the optimal solution for your project needs.",
  },
  {
    icon: CiPen,
    title: "UI/UX Design",
    desc: "My expertise in UI/UX design through user research, wireframing, and prototyping, I create intuitive and user-friendly designs to increase user satisfaction.",
  },
];

const SkillsList = () => {
  return (
    <div className="">
      <div className="flex flex-wrap justify-center gap-4 md:gap-20">
        {skillItems.map((item, index) => (
          <Skills key={index} {...item} className="" />
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
