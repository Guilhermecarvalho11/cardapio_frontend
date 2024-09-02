/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { api } from "../services/api";

function useItensMenu() {
  const [itensMenu, setItensMenu] = useState([]);
  const [img, setImg] = useState(""); // Para armazenar a imagem do banner (opcional)
  const baseURL = "http://localhost:5173"; // Base URL para suas imagens

  async function FetchProducts() {
    try {
      const response = await api.get("/users/products"); // Busca produtos da API
      const products = response.data;

      setItensMenu(products);

      // Exemplo de imagem para debug
      if (products.length > 0) {
        console.log("hook", `${baseURL}${products[0].image_url}`);
        setImg(`${baseURL}${products[0].image_url}`);
      }
    } catch (erro) {
      console.error("Erro ao buscar produtos:", erro);
      alert("Produtos não encontrados");
    }
  }

  useEffect(() => {
    FetchProducts();
  }, []);

  return { itensMenu, img };
}

export { useItensMenu };
