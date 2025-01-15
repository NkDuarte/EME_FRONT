export interface _user {
    name?: string;
    email: string;
    password: string;
}

export interface _response_register_user {
    success: boolean;
    message: string;
    user_data: _user_data;
    token: string;
}

interface _user_data {
    name: string;
    email: string;
    updated_at: string;
    created_at: string;
    id: number;
}

export interface _product {
    name: string;
    description: string;
    price: number;
    stock: number;
}
