import { Header } from "../../components/Header";
import { Card } from "../../components/Cards";
import { LinkButton } from "../../components/LinkButton";
import { MdNavigateBefore } from "react-icons/md";

export function DescriptionDishs() {
  return (
    <>
      <Header />
      <LinkButton icons={MdNavigateBefore} title="Voltar" />
      <Card />
    </>
  );
}
