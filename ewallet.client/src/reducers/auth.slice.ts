import { createSlice } from '@reduxjs/toolkit';
import { LoginModel } from '../models';
import { UserRole } from '../models/enums/UserRole';
import { deleteCookie } from '../utils';

export interface IAuthState {
    fetching: boolean;
    isAuthorized: boolean,
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole;
    token: string;
    expires: number | null;
}

export const DefaultAuthState: IAuthState = {
    fetching: false,
    isAuthorized: false,
    firstName: '',
    lastName: '',
    email: '',
    role: UserRole.Unauthorised,
    token: '',
    expires: null,
};

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: DefaultAuthState,
    reducers: {
        api_requestToken(state: any, action: { type: string; payload: LoginModel }) {
            return Object.assign(state, {
                fetching: true
            } as IAuthState)
        },
        requestTokenSuccess(state, action: { type: string; payload: any }) {
            const authData: IAuthState = {
                fetching: false,
                isAuthorized: true,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                role: action.payload.role,
                token: action.payload.token,
                expires: action.payload.expires
            };

            return Object.assign(state, authData);
        },
        requestTokenFailed(state, action) {
            return Object.assign(state, {
                fetching: false,
                isAuthorized: false
            });
        },
        logoutSuccess(state) {
            deleteCookie('token');

            return DefaultAuthState;
        },
    }
});

export const authenticationActions = authenticationSlice.actions;
export default authenticationSlice.reducer;