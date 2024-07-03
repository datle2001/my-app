export const Product = ({product, setPositionProductClicked, position}) => {
  return (
    <div onClick={(event) => {setPositionProductClicked(position)}}>
      <p>{product.title}</p>
      <img src={product.thumbnail} alt='thumbnail' style={{maxWidth: '100%'}}></img>
    </div>
  )
}