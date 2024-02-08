import CardUniv from "../molecules/educations/CardUniv";
import CardBootcamp from "../molecules/educations/CardBootcamp";

const Education = () => {
  return (
    <>
      <section className="px-12 py-10">
        <div>
          <h1 className="font-inte text-36 font-bold mb-1">Education</h1>
          <hr className="border-tertiary border-2 rounded w-20" />
          <img src="/images/edu.svg" alt="Education" width="320" />
        </div>
        <div>
          <br />
          <CardUniv />
          <CardBootcamp />
        </div>
      </section>
    </>
  );
};

export default Education;
