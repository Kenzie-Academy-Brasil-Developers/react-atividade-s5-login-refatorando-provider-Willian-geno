import { Conteiner,CardLogin } from "./styled";
import { useForm, UseFormProps } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useAuth} from "../../Providers/Auth"


interface HandleProps {
  email:string;
  password:string;
}
const Login = () => {

  
  const {signIn} = useAuth(); 
  
  const formSchema = yup.object().shape({
    email:yup.string().required("Campo Obrigatorio").email("email Invalido"),
    password: yup.string().required("Campo obrigatorio")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HandleProps>({ resolver: yupResolver(formSchema) });

  const hadle = (data:HandleProps) =>{
      signIn(data)
  }
  return <Conteiner>
    <CardLogin> 
      <form onSubmit={handleSubmit(hadle)}>
        <div>
          <label>Email</label>
          <input placeholder="Digite seu email" {...register("email")}/>
        </div>
        <div>
          <label>Senha</label>
          <input placeholder="Digite sua senha" {...register("password")} type = "password"/>
        </div>
        <button type = "submit">Enviar</button>
      </form>
    </CardLogin>

  </Conteiner>
};

export default Login;