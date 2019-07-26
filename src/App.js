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
      total : 0, 
      data: [
        {id: 0, product: "iPad 4 Mini", price: 100, num: 2},
        {id: 1, product: "H & M T-Shirt White", price: 10, num: 5},
        {id: 2, product: "Charil XCX - Sucker CD", price: 5, num: 3}
      ]
    };
  }

  render(){
    return(
      <div style = {{textAlign:'center'}}>
        <Header />
        <Productscontainer data={this.state.data}/>
        <Cart total={this.state.total}/>
      </div>
    );
  };
}

export default App;
