import { Link } from "react-router-dom";
import FooterComputer from "./FooterComputer";
import FooterPhone from "./FooterPhone";
import MediaQuery from "react-responsive";

function Footer() {
  const computerFooter = <FooterComputer />;
  const phoneFooter = <FooterPhone />;
  return (
    <>
      <MediaQuery minWidth={761}>{computerFooter}</MediaQuery>
      <MediaQuery maxWidth={760}>{phoneFooter}</MediaQuery>
    </>
  );
}

export default Footer;
