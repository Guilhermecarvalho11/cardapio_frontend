/* eslint-disable react/prop-types */
import { useAuth } from "../../hooks/auth";
import simpsons from "../../../public/simpsons.png";
// import PolygnoSVG from "../../assets/Polygon.png";
import PropTypes from "prop-types";
import { Container } from "./styles";

export function Logo({
  primary,
  fontSize,
  adm,
  location,
  showImage,
  showPhrase,
}) {
  const { user } = useAuth();
  const role = user?.role.includes("admin");

  return (
    <Container $primary={primary} $location={location}>
      {showImage && <img src={simpsons} alt="Logo Simpsons" />}
      {showPhrase && <h1 style={{ fontSize: fontSize }}>Simpsons Food</h1>}
      {role ? <span>{adm}</span> : null}
    </Container>
  );
}

Logo.propTypes = {
  primary: PropTypes.string,
  fontSize: PropTypes.string,
  adm: PropTypes.string,
};
