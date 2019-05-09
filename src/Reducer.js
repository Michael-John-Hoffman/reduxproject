
function Reducer(state =  
    {
    error: null,
    isLoaded: false,
    products: [],
    route: 'CommerceApi',
    productDetailsId: ''
  }, action) {
    switch (action.type) {
        case 'UPDATE_PRODUCTS': {
        return {
            ...state,
            products: action.products,
            isLoaded: true
        };
        }
        case 'PRODUCT_DETAILS': {
            return {
                ...state,
                productDetailsId: action.id,
            };
        }
        case 'CHANGE_ROUTE': {
            return {
                ...state,
                route: action.route
            };
        }
        default: {
        return state;
    }
  }
}

export default Reducer