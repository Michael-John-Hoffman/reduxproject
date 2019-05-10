
function Reducer(state =  
    {
    error: null,
    isLoaded: false,
    products: [],
    route: 'CommerceApi',
    productDetailsId: '',
    search: ''
  }, action) {
    switch (action.type) {
        case 'SEARCH': {
            return {
                ...state,
                search: action.category
            };
        }
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
        case 'ADD_CART_ITEM': {
            const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]")
            cartItems.push(action.id)
            localStorage.setItem("cartItems", JSON.stringify(cartItems))
            return state
        }
        case 'DELETE_CART_ITEM': {
            const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]")
            const index = cartItems.indexOf(action.id)
 
            if (index > -1) {
               cartItems.splice(index, 1);
            }
            localStorage.setItem("cartItems", JSON.stringify(cartItems))
            return state
        }
        default: {
        return state;
    }
  }
}

export default Reducer