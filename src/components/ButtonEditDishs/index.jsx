/* eslint-disable react/prop-types */
import { Container } from "./style";
import { CiEdit } from "react-icons/ci";
import { LinkButton } from "../LinkButton/index";

export function ButtonEditDishs({ id }) {
  return (
    <Container>
      <LinkButton icons={CiEdit} title="" to={`/editdishes/${id}`} />
    </Container>
  );
}
