import React, { Component } from 'react'; 
import {updateProducts, productDetailsId, changeRoute} from './Actions'
import { connect } from 'react-redux';
import './index.css'
import { Link } from "react-router-dom";
import App from './App'

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

    getSearchProducts = () => {
        if (this.props.search === '')
        return this.props.products
        return this.props.products.filter(product =>{
            if(this.props.search == product.category){
                return true
            } else {
                return false
            }
        })
    }
  
    productDetailsId = (id) => {
        this.props.productDetails(id)
    }

    render() {
      const { error, isLoaded} = this.props;
      const products = this.getSearchProducts()
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (


          <div> 
              <App />
            {products.map(item => (
                
                 <Link to={`/ProductsDetailsPage/${item.id}`}>
                 <div onClick={() => this.productDetailsId(item.id)} key={item.title}>
                    <div className="list">
                        {item.title} {item.price} <img src ={item.img} style={{height: 200}}/>
                    </div>
                </div>
                </Link> 
            ))}
          </div>
        );
      }
    }
  }
  
  const mapStateToProps = (state) => {
    
    return {
      products: state.products.products, // from Reducer.products
      isLoaded: state.products.isLoaded,
      search: state.products.search
    };
  };
  
  const mapDispatchToProps = (dispatch) => (
    {
      updateProducts: (products) => {dispatch(updateProducts(products))},
      productDetails: (id) => {
          dispatch(productDetailsId(id));
          dispatch(changeRoute('ProductDetails'))
      }
    }
  );
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommerceApi);
  