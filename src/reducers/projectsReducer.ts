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

export default (state = initialState, { type, payload }: ActionProjectsReducerInterface) => {
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
        case types.setActiveProject:
            return {
                ...state,
                activeProject: payload
            }
        default:
            return state
    }
}
