import Img from "./Img"
import Product from "./Product"


function Card({product}) {
  return (  
      <div className="artical-card ">
        <Img source ={product.image} />            
        <Product product={product} />
      </div>
  )
}

export default Card
