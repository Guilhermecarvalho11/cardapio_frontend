import { MdNavigateBefore, MdOutlineFileUpload } from "react-icons/md";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";
import { Container, Form } from "./styled";
import { ButtonIMG } from "../../components/ButtonIMG";

export function NewDishs() {
  const handleSave = () => {
    console.log("fui clicado");
  };

  return (
    <>
      <Header />
      <Container>
        <LinkButton icons={MdNavigateBefore} title="voltar" to="/" />
        <h1>Novo Prato</h1>
        <Form>
          <>
            <ButtonIMG icons={MdOutlineFileUpload} />
          </>
          <>
            <label htmlFor="name">Name</label>
            <Input id="name" type="" placeholder={"Ex: salada Ceasar"} />
          </>
          <>
            <label htmlFor="category">Categoria</label>
            <select id="category" name="Categoria">
              <option value="Refeição">Refeição</option>
              <option value="Pratos principais">Pratos principais</option>
            </select>
          </>
          <>
            <label htmlFor="ingredients">Ingredientes</label>
            <Input id="ingredients" type="text" placeholder={""} />
          </>
          <>
            <label htmlFor="price">Preço</label>
            <Input id="price" type="number" placeholder={"R$ 00,00"} />
          </>
          <>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              placeholder={
                "Fale brevemente sobre o prato, seus ingredientes e composição"
              }
            ></textarea>
          </>
          <div className="buttons">
            <Button title={"Salvar alterações"} onClick={handleSave} />
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
