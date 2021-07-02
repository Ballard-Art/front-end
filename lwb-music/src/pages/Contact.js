import React from 'react'
import Menu from '../components/Menu';

function Contact() {
    return (
        <div>
          <Menu 
            oneTxt='Home'
            oneLink='/'
            twoTxt='About'
            twoLink='/about'
            threeTxt='Music'
            threeLink='/music'
            fourTxt='Resources'
            fourLink='/resources'
        />
        </div>
    )
}

export default Contact
