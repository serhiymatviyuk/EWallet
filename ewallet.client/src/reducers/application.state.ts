import { IAuthState } from "./auth.slice";
import { IGlobalState } from "./globals.slice";
import { IUserCardsState } from "./userCards.slice";

export interface IServiceApplicationState {
    value: IApplicationState
}

export interface IApplicationState {
    authentication: IAuthState,
    userCards: IUserCardsState,
    global: IGlobalState
}