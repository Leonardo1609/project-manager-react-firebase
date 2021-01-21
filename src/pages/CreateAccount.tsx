import React from 'react'
import { useDispatch } from 'react-redux';
import { startRegistUser } from '../actions/authActions';
import { Button } from '../components/Button'
import { useForm } from '../hooks/useForm'
import { CreateAccountValuesInterface } from '../interfaces/interfaces';
import { createAccountFormValidation } from '../validations/createAccountFormValidation';

export const CreateAccount = () => {
    const initialState: CreateAccountValuesInterface = {
        username: '',
        email: '',
        password: '',
        confirm: ''
    };

    const dispatch = useDispatch();

    const { formValues, handleChange, handleSubmit, errors }  = useForm( initialState, createAccountFormValidation, functionSubmit );

    const { username, email, password, confirm  } = formValues;

    function functionSubmit(){
        dispatch(startRegistUser( username, email, password ));
    }


    return (
        <div className="bg-gray-700 h-screen flex">
            <div className="m-auto w-5/6 md:w-2/3 lg:w-2/5 py-10 rounded px-8 sm:px-16 bg-gray-800">
                <h1 className="text-center font-bold text-2xl sm:text-4xl text-gray-300">Create Account</h1>
                <form 
                    className="mt-5"
                    onSubmit={ handleSubmit } 
                    noValidate
                >
                    <div className="mb-3">
                        <label 
                            htmlFor="username"
                            className="block w-full sm:text-xl text-gray-300 mb-3"
                        >Username: </label>
                        <input 
                            id="username"
                            className={ `w-full p-2 sm:p-3 rounded bg-gray-400 ${ errors['username'] && 'border border-red-600'}` }
                            type="text"
                            name="username"
                            value={ username }
                            onChange={ handleChange }
                        />
                        <span className="text-red-600 text-sm">{ errors['username'] }</span>
                    </div>
                    <div className="mb-3">
                        <label 
                            htmlFor="email"
                            className="block w-full sm:text-xl text-gray-300 mb-3"
                        >Email: </label>
                        <input 
                            id="email"
                            className={ `w-full p-2 sm:p-3 rounded bg-gray-400 ${ errors['username'] && 'border border-red-600'}` }
                            type="email"
                            name="email"
                            value={ email }
                            onChange={ handleChange }
                        />
                        <span className="text-red-600 text-sm">{ errors['email'] }</span>
                    </div>

                    <div className="mb-3">
                        <label 
                            htmlFor="password"
                            className="block w-full sm:text-xl text-gray-300 mb-3"
                        >Password: </label>
                        <input 
                            id="password"
                            className={ `w-full p-2 sm:p-3 rounded bg-gray-400 ${ errors['username'] && 'border border-red-600'}` }
                            type="password"
                            name="password"
                            value={ password }
                            onChange={ handleChange }
                        />
                        <span className="text-red-600 text-sm">{ errors['password'] }</span>
                    </div>
                    <div className="mb-3">
                        <label 
                            htmlFor="confirm"
                            className="block w-full sm:text-xl text-gray-300 mb-3"
                        >Confirm Password: </label>
                        <input
                            id="confirm"
                            className={ `w-full p-2 sm:p-3 rounded bg-gray-400 ${ errors['username'] && 'border border-red-600'}` }
                            type="password"
                            name="confirm"
                            value={ confirm }
                            onChange={ handleChange }
                        />
                        <span className="text-red-600 text-sm">{ errors['confirm'] }</span>
                    </div>
                    <Button 
                        type="submit" 
                        value="Login"
                        classes="bg-green-600 rounded py-3 mt-5 text-xl text-white font-bold w-full uppercase"
                    />
                </form>
            </div>
        </div>
    )
}
