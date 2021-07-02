import React from 'react'
import Menu from '../components/Menu';
import Atom from '../components/Atom';
import School from '../assets/seneca_ndns.png';

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
        <div>
            <Atom 
                flic={School}
                title='Humble Beginnings'
                subtitle='"Kill the Indian in him and save the man"'
                text='Louis attended the Seneca Indian Boarding School that was located in Wyandotte, Oklahoma from the age of six.'
            />
        </div>
        </div>
    )
}

export default About
