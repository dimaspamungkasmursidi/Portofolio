import Button from "../atoms/Button";
import BigCard from "../molecules/portofolio/BigCard";
import SecCard from "../molecules/portofolio/SecCard";
import { Link } from "react-router-dom";

const Porto = () => {
  return (
    <>
      <section id="portofolio" className="px-6 smm:px-14 py-6">
        <div className="py-4">
          <h1 className="font-inter text-36 font-bold mb-1">Portofolio</h1>
          <hr className="border-tertiary border-2 rounded w-20" />
        </div>
        <div className="smm:flex gap-4">
          <div className="flex items-center justify-center pb-4 smm:justify-between">
            <BigCard />
          </div>
          <div>
            <SecCard />
            <div className="">
              <p className="font-montserrat py-4 smm:max-w-[52rem]">
                Dive into a collection of my projects, showcasing proficiency in
                HTML, CSS, JavaScript, React.js, Tailwind CSS, and various other
                technologies. Click the "Explore" button to uncover more of my
                diverse projects, each illustrating a dedication to crafting
                engaging and dynamic web experiences.
              </p>
              <Link to="/portofolio">
                <Button>Explore</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Porto;
