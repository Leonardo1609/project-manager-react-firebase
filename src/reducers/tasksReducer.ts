import { ActionTasksReducerInterface, TaskInterface } from '../interfaces/interfaces';
import { types } from '../types';

interface TaskReducerInterface {
    tasks: TaskInterface[],
    activeTask: TaskInterface | null
}

const initialState: TaskReducerInterface= {
    tasks: [],
    activeTask: null
}

export const taskReducer = (state = initialState, { type, payload }: ActionTasksReducerInterface ) => {
    switch (type) {

    case types.addTask:
        return { 
            ...state, 
            tasks: [ payload, ...state.tasks ]     
        }

    case types.setTasks:
        return {
            ...state,
            tasks: payload
        }

    case types.updateTask:
        return {
            ...state,
            tasks: state.tasks.map( task => 
                task.id === payload.id ? payload : task
            )
        }

    case types.setActiveTask:
        return {
            ...state,
            activeTask: payload
        }

    case types.deleteTask:
        return {
            ...state,
            tasks: state.tasks.filter( ( task: any ) => task.id !== payload )
        }
    default:
        return state
    }
}
