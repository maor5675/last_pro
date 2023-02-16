import React from 'react'

function AddToCartTable({price}) {
const sum = price.reduce((total, num) => total + num, 0);

if(sum === 0){
  return (
    <div className='cheack'> your cart is empty please choose a product </div>
  );
  }

else{
  return (
    <div className='cheack' >
        <h4 style={{marginLeft:'40%'}}>total price:</h4>
        <hr></hr>
        <h3 style={{marginLeft:'40%'}}>{sum}$</h3>

    </div>
  )
}}

export default AddToCartTable
