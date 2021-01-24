import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

export const useForm = ( initialState: any = {}, fnValidation: Function, fnSubmit: Function  ) => {
    
    const [ formValues, setformValues ] = useState(initialState);
    const [ errors, setErrors ]         = useState<any>({})
    const [ submit, setSubmit ]         = useState<boolean>( false );

    useEffect(() => {
        if( Object.keys(errors).length === 0 && submit ){
            fnSubmit();
        }
        // eslint-disable-next-line
    }, [ errors, submit ])

    const reset = ( newFormState = initialState ) => {
        setformValues( newFormState );
    }

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setformValues( ( state: any ) => ({
            ...state,
            [ target.name ]: target.value
        }));
    }

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        setErrors(fnValidation( formValues ));
        setSubmit( true );
    }

    return {
        formValues,
        handleChange,
        handleSubmit,
        reset,
        errors
    }
}
