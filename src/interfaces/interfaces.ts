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
    id: string,
    name: string,
    managerUid: string
}