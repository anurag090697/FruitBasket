/** @format */

import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [product, setProduct] = useState([
    {
      name: "Strawberry",
      cost: 410,
      quantity: 0,
    },
    {
      name: "Banana",
      cost: 60,
      quantity: 0,
    },
    {
      name: "Mango",
      cost: 80,
      quantity: 0,
    },
    {
      name: "Cherry",
      cost: 350,
      quantity: 0,
    },
    {
      name: "Grapes",
      cost: 70,
      quantity: 0,
    },
    {
      name: "Papaya",
      cost: 55,
      quantity: 0,
    },
    {
      name: "Orange",
      cost: 40,
      quantity: 0,
    },
  ]);

  function addQuant(i) {
    const newProduct = [...product];
    newProduct[i].quantity += 1;
    setProduct(newProduct);
  }

  function decQuant(i) {
    if (product[i].quantity > 0) {
      const newProduct = [...product];
      newProduct[i].quantity -= 1;
      setProduct(newProduct);
    }
  }

  useEffect(() => {
    let tm = product.filter((ele) => ele.quantity > 0);
    setCart(tm);
    let sum = 0;
    tm.forEach((ele) => {
      sum += ele.quantity * ele.cost;
    });
    setTotal(sum);
  }, [product]);

  return (
    <div className='container'>
      <div className='productList'>
        <h1>Products</h1>
        <div>
          {product.map((ele, idx) => {
            return (
              <div className='items' key={idx}>
                <p>{ele.name}</p>
                <p>Rs.{ele.cost}/kg</p>
                <div className='btn'>
                  <span className='minus' onClick={() => decQuant(idx)}>
                    -
                  </span>
                  <span className='quantity'>{ele.quantity}</span>
                  <span className='plus' onClick={() => addQuant(idx)}>
                    +
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <section id='cart'>
        <h1>CART</h1>
        <div>
          {cart.length === 0 ? (
            <h2 className='emptycart'>No Product in cart yet.....</h2>
          ) : (
            <div className='inCart'>
              {cart.map((ele, idx) => (
                <div key={idx}>
                  <p>
                    {ele.name} - {ele.quantity} X {ele.cost}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='bill'>
          <p>TOTAL:</p>
          <p>{total}</p>
        </div>
      </section>
    </div>
  );
}

export default App;
