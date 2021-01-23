import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActiveProject } from '../actions/projectAction'
import { ProjectInterface } from '../interfaces/interfaces'
import { Button } from './Button'

interface ProjectListProps {
    showForm: boolean
}

export const ProjectList = ({ showForm }: ProjectListProps) => {

    const dispatch = useDispatch();
    const projects: ProjectInterface[] = useSelector( (state: any) => state.projects.projects)
    const activeProject: ProjectInterface = useSelector( (state: any) => state.projects.activeProject)

    return (
        <div className="mt-10 bg-gray-900 overflow-y-auto p-5 rounded" style={{ maxHeight: showForm ? '50%' : '80%'}}>
            { projects.length === 0 
                ? 
                    <p className="text-center text-xl font-bold text-gray-200">You don't have any projects</p> 
                : 
                    <ul>
                        { projects.map( ( project ) => 
                            <li 
                                key={ project.id }
                                className="my-2"
                            >
                                <span
                                className={`text-gray-200 text-lg cursor-pointer hover:text-green-500 ${ activeProject && activeProject.id === project.id && 'text-green-500 font-bold' }`}
                                onClick={ () => { dispatch( ActiveProject( project ) ) }}
                                >{ project.name }</span>
                            </li>
                        )}
                    </ul>
            }
        </div>
    )
}
