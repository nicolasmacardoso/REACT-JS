import { Link } from "react-router-dom";

function Erro() {
    return(
        <div>
            <h2>Ops, parece que essa página não existe!</h2>
            <br/> <br/>

            <Link to="/">Home</Link> 
            <br/> <br/>

            <Link to="/sobre">Sobre</Link> 
            <br/> <br/>

            <Link to="/contato">Contato</Link> 
            <br/> <br/>
        </div>
    )
}

export default Erro;