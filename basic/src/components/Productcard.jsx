import React from 'react'

const Productcard = ({name,price,image,rating,category,color}) => {

  return <>
  <div className='card'>
    <img src={image} alt='img'/>
    <div className='card-body'>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{rating}</p>
        <p>{category}</p>
        <p>{color}</p>
        <button>Add To Cart</button>
    </div>
  </div>
  
  </>
}

export default Productcard