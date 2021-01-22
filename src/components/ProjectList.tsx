import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActiveProject } from '../actions/projectAction'
import { ProjectInterface } from '../interfaces/interfaces'
import { Button } from './Button'

export const ProjectList = () => {

    const dispatch = useDispatch();
    const projects = useSelector( (state: any) => state.projects.projects)

    return (
        <div className="mt-10 bg-gray-900 p-5 rounded">
            { projects.length === 0 
                ? 
                    <p className="text-center text-xl font-bold text-gray-200">You don't have any projects</p> 
                : 
                    <ul>
                        { projects.map( ( project: ProjectInterface ) => 
                            <li 
                                key={ project.id }
                                className="my-2"
                            ><Button 
                                value={ project.name } 
                                type="button"
                                classes="text-gray-200 text-lg"
                                fn={ () => { dispatch( ActiveProject( project ) ) }}
                            /></li>
                        )}
                    </ul>
            }
        </div>
    )
}
