import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <h1>Bem vindo a pagina Home</h1>
        <br/> <br/>
        <span>Esse é o meu projeto de React</span>
        <br/> <br/> <br/>

        <Link to="/contato">Contato</Link>
        <br/> <br/> <br/>
        
        <Link to="/sobre">Sobre</Link> 
      </div>
    );
  }
  
  export default Home;
  