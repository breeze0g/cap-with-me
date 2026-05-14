import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // Array of all product images
  const productImages = [
    { src: "baseball.jpg", alt: "Baseball", name: "Vintage Baseball Cap" },
    { src: "Cap.jpg", alt: "Cap", name: "Classic Vintage Cap" },
    { src: "Casquette.jpg", alt: "Casquette", name: "French Casquette" },
    { src: "Letter.jpg", alt: "Letter", name: "Letter Print Tee" },
    { src: "PALM.jpg", alt: "PALM", name: "Palm Vintage Shirt" },
    { src: "polo.jpg", alt: "Polo", name: "Classic Polo" },
    { src: "Shirts.jpg", alt: "Shirts", name: "Vintage Button Up" },
    { src: "Travis.jpg", alt: "Travis", name: "Travis Edition" },
    { src: "1.jpg", alt: "Item 1", name: "Vintage Item 1" },
    { src: "2.jpg", alt: "Item 2", name: "Vintage Item 2" },
    { src: "3.jpg", alt: "Item 3", name: "Vintage Item 3" },
    { src: "4.jpg", alt: "Item 4", name: "Vintage Item 4" },
    { src: "5.jpg", alt: "Item 5", name: "Vintage Item 5" },
    { src: "6.jpg", alt: "Item 6", name: "Vintage Item 6" },
    { src: "7.jpg", alt: "Item 7", name: "Vintage Item 7" },
    { src: "8.jpg", alt: "Item 8", name: "Vintage Item 8" },
  ];

  return (
    <>

      <div className="home-container">
        <h2 className="section-title">Shop All Products</h2>
        <p className="section-subtitle">Browse our curated vintage collection</p>

        <div className="home-gallery">
          {productImages.map((image, index) => (
            <Link to={`/product/${index + 1}`} className="product-card" key={index}>
              <img src={image.src} alt={image.alt} />
              <div className="product-info">
                <h3>{image.name}</h3>
                <p className="product-price">$49.99</p>
                <button className="buy-btn">Shop Now</button>
              </div>
            </Link>
          ))}
        </div>
      </div>

        
<footer className="footer">
  <div className="footer-container">
    <div className="footer-column">
      <h3>Lets Get Vintage</h3>
      <p>Your go-to destination for vintage style and timeless fashion.</p>
      <div className="social-links">
        <a href="#"><i className="bi bi-instagram"></i></a>
        <a href="#"><i className="bi bi-facebook"></i></a>
        <a href="#"><i className="bi bi-twitter-x"></i></a>
        <a href="#"><i className="bi bi-tiktok"></i></a>
        <a href="#"><i className="bi bi-pinterest"></i></a>
      </div>
    </div>

    <div className="footer-column">
      <h3>Shop</h3>
      <ul>
        <li><a href="/Home">All Products</a></li>
        <li><a href="/Home">New Arrivals</a></li>
        <li><a href="/Home">Best Sellers</a></li>
        <li><a href="/Home">Vintage Collection</a></li>
        <li><a href="/Home">Sale</a></li>
      </ul>
    </div>

    <div className="footer-column">
      <h3>Support</h3>
      <ul>
        <li><a href="/Home">FAQ</a></li>
        <li><a href="/Home">Shipping & Returns</a></li>
        <li><a href="/Home">Size Guide</a></li>
        <li><a href="/Home">Contact Us</a></li>
        <li><a href="/Home">Track Order</a></li>
      </ul>
    </div>

    <div className="footer-column">
      <h3>Company</h3>
      <ul>
        <li><a href="/Home">About Us</a></li>
        <li><a href="/Home">Sustainability</a></li>
        <li><a href="/Home">Careers</a></li>
        <li><a href="/Home">Privacy Policy</a></li>
        <li><a href="/Home">Terms of Service</a></li>
      </ul>
    </div>

    <div className="footer-column">
      <h3>Newsletter</h3>
      <p>Subscribe for 10% off your first order</p>
      <div className="newsletter">
        <input type="email" placeholder="Your email address" />
        <button>Subscribe</button>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2026 Lets Get Vintage. All rights reserved.</p>
    <div className="payment-icons">
      <i className="bi bi-credit-card"></i>
      <i className="bi bi-paypal"></i>
      <i className="bi bi-apple"></i>
      <i className="bi bi-google"></i>
    </div>
  </div>
</footer>
    </>
  );
}

export default Home;