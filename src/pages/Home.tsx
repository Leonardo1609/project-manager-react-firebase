import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../actions/authActions';
import { AsideProjects } from '../components/AsideProjects';
import { TasksProject } from '../components/TasksProject';

export const Home = ( props: any ) => {
    const dispatch = useDispatch();
    return (
        <div className="flex h-full">
            <AsideProjects/>
            <TasksProject />
        </div>
    )
}
