import { combineReducers } from "redux";
import { default as AuthenticationReducer } from "./auth.slice";
import { default as UserCardsReducer } from "./userCards.slice";
import { default as GlobalState } from "./userCards.slice";

export const reducers = combineReducers({
    authentication: AuthenticationReducer,
    userCards: UserCardsReducer,
    global: GlobalState
})
