import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActiveTask, startDeleteTask, startUpdateTask } from '../actions/taskAction';
import { TaskInterface } from '../interfaces/interfaces';

export const ListTasks = () => {

    const tasks = useSelector( (state: any) => state.tasks.tasks );
    const dispatch = useDispatch();

    return (
        <>
            { tasks.length === 0 
                ? <h2 className="text-center font-bold mt-5 text-2xl text-gray-700">You dont have any task</h2>
                : 
                    <ul className="mt-5 overflow-y-auto" style={{ maxHeight: '30vh' }}>
                        { tasks.map( ( task: TaskInterface ) => (
                            <li
                                key={ task.id } 
                                className="flex items-center justify-between px-2 md:px-20"
                            >
                                <span 
                                    className={ `text-sm md:text-lg cursor-pointer ${ task.culminated === true && 'line-through'}` }
                                    onClick={ () => {
                                        dispatch( ActiveTask( task ) )
                                        dispatch( startUpdateTask() );
                                    }}
                                >{ task.name }</span>
                                <FontAwesomeIcon 
                                    icon={ faTrash } 
                                    className="text-gray-700 hover:text-red-500 cursor-pointer"
                                    onClick={ () => {
                                        dispatch( ActiveTask( task ) );
                                        dispatch( startDeleteTask() );
                                    }}
                                />
                            </li> 
                        )) }
                    </ul>
            }
        </>
    )
}
