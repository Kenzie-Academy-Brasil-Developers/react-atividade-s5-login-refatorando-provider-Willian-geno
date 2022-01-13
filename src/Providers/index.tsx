import { ReactNode } from "react";
import { deflate } from "zlib";
import { AuthProvider } from "./Auth";

interface ProviderProps {
  children:ReactNode;
};

const Providers = ({children}:ProviderProps) => {
  return <>
    <AuthProvider>{children}</AuthProvider>
  </>
};

export default Providers;