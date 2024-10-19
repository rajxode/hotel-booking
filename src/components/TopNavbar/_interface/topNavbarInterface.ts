
export interface SignUpData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: "customer" | "manager";
}

export interface SignInData {
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

export interface AvatarProps {
    user: UserData,
}