import CartItem from "./CartItem";

const reducer=(state,action)=>{
 
    if(action.type==='CLEAR_CART')
    {
      return {...state,cart:[]};
    }
    if(action.type==='REMOVE'){
        return {...state,cart:state.cart.filter(({id})=>id!==action.payload)};
    }
    if(action.type==='INCREASE' || action.type==='DECREASE')
    {   
       return {...state,cart:state.cart.map((cartItem)=>{
            if(cartItem.id===action.payload){
                const incrementer=action.type==='INCREASE'?1:-1;
                 return {...cartItem,amount:cartItem.amount+incrementer}
            }
            return cartItem;
        }).filter(({amount})=>amount>0)}
    }
    if(action.type==='GET_TOTALS'){
   let {total,amount}=state.cart.reduce((cartTotal,cartItem)=>{
        const {price,amount}=cartItem;
        const itemTotal=amount*price;
        cartTotal.total+=itemTotal;
        cartTotal.amount+=amount;
        return cartTotal;
    },{
        total:0,
        amount:0
    })
    total=parseFloat(total.toFixed(2));

     return {...state,total,amount}
    }
if(action.type==='LOADING')
{
    return {...state,loading:true};
}
if(action.type==='DISPLAY_ITEMS')
{
    return {...state,cart:action.payload,loading:false};
}
   throw new Error('NO SUCH ACTION EXIST');

}
export default reducer;