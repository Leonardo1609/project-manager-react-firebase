import React from 'react'
import { Button } from '../components/Button'
import { useForm } from '../hooks/useForm'
import { LoginValuesInterface } from '../interfaces/interfaces';

export const Login = () => {
    const initialState: LoginValuesInterface  = {
        email: '',
        password: '',
    };

    const { formValues, handleChange, handleSubmit }  = useForm( initialState, ()=>{}, functionSubmit );

    function functionSubmit(){
        console.log( 'login');
    }

    const { email, password } = formValues;

    return (
        <div className="bg-gray-700 h-100 flex">
            <div className="m-auto w-5/6 md:w-2/3 lg:w-2/5 py-16 px-8 sm:px-16 bg-gray-800">
                <h1 className="text-center font-bold text-5xl text-gray-300">Login</h1>
                <form className="mt-5" onSubmit={ handleSubmit }>
                    <div className="mb-4">
                        <label 
                            htmlFor="email"
                            className="block w-full text-xl text-gray-300 mb-3"
                        >Email: </label>
                        <input 
                            id="email"
                            className="w-full p-3 rounded bg-gray-400"
                            type="email"
                            name="email"
                            value={ email }
                            onChange={ handleChange }
                        />
                    </div>

                    <div className="mb-4">
                        <label 
                            htmlFor="password"
                            className="block w-full text-xl text-gray-300 mb-3"
                        >Password: </label>
                        <input 
                            id="password"
                            className="w-full p-3 rounded bg-gray-400"
                            type="password"
                            name="password"
                            value={ password }
                            onChange={ handleChange }
                        />
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
