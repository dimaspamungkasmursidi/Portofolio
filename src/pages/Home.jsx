import Education from "../components/organism/Education";
import Header from "../components/organism/Header";
import Introduction from "../components/organism/Introduction";
import MySkills from "../components/organism/MySkills";
import Porto from "../components/organism/Porto";
import Contact from "../components/organism/Contact";
import Footer from "../components/organism/Footer";
import Attention from "../components/organism/Attention";

const Home = () => {
  return (
    <>
      <Attention />
      <Header />
      <Introduction />
      <MySkills />
      <Education />
      <Porto />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
