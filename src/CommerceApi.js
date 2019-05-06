import React, { Component } from 'react'; 
import {updateProducts} from './Actions'
import { connect } from 'react-redux';

class CommerceApi extends Component {
    constructor(props) {
      super(props);
      
    }
  
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
      const { error, isLoaded, products } = this.props;
      console.log("props", this.props)
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {products.map(item => (
              <li key={item.title}>
                {item.title} {item.price}
              </li>
            ))}
          </ul>
        );
      }
    }
  }
  
  const mapStateToProps = (state) => {
    console.log("state", state)
    console.log(state.products.products)
    return {
      products: state.products.products, // from Reducer.products
      isLoaded: state.products.isLoaded
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
  