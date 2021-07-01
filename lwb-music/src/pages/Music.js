import React from 'react'
import Menu from '../components/Menu'

function Music() {
    return (
        <div>
        <Menu 
            oneTxt='Home'
            oneLink='/home'
            twoTxt='About'
            twoLink='/about'
            threeTxt='Resources'
            threeLink='/resources'
            fourTxt='Contact'
            fourLink='/contact'
        />
        </div>
    )
}

export default Music
