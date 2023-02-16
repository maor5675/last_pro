
function Img({source}) {
  return (
    <figure className="artical-img imgs">
      <img className="imgs" src={"http://127.0.0.1:8000/static"+source} alt={'ascsa'}/>
    </figure>
  )
}
export default Img
