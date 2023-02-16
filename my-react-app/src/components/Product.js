import React, { useState } from 'react';
import { BiCartAlt } from "react-icons/bi"
import Bord from './Bord';


function Product({product}) {
    const [number, setNumber] = useState(1);
    const [showComponent, setShowComponent] = useState(false);
    
    
    // function Add(a,b){
    //   axios('http://localhost:8000/webshop/cart/details/'+a+','+ b)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   } ,(e)=>setNumber(e.target.value=0))


  
  return (
    <div className="artical-content">
        <p className="card-category" > name : {product.name}</p>
        <h4 style={{color:'white'}}> genre: {product.genre}</h4>
        <p className="card-excerpt" style={{color:'white'}}> year_published:  {product.year_published}</p>
        <h4 className="middle" style={{color:'white'}}> price : {product.price}$ </h4>
        Quantity:
        <input type="number" style={{width:'40px', textalign:'center'}} value={number} onChange={e => setNumber(e.target.value)}/>
        <button className='mybutton' onClick={() =>
        fetch('http://localhost:8000/webshop/cart',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "quantity": number,
            "product": product.id
        })
        })
              // here need to change for get
        .then(response => response.json())
        .then(data => {
        console.log(data);
        setNumber(0);
        setShowComponent(true)
      })
      .catch(error => {
        console.log(error);
      } ,(e)=>setNumber(e.target.value=0))     
     }> Add To Card <BiCartAlt/> </button>
      {showComponent && <Bord />}
        {/* <Link to = {'/card/details/'+product.id +','+ number}  className='mybutton'>Add TO Cart </Link> */}
        {/* <AddToCart product={product.id} number={number} className="mybutton"> Add To Card </AddToCart> */}
    </div>
)}

export default Product

      // .then(response => {
      //   console.log(response);
      //   setNumber(0);
      //   setShowComponent(true)
      // })
      // .catch(error => {
      //   console.log(error);
      // } ,(e)=>setNumber(e.target.value=0))     
