import { Link } from 'react-router-dom'
const BrandCard = ({}) => {
  return (
    <div className="brands-card" onClick={props.onClick} key={props.id}>
      <Link to={`${props.id}`}>
        <div className="img-wrapper">
          <img src={props.image} alt="" />
        </div>
        <div className="info-wrapper flex-col">
          <h3>Name</h3>
          <p>Naming</p>
        </div>
      </Link>
    </div>
  )
}

export default BrandCard
