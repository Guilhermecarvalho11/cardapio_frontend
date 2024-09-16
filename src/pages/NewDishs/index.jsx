import { useState } from "react";
import { api } from "../../services/api";
import toast from "react-hot-toast";

import { MdNavigateBefore } from "react-icons/md";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";
import { Container, Form } from "./styled";
import { useNavigate } from "react-router-dom";

export function NewDishs() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    if (file.type !== "image/png") {
      toast.error("Apenas arquivos PNG são permitidos.");
      e.target.value = null;
      return;
    }

    setImage(file);
    toast.success("Imagem selecionada com sucesso!");
  };

  const handleSave = async () => {
    if (!image) {
      toast.error("Selecione uma imagem PNG para continuar.");
      return;
    }
    if (!name) {
      toast.error("Favor preencher o campo nome");
      return;
    }
    if (!category) {
      toast.error("Favor preencher o campo categoria");
      return;
    }
    if (!ingredients) {
      toast.error("Favor preencher o campo ingredientes");
      return;
    }
    if (!price) {
      toast.error("Favor preencher o campo preço");
      return;
    }
    if (!description) {
      toast.error("Favor preencher o campo descrição");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("ingredients", ingredients);
    formData.append("price", price);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    try {
      await api.post("/admin/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Produto cadastro com sucesso");
      navigate("/");
    } catch (erro) {
      toast.error("Erro ao cadastra o Produto, tente novamente");
      console.log(erro);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <LinkButton icons={MdNavigateBefore} title="voltar" to="/" />
        <h1>Novo Prato</h1>
        <Form method="post" encType="multipart/form-data">
          <>
            <label htmlFor="image" className="inputFile">
              <span className="inputFile-custom">Imagem do Prato</span>
              <Input
                id="image"
                type="file"
                name="image"
                accept="image/*"
                placeholder={"Selecione uma imagem"}
                onChange={handleImageChange}
              />
            </label>
          </>
          <>
            <label htmlFor="name">Name</label>
            <Input
              id="name"
              type="text"
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
              <option value="Bebidas">Bebidas</option>
            </select>
          </>
          <>
            <label htmlFor="ingredients">Ingredientes</label>
            <Input
              id="ingredients"
              type="text"
              placeholder={"adicionar +"}
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
