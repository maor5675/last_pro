import React from 'react'
import { BiCartAlt } from "react-icons/bi"


function Bord() {
  return (
    <>
    <h4 >This item add to you Cart</h4>
    <a  href='/cart' style={{float:'center',background:'white',color:'black'}} className='mybutton'>Move to the Cart <BiCartAlt/></a>
    {/* <div className='wrapper'>
        <div className='trigger'></div>
            <div className='content'>
            <diV class="heading">this Items added to your cart</diV>
            </div>
        
    </div> */}
    </>
  )
}

export default Bord
