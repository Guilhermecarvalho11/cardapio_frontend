/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { api } from "../services/api";

function useItensMenu() {
  const [itensMenu, setItensMenu] = useState([]);
  useEffect(() => {
    async function FetchProducts() {
      try {
        const response = await api.get("/users/products");
        const products = response.data;
        setItensMenu(products);
      } catch (erro) {
        console.log(erro);
        alert("Produtos não encontrado");
      }
    }
    FetchProducts();
  }, []);

  return { itensMenu };
}

export { useItensMenu };
