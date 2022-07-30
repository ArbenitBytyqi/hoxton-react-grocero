import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [store, setStore] = useState([
    {
      id: 1,
      name: 'beetroot',
      price: 0.45,
      stock: 10,
      inCart: 0,
    },
    {
      id: 2,
      name: 'carrot',
      price: 0.15,
      stock: 2,
      inCart: 5,
    },
    {
      id: 3,
      name: 'apple',
      price: 0.25,
      stock: 1,
      inCart: 0,
    },
  ])

  function getItemImagePath(item: any) {
    let id = String(item.id).padStart(3, '0')
    return `assets/icons/${id}-${item.name}.svg`
  }

  function getCartItems() {
    return store.filter(item => item.inCart > 0)
  }


  return (
    <div className="App">
      <header id="store">
        <h1>Grocero</h1>
        <ul className="item-list store--item-list">

          {
            store.map(item => (
              <li>
                <div className=".store--item-icon">
                  <img src="assets/icons/001-beetroot.svg" />
                </div>
                <button>Add to cart (10)</button>
              </li>))
          }

        </ul>
      </header>

      <main id="cart">
        <h2>Your Cart</h2>

        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            <li>
              <img className="cart--item-icon" src="assets/icons/002-carrot.svg" alt="carrot" />
              <p>carrot</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">5</span>
              <button className="quantity-btn add-btn center">+</button>
            </li>
          </ul>
        </div>

        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>

          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
