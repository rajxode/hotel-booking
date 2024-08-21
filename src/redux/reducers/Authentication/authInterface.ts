
export interface UserData {
    _id: string;
    name: string;
    email: string;
    password ?: string;
    createdAt: string;
    updatedAt: string;
}

export interface InitialStateInterface {
    authLoading: boolean;
    user:UserData;
}

export interface SignUpInterface {
    name: string;
    email: string;
    password: string;
}

export interface SignInInterface {
    email: string;
    password: string;
}