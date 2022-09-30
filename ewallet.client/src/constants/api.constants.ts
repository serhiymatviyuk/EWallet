export class API {
    public static readonly SERVER_URL = 'http://localhost:5244'

    public static readonly API_PART = '/api/'

    public static readonly AuthEndPoints: any = {
        GET_TOKEN: API.API_PART + 'auth/token',
        CHANGE_PASSWORD: API.API_PART + 'auth/change-password',
    }

    public static readonly UserCardsEndPoints: any = {
        GET_USER_CARDS: API.API_PART + 'cards',
        CREATE_USER_CARD: API.API_PART + 'cards/register',
        UPDATE_USER_CARD: API.API_PART + 'cards',
        DELETE_USER_CARD: API.API_PART + 'cards',
    }
}

export default API;
