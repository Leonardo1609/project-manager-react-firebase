export interface CreateAccountValuesInterface extends LoginValuesInterface {
    username: string,
    confirm: string
}

export interface LoginValuesInterface {
    email: string,
    password: string,
}