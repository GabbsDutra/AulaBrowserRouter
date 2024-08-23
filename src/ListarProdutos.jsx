export default function ListarProdutos({lista}){

  return(
  <div className="container-Produtos">
    {
      lista.map((produto) => (
        <div className="container-Produtos-Home" key={produto.id}>
        <div className="card-container">
        <div className="card">

        <div className="produto-imagem">
          <img src={produto.imagem}/>
        </div>
        <div className="produto-nome">
          <h1>{produto.nome}</h1>
        </div>

        <div className="produto-Preco">
          <p>{produto.preco}</p>
        </div>
        <div className="produtotamanho">
          <h4>{produto.tamanho}</h4>
        </div>

        <div className="produto-ano">
          <h3>{produto.ano}</h3>
        </div>

        <div className="btao-Container">
          <button className="btao">Comprar</button>
        </div>
      </div>
      </div>
      </div>
      ))
    }
  </div>
  )
}