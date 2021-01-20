import React from 'react'

interface ButtonInterface{
    value: string,
    type: 'button' | 'submit',
    fn?: () => {},
    classes: string
}

export const Button = ({ value, type, fn, classes }: ButtonInterface) => {
    return (
        <button
            className={ classes } 
            type={ type }
            onClick={ fn }
        >
            { value }    
        </button>
    )
}
