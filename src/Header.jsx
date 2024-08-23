import { Link } from "react-router-dom"


export default function Header() {
    return(
        <div>
    <ul>
    <nav className="cabecario">
        <Link to='/Produtos'><p>Produtos Disponíveis </p></Link>
        <Link to='/ofertas'><p>Ofertas Disponíveis</p></Link>
        <Link to='/Home'>
        <p>Home</p>
        </Link>
        <Link to='/'>Página Inicial</Link>
        </nav>
    </ul>

    </div>
)
}
