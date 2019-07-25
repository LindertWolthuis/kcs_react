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
  return <h3 >{description}</h3>
}

const ItalicDesc = ({italicdesc}) => {
  return <h3 className="italic">{italicdesc}</h3>
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
      <Description description="iPad 4 Mini - $500.01 x 2"/>
      <Button buttonstr="Add to Cart"/>
      <Description description="H&M T-Shirt White - $10.99 x 10"/>
      <Button buttonstr="Add to Cart"/>
      <Description description="Charli XCX - Sucker CD - $19.99 x 5"/>
      <Button buttonstr="Add to Cart"/>
      <hr></hr>
      <SubHeader subheader = "Your Cart"/>
      <ItalicDesc italicdesc="Please add some products to cart."/>
      <Description description="Total: $0.00"/>
      <Button buttonstr="Checkout"/>
    </div>
  );
}

export default App;
