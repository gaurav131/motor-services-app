import React from 'react';
import './App.css';
import Navigation from "./navigation";
import '@material/button/dist/mdc.button.css';
import BackgroundImageData from './assets/bugati-backgroud.jpg'
import Login from "./Login";
import ProductPage from "./productPage";
import {addToCartApi} from "./Api";
import Cart from "./cart";

class App extends React.Component {
  state={
    login: false,
    accessToken: null,
    cart: [],
    showCart: false
  }
  storeToken = (token, email)=>{
    localStorage.login = !this.state.login
    localStorage.accessToken = token.token
    localStorage.email = email
    this.setState({
      login: !this.state.login,
      accessToken: token.token
    })
  }
  add_to_cart = (name, date)=>{
    for (let i of this.state.cart){
      if (i.name === name){
        return alert("already in cart")
      }
    }
    this.setState({
      cart: this.state.cart.concat([{name: name, date: date}])
    })
    localStorage.cart = this.state.cart
    console.log(name, date, localStorage.email, this.state.accessToken)
    addToCartApi(name, date, localStorage.email, this.state.accessToken)
  }
  componentDidMount() {
    if (localStorage.login){
      this.setState({
        login: localStorage.login,
        accessToken: localStorage.accessToken,
        cart: localStorage.cart? localStorage.cart: []
      })
    }
  }
  handleLogout = ()=>{
    localStorage.clear()
    this.setState({
      login: false,
      accessToken: null,
      cart: [],
    })
  }
  handleCartButton = (e)=>{
    this.setState({
      showCart: !this.state.showCart
    })
  }

  render() {
    console.log(this.state)
    if (this.state.login){
      return (
        <div style={{backgroundImage: `url(${BackgroundImageData})`, width: '100%',
          height: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <Navigation login={this.state.login} cart={this.state.cart} handleLogout={() => this.handleLogout()} handleCartButton={this.handleCartButton}/>
          <ProductPage addToCart={this.add_to_cart}/>
          <Cart show={this.state.showCart} handleCartButton={this.handleCartButton} cartItems={this.state.cart}/>
        </div>
      )
    }
  else {
    return (
      <div style={{backgroundImage: `url(${BackgroundImageData})`, width: '100%',
          height: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <Navigation login={this.state.login}/>
        <Login login={this.state.login} storeToken={this.storeToken} accessToken={this.state.accessToken}/>
        </div>
    )
  }
  }
}

export default App;
