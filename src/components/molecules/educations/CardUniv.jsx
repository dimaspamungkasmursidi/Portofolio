import { IoIosArrowRoundForward } from "react-icons/io";

const CardUniv = () => {
  return (
    <div className="flex items-center gap-1 border-black border-2 rounded-md p-2 mb-4 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <img src="/images/ubhara.png" alt="Education" className="w-14 h-14" />
      <div>
        <p className="font-montserrat text-3 font-semibold">Ubhara Jaya</p>
        <p className="font-montserrat text-2">Bachelor of Computer Science</p>
      </div>
      <div className="w-10">
        <IoIosArrowRoundForward className="w-10 h-10 cursor-pointer border-y border-x border-black rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default CardUniv;
