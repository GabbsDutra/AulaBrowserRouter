import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route,Routes} from 'react-router-dom' 
import Home from'./componentes/listar_produtos'
import Header from './componentes/header'
import Footer from './componentes/footer'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       
      <Route path='/' element={<Home/>}/>
      <Route path='/Produtos' element={<Produtos/>}/>
      <Route path='/Ofertas'element={<Ofertas/>}/>  
     
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
 

