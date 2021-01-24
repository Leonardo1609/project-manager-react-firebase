interface TaskForm {
    name: string 
}

export const taskFormValidation = ( values: TaskForm ) => {
    let errors = {};

    const { name } = values;

    if( name.length === 0 || name.length > 20 ){
        errors = {
            name: 'Task field required: 1-20 characters'
        }
    }

    return errors;
}