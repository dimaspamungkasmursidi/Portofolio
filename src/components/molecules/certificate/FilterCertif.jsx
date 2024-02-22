const FilterCertif = () => {
  return (
    <div className="flex tablet:items-center tablet:justify-between flex-col-reverse tablet:flex-row mb-5 gap-4 px-6 smm:px-14">
      <div className="flex items-center overflow-x-scroll overflow-y-hidden categories-filter">
        <div className="capitalize whitespace-nowrap bg-secondary text-left w-auto px-3 py-1.5 rounded-full text-white mr-2">
          <p className="whitespace-nowrap text-white">Bootcamp & SI</p>
        </div>
        <div className="capitalize whitespace-nowrap bg-secondary text-left w-auto px-3 py-1.5 rounded-full text-white mr-2">
          <p className="whitespace-nowrap text-white">Web Development</p>
        </div>
        <div className="capitalize whitespace-nowrap bg-secondary text-left w-auto px-3 py-1.5 rounded-full text-white mr-2">
          <p className="whitespace-nowrap text-white">University Certificate</p>
        </div>
        <div className="capitalize whitespace-nowrap bg-secondary text-left w-auto px-3 py-1.5 rounded-full text-white mr-2">
          <p className="whitespace-nowrap text-white">Other</p>
        </div>
      </div>

      {/* search bar */}
      <div className="flex items-center space-x-2.5">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-9 pr-4 py-2 rounded-full border border-secondary focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-sm"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-search stroke-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FilterCertif;
