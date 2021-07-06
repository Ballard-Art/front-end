import React from 'react'
import Menu from '../components/Menu'
import LWBlinks from '../components/LWBlinks';
import NAlinks from '../components/NAlinks';

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
        <NAlinks />
        </div>
    )
}

export default Resources
