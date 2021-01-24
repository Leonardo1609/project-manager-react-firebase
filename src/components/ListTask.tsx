import React from 'react'
import { useSelector } from 'react-redux'
import { TaskInterface } from '../interfaces/interfaces';

export const ListTasks = () => {

    const tasks = useSelector( (state: any) => state.tasks.tasks );

    return (
        <>
            { tasks.length === 0 
                ? <h2>You dont have any task</h2>
                : 
                    <ul>
                        { tasks.map( ( task: TaskInterface ) => (
                            <li
                                key={ task.id } 
                            >
                                <span>{ task.name }</span>
                            </li> 
                        )) }
                    </ul>
            }
        </>
    )
}
