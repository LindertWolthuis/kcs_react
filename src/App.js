import React, {Component} from 'react';
//import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Header from './Header';
import Productscontainer from './Productscontainer';
import Cart from './Cart';

class App extends Component{

  constructor(props) {
    super(props);
    
    this.state = {
      total : 0.00, 
      data: [
        {id: 0, product: "iPad", price: 100, num: 2},
        {id: 1, product: "T-Shirt", price: 10, num: 5},
        {id: 2, product: "Sucker CD", price: 5, num: 3}
      ]
    };
  }

  reset() {
    this.setState({
      total: 0.00,
      data: [
        {id: 0, product: "iPad", price: 100, num: 2},
        {id: 1, product: "T-Shirt", price: 10, num: 5},
        {id: 2, product: "Sucker CD", price: 5, num: 3}
      ]
    });
  }
  
  addToCart = (id) => {
    if (this.state.data[id].num === 0) return ;
    
    this.setState((prevState, props) => {
      return {total: prevState.total + prevState.data[id].price};
    })
    
    this.setState((prevState, props) => {
      let temp = prevState.data;
      temp[id].num -- ;
      return {data: temp}
    });
  }

  render(){
    return(
      <div style = {{textAlign:'center'}}>
        <Header />
        <Productscontainer data={this.state.data} onAdd={this.addToCart}/>
        <Cart total={this.state.total} init={() => this.reset()}/>
      </div>
    );
  };
}

export default App;
