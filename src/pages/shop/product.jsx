import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';



export const Product = (props) => {
    const {id,productName,price,productImg}=props.data;
    const {addToCart, cartItems}=useContext(ShopContext)

    const cartItemsAmount=cartItems[id]
  return (
    <div className='product'>
         <img src={productImg}  />
        <div className='description'>
       <p><b>{productName}</b></p>
       <p>${price}</p>
        </div>
        <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add to Cart{cartItemsAmount > 0 && <>({cartItemsAmount})</>}</button>
    </div>
  )
}
