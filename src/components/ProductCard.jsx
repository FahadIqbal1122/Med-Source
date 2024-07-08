const ProductCard = (props) => {
  return (
    <div key={props.id} className="product-card">
      <div className="product-img">
        <img src={props.img} alt="product image" />
      </div>
      <div className="product-card-info">
        <h3>{props.name}</h3>
        <p>{props.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
