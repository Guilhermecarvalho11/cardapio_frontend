import { useAuth } from "../hooks/auth";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { Toaster } from "react-hot-toast";

export function Routes() {
  const { user } = useAuth();

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            style: {
              background: "#aaffaa",
              color: "#000000",
            },
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
          error: {
            duration: 3000,
            style: {
              background: "#f59a9a",
              color: "#fff",
            },
          },
        }}
      />
      {user ? <AppRoutes /> : <AuthRoutes />}
    </>
  );
}
