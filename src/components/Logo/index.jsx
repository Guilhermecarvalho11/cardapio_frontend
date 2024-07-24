import PolygnoSVG from "../../assets/Polygon.png";
import PropTypes from "prop-types";
import { Title } from "./styles";

export function Logo({ primary }) {
  return (
    <Title primary={primary}>
      <img src={PolygnoSVG} />
      <h1>Food Explorer</h1>
    </Title>
  );
}

Logo.propTypes = {
  primary: PropTypes.string.isRequired,
};
