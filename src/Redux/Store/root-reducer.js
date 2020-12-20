import { combineReducers } from "redux";

import cartRedcuer from '../cart/cart.reducers'
import userReducer from '../user/user.reducer'



const rootReducer = combineReducers({

 
  cart:cartRedcuer,
  user: userReducer,
 

});



export default rootReducer;
