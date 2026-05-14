import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const products = {
  1: { name: "Vintage Baseball Cap", price: 49.99, image: "/baseball.jpg" },
  2: { name: "Classic Vintage Cap", price: 39.99, image: "/Cap.jpg" },
  3: { name: "French Casquette", price: 59.99, image: "/Casquette.jpg" },
  4: { name: "Letter Print Tee", price: 45.99, image: "/Letter.jpg" },
  5: { name: "Palm Vintage Shirt", price: 55.99, image: "/PALM.jpg" },
  6: { name: "Classic Polo", price: 49.99, image: "/polo.jpg" },
  7: { name: "Vintage Button Up", price: 65.99, image: "/Shirts.jpg" },
  8: { name: "Travis Edition", price: 79.99, image: "/Travis.jpg" },
  9: { name: "Vintage Item 1", price: 29.99, image: "/1.jpg" },
  10: { name: "Vintage Item 2", price: 34.99, image: "/2.jpg" },
  11: { name: "Vintage Item 3", price: 39.99, image: "/3.jpg" },
  12: { name: "Vintage Item 4", price: 44.99, image: "/4.jpg" },
  13: { name: "Vintage Item 5", price: 49.99, image: "/5.jpg" },
  14: { name: "Vintage Item 6", price: 54.99, image: "/6.jpg" },
  15: { name: "Vintage Item 7", price: 59.99, image: "/7.jpg" },
  16: { name: "Vintage Item 8", price: 64.99, image: "/8.jpg" },
};

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = Number(id);
  const product = products[productId];

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>Sorry, we couldn't find this product.</p>
        <Link to="/home" className="back-to-shop">← Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="product-container">
      {/* Mobile Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="mobile-back-btn"
        style={{
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          padding: '10px 18px',
          borderRadius: '30px',
          fontSize: '14px',
          marginBottom: '20px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          width: 'auto',
          alignSelf: 'flex-start'
        }}
      >
        ← Back
      </button>

      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <p className="description">
          High-quality vintage item. Limited stock available.
        </p>
        
        <CheckoutForm 
          productName={product.name} 
          amount={product.price} 
        />
        
        <Link to="/home" className="back-link">
          ← Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default Product;