import React, { Component } from 'react'; 
import {updateProducts} from './Actions'
import { connect } from 'react-redux';
import './index.css'
import _ from 'lodash'

class CommerceApi extends Component {
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
     const product = _.find(this.props.products,{ id: this.props.productDetailsId }) // array, search term
        return (
          <div>
           Things. 
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
      updateProducts: (products) => {dispatch(updateProducts(products))}
    }
  );
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommerceApi);
  