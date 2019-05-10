import React, { Component } from 'react'; 
import {updateProducts, addToCart} from './Actions'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import App from './App'
import './index.css'
import _ from 'lodash'

class ProductsDetailsPage extends Component {
    componentDidMount() {
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
      
     const product = _.find(this.props.products,{ id: parseInt(this.props.match.params.id) }) || {}// array, search term
        return (
          <div>
            <App />
           <div className="productstitle">{product.title}</div> 
           <div className="description">Description: {product.description}</div> 
           <div className="detailsblock">
            <div><img src ={product.img} className="detailsPic" alt="pic"></img></div> 
            <div className="pricerating">
                <div className="detailstext">${product.price}</div> 
                <div className="detailstext">Rating: {product.rating}/5</div> 
                <Button onClick={() => {this.props.addToCart(product.id)}} variant="outline-success" className="buttondetails">Add to cart</Button>
              </div>
           </div>
           </div>
        );
      }
    
  }
  
  const mapStateToProps = (state) => {
    
    return {
      products: state.products.products, // from Reducer.products
      productDetailsId: state.products.productDetailsId
    };
  };


  
  const mapDispatchToProps = (dispatch) => (
    {
      updateProducts: (products) => {dispatch(updateProducts(products))},
      addToCart: (id) => {dispatch(addToCart(id))}
    }
  );
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductsDetailsPage);
  