import React from 'react'
import { Link } from 'react-router-dom'
import { BiCartAlt } from "react-icons/bi"


function Header() {
  return (
    <div className='topnav'>
        <Link to ='/' className='marginstyle'>Product </Link>
        <a href='/cart' style={{float:'right'}} className='marginstyle'>Cart <BiCartAlt/></a>
    </div>
  )
}

export default Header