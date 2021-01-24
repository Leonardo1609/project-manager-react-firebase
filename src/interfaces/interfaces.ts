import { TypedUseSelectorHook } from "react-redux";

export interface CreateAccountValuesInterface extends LoginValuesInterface {
    username: string,
    confirm: string
}

export interface LoginValuesInterface {
    email: string,
    password: string,
}

export interface ActionAuthReducerInterface {
    type: string,
    payload: {
        uid: string,
        username: string
    }
}

export interface ActionProjectsReducerInterface {
    type: string,
    payload: ProjectInterface
}

export interface ProjectInterface {
    id?: string,
    name: string,
    managerUid: string
}

export interface ActionTasksReducerInterface {
    type: string,
    payload: TaskInterface
}
export interface TaskInterface {
    id: string,
    name: string,
    culminated: boolean
}