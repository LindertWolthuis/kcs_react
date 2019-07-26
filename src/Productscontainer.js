import React, {Component} from 'react';
import Productitem from './Productitem';

class Productscontainer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h2>Products</h2>
                {
                    this.props.data.map(item =>
                        <Productitem product={item} />       
                        )
                }
                <hr></hr>
            </div>
        );
    }
}

export default Productscontainer;