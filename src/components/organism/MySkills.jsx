import Card from "../molecules/Card";
import Skills from "../molecules/Skills";

const items = [
  {
    id: 1,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    title: "HTML",
    level: "Advanced",
    description:
      "I am proficient in using HTML and CSS to create aesthetically pleasing and responsive web interfaces. I began learning HTML and CSS intensively in 2022 through Coding Bootcamp Infinite Learning and Hacktiv8. Additionally, i pursued self-learning through documentation from sources like W3Schools and various YouTube tutorials.",
  },
  {
    id: 2,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    title: "CSS",
    level: "Advanced",
    description:
      "I am proficient in using HTML and CSS to create aesthetically pleasing and responsive web interfaces. I began learning HTML and CSS intensively in 2022 through Coding Bootcamp Infinite Learning and Hacktiv8. Additionally, i pursued self-learning through documentation from sources like W3Schools and various YouTube tutorials.",
  },
  {
    id: 3,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "JavaScript",
    level: "Intermediate",
    description: "JavaScript is the programming language of the Web",
  },
  {
    id: 4,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    title: "React",
    level: "Intermediate",
    description: "React is a JavaScript library for building user interfaces",
  },
  {
    id: 5,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    title: "Next.js",
    level: "Beginner",
    description: "Next.js is a React framework for server-side rendering",
  },
  {
    id: 6,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    title: "Node.js",
    level: "Intermediate",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine",
  },
  {
    id: 7,
    image: "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg",
    title: "Tailwind",
    level: "Intermediate",
    description:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces",
  },
  {
    id: 8,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    title: "Bootstrap",
    level: "Advanced",
    description: "Bootstrap is a free and open-source CSS framework",
  },
  {
    id: 9,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
    title: "Git",
    level: "Intermediate",
    description: "Git is a distributed version control system",
  },
  {
    id: 10,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
    title: "GitHub",
    level: "Intermediate",
    description:
      "GitHub is a web-based hosting service for version control and collaboration",
  },
  {
    id: 11,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    title: "Figma",
    level: "Intermediate",
    description: "Figma is a collaborative vector graphics editor",
  },
  {
    id: 12,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    title: "MySQL",
    level: "Beginner",
    description: "MySQL is a relational database management system",
  },
];

const MySkills = () => {
  return (
    <>
      <section className="w-full bg-secondary px-6 smm:px-14 py-14">
        {/* Title */}
        <div className="w-full">
          <h1 className="font-inter text-primary text-28 font-bold mb-1">
            My Skills
          </h1>
          <hr className="border-tertiary border-2 rounded w-20" />
        </div>

        {/* Card */}
        <div className="mobile:flex items-center justify-center">
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 2md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 py-6">
            {items.map((item) => (
              <Card key={item.id}>
                <Card.Image image={item.image} />
                <Card.Title
                  level={item.level}
                  title={item.title}
                  modalName={"modal-" + item.id}
                />
                <Card.Modal
                  description={item.description}
                  modalName={"modal-" + item.id}
                />
              </Card>
            ))}
          </div>
        </div>
        <Skills />
      </section>
    </>
  );
};

export default MySkills;
