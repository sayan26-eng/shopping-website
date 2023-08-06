import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";


const Product = (product) => {
    const {id,price,productName,productImage}=product.data;
    const {addToCart,cartItems}= useContext(ShopContext)
    const cartItemAmount = cartItems[id];
    return (
    <div className="product">
        <img src={productImage} alt={productName}/>
       <div className="description">
        <p><b>{productName}</b></p>
        <p>${price}</p>
       </div>
       <button className="addToCartBttn" onClick={()=>addToCart(id)}>
        Add to Cart {cartItemAmount>0 && <>({cartItemAmount})</>}
        </button>
    </div>
  )
}

export default Product