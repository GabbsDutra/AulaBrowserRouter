import { useState } from "react";
import ListarProdutos from "../src/ListarProdutos";
import Header from "../src/Header";
import Footer from "../src/Footer";



export default function Home(){
    const [listaProdutos] = useState
    ([
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



       {
          id: 6, nome: ' Armadura Fluted figure', preco: 'R$ 79,53', tamanho: '17 cm', oferta: 'R$ 75,05', ano: '2014',
          imagem: '../src/imagens/6.png'
       },



       {
          id: 7, nome: ' Faraam Knight figure', preco: 'R$ 84,12', tamanho: '17 cm', oferta: 'R$ 0', ano: '2016',
          imagem: '../src/imagens/7.png'
       },



       {
          id: 8, nome: 'Havel figure ', preco: 'R$ 442,60', tamanho: '50 cm', oferta: 'R$ 397,8', ano: '2017',
          imagem: '../src/imagens/8.png'
       },



       {
          id: 9, nome: 'Executioner smough figure', preco: 'R$ 119,91', tamanho: '48 cm', oferta: 'R$ 95,2', ano: '2015',
          imagem: '../src/imagens/9.png'
       },



       {
          id: 10, nome: ' Yhorm on throne figure', preco: 'R$ 950,20', tamanho: '50 cm', oferta: 'R$ 475,00', ano: '2017',
          imagem: '../src/imagens/10.png'
       },



       {
          id: 11, nome: ' Sif, The Big Gray Wolf figure ', preco: 'R$ 190,53', tamanho: '27 cm', oferta: 'R$ 142,6', ano: '2015',
          imagem: '../src/imagens/11.png'
       },



       {
          id: 12, nome: ' Nameless King figure', preco: 'R$ 804,12', tamanho: '45 cm', oferta: 'R$550,00', ano: '2016',
          imagem: '../src/imagens/12.png'
       },



       {
          id: 13, nome: 'Dark Souls Elite Knight Exploration Standard Polyresin Statue ', preco: 'R$ 530,60', tamanho: '15 cm', oferta: '0', ano: '2014',
          imagem: '../src/imagens/13.png'
       },



       {
          id: 14, nome: 'Gwyn, Lord of Cinder figure', preco: 'R$ 1000,53', tamanho: '46 cm', oferta: 'R$0', ano: '2013',
          imagem: '../src/imagens/14.png'
       },



       {
          id: 15, nome: 'Soul of Cinder figure', preco: 'R$ 1200,53', tamanho: '40 cm', oferta: 'R$0', ano: '2018',
          imagem: '../src/imagens/15.png'
       },
    ])
     
    
    console.table(listaProdutos);
    return (
       <>
       <Header/>
       <h1 className="produtosDisponiveis">Produtos disponíveis</h1>
       <ListarProdutos lista={listaProdutos}/>








       <Footer/>
       </>
    );
}