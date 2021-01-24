import { ActionProjectsReducerInterface, ProjectInterface } from "../interfaces/interfaces"
import { types } from "../types"

interface ProjectStateInterface {
    projects: ProjectInterface[],
    activeProject: ProjectInterface | null
}

const initialState: ProjectStateInterface = {
    projects: [],
    activeProject: null
}

export const projectReducer = (state = initialState, { type, payload }: ActionProjectsReducerInterface) => {
    switch (type) {
        case types.setProjects:
            return { 
                ...state,  
                projects: payload
            }            
        case types.addProject:
            return { 
                ...state,  
                projects: [ payload, ...state.projects ]
            }            
        case types.updateProject:
            return {
                ...state,
                projects: state.projects.map( project => 
                    project.id === payload.id ? payload : project
                )
            }
        case types.deleteProject:
            return {
                ...state,
                projects: state.projects.filter( ( project: any ) => project.id !== payload )
            }
        case types.setActiveProject:
            return {
                ...state,
                activeProject: payload
            }
        default:
            return state
    }
}
