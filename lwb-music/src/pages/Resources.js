import React from 'react'
import Menu from '../components/Menu'

function Resources() {
    return (
        <div>
          <Menu 
            oneTxt='Home'
            oneLink='/home'
            twoTxt='About'
            twoLink='/about'
            threeTxt='Music'
            threeLink='/music'
            fourTxt='Contact'
            fourLink='/contact'
        />
        </div>
    )
}

export default Resources
