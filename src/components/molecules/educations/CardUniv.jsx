import { IoIosArrowRoundForward } from "react-icons/io";

const CardUniv = () => {
  return (
    <div className="flex items-center gap-2 w-full max-w-5xl border-black border-2 rounded-md p-2 mb-4 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <img src="/images/ubhara.png" alt="Education" className="w-14 h-14" />
      <div className="w-full max-w-2xl">
        <p className="font-montserrat text-3 font-semibold smm:hidden">
          Ubhara Jaya
        </p>
        <p className="font-montserrat text-3 font-semibold hidden smm:block">
          Universitas Bhayangkara Jakarta Raya
        </p>
        <p className="font-montserrat text-2">Bachelor of Computer Science</p>
      </div>
      <div className="w-10">
        <IoIosArrowRoundForward className="w-10 h-10 cursor-pointer border-y border-x border-black rounded-full animate-pulse hover:scale-125 transition duration-300 ease-in-out" />
      </div>
    </div>
  );
};

export default CardUniv;
