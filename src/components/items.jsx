import React, { useEffect, useState } from 'react'
import "./items.css"
import { useCart } from "../context/useContext"


const Items = () =>  {
  const { addToCart } = useCart();
    const [apidata, setApidata] = useState([]);


    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setApidata(data);
                console.log(data);
    
            }
            catch{
               console.log("error while fetching data");
            }
        }
        fetchData();
    },[])

  return (
    <>  
      <div className='wrapper'>
        <h1>Men's Clothing</h1>
        <div className='container'>
        {apidata && apidata.map((item) => (
          <div className='item' key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.image} alt="Product" />
            <div>
            <p><b>Description:</b> {item.description}</p>
            <p><b>Price:</b> {item.price}</p>
            <p><b>Rating:</b> {item.rating.rate}</p>
            <div className='btn'>
            <button  onClick={() => addToCart(item)}>Add to cart</button>
            </div>
            </div>
          </div>  
        ))}
        </div>
      </div>
    </>
  )
}

export default Items