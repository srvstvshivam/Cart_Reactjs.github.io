import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { productName, productPrice } = this.state;

    // validate input
    if (!productName || !productPrice) {
      alert("Please fill in all fields.");
      return;
    }

    const price = Number(productPrice);

    this.props.addItem(productName, price);
    this.setState({ productName: "", productPrice: "" });
  };

  render() {
    const { productName, productPrice } = this.state;

    return (
      <form className="row" onSubmit={this.handleSubmit}>
        <div className="mb-3 col-4 mb-5">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            value={productName}
            onChange={(e) => {
              this.setState({ productName: e.target.value });
            }}
            required
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <div className="input-group">
            <span className="input-group-text">$</span>
            <input
              type="number"
              className="form-control"
              id="inputPrice"
              name="productPrice"
              value={productPrice}
              onChange={(e) => {
                this.setState({ productPrice: e.target.value });
              }}
              required
              step="0.01"
              min="0"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary col-4">
          Add
        </button>
      </form>
    );
  }
}

export default AddItem;
