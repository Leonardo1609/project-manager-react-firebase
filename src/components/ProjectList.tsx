import React from 'react'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { ActiveProject, startDeleteProject } from '../actions/projectAction'
import { ProjectInterface } from '../interfaces/interfaces'

interface ProjectListProps {
    showForm: boolean,
    setActionForm: React.Dispatch<React.SetStateAction<string>>,
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}

export const ProjectList = ({ showForm, setActionForm, setShowForm }: ProjectListProps) => {

    const dispatch = useDispatch();
    const authId: any = useSelector( ( state:any ) => state.auth.uid )
    const projects: ProjectInterface[] = useSelector( (state: any) => state.projects.projects)
    const activeProject: any = useSelector( (state: any) => state.projects.activeProject)

    return (
        <div className="mt-10 bg-gray-900 overflow-y-auto p-5 rounded" style={{ maxHeight: showForm ? '50%' : '80%'}}>
            { projects.length === 0 
                ? 
                    <p className="text-center text-xl font-bold text-gray-200">You don't have any projects</p> 
                : 
                    <ul>
                        { projects.map( ( project: any ) => 
                            <li 
                                key={ project.id }
                                className="my-2 flex justify-between items-center"
                            >
                                <span
                                className={`text-gray-200 text-lg cursor-pointer hover:text-green-500 ${ activeProject && activeProject.id === project.id && 'text-green-500 font-bold' }`}
                                onClick={ () => { dispatch( ActiveProject( project ) ) }}
                                >{ project.name }</span>
                                <div className="space-x-3 text-gray-500">
                                    <FontAwesomeIcon 
                                        className="cursor-pointer hover:text-green-500"
                                        icon={ faPen } 
                                        onClick = { () => {
                                            setActionForm( 'edit' );
                                            setShowForm( true );
                                            dispatch( ActiveProject( project ));
                                        }}
                                    />
                                    <FontAwesomeIcon 
                                        className="cursor-pointer hover:text-red-500"
                                        icon={ faTrash } 
                                        onClick={ () => { 
                                            dispatch( ActiveProject( project ));
                                            dispatch( startDeleteProject( authId, project.id ) );
                                        }}
                                    />
                                </div>
                            </li>
                        )}
                    </ul>
            }
        </div>
    )
}
