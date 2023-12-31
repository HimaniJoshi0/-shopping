import React from 'react'
import Nav from '../components/nav'
import "./cart.css"
import { useCart } from '../context/useContext'


const Cart = () => {
    const { cartItems} = useCart();
    console.log("cart")
    console.log(cartItems);

  return (
    <>
    <Nav />
    <div className='container'>
        <h1>Your Cart</h1>
        <div className='cart_items'>
        {cartItems.map((item) => (
          <div key={item.id}>
          <h3>{item.title}</h3>
            <img src={item.image} alt="Product" />
            <div>
            <p><b>Description:</b> {item.description}</p>
            <p><b>Price:</b> {item.price}</p>
            <p><b>Rating:</b> {item.rating.rate}</p>
            <div className='btn'>
      
            </div>
            </div>
          </div>
        ))}

        </div>
    </div>
    </>
  )
}

export default Cart