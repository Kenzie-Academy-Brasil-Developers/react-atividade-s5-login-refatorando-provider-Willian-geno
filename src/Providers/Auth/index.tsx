import {createContext, useContext, ReactNode, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

interface AuthProviderProps {
  children:ReactNode;
}

interface SignInProps{

}

interface AuthProviderData {
  authToken:string;
  signIn: (userDate:SignInProps) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({children}:AuthProviderProps) => {

  const navegate = useNavigate();

  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const signIn = (userData:SignInProps) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", userData)
      .then((response) => {
        localStorage.setItem("token::Atividade", response.data.token);

        setAuthToken(response.data.token);

        navegate("/deshboard");
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.clear();

    setAuthToken("");

    navegate("/login");
  };

  return(<AuthContext.Provider value = {{authToken, logout, signIn}}>
    {children}
  </AuthContext.Provider>)

};

export const useAuth = () => useContext(AuthContext)