import { Dispatch } from "redux"
import { db } from "../firebase/config"
import { ProjectInterface } from "../interfaces/interfaces";
import { types } from "../types";

export const startCreateProject = ( name: string, uid: string ) => {
    return async ( dispatch: Dispatch ) => {

        const newProject = { 
            name, 
            managerUid: uid
        };

        const docRef: any = await db.collection(`${ uid }/project-manager/projects`).add( newProject );

        dispatch( AddProject({ id: docRef.id, ...newProject }) );
        dispatch( ActiveProject({ id: docRef.id, ...newProject }))
    }
}

export const AddProject = ( project: ProjectInterface ) => ({
    type: types.addProject,
    payload: project
});

export const ActiveProject = ( project: ProjectInterface ) => ({
    type: types.setActiveProject,
    payload: project
})

export const startGetProjects = ( uid: string ) => {
    return ( dispatch: Dispatch ) => {
        const projects: ProjectInterface[] = [];
        db.collection(`${ uid }/project-manager/projects`)
            .get()
            .then( snapshot => {
                snapshot.forEach( (doc: any) => {
                    const newDoc: ProjectInterface = {
                        id: doc.id,
                        name: doc.data().name,
                        managerUid: doc.data().managerUid
                    } 
                    projects.push( newDoc );
                })
                dispatch( setProjects( projects ) );
            } )
        
    }
}

export const setProjects = ( projects: ProjectInterface[] ) => ({
    type: types.setProjects,
    payload: projects
})
