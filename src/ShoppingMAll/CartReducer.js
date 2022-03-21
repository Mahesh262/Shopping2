
export const CartReducers= (state=[],action)=>{
    if(action.type === 'ADD'){
        let tempCart= state.filter((item)=>item.id === action.payload.id)
         console.log(tempCart)
         if(tempCart < 1) {
             return [...state, action.payload];

        } else{
            return state
        }
    }

    if (action.type === 'REMOVE'){
        return state.filter ((item)=> item.id !== action.payload.id)

    }
    
    if(action.type === "INCREASE"){
        let tempCart = state.map((item)=>{
            if(item.id === action.payload.id){
            return {...item, id:item.id+1}
            }
            return item;
        })
        return tempCart;
    }

    if (action.type === 'DECREASE'){
        let tempCart = state.map((item)=>{
            if(item.id === action.payload.id){
            return {...item, quantity:item.quantity-1}
            }
            return item;
        })
        return tempCart;
    }
}