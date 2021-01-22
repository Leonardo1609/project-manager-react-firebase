import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreateProject } from '../actions/projectAction'
import { useForm } from '../hooks/useForm'
import { projectFormValidation } from '../validations/projectFormValidation'
import { Button } from './Button'

interface FormProjectInterface {
    showForm: boolean
}

export const FormProject = ({ showForm }: FormProjectInterface ) => {

    const dispatch = useDispatch();
    const initialState = {
        name: ''
    }

    const authId = useSelector( ( state: any ) => state.auth.uid );

    const { formValues, handleChange, handleSubmit, errors } = useForm( initialState, projectFormValidation, createProject )

    function createProject() {

        dispatch( startCreateProject( formValues.name, authId ) );

    }

    return (
        <form 
            className={`mt-10 bg-gray-900 p-5 rounded transition-all ${ showForm ? 'block' : 'hidden'} `}
            onSubmit={ handleSubmit }
        >
            <label 
                htmlFor="name" 
                className="block text-md font-bold text-gray-200"
            >Project Name:</label>
            <input 
                type="text" 
                name="name" 
                id="name"
                className="mt-3 w-full rounded bg-gray-200 p-2 border"
                onChange={ handleChange }
                value={ formValues.name }
            /> 
            <Button 
                type="submit"
                value="Create"
                classes="bg-green-600 rounded py-2 mt-5 text-md text-white font-bold w-full uppercase"
            />
        </form>
    )
}
