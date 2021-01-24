import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreateTask } from '../actions/taskAction'
import { useForm } from '../hooks/useForm'
import { taskFormValidation } from '../validations/taskFormValidation'
import { Button } from './Button'

export const FormTask = () => {

    const initialState = {
        name: ''
    }

    const dispatch = useDispatch()
    const projectId = useSelector( ( state: any ) => state.projects.activeProject.id );
    
    const { formValues, handleChange, handleSubmit, reset, errors  } = useForm( initialState, taskFormValidation , createTask )

    const { name } = formValues;

    function createTask () {
        dispatch( startCreateTask( projectId, name ))
        reset( initialState );
    }

    return (
        <form 
            className="w-3/4 md:w-2/4 m-auto flex flex-wrap"
            onSubmit={ handleSubmit }
        >
            <input 
                type="text"
                placeholder="Task"
                className={ `flex-1 mr-10 p-2 rounded bg-gray-100 p-2 border ${ errors.name && 'border-red-500' }` }
                name="name"
                value={ formValues.name }
                onChange={ handleChange }
            /> 
            <Button 
                value="Add Task" 
                classes="bg-green-500 rounded py-2 px-3 text-md text-white font-bold uppercase"
                type="submit"
            />
        </form>
    )
}
