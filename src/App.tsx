import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./Header";
import { Main } from "./components/Main";

function App() {
  const [store, setStore] = useState([
    {
      id: 1,
      name: "beetroot",
      price: 0.45,
      stock: 10,
      inCart: 7,
    },
    {
      id: 2,
      name: "carrot",
      price: 0.15,
      stock: 8,
      inCart: 5,
    },
    {
      id: 3,
      name: "apple",
      price: 0.25,
      stock: 1,
      inCart: 3,
    },
    {
      id: 4,
      name: "apricot",
      price: 0.8,
      stock: 4,
      inCart: 3,
    },
    {
      id: 5,
      name: "avocado",
      price: 0.9,
      stock: 5,
      inCart: 0,
    },
    {
      id: 6,
      name: "bananas",
      price: 0.6,
      stock: 5,
      inCart: 0,
    },
    {
      id: 7,
      name: "bell-pepper",
      price: 0.33,
      stock: 1,
      inCart: 0,
    },
    {
      id: 8,
      name: "berry",
      price: 0.5,
      stock: 5,
      inCart: 0,
    },
    {
      id: 9,
      name: "blueberry",
      price: 0.5,
      stock: 1,
      inCart: 0,
    },
    {
      id: 10,
      name: "eggplant",
      price: 0.75,
      stock: 1,
      inCart: 0,
    },
  ]);

  const cart = getCartItems();

  function getItemImagePath(item: any) {
    let id = String(item.id).padStart(3, "0");
    return `assets/icons/${id}-${item.name}.svg`;
  }

  function getCartItems() {
    return store.filter((item) => item.inCart > 0);
  }

  function getTotal() {
    let total = 0;
    for (let item of cart) {
      total += item.inCart * item.price;
    }
    return total;
  }

  function increaseCartQuantity(item) {
    if (item.stock === 0) return;
    const storeCopy = structuredClone(store);
    const match = storeCopy.find((target) => target.id === item.id);
    match.inCart++;
    match.stock--;
    setStore(storeCopy);
  }

  function decreaseCartQuantity(item) {
    if (item.inCart < 1) return;
    const storeCopy = structuredClone(store);
    const match = storeCopy.find((target) => target.id === item.id);
    match.inCart--;
    match.stock++;
    setStore(storeCopy);
  }

  return (
    <div className="App">
      <Header
        store={store}
        getItemImagePath={getItemImagePath}
        increaseCartQuantity={increaseCartQuantity}
      />

      <Main
        cart={cart}
        getItemImagePath={getItemImagePath}
        decreaseCartQuantity={decreaseCartQuantity}
        increaseCartQuantity={increaseCartQuantity}
        getTotal={getTotal}
      />
    </div>
  );
}

export default App;
