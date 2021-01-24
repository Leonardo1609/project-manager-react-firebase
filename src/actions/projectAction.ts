import { Dispatch } from "redux"
import { db } from "../firebase/config"
import { ActionProjectsReducerInterface, ProjectInterface } from "../interfaces/interfaces";
import { types } from "../types";

export const startCreateProject = ( name: string, uid: string ) => {
    return async ( dispatch: Dispatch ) => {

        const newProject: ProjectInterface = { 
            name, 
            managerUid: uid
        };

        const docRef: any = await db.collection(`${ uid }/project-manager/projects`).add( newProject );

        dispatch( AddProject({ id: docRef.id, ...newProject }) );
        dispatch( ActiveProject({ id: docRef.id, ...newProject }))
    }
}

export const startModifyProject = ( projectId: string, name: string, uid: string ) => {
    return async ( dispatch: Dispatch ) => {
        await db.collection(`${ uid }/project-manager/projects`).doc( projectId ).update({
            name
        });

        dispatch( ActiveProject({ id: projectId, name, managerUid: uid }) );
        dispatch( UpdateProject({ id: projectId, name, managerUid: uid }) );
    }
}

export const startDeleteProject = ( uid: string, projectId: string ) => {
    return async ( dispatch: Dispatch ) => {
        await db.collection(`${ uid }/project-manager/projects`).doc( projectId ).delete();
        dispatch( ActiveProject( null ) );
        dispatch( DeleteProject( projectId ));
    }
}

export const AddProject = ( project: ProjectInterface ): ActionProjectsReducerInterface => ({
    type: types.addProject,
    payload: project
});

export const ActiveProject = ( project: ProjectInterface | null ) => ({
    type: types.setActiveProject,
    payload: project
})

export const DeleteProject = ( projectId: string ) => ({
    type: types.deleteProject,
    payload: projectId
})

export const UpdateProject = ( project: ProjectInterface ): ActionProjectsReducerInterface => ({
    type: types.updateProject,
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
