import { Dispatch } from "redux";
import { db } from "../firebase/config";
import { TaskInterface } from "../interfaces/interfaces";
import { types } from "../types";

export const startCreateTask = ( name: string ) => {
    return async ( dispatch: Dispatch, getState: any ) => {
        const { id: projectId } = getState().projects.activeProject;
        const newTask = {
            name,
            culminated: false
        }
        const docRef: any = await db.collection(`${ projectId }/project-tasks/tasks`).add( newTask );
        dispatch( AddTask({ id: docRef.id, ...newTask  }) )
    }
}

export const startGetTasks = () => {
    return async ( dispatch: Dispatch, getState: any ) => {
        const { id } = getState().projects.activeProject;
        const docRef = await db.collection(`${ id }/project-tasks/tasks`).get();
        const tasks: TaskInterface[] = docRef.docs.map( ( ( task: any ) => ({
            id: task.id,
            ...task.data()
        })));

        dispatch( SetTasks( tasks ) );
    }
}

export const startUpdateTask = () => {
    return async ( dispatch: Dispatch, getState: any ) => {
        const { id: projectId } = getState().projects.activeProject;
        const { id: taskId, name, culminated } = getState().tasks.activeTask;

        await db.collection( `${ projectId }/project-tasks/tasks` ).doc( taskId ).update({
            culminated: !culminated
        });

        dispatch( ActiveTask( null ) );
        dispatch( UpdateTask({ id: taskId, name, culminated: !culminated }) );
    }
}

export const startDeleteTask = () => {
    return async ( dispatch: Dispatch, getState: any ) => {
        const { id: taskId } = getState().tasks.activeTask;
        const { id: projectId } = getState().projects.activeProject;
        await db.collection( `${ projectId }/project-tasks/tasks` ).doc( taskId ).delete();

        dispatch( DeleteTask( taskId ) );
    }
}

export const AddTask = ( task: TaskInterface ) => ({
    type: types.addTask,
    payload: task
}); 

export const SetTasks = ( tasks: TaskInterface[] ) => ({
    type: types.setTasks,
    payload: tasks 
})

export const ActiveTask = ( task: TaskInterface | null ) => ({
    type: types.setActiveTask,
    payload: task
})

export const UpdateTask = ( task: TaskInterface ) => ({
    type: types.updateTask,
    payload: task
})

export const DeleteTask = ( id: string ) => ({
    type: types.deleteTask,
    payload: id
})