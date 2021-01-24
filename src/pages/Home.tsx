import React from 'react'
import { AsideProjects } from '../components/AsideProjects';
import { TasksProject } from '../components/TasksProject';

export const Home = ( props: any ) => {
    return (
        <div className="flex h-full">
            <AsideProjects/>
            <TasksProject />
        </div>
    )
}
