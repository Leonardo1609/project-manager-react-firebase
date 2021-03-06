import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../actions/authActions';
import { Button } from './Button'
import { FormProject } from './FormProject'
import { ProjectList } from './ProjectList';

export const AsideProjects = () => {

    const [showForm, setShowForm] = useState( false );
    const [actionForm, setActionForm] = useState<string>('');
    const dispatch = useDispatch();

      
    return (
        <aside className="w-2/4 md:w-1/4 h-full bg-gray-800 py-10 px-10">
            <div className="flex flex-wrap flex-col xl:flex-row justify-between">
                <h1 className="text-2xl text-gray-200 font-bold text-center xl:text-left flex-1">Projects</h1>  
                <Button 
                    type="button" 
                    value="Create Project"
                    classes="bg-green-500 rounded uppercase py-2 px-5 text-sm font-bold text-gray-200 flex-1 mt-5 xl:mt-0"
                    fn={ () => setShowForm( true ) }
                />
            </div>
            <FormProject 
                showForm={ showForm }
                setShowForm={ setShowForm }
                setActionForm={ setActionForm }
                action={ actionForm }
            />
            <ProjectList 
                showForm={ showForm } 
                setShowForm={ setShowForm }
                setActionForm={ setActionForm }
            />
            <Button 
                classes="bg-green-500 w-full rounded uppercase py-2 px-5 text-sm font-bold text-gray-200 flex-1 mt-10"
                type="button"
                value="Sign Out"
                fn={ () => dispatch( startLogout() )}
            />
        </aside>
    )
}
