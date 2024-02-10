import Education from "../components/organism/Education";
import Header from "../components/organism/Header";
import Introduction from "../components/organism/Introduction";
import MySkills from "../components/organism/MySkills";
import Portofolio from "../components/organism/Portofolio";

const Home = () => {
  return (
    <>
      <Header />
      <Introduction />
      <MySkills />
      <Education />
      <Portofolio />
    </>
  );
};

export default Home;
