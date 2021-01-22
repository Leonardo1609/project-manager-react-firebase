import React from 'react'
import projectmanagerimg from '../assets/imgs/project-manager.png';

export const TasksProject = () => {
    return (
        <div className="w-3/4 h-screen bg-gray-200 flex">
            <img 
                className="m-auto w-1/2 opacity-50"
                src={ projectmanagerimg } 
                alt="project-manager"
            />            
        </div>
    )
}
