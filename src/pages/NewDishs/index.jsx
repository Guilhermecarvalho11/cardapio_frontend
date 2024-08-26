import { useState } from "react";
import { api } from "../../services/api";

import { MdNavigateBefore, MdOutlineFileUpload } from "react-icons/md";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";
import { Container, Form } from "./styled";
import { ButtonIMG } from "../../components/ButtonIMG";
import { useNavigate } from "react-router-dom";

export function NewDishs() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  async function handleSave() {
    if (!name || !category || !ingredients || !price || !description) {
      alert("Favor preencher todos os campos");
      return;
    }

    try {
      await api.post("/admin/products", {
        name,
        category,
        ingredients,
        price,
        description,
      });
      alert("Produto cadastro com sucesso");
      navigate("/");
    } catch (erro) {
      console.log(erro);
    }
  }

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
            <Input
              id="name"
              type=""
              placeholder={"Ex: salada Ceasar"}
              onChange={(e) => setName(e.target.value)}
            />
          </>
          <>
            <label htmlFor="category">Categoria</label>
            <select
              id="category"
              name="Categoria"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Refeição">Refeição</option>
              <option value="Pratos principais">Pratos principais</option>
            </select>
          </>
          <>
            <label htmlFor="ingredients">Ingredientes</label>
            <Input
              id="ingredients"
              type="text"
              placeholder={""}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </>
          <>
            <label htmlFor="price">Preço</label>
            <Input
              id="price"
              type="number"
              placeholder={"R$ 00,00"}
              onChange={(e) => setPrice(e.target.value)}
            />
          </>
          <>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              placeholder={
                "Fale brevemente sobre o prato, seus ingredientes e composição"
              }
              onChange={(e) => setDescription(e.target.value)}
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
