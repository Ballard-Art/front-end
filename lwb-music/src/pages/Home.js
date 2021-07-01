import React from 'react'
import Menu from '../components/Menu';

function Home() {
    return (
        <div>
        <Menu 
            oneTxt='About'
            oneLink='/about'
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

export default Home
