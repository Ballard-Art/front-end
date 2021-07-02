import React from 'react'

function Button({ text, link }) {
    return (
        <div>
           <a href={link}>
               {text}
            </a> 
        </div>
    )
}

export default Button
