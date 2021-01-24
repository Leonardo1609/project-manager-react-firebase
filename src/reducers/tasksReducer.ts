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

export const taskReducer = (state = initialState, { type, payload }: ActionTasksReducerInterface) => {
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

    case types.setActiveTask:
        return {
            ...state,
            activeTask: payload
        }

    default:
        return state
    }
}
