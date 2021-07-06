import React from 'react'
import Menu from '../components/Menu'
import LWBlinks from '../components/LWBlinks';

function Resources() {
    return (
        <div>
          <Menu 
            oneTxt='Home'
            oneLink='/'
            twoTxt='About'
            twoLink='/about'
            threeTxt='Music'
            threeLink='/music'
            fourTxt='Contact'
            fourLink='/contact'
        />
        <LWBlinks />
        </div>
    )
}

export default Resources
