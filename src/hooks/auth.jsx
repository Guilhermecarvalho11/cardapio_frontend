/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});
export const CounterContext = createContext();

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
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possivel entrar");
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
      api.defaults.headers.authorization = `Bearar ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }

    console.log("tok, U", token, user);
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

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
}

function useCounter() {
  return useContext(CounterContext);
}

export { AuthProvider, useAuth, CounterProvider, useCounter };
