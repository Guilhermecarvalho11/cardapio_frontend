/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useItensMenu } from "../../hooks/itensMenu";
import { api } from "../../services/api";
import toast from "react-hot-toast";

import { MdNavigateBefore } from "react-icons/md";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";

import { Container, Form, StyledButtons } from "./styled";

export function EditDish() {
  const { itensMenu } = useItensMenu();

  const navigate = useNavigate();
  const { id } = useParams();

  const [image, setImage] = useState(null);

  const [product, setProduct] = useState({
    name: "",
    image_url: "",
    category: "",
    ingredients: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Campo alterado: ${name}, Novo valor: ${value}`);
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      console.log(`Arquivo selecionado: ${file.name}`);
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("category", product.category);
      formData.append("ingredients", product.ingredients);
      formData.append("price", product.price);
      formData.append("description", product.description);

      if (image) {
        formData.append("image", image);
      }

      await api.put(`/admin/products/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/");
      alert("produto atualizado");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/admin/products/${id}`);
      toast.success("Produto Deletado");
      navigate("/");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    const selectedProduct = itensMenu.find((item) => item.id === Number(id));
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [itensMenu, id]);
  return (
    <>
      <Header />
      <Container>
        <LinkButton icons={MdNavigateBefore} title="Voltar" to="/" />
        <h1>Editar Prato</h1>
        <Form onSubmit={handleSubmit}>
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
          <div>
            <label htmlFor="name">Nome</label>
            <Input
              id="name"
              name="name"
              type="text"
              value={product.name}
              placeholder="Ex: Salada de Frutas"
              onChange={handleChange}
            />
          </div>
          <>
            <label htmlFor="category">Categoria</label>
            <select
              id="category"
              name="Categoria"
              value={product.name}
              onChange={handleChange}
            >
              <option value="Refeição">Refeição</option>
              <option value="Pratos principais">Pratos principais</option>
            </select>
          </>
          <div>
            <label htmlFor="ingredients">Ingredientes</label>
            <Input
              id="ingredients"
              name="ingredients"
              type="text"
              value={product.ingredients}
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="price">Preço</label>
            <Input
              id="price"
              name="price"
              type="number"
              value={product.price}
              placeholder="R$ 00,00"
              onChange={handleChange}
            />
          </div>
          <>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              name="description"
              placeholder="Atualize a descrição do prato, ingredientes e composição"
              value={product.description}
              onChange={handleChange}
            />
          </>
          <StyledButtons>
            <Button title="Excluir Prato" onClick={handleDelete} primary />
            <Button title="Salvar alterações" type="submit" />
          </StyledButtons>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
