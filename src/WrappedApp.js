import { combineReducers, createStore } from 'redux';
import App from './App'
import React from 'react'
import { Provider } from 'react-redux';
import Reducer from './Reducer'


const reducer = combineReducers({
    ...Reducer
  });

export const store = createStore(reducer);


const WrappedApp = () => (
    <Provider store={store}>
      <App/>
    </Provider>
  );

  export default WrappedApp