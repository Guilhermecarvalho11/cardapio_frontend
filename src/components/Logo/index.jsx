import { useAuth } from "../../hooks/auth";

import PolygnoSVG from "../../assets/Polygon.png";
import PropTypes from "prop-types";
import { Container } from "./styles";

export function Logo({ primary, fontSize, adm }) {
  const { user } = useAuth();
  const role = user?.role.includes("admin");
  console.log("roleLogo", role);
  return (
    <Container primary={primary}>
      <img src={PolygnoSVG} />
      <h1 style={{ fontSize: fontSize }}>Food Explorer</h1>
      {role ? <span>{adm}</span> : ""}
    </Container>
  );
}

Logo.propTypes = {
  primary: PropTypes.string,
  fontSize: PropTypes.string,
  adm: PropTypes.string,
};
