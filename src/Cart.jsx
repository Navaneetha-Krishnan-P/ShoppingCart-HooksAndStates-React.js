import React, { useState, useContext, useEffect } from 'react'
import { cartContext } from './App'
import data from "./products.json"
import "./cart.css"


export const Cart = () => {

    const { cart, setCart } = useContext(cartContext)

    const [total, setTotal] = useState(0)

    const updateQuantity = (productId, newQuantity) => {
        const updatedCart = cart.map(item => {
            if (item.id === productId) {
                return { ...item, qty: newQuantity };
            }
            return item;
        });
        setCart(updatedCart);
    }


    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + (parseInt(curr.price) * (curr.qty)), 0))
    }, [cart])


    

    return (
        <div>
            <h2 className='total'>Total Amount = {total}</h2>
            <button className='btnbuy'>BUY NOW!</button>
            <div className='cards1'>
                {cart.map((product) => (
                    <><div className="column" style={{ width: "10rem" }}>
                        <img src={product.pic} className="card-img-top" alt={product.title} /><br /><br />
                        <div className="card-body">
                            <div className="card-title"><b>{product.title}</b></div>
                            <div className="card-text">Rs {product.price}</div><br />
                        </div>
                        <div className='btn'>
                            <button className="button" onClick={() => updateQuantity(product.id, product.qty + 1)}>+</button>
                            <span className='qty'>{product.qty}</span>

                            <button className="button" onClick={() => updateQuantity(product.id,( (product.qty)>1 ? product.qty - 1 : none))}>-</button>
                        </div>
                    </div>
                    </>
                ))}
    </div>
        </div>)

}
