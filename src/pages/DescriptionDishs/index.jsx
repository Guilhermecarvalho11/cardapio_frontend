import { Header } from "../../components/Header";
import { LinkButton } from "../../components/LinkButton";
import { Footer } from "../../components/Footer";
import { MdNavigateBefore } from "react-icons/md";

import imageMeals from "../../assets/imageMeals.svg";
import { Container, MealsDescription } from "./style";
import { Tags } from "../../components/Tags";

export function DescriptionDishs() {
  const ingredient = [
    { id: 1, name: "Alface" },
    { id: 2, name: "Cebola" },
    { id: 3, name: "Pão naan" },
    { id: 4, name: "pepino" },
    { id: 5, name: "Rabanete" },
    { id: 6, name: "tomate" },
  ];
  return (
    <>
      <Header />
      <LinkButton icons={MdNavigateBefore} title="Voltar" to="/" />
      <Container>
        <MealsDescription>
          <img src={imageMeals} />
          <h1>Salada Ravanelo</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            expedita, totam, aperiam autem consectetur assumenda consequuntur,
            architecto tempora reiciendis nostrum doloribus! Ad itaque dolores
            velit perspiciatis non, porro doloremque qui.
          </span>
          <Tags ingredients={ingredient} />
        </MealsDescription>
      </Container>
      <Footer />
    </>
  );
}
