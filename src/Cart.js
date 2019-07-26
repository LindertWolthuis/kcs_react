import React, {Component} from 'react';

class Cart extends Component{

    render(){
        return(
            <div>
                <h2>Your Cart</h2>
                <h4 style = {{fontStyle:'italic'}}>Please add some products to cart</h4>
                <h4>Total: ${this.props.total}</h4>
                {
                    this.props.total === 0 ? <button disabled>Checkout</button> : <button onClick={this.props.init}>Checkout</button>
                }
                <br></br>
                <br></br>
            </div>
        );
    }
}

export default Cart;