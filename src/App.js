import { Component } from "react";
import "./App.css";
import productData from "./data/productData";
import formatPrice from "./helpers/formatPrice";

class App extends Component {
  constructor() {
    super();

    this.state = {
      productList: productData,
      cartOfProducts: [],
      firstName:"",
      lastName:"",
      email: "",
      creditCard:"",
      zipCode:"",
    };
  }

  handleAddtoCart = () => {
    this.setState({
      cartProducts: [...this.state.cartProducts],
    });
  };

  handleFirstNameChange = (event) => {
    this.setState({firstName: event.target.value});
  }

  handleLastNameChange = (event) => {
    this.setState({lastName: event.target.value});
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  handleCreditCardChange = (event) => {
    this.setState({creditCard: event.target.value});
  }

  handleZipCodeChange = (event) => {
    this.setState({zipCode: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }


  render() {
    let productListArr = this.state.productList.map((product) => {
      let { name, price, img, description } = product;
      let newPrice = formatPrice(price);
      return (
        <div >
          <h3>{name}</h3>
          <div>Price: {newPrice}</div>
          <br/>
          <button>Add To Cart</button>
          <br />
          <img src={img} alt="product" />
          <div>{description}</div>
        </div>
      );
    });

    return (
      <div className="app">
        <h1>My Garage Sale</h1>
        <div className="products-container"></div>
        <div className="products">{productListArr}</div>
        <div className="cart">
          <h2>Cart</h2>
          <h2>Subtotal:</h2>
          <h2>Tax:</h2>
          <h2>Total:</h2>
        </div>
        <div className="checkout" id="checkout">
          <label htmlFor="checkout">Checkout</label>
          <form onSubmit={this.handleSubmit} id="checkout">
            <div>
              <label htmlFor="name"> First Name:</label>
              <input
                value={this.state.firstName}
                onChange={this.handleFirstNameChange}
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div>
              <label htmlFor="last"> Last Name</label>
              <input
                value={this.state.lastName}
                onChange={this.handleLastNameChange}
                type="text"
                name="last"
                id="last"
              />
            </div>
            <div>
              <label htmlFor="email"> Email</label>
              <input
                value={this.state.email}
                onChange={this.handleEmailChange}
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="credit"> Credit Card:</label>
              <input
                value={this.state.creditCard}
                onChange={this.handleCreditCardChange}
                type="number"
                name="credit"
                id="credit"
              />
              <div>
              <label htmlFor="zip"> Zip Code</label>
              <input
                value={this.state.zipCode}
                onChange={this.handleZipCodeChange}
                type="text"
                name="zip"
                id="zip"
              />
            </div>
            <button type="submit" value="submit">Buy Now</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
