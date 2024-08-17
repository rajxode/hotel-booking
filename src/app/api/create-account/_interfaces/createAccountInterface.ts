
export interface BodyData {
    name: string;
    email: string;
    password: string;
}

export interface ResponseData {
    success: boolean;
    message: string;
    user ?: BodyData;
}

export interface ErrMessage {
    message: string;
}