import { CreateAccountValuesInterface } from "../interfaces/interfaces";

export const createAccountFormValidation = ( values: CreateAccountValuesInterface ) => {
    
    let errors: Object = {};
    const { username, email, confirm, password } = values;

    if( username.length < 6 ){
        errors ={
            ...errors,
            username: 'The username field require min 6 characters'
        }
    }

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if( !re.test(String(email).toLowerCase()) ){
        errors = {
            ...errors,
            email: 'Enter a valid email'
        }
    }

    if( password.length < 6 ){
        errors = {
            ...errors,
            password: 'The password field require min 6 characters'
        }
    }

    if( password !== confirm ){
        errors = {
            ...errors,
            confirm: 'Passwords are different'
        }
    }

    return errors;

}