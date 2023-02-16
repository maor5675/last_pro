import React from 'react'
import Cart from './Cart'

function Cardcart({cart}) {

  return (
    <>
    <div className='maintable'>      
        <Cart cart={cart}/>
    </div>
   
    </>
  )
}

export default Cardcart
