import React, {Component} from 'react';

class Cart extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h2>Your Cart</h2>
                <h4 style = {{fontStyle:'italic'}}>Please add some products to cart</h4>
                <h4>Total: ${this.props.total}</h4>
                <button>Checkout</button>
            </div>
        );
    }
}

export default Cart;