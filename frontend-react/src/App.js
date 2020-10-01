import React from 'react';
import './App.css';
import Navigation from "./navigation";
import '@material/button/dist/mdc.button.css';
import BackgroundImageData from './assets/bugati-backgroud.jpg'
import Login from "./Login";
import ProductPage from "./productPage";

class App extends React.Component {
  state={
    login: false,
    accessToken: null,
  }
  storeToken = (token)=>{
    localStorage.login = !this.state.login
    localStorage.accessToken = token
    this.setState({
      login: !this.state.login,
      accessToken: token
    })
  }
  componentDidMount() {
    if (localStorage.login){
      this.setState({
        login: localStorage.login,
        accessToken: localStorage.accessToken
      })
    }
  }

  render() {
    if (this.state.login){
      return (
        <div style={{backgroundImage: `url(${BackgroundImageData})`, width: '100%',
          height: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <Navigation login={this.state.login}/>
          <ProductPage/>
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
