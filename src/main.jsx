import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../componentes/home'
import Inicio from '../componentes/PaginaInicial'
import Produtos from '../componentes/produtos'
import Ofertas from '../componentes/ofertas'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
   
    <Route element={<Inicio/>} path='/'/>
    <Route element={<Home/>} path='/home'/>
    <Route element={<Produtos/>} path='/Produtos'/>
    <Route element={<Ofertas/>} path='/ofertas'/>
    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
 

