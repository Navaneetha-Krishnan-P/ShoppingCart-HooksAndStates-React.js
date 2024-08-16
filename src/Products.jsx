
import React from 'react'
import { useContext } from 'react'
import { cartContext } from './App'
import "./products.css"



export const Products = ({ product }) => {




  const { cart, setCart } = useContext(cartContext);
  const addToCart = () => {
    setCart([...cart, product])
  }
  const removeFromCart = () => {
    setCart(cart.filter((c) => c.id != product.id))
  }

  return (
    <div className="col" style={{ width: "18rem" }}>
      <img src={product.pic} className="card-img-top" alt={product.title} /><br /><br />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text" style={{color:"red"}}>Rs {product.price}</p>
        {cart.includes(product) ? (
        <button className="button1" onClick={removeFromCart} >Remove from Cart</button> ): <button className="button" onClick={addToCart}>Add to Cart</button>}
      </div>
    </div>
  )
}
