
export const addItemToCart =(cartItems, cartItemToAdd) => {

  console.log(cartItemToAdd);   // eli nzelet aaliih 

   const existingCartItem = cartItems.find(  // abien connaitre 

    cartItem =>{ return cartItem.id === cartItemToAdd.id;
   

  
  }
  );
 console.log(existingCartItem)  // eli nzelna aalih wel9ineeh sayer

  if (existingCartItem) {

    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 } // houni eli zedneeh tziidou quantity ==1
        : cartItem
    );
  }

 /* console.log(cartItemToAdd)
  console.log([...cartItems, { ...cartItemToAdd, quantity: 1 }])*/
  
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]; //rajaa list zidha eli zedneeh fi westou quantity
  
};


export const removeItemFromCart = ( cartItems , cartItemToRemove ) => {

  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id 
  );

  if ( existingCartItem.quantity === 1 ){
    return cartItems.filter( cartItem => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map( cartItem => cartItem.id === cartItemToRemove.id
    ? {...cartItem, quantity: cartItem.quantity-1} 
    : cartItem
    )
}


/*export const changeImage = ( cartItems , photoRoChange ) => {


 console.log(photoRoChange)

cartItems.map((item,i)=>{

 if(item.imageURL[i]===photoRoChange){

  console.log(photoRoChange);

 }
})


return {...cartItems}

}*/
