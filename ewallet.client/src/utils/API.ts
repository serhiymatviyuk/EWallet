import { ServerResponseType } from "../models/ServerResponseType";
import { FetchUtils } from "./FetchUtils";
import { URLS } from "./URLS";

export function unauthorizedAccessProcessing() {
    //TODO: redirect unauthorized
}

export class API {

    static async responseCallback<T>(response: Response): Promise<ServerResponseType<T>> {
        const contentType = response.headers.get('content-type');

        switch (response.status) {
            case 200: // Ok
            case 201: // Ok, created
                if (!!contentType && contentType.indexOf('application/json') !== -1) {
                    return response.json() as Promise<T>;
                }

                return Promise.resolve();

            case 204: // Ok, no content
                return Promise.resolve();

            case 401: // Unauthorized
                return Promise.reject(new Error('Unauthorized'))
                    .finally(unauthorizedAccessProcessing);

            case 500: // Internal server error
            case 404: // Not found
            case 403: // Forbidden
            case 400: // Bad request
            default:
                return Promise.reject({
                    code: response.status,
                    statusText: response.statusText,
                    errorBody: !!contentType && contentType.indexOf('application/json') !== -1
                        ? await response.json()
                        : null
                });
        }
    }

    static async get<T>(url: string, params?: {}, options?: {}, accessToken: string = '') {
        const query: string = URLS.getApiUrl(url, params);

        const fetchOptions = accessToken === ''
            ? FetchUtils.createFetchOptions(options)
            : FetchUtils.createFetchOptionsWithToken(options, accessToken);
        const response = await fetch(query, fetchOptions);

        return this.responseCallback<T>(response);
    }

    static async post<T>(url: string, body?: {}, options?: {}) {
        const query: string = URLS.getApiUrl() + url;

        const fetchOptions = {
            method: 'POST',
            body: JSON.stringify(body || {}),
            ...options,
        };

        const response = await fetch(query, FetchUtils.createFetchOptions(fetchOptions));
        return this.responseCallback<T>(response);
    }

    static async put<T>(url: string, body?: {}, options?: {}, accessToken: string = '') {
        const query: string = URLS.getApiUrl() + url;

        const optionsWithToken = accessToken === ''
            ? FetchUtils.createFetchOptions(options)
            : FetchUtils.createFetchOptionsWithToken(options, accessToken);

        const fetchOptions = {
            ...optionsWithToken,
            method: 'PUT',
            body: JSON.stringify(body || {}),
        };

        const response = await fetch(query, fetchOptions);

        return this.responseCallback<T>(response);
    }

    static async delete<T>(url: string, body?: {}, options?: {}, accessToken: string = '') {
        const query: string = URLS.getApiUrl() + url;

        const optionsWithToken = accessToken === ''
            ? FetchUtils.createFetchOptions(options)
            : FetchUtils.createFetchOptionsWithToken(options, accessToken);

        const fetchOptions = {
            ...optionsWithToken,
            method: 'DELETE',
            body: JSON.stringify(body || {}),
            ...options,
        };

        const response = await fetch(query, FetchUtils.createFetchOptions(fetchOptions));

        return this.responseCallback<T>(response);
    }
}