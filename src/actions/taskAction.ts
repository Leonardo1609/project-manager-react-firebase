import { Dispatch } from "redux";
import { db } from "../firebase/config";
import { TaskInterface } from "../interfaces/interfaces";
import { types } from "../types";

export const startCreateTask = ( idProject: string, name: string ) => {
    return async ( dispatch: Dispatch ) => {
        const newTask: TaskInterface = {
            name,
            projectId: idProject
        }
        const docRef: any = await db.collection(`${ idProject }/project-tasks/tasks`).add( newTask );
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

export const AddTask = ( task: TaskInterface ) => ({
    type: types.addTask,
    payload: task
}); 

export const SetTasks = ( tasks: TaskInterface[] ) => ({
    type: types.setTasks,
    payload: tasks 
})