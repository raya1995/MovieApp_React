import { UserActionTypes } from "./user.types";


export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const deleteCurrentUser = user => ({
    type: UserActionTypes.DELETE_CURRENT_USER,
    payload: user
});