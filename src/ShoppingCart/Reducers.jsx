  
  
  const cartReducers = (state=[],action)=>{
    //   Add Cart 
        if(action.type === 'ADD'){
           let tempcart = state.filter((items)=> items.id === action.payload.id)
            console.log(tempcart)
            if(tempcart <1){
                return[...state,action.payload]
            }  else{
                return state;
            }

           

        }

        if(action.type === "INCS"){
           let tempcart = state.map((items,index)=> {
                if(items.id === action.payload.id){
                    return {...items, Quantity:items.Quantity+1}
                } else{
                    return items
                }



            }
      )
            return tempcart         
        }
        if(action.type === "RMV"){
            let tempcart= state.map((items=>{
                if(items.id === action.payload.id){
                    return {...items,Quantity:items.Quantity-1}

                } else{
                    return items
                }
            }))
            return tempcart
        }
  } 

  export default cartReducers