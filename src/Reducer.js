import React from 'react'


function Reducer(state =  
    {
    error: null,
    isLoaded: false,
    products: []
  }, action) {
  switch (action.type) {
    case 'SET_PRODUCTS': {
     

      return {
          ...state,
          products: action.products 
      };
    }
    default: {
      return state;
    }
  }
}

export default Reducer