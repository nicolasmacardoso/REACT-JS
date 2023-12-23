import { Link } from "react-router-dom";

function Contato() {
    return (
      <div>
        <h1>Página Contato</h1>
        <br/> <br/>
        
        <span>Contato da empresa (dd) xxxxx-xxxx</span> 
        <br/> <br/>

        <Link to="/">Página Inicial</Link>
        <br/> <br/> 

        <Link to="/sobre">Sobre</Link>
      </div>
    );
  }
  
  export default Contato;
  