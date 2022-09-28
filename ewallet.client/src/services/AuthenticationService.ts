import { API } from "../utils/API";

export default class AuthenticationService {

    static AuthTokenKey: string = 'ewallet.auth'

    static getAccessToken(): string {
        return sessionStorage.getItem(AuthenticationService.AuthTokenKey) || '';
    }

    static async login(email: string, password: string) {
        try {
            const response = await API.post<any>('/auth/token', { username:email, password: password }, {});

            if(response.token) {
                sessionStorage.setItem(AuthenticationService.AuthTokenKey, response.token);
            }

            return {
                result: response.token
            };
        } catch (exception) {
            return {
                result: null,
                error: exception
            };
        }
    }

    static logout() {
        sessionStorage.setItem(AuthenticationService.AuthTokenKey, '');
    }
}