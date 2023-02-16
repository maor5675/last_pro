import { useEffect, useState } from 'react';
import './App.css';
import './Sty.css';
import Products from './components/Products';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cartproduct from './components/Cartproduct';


function App() {
  const[products,setProducts] = useState([])
  const[Cartproducts,setCartProducts] = useState([])
  

  useEffect(()=>{
    fetch('http://localhost:8000/webshop/cart')
    .then((response) => response.json())
    .then((data) => {
      setCartProducts(data)
    });
    console.log('use effect called')
  }, [])

  useEffect(()=>{
    fetch('http://localhost:8000/webshop')
    .then((response) => response.json())
    .then((data) => {
      setProducts(data)
    });
    console.log('use effect called')
  }, [])


  return (
    <>
    <BrowserRouter>
    <Header/>
    <br></br>
    <Routes>
      <Route path='/' element={<div container> 
      {/* // <Card/>   */}
     <Products products ={products}/> </div>}/> 
    <Route path='/cart' element={<Cartproduct cartproduct={Cartproducts}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
