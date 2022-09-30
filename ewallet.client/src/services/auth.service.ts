import { push } from "react-router-redux"
import { Store } from "redux"
import { ofType } from "redux-observable"
import { ajax } from "rxjs/ajax"
import { catchError, map, switchMap } from "rxjs/operators"
import API from "../constants/api.constants"
import { ErrorHandler } from "../helpers/errorHandler"
import storeProvider from "../helpers/store.provider"
import { UserRole } from "../models/enums"
import { authenticationActions, IAuthState } from "../reducers"
import { setCookie, TokenParser } from "../utils"

export const RequestToken = (action$: any, store: Store<any>) => {
    return action$.pipe(
        ofType(authenticationActions.api_requestToken.type),
        switchMap((action: any) => {
            return ajax
                .post(`${API.SERVER_URL}${API.AuthEndPoints.GET_TOKEN}`,
                    action.payload,
                    { 'Content-Type': 'application/json' }
                )
                .pipe(
                    map((result: any) => {
                        const parsedToken = TokenParser.parseJwt(result.response.token);

                        setCookie(
                            'token',
                            result.response.token,
                            parsedToken.exp * 1000
                        );

                        storeProvider.getStore().dispatch(push('/app'))

                        var authorization: IAuthState = {
                            fetching: false,
                            isAuthorized: true,
                            firstName: parsedToken['first_name'],
                            lastName: parsedToken['last_name'],
                            email: parsedToken['email'],
                            role: parsedToken['user_role'],
                            token: result.response.token,
                            expires: parsedToken.exp * 1000
                        }

                        return authenticationActions.requestTokenSuccess(authorization);
                    }),
                    catchError((error: any) => {
                        return ErrorHandler(error, true)
                    })
                )
        }
        )
    )
}