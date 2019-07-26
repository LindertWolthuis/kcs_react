import React, {Component} from 'react';

class Productitem extends Component{
    render(){
        const {product,price,num} = this.props.product;
        return(
            <div>
                <h4>{product} - ${price} * {num}</h4>
                {
                    num > 0 ? <button onClick={this.props.clickEvent}>Add to cart</button> : <button disabled>Add to cart</button>
                }
            </div>
        );
    }
}
  
export default Productitem;