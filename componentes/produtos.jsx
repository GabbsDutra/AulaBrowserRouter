import { useState } from "react";
export default function Home(){
    const [listaProdutos, setProdutos] = useState
    ([
    { id: 1, nome: 'Figura Fogueira Dark Souls 3, Espada Brilhante, Fogo Brilhante', preco: 'R$ 71,57', tamanho: '12 cm',oferta:'132,6', ano: '2016' 
        
    },



    { id: 2, nome: 'Sun knight Figura, Solar Solaire figure', preco: 'R$ 182,66' , tamanho: '17 cm',oferta:'0'},
    
    
    
    { id: 3, nome: 'Artorias Dark Souls Figure', preco: 'R$ 502,82', tamanho: '41 cm',oferta:'132,6',oferta:'0' },
    
    
    { id: 4, nome: 'Dragon Slayer Ornstein figure', preco: 'R$ 560,82', tamanho: '43 cm',oferta:'117,6' },
    
    
    
    { id: 5, nome: ' Catarina Kishi figure', preco: 'R$ 320,60' , tamanho: '20 cm',oferta:'0',
        imagem: '../src/imagens/5.png' 
    },
    
    
    
    { id: 6, nome: ' Armadura Fluted figure', preco: 'R$ 79,53', tamanho: '17 cm', oferta:'75,05'},
    
    
    
    { id: 7, nome: ' Faraam Knight', preco: 'R$ 84,12', tamanho: '17 cm', oferta:'0'},
    
    
    
    { id: 8, nome: 'Havel figure ', preco: 'R$ 442,60', tamanho: '50 cm', oferta:'397,8'},
    
    
    
    { id: 9, nome: 'Executioner smough',preco:'R$ 119,91', tamanho: '48 cm',oferta:'95,2' },
    
    
    
    { id: 10, nome: ' Yhorm on throne', preco: 'R$ 950,20', tamanho: '50 cm',oferta:'475,00' },
    
    
    
    { id: 11, nome: ' Sif, The Big Gray Wolf ', preco: 'R$ 190,53', tamanho: '27 cm',oferta:'142,6' },
    
    
    
    { id: 12, nome: ' Nameless King', preco: 'R$ 804,12' , tamanho: '45 cm', oferta:'550,00'},
    
    
    
    { id: 13, nome: 'Dark Souls Elite Knight Exploration Standard Polyresin Statue ', preco: 'R$ 530,60', tamanho: '15 cm',oferta:'0' },
    
    
    
    { id: 14, nome: 'Gwyn, Lor of Cinder', preco: 'R$ 1000,53', tamanho: '46 cm',oferta:'0' },
    
    
    
    { id: 15, nome: 'Soul of Cinder figure', preco: 'R$ 1200,53', tamanho: '40 cm',oferta:'0' },
    ])
     
    
    console.table(listaProdutos);
    return (
        
        <div className="bloco-principal" >
            
            <h1 className="pro">Produtos</h1>
            <br/>
            <div className="blo2">
            <div id="bloco-produtos" className="bloco-produtos">
                {
                  listaProdutos.map((produto)=> 
                      <div key={produto.id}>
                    <div className="card">
                             <img className="listaimg" src={produto.imagem}/>
                             <td>
                             </td>
                             <div className="meio">
                             <p> id: {produto.id}</p>
                             <p> Produto: {produto.nome}</p>
                             <p> Valor: {produto.preco}</p>
                             <p> tamanho: {produto.tamanho}</p>
                             <p> oferta: {produto.oferta}</p>
                            </div>
                      </div>
                      </div>
                  )}
                  </div>
                      </div>

                  </div>           
    );
}