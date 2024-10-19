
export interface BodyData {
    name: string;
    email: string;
    password: string | undefined;
    role: string;
    phone?: string;
    address?: string;
}

export interface ResponseData {
    success: boolean;
    message: string;
    user ?: BodyData;
}

export interface ErrMessage {
    message: string;
}