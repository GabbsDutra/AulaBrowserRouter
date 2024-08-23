import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import Footer from "../src/Footer";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function PaginaInicial() {
    return(
    <>
    <div className="containerTudo">

        <h1 className="paginaInicial">Pagina Inicial</h1>

        <div className="containerLinks">

                
                <h3><Link to='/Produtos'> Produtos</Link></h3>
                
                <h3><Link to='/Ofertas'>Ofertas</Link></h3>
                
                <h3><Link to='/Home'>Home</Link></h3>
        </div>
        
    </div>
    <Footer/>
    </>
    )
}



        <Carousel
    infiniteLoop
    useKeyboardArrows
    autoPlay
    showArrows={true}
    showStatus={false}  
    showThumbs={false}
    dynamicHeight>
        <div>
        <img src="https://images2.alphacoders.com/134/1347155.png" 
        alt="" />
        </div>          

    </Carousel>