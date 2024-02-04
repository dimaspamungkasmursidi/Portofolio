import "./App.css";

const App = () => {
  return (
    <>
      <header className="flex justify-between items-center py-4 px-16">
        <div>
          <img src="/logo.svg" alt="Logo" width="105" />
        </div>
        <nav>
          <ul className="flex gap-6 font-montserrat font-medium">
            {/* a nya nanti ganti pake link kalo pake react router */}
            {/* class active itu berfungsi untuk menandakan menu yang aktif, misal lagi ada di halaman portofolio nah nav nya jadi warna gold. KLO GA SALAH */}
            <li className="active">
              <a href="#" className="active:text-tertiary">
                Introduction
              </a>
            </li>
            <li className="active">
              <a href="#" className="active:text-tertiary">
                My Skills
              </a>
            </li>
            <li className="active">
              <a href="#" className="active:text-tertiary">
                Education
              </a>
            </li>
            <li className="active">
              <a href="#" className="active:text-tertiary">
                Portofolio
              </a>
            </li>
            <li className="active">
              <a href="#" className="active:text-tertiary">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default App;
