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
            threeTxt='Gallery'
            threeLink='/gallery'
            fourTxt='Music'
            fourLink='/music'
            fiveTxt='Resources'
            fiveLink='/resources'
        />
        </div>
    )
}

export default Contact
