import React, {Component} from 'react';

class Productitem extends Component{
    render(){
        const {id,product,price,num} = this.props.product;
        return(
            <div>
                <h4>{product} - ${price} * {num}</h4>
                <button type="button">Add to cart</button>
            </div>
        );
    }
}
  
export default Productitem;