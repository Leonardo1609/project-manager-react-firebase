import React from 'react'
import { Button } from './Button'

export const FormTask = () => {
    return (
        <form className="w-3/4 md:w-2/4 m-auto flex flex-wrap">
            <input 
                type="text"
                placeholder="Task"
                className="flex-1 mr-10 p-2 rounded bg-gray-100 p-2 border"
            /> 
            <Button 
                value="Add Task" 
                classes="bg-green-500 rounded py-2 px-3 text-md text-white font-bold uppercase"
                type="submit"
            />
        </form>
    )
}
