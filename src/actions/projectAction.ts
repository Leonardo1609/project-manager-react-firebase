import { Dispatch } from "redux"
import { db } from "../firebase/config"
import { ActionProjectsReducerInterface, ProjectInterface } from "../interfaces/interfaces";
import { types } from "../types";

export const startCreateProject = ( name: string ) => {
    return async ( dispatch: Dispatch, getState: any ) => {

        const { uid } = getState().auth;
        const newProject: ProjectInterface = { 
            name, 
            managerUid: uid
        };

        const docRef: any = await db.collection(`${ uid }/project-manager/projects`).add( newProject );

        dispatch( AddProject({ id: docRef.id, ...newProject }) );
        dispatch( ActiveProject({ id: docRef.id, ...newProject }))
    }
}

export const startModifyProject = ( name: string ) => {
    return async ( dispatch: Dispatch, getState: any ) => {
        const { uid } = getState().auth;
        const { id: projectId } = getState().projects.activeProject;
        await db.collection(`${ uid }/project-manager/projects`).doc( projectId ).update({
            name
        });

        dispatch( ActiveProject({ id: projectId, name, managerUid: uid }) );
        dispatch( UpdateProject({ id: projectId, name, managerUid: uid }) );
    }
}

export const startDeleteProject = () => {
    return async ( dispatch: Dispatch, getState: any ) => {
        const { uid } = getState().auth;
        const { id: projectId } = getState().projects.activeProject;
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

export const startGetProjects = () => {
    return ( dispatch: Dispatch, getState: any ) => {
        const projects: ProjectInterface[] = [];
        const { uid } = getState().auth;
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
