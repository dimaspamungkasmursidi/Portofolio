import Nav from "../molecules/certificate/nav";
import CardCertificate from "../molecules/certificate/CardCertificate";
import FilterCertif from "../molecules/certificate/FilterCertif";
import FooterCertif from "../molecules/certificate/FooterCertif";

const Certif = () => {
  return (
    <>
      <Nav />
      <FilterCertif />
      <CardCertificate />
      <FooterCertif />
    </>
  );
};

export default Certif;
