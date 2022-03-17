 export function addToCart(product){
    return{
        type:"ADD_TO_CART",
        payload:product,
    }

}
export function removeCart(cartList){
    return {
        type:"DELETE_CART",
        payload:cartList
    }

}