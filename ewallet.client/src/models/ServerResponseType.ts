export type ResponseError = {
    code: number;
    statusText: string;
    errorBody: any
};

export type ServerResponseType<T> = T | ResponseError | void;