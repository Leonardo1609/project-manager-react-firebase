interface ProjectForm {
    name: string
}
export const projectFormValidation = ({ name }: ProjectForm) => {

    let errors = {}
    if( name.length === 0 ){
        errors = {
            name: 'Project name is required'
        }
    }

    return errors;
}