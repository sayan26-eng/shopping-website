import { PRODUCTS } from "../../Products"
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import './Cart.css'


const Cart = () => {
  const {cartItems,getTotalCartAmount}= useContext(ShopContext)
  const totalAmount=getTotalCartAmount();
  const navigate=useNavigate();
  return (
    <div className="cart">
      <div><h1>Your Cart Items</h1></div>
      <div className="cartItems">
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id]!==0){
            return <CartItem data={product}/>
          }
          return null;
        })}
      </div>
      {totalAmount>0?
      <div className="checkout">
        <p>Subtotal:${totalAmount}</p>
        <button onClick={()=>navigate("/")}>Continue Shopping</button>
        <button>Check Out</button>
      </div>:<h1>Your Cart is empty</h1>}
    </div>
  )
}

export default Cart