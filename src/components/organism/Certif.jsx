import Nav from "../molecules/certificate/nav";
import CardCertificate from "../molecules/certificate/CardCertificate";
// import FilterCertif from "../molecules/certificate/FilterCertif";
import FooterCertif from "../molecules/certificate/FooterCertif";
import Loading from "../molecules/certificate/Loading";

const Certif = () => {
  return (
    <>
      <Loading />
      <Nav />
      {/* <FilterCertif /> */}
      <CardCertificate />
      <FooterCertif />
    </>
  );
};

export default Certif;
