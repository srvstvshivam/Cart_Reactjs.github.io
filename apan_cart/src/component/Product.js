import React from "react";

export default function Product(props) {
  // console.log(props)
  return (
    <div className="row mt-3">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span className="badge bg-secondary">₹{props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary" onClick={() => {props.decrementQuantity(props.index)}}>
            -
          </button>
          <button type="button" className="btn btn-primary" >
            {props.product.quantity}
          </button>
          <button type="button" className="btn btn-primary" onClick={() => {props.incrementQuantity(props.index)}}>
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        {props.product.price*props.product.quantity}
      </div>
      <button className="col-2 btn btn-danger" onClick={() => {props.removeItem(props.index)}}>
        Remove

      </button>
    </div>
  );
}
