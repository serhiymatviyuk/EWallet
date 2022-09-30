import { of, Observable } from "rxjs";
import { authenticationActions } from "../reducers";
import { deleteCookie } from "../utils";
// import { notification } from "antd";

export function ErrorHandler(error: any, isAuth?: boolean): Observable<any> {
    if (error.status === 401) {
        deleteCookie('token');
        deleteCookie('refresh');

        window.location.href = '/'

        return of(authenticationActions.logoutSuccess());
    }

    if (error.status === 400) {
        return of(authenticationActions.requestTokenFailed(error.response.Message));
    }

    return of({ type: 'unhandled Error' });
}