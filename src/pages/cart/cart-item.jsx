import { ShopContext } from "../../context/shop-context";
import "./cart.css";
import { useContext } from "react";


export const CartItem=(props)=>{
    const {id,productName,price,productImg}=props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    return (
        <div className='cartItem'>
             <img src={productImg}  />
            <div className='description'>
           <p><b>{productName}</b></p>
           <p>${price}</p>
           <div className="countHandler">
            <button onClick={()=> removeFromCart(id)}> - </button>
            <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value), id)}/>
            <button onClick={()=>addToCart(id)}>+</button>
           </div>
            </div>
        </div>
      )
    }
