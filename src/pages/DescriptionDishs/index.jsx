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
        icon={<CiHeart />} // Exemplo de ícone, pode ser omitido se não for necessário
        image={imageMeals} // Substitua pela URL da imagem
        name="Nome do Prato" // Substitua pelo nome do prato
        price={10.99} // Substitua pelo preço
      />
    </>
  );
}
