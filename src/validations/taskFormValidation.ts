interface TaskForm {
    name: string 
}

export const taskFormValidation = ( values: TaskForm ) => {
    let errors = {};

    const { name } = values;

    if( name.length === 0 ){
        errors = {
            name: true
        }
    }

    return errors;
}