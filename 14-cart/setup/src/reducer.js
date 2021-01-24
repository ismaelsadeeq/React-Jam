function reducer(state,action){
  switch(action.type){
    case 'CLEAR_CART':
      return {...state,cart:[]}
    case 'REMOVE':
      return {... state,cart:state.cart.filter(
        (cartItem)=>cartItem.id !== action.payload
      )}
    case 'INCREMENT':
      let tempCart = state.cart.map(
        (cartItem)=>{
          if(cartItem.id === action.payload){
            return {...cartItem,amount:cartItem.amount +1}
          }
          return cartItem 
        }
      )
      return {...state,cart:tempCart}
      case 'DECREMENT':
      let tempCart2 = state.cart.map(
        (cartItem)=>{
          if(cartItem.id === action.payload){
            return {...cartItem,amount:cartItem.amount -1}
          }
          return cartItem 
        }
      ).filter((cartItem)=>
        cartItem.amount !==0
      )
      return {...state,cart:tempCart2}
    case 'GET_TOTALS':
      let {total,amount} = state.cart.reduce(
        (cartTotal,cartItem)=>{
          const {price,amount} = cartItem
          cartTotal.amount += amount
          let itemTotal = price * amount
          cartTotal.total +=  itemTotal
          return cartTotal
        },{
           total:0,
           amount:0,
        }
      )
      total = parseFloat(total.toFixed(2))
      return {...state,total,amount}
    case 'LOADING':
      return {...state, loading:true}
    case 'DISPLAY_ITEMS':
      return {...state,cart:action.payload,loading:false}
    case 'TOGGLE_AMOUNT':
      let tempCart3 = state.cart.map(
        (cartItem)=>{
          if(cartItem.id === action.payload){
            if(action.payload.type === 'increment'){
              return {...cartItem,amount:cartItem.amount +1}

            }
            if(action.payload.type === 'decrement'){
              return {...cartItem,amount:cartItem.amount -1}
            }
          }
          return cartItem
        }
      ).filter((cartItem)=>
      cartItem.amount !==0
    )
      return {...state,cart:tempCart3}
  }
  throw new Error['no matching action type']
}
export default reducer