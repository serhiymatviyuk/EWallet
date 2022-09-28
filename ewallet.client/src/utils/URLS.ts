export class URLS {
    static getApiUrl(path?: string, params?: object | any): string {
        let url = 'http://localhost:7244/api';

        if (typeof path === 'string') {
            url += path;
        }

        if (typeof params === 'object') {
            let queryParamsArray : Array<string> = [];

            for (const key in params) {
                const value = params[key];
                if ((typeof value === 'string' && value === '') || (Array.isArray(value) && value.length === 0)) {
                    delete params[key];
                }
                else {
                    queryParamsArray.push(`${key}=${params[key]}`);
                }
            }
            
            url += !queryParamsArray.length ? '' : '?' + queryParamsArray.join('&');
        }

        return url;
    }
    
    static getLoginUrl(redirectTo?: string): string {
        const redirectQuery = !redirectTo || redirectTo === '/' ? '' : `?redirect=${redirectTo}`;

        return '/login' + redirectQuery;
    }
}