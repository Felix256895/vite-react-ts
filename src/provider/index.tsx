import { ReactNode } from "react";
import { AuthProvider } from "./authProvider";

const Provider = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Provider;
