import { Conteiner } from "./styles";
import {Route, Routes} from "react-router-dom"
import Login from "./components/login";
import Dashboard from "./components/dashboard";

function App() {

  return <Conteiner>
    <Routes>
      <Route path = "/" element ={<Login/>}/>
      <Route path = "/dashboard" element ={<Dashboard/>}/>
    </Routes>

  </Conteiner>
}

export default App;
