/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { api } from "../services/api";

function useItensMenu() {
  const [itensMenu, setItensMenu] = useState([]);
  const [img, setImg] = useState("");
  const baseURL = "http://localhost:5173";

  async function FetchProducts() {
    try {
      const response = await api.get("/users/products");
      const products = response.data;

      setItensMenu(products);

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
