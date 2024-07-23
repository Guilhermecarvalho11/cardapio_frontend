import PolygnoSVG from "../../assets/Polygon.png";
import { Tile } from "./styles";

export function Logo() {
  return (
    <Tile>
      <img src={PolygnoSVG} />
      <h1>Food Explorer</h1>
    </Tile>
  );
}
