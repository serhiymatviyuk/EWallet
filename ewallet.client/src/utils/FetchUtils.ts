import AuthenticationService from "../services/AuthenticationService";

export class FetchUtils {
    static async fetcher<T>(input: RequestInfo, init?: RequestInit | undefined): Promise<T> {
        const response = await fetch(input, init);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    }

    static async withToken<T>(input: RequestInfo, token: string): Promise<T> {

        const options: any = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        };

        const response = await fetch(input, options);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    }

    static createFetchOptionsWithToken(options = {}, accessToken: string): RequestInit {
        // const isNode = typeof (window) === 'undefined';
        // const nodeOptions = !isNode ? {} : {
        //     agent(parsedURL: any) {
        //         if (parsedURL.protocol === 'http:') {
        //             return new (require('http').Agent)({
        //                 keepAlive: true,
        //             });
        //         }
        //         return new (require('http').Agent)({
        //             rejectUnauthorized: false,
        //         });
        //     },
        // } as RequestInit;

        let headers: any = {
            'Content-Type': 'application/json',
            // ...(nodeOptions.headers || {}),
            ...((options as RequestInit).headers || {}),
        };

        if (accessToken) {
            headers.Authorization = 'Bearer ' + accessToken;
        }

        const fetchOptions: RequestInit = {
            method: 'GET',
            // ...nodeOptions,
            ...options,
            headers,
        };
        return fetchOptions;
    }

    static createFetchOptions(options = {}): RequestInit {
        return this.createFetchOptionsWithToken(options, AuthenticationService.getAccessToken());
    }

    static createFetchOptionsWithoutToken(options = {}): RequestInit {
        return this.createFetchOptionsWithToken(options, '');
    }
}
