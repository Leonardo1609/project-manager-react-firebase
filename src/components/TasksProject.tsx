import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startGetTasks } from '../actions/taskAction';
import projectmanagerimg from '../assets/imgs/project-manager.png';
import { ProjectInterface } from '../interfaces/interfaces';
import { FormTask } from './FormTask';
import { ListTasks } from './ListTask';

export const TasksProject = () => {
    const activeProject: ProjectInterface = useSelector((state: any) => state.projects.activeProject)
    const dispatch = useDispatch();

    useEffect( () => {
        if( activeProject ){
            dispatch( startGetTasks() );
        }
        // eslint-disable-next-line
    }, [ activeProject ])

    return (
        <div className={`w-2/4 md:w-3/4 h-full bg-gray-300 ${ !activeProject && 'flex' }`}>
            {
                !activeProject 
                ?
                    <img 
                        className="m-auto w-1/2 opacity-50"
                        src={ projectmanagerimg } 
                        alt="project-manager"
                    />            
                :
                    <>
                        <div className="w-full py-16">
                            <h2 className="text-5xl text-center text-center">Project: <span className="text-gray-600 font-bold">{ activeProject.name }</span></h2>
                        </div>
                        <FormTask />
                        <ListTasks />
                    </>
            }
        </div>
    )
}
