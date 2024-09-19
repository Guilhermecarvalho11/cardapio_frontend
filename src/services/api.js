import axios from "axios";

export const api = axios.create({
  baseURL: "https://cardapio-backend-pob9.onrender.com/",
});
