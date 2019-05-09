import { combineReducers, createStore } from 'redux';
import App from './App'
import React from 'react'
import { Provider } from 'react-redux';
import Reducer from './Reducer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CommerceApi from './CommerceApi';
import ProductsDetailsPage from './ProductsDetailsPage';
import CartPage from './CartPage'


const Root = () => {
  const reducer = combineReducers({
    products: Reducer
  });
  const store = createStore(reducer);
    return (
      <Provider store={store}>

        <Router>
          <Route path="/home" component={CommerceApi} />
          <Route path="/" exact component={App} />
          <Route path="/CommerceApi/" component={CommerceApi} />
          <Route path="/ProductsDetailsPage/:id/" component={ProductsDetailsPage} />
          <Route path="/CartPage/" component={CartPage} />
        </Router>
      </Provider>
    )
}


export default Root