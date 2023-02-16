import React from 'react'
import BackCartProduct from './BackCartProduct';
import Cardcart from './Cardcart'

function Cartproduct({ cartproduct }) {
  const [a, setA] = React.useState(0);
  const [numbers, setNumbers] = React.useState([]);

  React.useEffect(() => {
    if (cartproduct && cartproduct[a] && cartproduct[a].product) {
      setNumbers([...numbers, cartproduct[a].product.price*cartproduct[a].quantity]);
      setA(a + 1);
    }
  }, [a, cartproduct, numbers]);

  return (
    <>
      <div>
        <h1 className='middle'>My Cart</h1>
        <hr />
        {cartproduct &&
          cartproduct.map((cart) => {
            return <Cardcart key={cart.id} cart={cart} />;
          })}
      </div>
        <BackCartProduct price={numbers} />
    </>
  );
}

export default Cartproduct;




