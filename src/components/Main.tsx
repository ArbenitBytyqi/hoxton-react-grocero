import { StoreItem, StoreType } from "../App";

type Props = {
  cart: StoreItem[];
  getItemImagePath: (item: StoreItem) => void;
  decreaseCartQuantity: (item: StoreItem) => void;
  increaseCartQuantity: (item: StoreItem) => void;
  getTotal: any;
};

export function Main({
  cart,
  getItemImagePath,
  decreaseCartQuantity,
  increaseCartQuantity,
  getTotal,
}: Props) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>

      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {cart.map((item) => (
            <li>
              <img
                className="cart--item-icon"
                src={getItemImagePath(item)}
                alt={item.name}
              />
              <p>{item.name}</p>
              <button
                className="quantity-btn remove-btn center"
                onClick={function () {
                  decreaseCartQuantity(item);
                }}
              >
                -
              </button>
              <span className="quantity-text center">{item.inCart}</span>
              <button
                className="quantity-btn add-btn center"
                onClick={function () {
                  increaseCartQuantity(item);
                }}
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>

        <div>
          <span className="total-number">{getTotal().toFixed(2)} €</span>
        </div>
      </div>
    </main>
  );
}
