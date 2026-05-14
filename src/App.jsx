import { Routes, Route } from 'react-router-dom'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Start from './Start'
import Home from './Home'
import Product from './Product' 
import './App.css'

const stripePromise = loadStripe("your_stripe_publishable_key");

function App() {
  return (
    <Elements stripe={stripePromise}>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Elements>
  )
}

export default App