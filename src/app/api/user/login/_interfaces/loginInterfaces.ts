
export interface BodyData {
    email: string;
    password: string;
}

export interface UserData {
    _id: string;
    name: string;
    email: string;
    password ?: string;
    createdAt: string;
    updatedAt: string;
}

export interface ResponseData {
    success: true;
    message: string;
    user: UserData;
    token: string;
}