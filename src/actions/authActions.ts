import { UserCredential } from "@firebase/auth-types";
import { Dispatch } from "redux"
import { app } from '../firebase/config';
import { ActionAuthReducerInterface } from "../interfaces/interfaces";
import { types } from "../types";

export const startRegistUser = ( username: string, email:string, password: string ) => {
    return async ( dispatch: Dispatch ) => {

        // app.auth().createUserWithEmailAndPassword( email, password )
        //     .then( ({ user }: UserCredential) => {
        //         user?.updateProfile({
        //             displayName: username
        //         })
        //         dispatch( login( user?.uid || "", user?.displayName || "" ) )
        //     })
        //     .catch( console.log )
        try {
            const { user }: UserCredential = await app.auth().createUserWithEmailAndPassword( email, password );
            await user?.updateProfile({
                displayName: username
            })

            dispatch( login( user?.uid || "", user?.displayName || "" ) )
        } catch (error) {
           console.log( error ) 
        }

    }
}

export const startLogin = ( email: string, password: string ) => {
    return async ( dispatch: Dispatch ) => {
        const { user }: UserCredential = await app.auth().signInWithEmailAndPassword( email, password );
        dispatch( login( user?.email || "", user?.displayName || "") )
    }
}

export const startLogout = () => {
    return async ( dispatch: Dispatch ) => {
        await app.auth().signOut();
        dispatch(logout())
    }
}

export const login = ( uid: string, username: string ): ActionAuthReducerInterface => ({
    type: types.login,
    payload: {
        uid,
        username
    }
})

export const logout = () => ({
    type: types.logout
})