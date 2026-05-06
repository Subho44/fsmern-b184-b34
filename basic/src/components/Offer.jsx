import React from 'react'
import Productcard from './Productcard';

const Offer = () => {
   const products = [
    {
      id: 1,
      name: "Smart Watch",
      price: "₹2,999",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      category:"watch",
      color:"red"
    },
    {
      id: 2,
      name: "Wireless Headphone",
      price: "₹1,499",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
       category:"watch",
      color:"red"
    },
    {
      id: 3,
      name: "Sneakers",
      price: "₹3,499",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
       category:"watch",
      color:"red"
    },
    {
      id: 4,
      name: "Backpack",
      price: "₹999",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
       category:"watch",
      color:"red"
    },
  ];
  return <>
  <div>
    {products.map(x=>(
      <Productcard 
      key={x.id}
       name={x.name}
       price={x.price}
       image={x.image}
       rating={x.rating}
       category={x.category}
       color={x.color}

      />
    ))}
  </div>
  
  
  </>
}

export default Offer