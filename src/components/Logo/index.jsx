import PolygnoSVG from "../../assets/Polygon.png";
import PropTypes from "prop-types";
import { Container } from "./styles";

export function Logo({ primary, fontSize }) {
  return (
    <Container primary={primary}>
      <img src={PolygnoSVG} />
      <h1 style={{ fontSize: fontSize }}>Food Explorer</h1>
    </Container>
  );
}

Logo.propTypes = {
  primary: PropTypes.string,
  fontSize: PropTypes.string,
};
