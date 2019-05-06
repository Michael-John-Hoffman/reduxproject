import React from 'react'


function Reducer(state =  
    {
    error: null,
    isLoaded: false,
    products: []
  }, action) {
  console.log(action)
    switch (action.type) {
    case 'UPDATE_PRODUCTS': {
     

      return {
          ...state,
          products: action.products,
          isLoaded: true
      };
    }
    default: {
      return state;
    }
  }
}

export default Reducer