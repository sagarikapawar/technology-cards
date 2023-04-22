import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card_item`}>
      <h1 className="card-title">{title}</h1>
      <p className="card_description">{description}</p>
      <div>
        <img className="img-container" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default CardItem
