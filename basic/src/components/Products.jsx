import React from 'react'

const Products = () => {
    const products = [
    {
      id: 1,
      name: "Smart Watch",
      price: "₹2,999",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 2,
      name: "Wireless Headphone",
      price: "₹1,499",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: 3,
      name: "Sneakers",
      price: "₹3,499",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 4,
      name: "Backpack",
      price: "₹999",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    },
  ];
  return <>
  
  <section className="products">
        <h2 className="section-title">Featured Products</h2>

        <div className="product-grid">
          {products.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="card-body">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>
  
  </>
}

export default Products