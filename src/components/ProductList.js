import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { Product } from "./Product";

export const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [positionProductClicked, setPositionProductClicked] = useState(-1);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10&skip=10')
      .then((res)  => {
        return res.json()
      })
      .then((data) => {
        setProductList(data.products)
      }).catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div style={{position: 'relative', display: 'flex'}}>
      <div id='left-panel' style={{width: '200px'}}>
        {
        productList.map((product, index) => <Product product={product} setPositionProductClicked={setPositionProductClicked} position={index}/>)
        }
      </div>
      <div id='right-panel' style={{width: '100%'}}>

        {positionProductClicked !== -1 && 
            <img 
            src={productList[positionProductClicked].images[productList[positionProductClicked].images.length-1]} 
            alt='product clicked' 
            style={
              {width: '600px', 
              display: 'block',
              marginLeft: 'auto', 
              marginRight: 'auto'}
            }
            onClick={(event) => {setOpenModal(true)}}/>
        }
      </div>

      {positionProductClicked !== -1 && 
      <ReactModal
        isOpen={openModal}
        onRequestClose={(event) => {setOpenModal(false)}}
      >
        <button onClick={(event) => setOpenModal(false)}>Close modal</button>
        <img 
            src={productList[positionProductClicked].images[productList[positionProductClicked].images.length-1]} 
            alt='product clicked' 
            style={
              {
              display: 'block',
              marginLeft: 'auto', 
              marginRight: 'auto',
              width: '100%',}
            }/> 
          </ReactModal>
      }
    </div>
  )
}