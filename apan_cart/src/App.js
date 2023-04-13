import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import Footer from "./component/Footer";
import AddItem from "./component/AddItem";

function App() {
  const productList = [
    {
      price: 99999,
      name: "Iphone 15 R",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Yphone 15 R",
      quantity: 0,
    },
  ];

  const [productListState, setProductListState] = useState(productList);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    const newProductList = [...productListState];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductListState(newProductList);
  };

  const decrementQuantity = (index) => {
    const newProductList = [...productListState];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductListState(newProductList);
  };

  const resetQuantity = () => {
    const newProductList = [...productListState];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductListState(newProductList);
    setTotalAmount(0);
  };
  const removeItem = (index) => {
    const newProductList = [...productListState];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductListState(newProductList);
    setTotalAmount(newTotalAmount);
  };
  const addItem = (name,price) => {
    const newProductList = [...productListState];
    let newTotalAmount = totalAmount;
    newProductList.push({
      price:price,
      name:name,
      quantity:0
    });
    setProductListState(newProductList);
    setTotalAmount(newTotalAmount);
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductList
          productList={productListState}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem = {removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}
export default App;
