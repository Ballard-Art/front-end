import React from 'react'
import Menu from '../components/Menu';

function About() {
    return (
        <div>
        <Menu 
            oneTxt='Home'
            oneLink='/'
            twoTxt='Music'
            twoLink='/music'
            threeTxt='Resources'
            threeLink='/resources'
            fourTxt='Contact'
            fourLink='/contact'
        />
        </div>
    )
}

export default About
