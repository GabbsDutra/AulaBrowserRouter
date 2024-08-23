import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ListarProdutos from '../src/ListarProdutos';
import { useState } from 'react';
import Header from '../src/Header';
import Footer from '../src/Footer';



export default function Home() {

const [figurasHome] = useState([
    {
        id: 1, nome: 'Figura Fogueira Dark Souls 3, Espada Brilhante, Fogo Brilhante', preco: 'R$ 71,57', tamanho: '12 cm', oferta: '132,6', ano: '2016',
        imagem: '../src/imagens/1.png'
     },



     {
        id: 2, nome: 'Sun knight Figura, Solar Solaire figure', preco: 'R$ 182,66', tamanho: 'R$ 17 cm', oferta: '0', ano: '2014',
        imagem: '../src/imagens/2.png'
     },



     {
        id: 3, nome: 'Artorias Dark Souls Figure', preco: 'R$ 502,82', tamanho: '41 cm', oferta: 'R$ 132,6', ano: '2015',
        imagem: '../src/imagens/3.png'
     },


     {
        id: 4, nome: 'Dragon Slayer Ornstein figure', preco: 'R$ 560,82', tamanho: '43 cm', oferta: 'R$ 117,6', ano: '2015',
        imagem: '../src/imagens/4.png'
     },



     {
        id: 5, nome: ' Catarina Kishi figure', preco: 'R$ 320,60', tamanho: '20 cm', oferta: 'R$ 0', ano: '2015',
        imagem: '../src/imagens/5.png'
     },
])

    return(
<>

<Header/>
        <h1 className='PaginaInicial'>Home</h1>
        <div className="carousel-container">

        <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}  
                showThumbs={false}
                dynamicHeight>
                   <div>
                    <img src="https://images2.alphacoders.com/695/695463.jpg" alt="" />
                   </div>
                   <div>
                    <img src="https://i.pinimg.com/originals/a6/3c/24/a63c24e93e415a4f06eaac6e4d449507.jpg" alt="" />
                   </div>
                    <div>
                        <img src="https://wallpapercave.com/wp/wp8958584.jpg" alt="" />
                    </div>
            </Carousel>
         </div>
                <h1 className='figures-Home'>Figures</h1>
                <div className="container-Figures-Home">
                    <ListarProdutos lista={figurasHome}/>
                </div>







    


    <Footer/>
</>
    )
}