const CardCertificate = ({ image, title, imageFull, modalCertif }) => {
  return (
    <>
      <div className="relative max-w-60 max-h-60 mb-6 overflow-hidden rounded-md shadow-lg">
        <div onClick={() => document.getElementById(modalCertif).showModal()}>
          <img
            src={image}
            alt="Ceritificate"
            className="object-cover w-full h-full transition duration-500 transform hover:scale-110"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full pl-2  bg-secondary backdrop-blur-[2px] bg-opacity-50 text-white">
          <h3 className="font-montserrat">{title}</h3>
        </div>
      </div>

      <dialog
        id={modalCertif}
        className="modal"
        onClick={(e) => e.target.close()}
      >
        <div
          className="modal-box bg-secondary"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="">
            <img src={imageFull} alt="Certificate" className="w-full" />
          </div>
        </div>
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost text-xl bg-secondary rounded-full w-12 h-12 text-white">
            ✕
          </button>
        </form>
      </dialog>
    </>
  );
};

const Certificate = [
  {
    image: "https://certificates-three.vercel.app/images/cover-il.svg",
    title: "IL Fullstack Web",
    imageFull: "https://certificates-three.vercel.app/images/certif-il.svg",
  },
  {
    image: "https://certificates-three.vercel.app/images/cover-hacktiv.svg",
    title: "Hacktiv8 FE",
    imageFull:
      "https://certificates-three.vercel.app/images/certif-hacktiv.svg",
  },
  {
    image: "https://certificates-three.vercel.app/images/certif-devfest.svg",
    title: "Devfest Speaker",
    imageFull:
      "https://certificates-three.vercel.app/images/certif-devfest.svg",
  },
  {
    image:
      "https://certificates-three.vercel.app/images/certif-hacktivalgo.svg",
    title: "Hacktiv8 Algo",
    imageFull:
      "https://certificates-three.vercel.app/images/certif-hacktivalgo.svg",
  },
  {
    image: "https://certificates-three.vercel.app/images/certif-hacktivdom.svg",
    title: "Hacktiv8 DOM",
    imageFull:
      "https://certificates-three.vercel.app/images/certif-hacktivdom.svg",
  },
  {
    image:
      "https://certificates-three.vercel.app/images/certif-hacktivasync.svg",
    title: "Hacktiv8 Async",
    imageFull:
      "https://certificates-three.vercel.app/images/certif-hacktivasync.svg",
  },
  {
    image:
      "https://certificates-three.vercel.app/images/certif-hacktivmaterial.svg",
    title: "Hacktiv8 Mater",
    imageFull:
      "https://certificates-three.vercel.app/images/certif-hacktivmaterial.svg",
  },
  {
    image: "https://certificates-three.vercel.app/images/certif-dicoding.svg",
    title: "Dicoding Basic",
    imageFull:
      "https://certificates-three.vercel.app/images/certif-dicoding.svg",
  },
  {
    image: "https://certificates-three.vercel.app/images/certif-dicoding2.svg",
    title: "Dicoding FE",
    imageFull:
      "https://certificates-three.vercel.app/images/certif-dicoding2.svg",
  },
  {
    image: "https://certificates-three.vercel.app/images/certif-dibimbing.svg",
    title: "Dibimbing FE",
    imageFull:
      "https://certificates-three.vercel.app/images/certif-dibimbing.svg",
  },
  {
    image: "https://certificates-three.vercel.app/images/cover-edspert.svg",
    title: "Edspert ReactJS",
    imageFull:
      "https://certificates-three.vercel.app/images/certif-edspert.svg",
  },
  {
    image: "https://certificates-three.vercel.app/images/cover-praktikum.svg",
    title: "Practical",
    imageFull:
      "https://certificates-three.vercel.app/images/cover-praktikum.svg",
  },
  {
    image: "https://certificates-three.vercel.app/images/certif-bem.svg",
    title: "BEM Univ",
    imageFull: "https://certificates-three.vercel.app/images/certif-bem.svg",
  },
  {
    image: "https://certificates-three.vercel.app/images/certif-bemlaravel.svg",
    title: "BEM Laravel",
    imageFull:
      "https://certificates-three.vercel.app/images/certif-bemlaravel.svg",
  },
  {
    image: "https://certificates-three.vercel.app/images/certif-alumni.svg",
    title: "Univ Backend",
    imageFull: "https://certificates-three.vercel.app/images/certif-alumni.svg",
  },
  {
    image: "https://certificates-three.vercel.app/images/certif-digital.svg",
    title: "Digital",
    imageFull: "https://certificates-three.vercel.app/images/certif-digital.svg",
  },
];

const Card = () => {
  return (
    <section className="grid grid-cols-2 smm:grid-cols-3 2md:grid-cols-4 lg:grid-cols-5 gap-3 px-6 smm:px-14 py-2">
      {Certificate.map((item, index) => (
        <CardCertificate key={index} {...item} modalCertif={index} />
      ))}
    </section>
  );
};

export default Card;

// Mapping data original

// const Certificate = [
//   {
//     image: "/images/cover-il.svg",
//     title: "IL Fullstack Web",
//     imageFull: "/images/certif-il.svg",
//   },
//   {
//     image: "/images/cover-hacktiv.svg",
//     title: "Hacktiv8 FE",
//     imageFull: "/images/certif-hacktiv.svg",
//   },
//   {
//     image: "/images/certif-devfest.svg",
//     title: "Devfest Speaker",
//     imageFull: "/images/certif-devfest.svg",
//   },
//   {
//     image: "/images/certif-hacktivalgo.svg",
//     title: "Hacktiv8 Algo",
//     imageFull: "/images/certif-hacktivalgo.svg",
//   },
//   {
//     image: "/images/certif-hacktivdom.svg",
//     title: "Hacktiv8 DOM",
//     imageFull: "/images/certif-hacktivdom.svg",
//   },
//   {
//     image: "/images/certif-hacktivasync.svg",
//     title: "Hacktiv8 Async",
//     imageFull: "/images/certif-hacktivasync.svg",
//   },
//   {
//     image: "/images/certif-hacktivmaterial.svg",
//     title: "Hacktiv8 Mater",
//     imageFull: "/images/certif-hacktivmaterial.svg",
//   },
//   {
//     image: "/images/certif-dicoding.svg",
//     title: "Dicoding Basic",
//     imageFull: "/images/certif-dicoding.svg",
//   },
//   {
//     image: "/images/certif-dicoding2.svg",
//     title: "Dicoding FE",
//     imageFull: "/images/certif-dicoding2.svg",
//   },
//   {
//     image: "/images/certif-dibimbing.svg",
//     title: "Dibimbing FE",
//     imageFull: "/images/certif-dibimbing.svg",
//   },
//   {
//     image: "/images/cover-edspert.svg",
//     title: "Edspert ReactJS",
//     imageFull: "/images/certif-edspert.svg",
//   },
//   {
//     image: "/images/cover-praktikum.svg",
//     title: "Practical",
//     imageFull: "/images/certif-praktikum.svg",
//   },
//   {
//     image: "/images/certif-bem.svg",
//     title: "BEM Univ",
//     imageFull: "/images/certif-bem.svg",
//   },
//   {
//     image: "/images/certif-bemlaravel.svg",
//     title: "BEM Laravel",
//     imageFull: "/images/certif-bemlaravel.svg",
//   },
//   {
//     image: "/images/certif-alumni.svg",
//     title: "Univ Backend",
//     imageFull: "/images/certif-alumni.svg",
//   },
//   {
//     image: "/images/certif-digital.svg",
//     title: "Digital",
//     imageFull: "/images/certif-digital.svg",
//   },
// ];
