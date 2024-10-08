/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const AuthContext = createContext({});
export const CounterContext = createContext();
export const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Carregar favoritos do localStorage ao montar o componente
  useEffect(() => {
    const storedFavorites = localStorage.getItem("@cardapioon:favorites");
    if (storedFavorites) {
      try {
        const parsedFavorites = JSON.parse(storedFavorites);
        setFavorites(parsedFavorites);
      } catch (error) {
        console.error("Erro ao carregar favoritos:", error);
      }
    }
  }, []);

  // Atualizar o localStorage sempre que os favoritos mudarem
  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("@cardapioon:favorites", JSON.stringify(favorites));
    } else {
      // Remover a chave do localStorage se não houver favoritos
      localStorage.removeItem("@cardapioon:favorites");
    }
  }, [favorites]);

  const addFavorite = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
  };

  const removeFavorites = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== productId)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorites() {
  return useContext(FavoritesContext);
}

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);

  const decrement = () =>
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

function useCounter() {
  return useContext(CounterContext);
}

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@cardapioon:user", JSON.stringify(user));
      localStorage.setItem("@cardapioon:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });
      navigate("/");
      toast.success(`Bem vindo ${user.name}`);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possivel entrar");
        console.log(error.response.data.message);
      }
    }
  }

  async function signOut() {
    localStorage.removeItem("@cardapioon:user");
    localStorage.removeItem("@cardapioon:token");

    setData({});
    navigate("/register");
  }

  useEffect(() => {
    const token = localStorage.getItem("@cardapioon:token");
    const user = localStorage.getItem("@cardapioon:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      <CounterProvider>{children}</CounterProvider>
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export {
  AuthProvider,
  useAuth,
  CounterProvider,
  useCounter,
  FavoritesProvider,
  useFavorites,
};
