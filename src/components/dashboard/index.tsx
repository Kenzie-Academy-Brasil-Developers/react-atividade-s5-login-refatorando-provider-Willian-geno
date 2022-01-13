import { Conteiner } from "./styled";
import { useAuth } from "../../Providers/Auth";

const Dashboard = () => {

  const {logout} = useAuth();

  return <Conteiner>
      <div>
        <button onClick={logout}>Logado</button>
      </div>
  </Conteiner>
};

export default Dashboard;