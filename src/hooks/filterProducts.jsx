import { useState, useEffect } from "react";
import { useItensMenu } from "../hooks/itensMenu";

export function useFilterProducts() {
  const { itensMenu } = useItensMenu();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(itensMenu);

  useEffect(() => {
    if (searchTerm) {
      const filtered = itensMenu.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.ingredients.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(itensMenu);
    }
  }, [searchTerm, itensMenu]); // Executa o efeito sempre que searchTerm ou itensMenu mudarem

  return { searchTerm, setSearchTerm, filteredProducts };
}
