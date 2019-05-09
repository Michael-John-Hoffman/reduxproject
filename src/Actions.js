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
