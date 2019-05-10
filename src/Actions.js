export function updateProducts(products) {
    return {
        type: 'UPDATE_PRODUCTS',
        products
    }
}

export function productDetailsId(id) {
    return{
        type: 'PRODUCT_DETAILS',
        id
    }
}

export function changeRoute(route) {
    return{
        type: 'CHANGE_ROUTE',
        route
    }
}

export function addToCart(id){
    return{
        type: 'ADD_CART_ITEM',
        id

    }
}

export function removeFromCart(id){
    return{
        type: 'DELETE_CART_ITEM',
        id
    }
}
export function search(category){
    return{
        type: 'SEARCH',
        category
    }
}