import { Link } from "react-router-dom";

export default function PaginaInicial() {
    return(
    <>
        <h1>Pagina Inicial</h1>
                
                <h3><Link to='/Produtos'> Produtos</Link></h3>
                
                <h3><Link to='/Ofertas'>Ofertas</Link></h3>
                
                <h3><Link to='/Home'>Home</Link></h3>
                
    </>
    )
}