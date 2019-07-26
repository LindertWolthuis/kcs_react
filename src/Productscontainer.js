import React, {Component} from 'react';
import Productitem from './Productitem';

class Productscontainer extends Component{
    render(){
        return(
            <div>
                <h2>Products</h2>
                {
                    this.props.data.map(item =>
                        <Productitem product={item} clickEvent = {() => this.props.onAdd(item.id)}/>       
                        )
                }
                <hr></hr>
            </div>
        );
    }
}

export default Productscontainer;