import {ProductState} from "./ShoppingState";

 export const reducers=(state =ProductState, action)=>{
   if(action.type ==='ADD_TO_CART'){
     var newstate = {...state};
     var cartList = [...state.cart];
     cartList.push(action.payload);
     newstate.cart=cartList;
     return newstate

   }
   if (action.type === "DELETE_CART" ){
         console.log(state.filter((product)=>product.name !== action.payload.id))    
       return state

   }
   return state
}