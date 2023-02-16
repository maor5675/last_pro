import Card from "./Card"
import Product from "./Product"

function Products({products}) {
  
  return (
    <>
    <h1></h1>
    <div className="container">
      {products.map(product => <Card  key={product.id} product={product} />) }
    </div>
    </>
  )
}

export default Products
