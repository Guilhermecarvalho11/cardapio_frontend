import { Header } from "../../components/Header";
import { Card } from "../../components/Cards";
import { LinkButton } from "../../components/LinkButton";
import { MdNavigateBefore } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

import imageMeals from "../../assets/imageMeals.svg";

export function DescriptionDishs() {
  return (
    <>
      <Header />
      <LinkButton icons={MdNavigateBefore} title="Voltar" to="/" />
      <Card
        icon={<CiHeart />}
        image={imageMeals}
        name="Nome do Prato"
        price={10.99}
      />
    </>
  );
}
