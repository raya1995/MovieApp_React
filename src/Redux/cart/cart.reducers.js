import CartActionTypes from "./cart.types";
import CartActionsTypes from "./cart.types";
import { addItemToCart, removeItemFromCart ,changeImage} from "./cart.utils";

const INITITAL_STATE = {
  hidden: true,
  cartItems: []
};


const cartRedcuer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
      
    case CartActionsTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload) 
      };
    case CartActionsTypes.ClEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    case CartActionsTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems : removeItemFromCart(state.cartItems, action.payload)
      };

     /* case CartActionsTypes.CHANGE_PHOTO:
        console.log(action.payload)
        return {

          ...state,
        
          cartItems: state.cartItems.map((item,i) => {
          if (item.imageURL[i] === action.payload) 
          return { ...item, imageURL: action.payload };
          else 
          return item;
        })
        }*/

    default:
      return state;
  }
};
export default cartRedcuer;
