/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/register": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Register user */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json-patch+json": components["schemas"]["RegisterDto"];
                    "application/json": components["schemas"]["RegisterDto"];
                    "text/json": components["schemas"]["RegisterDto"];
                    "application/*+json": components["schemas"]["RegisterDto"];
                };
            };
            responses: {
                /** @description Created */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["NewUserDto"];
                        "application/json": components["schemas"]["NewUserDto"];
                        "text/json": components["schemas"]["NewUserDto"];
                    };
                };
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["ProblemDetails"];
                        "application/json": components["schemas"]["ProblemDetails"];
                        "text/json": components["schemas"]["ProblemDetails"];
                    };
                };
                /** @description Internal Server Error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Login user */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json-patch+json": components["schemas"]["LoginDto"];
                    "application/json": components["schemas"]["LoginDto"];
                    "text/json": components["schemas"]["LoginDto"];
                    "application/*+json": components["schemas"]["LoginDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["NewUserDto"];
                        "application/json": components["schemas"]["NewUserDto"];
                        "text/json": components["schemas"]["NewUserDto"];
                    };
                };
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["ProblemDetails"];
                        "application/json": components["schemas"]["ProblemDetails"];
                        "text/json": components["schemas"]["ProblemDetails"];
                    };
                };
                /** @description Internal Server Error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get user info */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["GetMeDto"];
                        "application/json": components["schemas"]["GetMeDto"];
                        "text/json": components["schemas"]["GetMeDto"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["ProblemDetails"];
                        "application/json": components["schemas"]["ProblemDetails"];
                        "text/json": components["schemas"]["ProblemDetails"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/change-password": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Change user password */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json-patch+json": components["schemas"]["ChangePasswordDto"];
                    "application/json": components["schemas"]["ChangePasswordDto"];
                    "text/json": components["schemas"]["ChangePasswordDto"];
                    "application/*+json": components["schemas"]["ChangePasswordDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["ProblemDetails"];
                        "application/json": components["schemas"]["ProblemDetails"];
                        "text/json": components["schemas"]["ProblemDetails"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["ProblemDetails"];
                        "application/json": components["schemas"]["ProblemDetails"];
                        "text/json": components["schemas"]["ProblemDetails"];
                    };
                };
                /** @description Internal Server Error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/update-names": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Updates user's first and last name */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json-patch+json": components["schemas"]["UpdateNamesDto"];
                    "application/json": components["schemas"]["UpdateNamesDto"];
                    "text/json": components["schemas"]["UpdateNamesDto"];
                    "application/*+json": components["schemas"]["UpdateNamesDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["ProblemDetails"];
                        "application/json": components["schemas"]["ProblemDetails"];
                        "text/json": components["schemas"]["ProblemDetails"];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["ProblemDetails"];
                        "application/json": components["schemas"]["ProblemDetails"];
                        "text/json": components["schemas"]["ProblemDetails"];
                    };
                };
                /** @description Internal Server Error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        ChangePasswordDto: {
            currentPassword: string;
            newPassword: string;
        };
        GetMeDto: {
            username?: string | null;
            email?: string | null;
            firstName?: string | null;
            lastName?: string | null;
        };
        LoginDto: {
            username: string;
            password: string;
        };
        NewUserDto: {
            userName?: string | null;
            email?: string | null;
            token?: string | null;
            firstName?: string | null;
            lastName?: string | null;
        };
        ProblemDetails: {
            type?: string | null;
            title?: string | null;
            /** Format: int32 */
            status?: number | null;
            detail?: string | null;
            instance?: string | null;
        } & {
            [key: string]: unknown;
        };
        RegisterDto: {
            username: string;
            /** Format: email */
            email: string;
            password: string;
            firstName: string;
            lastName: string;
        };
        UpdateNamesDto: {
            firstName?: string | null;
            lastName?: string | null;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
