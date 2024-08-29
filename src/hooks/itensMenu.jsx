/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { api } from "../services/api";

function useItensMenu() {
  const [itensMenu, setItensMenu] = useState([]);
  const [img, setImg] = useState("");
  const baseURL = "http://localhost:5173"; // Substitua pelo URL do seu servidor

  async function FetchProducts() {
    try {
      const response = await api.get("/users/products");
      const products = response.data;

      // Atualiza o estado dos produtos
      setItensMenu(
        products.map((product) => ({
          ...product,
          image_url: `${baseURL}${product.image_url}`, // Concatena a URL base com o caminho da imagem
        }))
      );

      // Verifica se há produtos e define a imagem do primeiro produto como exemplo
      if (products.length > 0) {
        console.log("hook", `${baseURL}${products[0].image_url}`);
        setImg(`${baseURL}${products[0].image_url}`);
      }
    } catch (erro) {
      console.log(erro);
      alert("Produtos não encontrados");
    }
  }

  useEffect(() => {
    FetchProducts();
  }, []);

  return { itensMenu, img };
}

export { useItensMenu };
