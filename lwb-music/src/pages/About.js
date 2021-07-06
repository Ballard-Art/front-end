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
                text='Louis was born to Quapaw and Cherokee parents near Devils Promenade, Oklahoma on July 8, 1931. He attended the Seneca Indian Boarding School that was located in Wyandotte, Oklahoma from the age of six. Boys at the school were taught carpentry and farm management. The school was initially founded in the 1870s by Quakers as a mission. The general purpose of all Indian boarding schools was to remove children from their traditional customs and assimilate them into the predominant European culture. Louis resisted the strict indoctrination techniques and contiuned to speak his native Quapaw language and practice native dances. He was punished for doing so, but left the school retaining his culture and language.'
            />
        </div>
        </div>
    )
}

export default About
