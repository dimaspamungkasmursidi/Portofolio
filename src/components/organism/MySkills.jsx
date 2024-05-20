import Card from "../molecules/myskills/Card";
import Skills from "../molecules/myskills/Skills";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    description:
      "I have the ability to use the JavaScript programming language to build front-end websites. I gained this experience through independent study programs at Infinite Learning and Hacktiv8 focusing on web development. Additionally, I enjoy participating in free JavaScript coding classes offered by various coding bootcamps such as RevoU, which lasted for 10 days, Dibimbing.id, Dicoding, and others. These experiences have provided me with knowledge and practical skills in JavaScript.",
  },
  {
    id: 4,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    title: "React",
    level: "Beginner",
    description:
      "I have the ability to use ReactJS to build dynamic and interactive front-end websites. I am proficient in using props to Redux, although I am still learning to deepen my understanding of ReactJS. I have experience using ReactJS while studying at Infinite Learning and enjoy taking paid courses from experts such as Dea Afrizal and others.",
  },
  {
    id: 5,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    title: "Next.js",
    level: "Newbie",
    description:
      "In learning Next.js, I am relatively new to it. However, since Next.js is built on top of React.js, I don't see it as a major challenge. I am confident that I can grasp its concepts quickly and efficiently.",
  },
  {
    id: 6,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    title: "Node.js",
    level: "Beginner",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine",
  },
  {
    id: 7,
    image: "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg",
    title: "Tailwind",
    level: "Advanced",
    description:
      "In Tailwind CSS, I have proficiency due to its foundation in pure CSS, often referred to as a utility-first CSS framework. Therefore, I am well-versed in utilizing Tailwind and its utility classes to efficiently style web applications.",
  },
  {
    id: 8,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    title: "Bootstrap",
    level: "Advanced",
    description:
      "Bootstrap was the first framework I encountered when learning advanced web development. Since Bootstrap originates from CSS, I have a strong understanding of it.",
  },
  {
    id: 9,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
    title: "Git",
    level: "Intermediate",
    description:
      "As a frontend developer, GitHub is an essential tool in my workflow. It allows for version control, collaboration with team members, and seamless deployment of projects.",
  },
  {
    id: 10,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
    title: "GitHub",
    level: "Advanced",
    description:
      "As a frontend developer, it's a given that I use GitHub, hehe..",
  },
  {
    id: 11,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    title: "Figma",
    level: "Intermediate",
    description:
      "I have experience using Figma during my studies at Infinite Learning, where I worked as a Fullstack Web Developer, including UI/UX Design, for 6 months. I also designed this Portfolio website using Figma.",
  },
  {
    id: 12,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    title: "MySQL",
    level: "Beginner",
    description:
      "I understand the basics of MySQL from my college days, where we built websites using PHP on campus.",
  },
];

const MySkills = () => {
  const titleRef = useRef(null);
  const hrRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      hrRef.current,
      { width: 0 },
      {
        width: "5rem",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: hrRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <section
        className="w-full bg-secondary px-6 py-14 smm:px-14"
      >
        {/* Title */}
        <div className="w-full">
          <h1 ref={titleRef} className="font-neue tracking-wider text-primary text-28 font-bold">
            My Skills
          </h1>
          <hr ref={hrRef} className="border-tertiary border-2 rounded" />
        </div>

        {/* Card */}
        <div className="mobile:flex items-center justify-center smm:mb-4">
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
                  image={item.image}
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


