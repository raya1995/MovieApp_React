import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser:null
}

const userReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type){
        
        case UserActionTypes.SET_CURRENT_USER:
        return {
            ...state,
            currentUser: action.payload
        }

        case UserActionTypes.DELETE_CURRENT_USER:

        return { ...state, currentUser: action.payload=null }
        
        default:
            return state;
    }

    
}

export default userReducer