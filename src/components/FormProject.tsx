import React, { useEffect } from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { startCreateProject, startModifyProject } from '../actions/projectAction'
import { useForm } from '../hooks/useForm'
import { projectFormValidation } from '../validations/projectFormValidation'
import { Button } from './Button'

interface FormProjectInterface {
    showForm: boolean,
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>,
    setActionForm: React.Dispatch<React.SetStateAction<string>>,
    action: string
}

export const FormProject = ({ showForm, setShowForm, setActionForm, action }: FormProjectInterface ) => {

    const dispatch = useDispatch();

    const activeProject: any = useSelector( ( state: any ) => state.projects.activeProject );

    const initialState = {
        name: ''
    }

    const { formValues, handleChange, handleSubmit, errors, reset } = useForm( initialState, projectFormValidation, saveProject );

    useEffect(() => {
        if( activeProject && action === 'edit' ){
            reset({ name: activeProject.name });
        }
        // eslint-disable-next-line
    }, [ activeProject, action ])

    function saveProject() {

        ( action === 'edit' ) 
            ? dispatch( startModifyProject( formValues.name ))
            : dispatch( startCreateProject( formValues.name ) );

        setActionForm('');
        reset( initialState );
    }

    return (
        <form 
            className={`mt-10 bg-gray-900 p-5 rounded transition-all ${ showForm ? 'block' : 'hidden'} `}
            onSubmit={ handleSubmit }
        >
            <div className="flex justify-between items-center">
                <label 
                    htmlFor="name" 
                    className="block text-md font-bold text-gray-200"
                >Project Name:</label>
                <FontAwesomeIcon 
                    onClick={ () => { 
                        setShowForm( false );
                        setActionForm('');
                        reset( initialState );
                    }}
                    className="text-gray-200 cursor-pointer hover:text-green-500"
                    icon={ faTimes } 
                />
            </div> 
            <input 
                type="text" 
                name="name" 
                id="name"
                className="mt-3 w-full rounded bg-gray-200 p-2 border"
                onChange={ handleChange }
                value={ formValues.name }
                autoFocus
            /> 
            <span className="text-red-600 text-sm">{ errors.name }</span>
            <Button 
                type="submit"
                value="Save"
                classes="bg-green-600 rounded py-2 mt-5 text-md text-white font-bold w-full uppercase"
            />
        </form>
    )
}
