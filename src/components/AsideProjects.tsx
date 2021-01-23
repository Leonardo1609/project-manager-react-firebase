import React, { useState } from 'react'
import { Button } from './Button'
import { FormProject } from './FormProject'
import { ProjectList } from './ProjectList';

export const AsideProjects = () => {

    const [showForm, setShowForm] = useState( false );

    const showHideForm = () => {
        setShowForm( !showForm )
    }
      
    return (
        <aside className="w-1/4 h-full bg-gray-800 py-10 px-10">
            <div className="flex flex-wrap flex-col xl:flex-row justify-between">
                <h1 className="text-2xl text-gray-200 font-bold text-center xl:text-left flex-1">Projects</h1>  
                <Button 
                    type="button" 
                    value="Create Project"
                    classes="bg-green-500 rounded uppercase py-2 px-5 text-sm font-bold text-gray-200 flex-1 mt-5 xl:mt-0"
                    fn = { showHideForm }
                />
            </div>
            <FormProject 
                showForm = { showForm }
                setShowForm = { setShowForm }
            />
            <ProjectList 
                showForm = { showForm } 
            />
        </aside>
    )
}
