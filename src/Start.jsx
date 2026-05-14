function Start() {
  return (
    <>
      <div className="Start">
        <h1 className="start-title">Lets Get Vintage</h1>
        <a href="/Home" className="start-link">
          <i className="bi bi-bag"></i>
        </a>
      </div>
      
      <img src="/Vintage.jpg" alt="Vintage" className="below-image" />

      <h1 className="how">How do you want it?</h1>
      <p className="how-your">your design matters</p>

      <div className="image-gallery">
        <a href="/Home" className="image-card">
          <img src="baseball.jpg" alt="Baseball" />
          <p className="image-text">Click to buy from store</p>
        </a>

        <a href="/Home" className="image-card">
          <img src="Cap.jpg" alt="Cap" />
          <p className="image-text">Click to buy from store</p>
        </a>

        <a href="/Home" className="image-card">
          <img src="Casquette.jpg" alt="Casquette" />
          <p className="image-text">Click to buy from store</p>
        </a>

        <a href="/Home" className="image-card">
          <img src="Letter.jpg" alt="Letter" />
          <p className="image-text">Click to buy from store</p>
        </a>

        <a href="/Home" className="image-card">
          <img src="PALM.jpg" alt="PALM" />
          <p className="image-text">Click to buy from store</p>
        </a>

        <a href="/Home" className="image-card">
          <img src="polo.jpg" alt="Polo" />
          <p className="image-text">Click to buy from store</p>
        </a>

        <a href="/Home" className="image-card">
          <img src="Shirts.jpg" alt="Shirts" />
          <p className="image-text">Click to buy from store</p>
        </a>

        <a href="/Home" className="image-card">
          <img src="Travis.jpg" alt="Travis" />
          <p className="image-text">Click to buy from store</p>
        </a>
      </div>

      <div className="offer">
        <img src="green.jpg" alt="Green" className="green-image" />
        <div className="offer-text">
          <h2>25% discount!! Once a Month</h2>
          <p>
            To thankyou for your support past few weeks we decide to give <br /> you a special offer!  So always Keep your eyes open for our special <br />offer every month!
          </p>
          <a href="/Home">
            <button className="start-link2">Claim Offer</button>
          </a>
        </div>
      </div>

   {/* more */}
   <hr />

      <div className="image-gallery">
        <a href="/Home" className="image-card">
          <img src="1.jpg" alt="Item 1" />
          <p className="image-text">Click to buy from store</p>
        </a>

        <a href="/Home" className="image-card">
          <img src="2.jpg" alt="Item 2" />
          <p className="image-text">Click to buy from store</p>
        </a>

        <a href="/Home" className="image-card">
          <img src="3.jpg" alt="Item 3" />
          <p className="image-text">Click to buy from store</p>
        </a>

        <a href="/Home" className="image-card">
          <img src="4.jpg" alt="Item 4" />
          <p className="image-text">Click to buy from store</p>
        </a>

        <a href="/Home" className="image-card">
          <img src="5.jpg" alt="Item 5" />
          <p className="image-text">Click to buy from store</p>
        </a>

        <a href="/Home" className="image-card">
          <img src="6.jpg" alt="Item 6" />
          <p className="image-text">Click to buy from store</p>
        </a>

        <a href="/Home" className="image-card">
          <img src="7.jpg" alt="Item 7" />
          <p className="image-text">Click to buy from store</p>
        </a>

        <a href="/Home" className="image-card">
          <img src="8.jpg" alt="Item 8" />
          <p className="image-text">Click to buy from store</p>
        </a>
      </div>

      {/* Footer Section */}
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

export default Start;