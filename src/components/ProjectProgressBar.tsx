import React from 'react'
import { useSelector } from 'react-redux'
import { TaskInterface } from '../interfaces/interfaces'

export const ProjectProgressBar = () => {
    const tasks: TaskInterface[] = useSelector( ( state: any ) => state.tasks.tasks )
    const completedTasks: TaskInterface[] = tasks.filter( task => task.culminated );
    const progress: number = ( completedTasks.length / tasks.length ) * 100;

    if( tasks.length === 0 ) return null;

    return (
        <div>
            <div className="w-full border rounded border-green-500 mt-10 bg-gray-500">
                <div 
                    className="h-5 bg-green-500"
                    style={{
                        width: progress + '%'
                    }}
                ></div>
            </div>
        </div>
    )
}
