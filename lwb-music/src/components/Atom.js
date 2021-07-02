import React from 'react'

function Atom({ title, subtitle, text, img, mainimg }) {
    return (
        <div style= {{
            mainimg: `url(${mainimg})`
        }}>
        <div>
            <div>
                <div>
                    <h2>{title}</h2>
                    <h4>{subtitle}</h4>
                    <p>{text}</p>
                </div>
                <div>
                    <img alt="primary">{img}</img>
                </div>

            </div>    
        </div>   
    </div>
    )
}

export default Atom
