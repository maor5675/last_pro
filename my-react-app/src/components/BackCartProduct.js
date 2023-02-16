import React from 'react'
import AddToCartTable from './AddToCartTable';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GoTasklist } from "react-icons/go";

function BackCartProduct({price}) {
  
  return (
    <div className='maintable'>
        <GoTasklist style={{height: '180px',width: '180px' , color:'white'  }}/>
        <AddToCartTable price={price} />
        <button type='button' className='colorbord'>
          <h3 style={{color:'white'}}> click in the icon below end the order </h3>
        <AiOutlineCheckCircle style={{height: '180px',width: '180px' , color:'white' ,marginleft: '20px' }} onClick={() =>
        
        fetch('http://127.0.0.1:8000/webshop/checkout')
        .then(response => response.json())
        .then(data => {
        console.log(data);
        setTimeout(() => {
            window.location.reload()
            console.log('Reloading page...');
          }, 1000);
  })
  .catch(error => console.error(error))
        
        }/>
        </button>
    </div>
  )
}

export default BackCartProduct
