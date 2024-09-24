/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { api } from "../services/api";
import toast from "react-hot-toast";

function useItensMenu() {
  const [itensMenu, setItensMenu] = useState([]);
  const [img, setImg] = useState([]);
  async function FetchProducts() {
    try {
      const response = await api.get("/users/products");
      const products = response.data;

      setItensMenu(products);

      if (products.length > 0) {
        setImg(`${api}${products[0].image_url}`);
      }
    } catch (erro) {
      console.error("Erro ao buscar produtos:", erro);
      toast.error("Produtos não encontrados");
    }
  }

  useEffect(() => {
    FetchProducts();
  }, []);

  return { itensMenu, img };
}

export { useItensMenu };
