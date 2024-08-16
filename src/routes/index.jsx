import { useAuth } from "../hooks/auth";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth();

  console.log("routes", user);

  return user ? <AppRoutes /> : <AuthRoutes />;
}
