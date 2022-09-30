import { ofType } from "redux-observable"
import { IServiceApplicationState } from "../reducers/application.state"
import { catchError, mergeMap, switchMap, } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { userCardsActions } from "../reducers"
import API from "../constants/api.constants"
import { of } from "rxjs"
import { ErrorHandler } from "../helpers/errorHandler"
import { CardModel } from "../models"

export const GetUsersCards = (action$: any, state$: IServiceApplicationState) => action$.pipe(
    ofType(userCardsActions.apiGetUserCards.type),
    switchMap((action: any) => {
        return ajax
            .getJSON(
                `${API.SERVER_URL}${API.UserCardsEndPoints.GET_USER_CARDS}`,
                {
                    Authorization: `Bearer ${state$.value.authentication.token}`,
                    'Content-Type': 'application/json',
                }
            )
            .pipe(
                mergeMap((response: any) => {
                    const cards = response.map((x: any) => {
                        const card: CardModel = {
                            CardNumber: x.cardNumber,
                            IsValid: x.isValid,
                            State: x.state,
                            Type: x.type,
                            Currency: x.currency
                        };

                        return card;
                    });

                    return of(
                        userCardsActions.setUserCards(cards),
                    )
                }),
                catchError((error: any) => {
                    return ErrorHandler(error)
                })
            )
    })
)
