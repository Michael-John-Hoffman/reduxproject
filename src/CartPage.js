import React, { Component } from 'react'; 
import {updateProducts, removeFromCart} from './Actions'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './index.css'
import _ from 'lodash'
import App from './App'

class CartPage extends Component {
    
    componentWillMount() {
      fetch("https://my-json-server.typicode.com/tdmichaelis/json-api/products")
        .then(res => res.json())
        .then(
          (result) => {
            this.props.updateProducts(result)
          },
          (error) => {
          }
        )
    }
  
    render() {
     
     const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
        return (
          <div>
              <App />
           {cartItems.map(cartItem=>
               {
                const product = _.find(this.props.products,{ id: cartItem }) || {} // array, search term
                   return(
                    <div key={Math.random()}>
                        <div>{product.title}</div>
                        <div>{product.price}</div>
                        <Link to={`/ProductsDetailsPage/${product.id}`}>
                          <Button variant="outline-success">Update</Button>
                        </Link>
                        <Button onClick={ () => {
                            this.props.removeFromCart(product.id);
                            this.forceUpdate();
                        }} variant="outline-success">Delete</Button>
                    </div>
                   )
                  
               }
           )}
          </div>
        );
      }
    
  }
  
  const mapStateToProps = (state) => {
    
    return {
      products: state.products.products, // from Reducer.products
    };
  };
  
  const mapDispatchToProps = (dispatch) => (
    {
      updateProducts: (products) => {dispatch(updateProducts(products))},
      removeFromCart: (id) => {dispatch(removeFromCart(id))}
    }
  );
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartPage);
  