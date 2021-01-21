import { LoginValuesInterface } from "../interfaces/interfaces"

export const loginFormValidation = ( values: LoginValuesInterface ) => {
    let errors = {}
    const { email, password } = values;

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if( !re.test(String(email).toLowerCase()) ){
        errors = {
            ...errors,
            email: 'Enter a valid email'
        }
    }

    if( password.length === 0 ){
        errors = {
            ...errors,
            password: 'Password is required'
        }
    }

    return errors;
}