/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  async function singIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
    }
  }
  return (
    <AuthContext.Provider value={{ singIn }}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
export { AuthProvider, useAuth };
