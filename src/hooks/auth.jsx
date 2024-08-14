/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@cardapioon:user", JSON.stringify(user));
      localStorage.setItem("@cardapioon:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possivel entrar");
      }
    }
  }

  async function signOut() {
    localStorage.removeItem("@cardapioon:user");
    localStorage.removeItem("@cardapioon:token");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@cardapioon:token");
    const user = localStorage.getItem("@cardapioon:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearar ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
export { AuthProvider, useAuth };
