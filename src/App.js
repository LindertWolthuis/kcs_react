import React from 'react';
import logo from './logo.svg';
import './App.css';
const Header = () => {
  return (
    <h1 className="header">Shopping Cart Example</h1>
  );
}

const SubHeader = ({subheader}) => {
  return (
    <h2 className="subheader">{subheader}</h2>
  );
}

const Description = ({description}) => {
  return (<div>
    <h3 className="description">{description.product}-${description.price} x {description.amount}</h3>
  </div>);
}

const ItalicDesc = ({italicdesc}) => {
  return <h3 className="italic">{italicdesc}</h3>
}

const Totaldesc = ({totaldesc}) => {
  return <h3>{totaldesc}</h3>
}

const Button = ({buttonstr}) => {
  return <button >{buttonstr}</button>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <hr></hr>

      <SubHeader subheader = "Products"/>
      <Description description = {{product:"iPad 4 Mini", price:"500.01", amount:2}}/>
      <Button buttonstr="Add to Cart"/>
      <Description description = {{product:"H&M T-Shirt White", price:"10.99", amount:10}}/>
      <Button buttonstr="Add to Cart"/>
      <Description description = {{product:"Charli XCX - Sucker", price:"19.99", amount:5}}/>
      <Button buttonstr="Add to Cart"/>
      <hr></hr>

      <SubHeader subheader = "Your Cart"/>
      <ItalicDesc italicdesc="Please add some products to cart."/>
      <Totaldesc totaldesc="Total: $0.00"/>
      <Button buttonstr="Checkout"/>
    </div>
  );
}

export default App;
