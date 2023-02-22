import React from 'react'
import {BsXLg} from "react-icons/bs";


function Cart({cart}) {
  const[amount,setAmount]= React.useState(cart.quantity)




return (
  
<>
    <img className="imgscart" src={"http://127.0.0.1:8000/static"+cart.product.image} alt={'ascsa'}/>
    <div className='verticalcontainer'>
      <h4 > name : {cart.product.name} </h4>
      <hr></hr>
      <h5> genre : {cart.product.genre} </h5>
      <h5> Quantity:
      <input type="number" min="0" style={{width:'40px',backgroundColor:'rgb(6, 159, 183)',borderRadius:'30px'}} value={amount} onChange={(e) => 
       { setAmount(e.target.value)
        
        const newData = {
          'quantity': parseFloat(e.target.value)
        };
        
        fetch('http://localhost:8000/webshop/cart/'+cart.id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newData)
        })
      
        .then(response => response.json())
        .then(data => {
          window.location.reload();

          // handle the response data
        })
        .catch(error => {
          // handle any errors

        });
        
        }}/>
      </h5>
      <h5> price : {cart.product.price} $</h5>
    </div>
    <button type='button' className='colorbord' onClick={() =>
      fetch('http://localhost:8000/webshop/cart/'+cart.id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        window.location.reload();
        return response.json();
      })
    
      .then(data => {
        console.log(data);
        window.location.reload()
      })
    
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      })
      
    }>
    <BsXLg style={{height: '180px',width: '180px' , color:'red' ,marginleft: '20px' }}/>
    </button>
</>
  )
}

export default Cart
