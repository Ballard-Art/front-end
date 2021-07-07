import React from 'react'
import Menu from '../components/Menu';
import Atom from '../components/Atom';
import Atom2 from '../components/Atom2';
import School from '../assets/seneca_ndns.png';
import Flute from '../assets/lwb_flute.png';

function About() {
    return (
        <div>
        <Menu 
            oneTxt='Home'
            oneLink='/'
            twoTxt='Music'
            twoLink='/music'
            threeTxt='Gallery'
            threeLink='/gallery'
            fourTxt='Resources'
            fourLink='/resources'
            fiveTxt='Contact'
            fiveLink='/contact'
        />
        <div>
            <Atom 
                flic={School}
                title='Humble Beginnings'
                subtitle='"Kill the Indian in him and save the man"'
                text='Louis was born to Quapaw and Cherokee parents near Devils Promenade, Oklahoma on July 8, 1931. He attended the Seneca Indian Boarding School that was located in Wyandotte, Oklahoma from the age of six. Boys at the school were taught carpentry and farm management. The school was initially founded in the 1870s by Quakers as a mission. The general purpose of all Indian boarding schools was to remove children from their traditional customs and assimilate them into the predominant European culture. Louis resisted the strict indoctrination techniques and contiuned to speak his native Quapaw language and practice native dances. He was punished for doing so, but left the school retaining his culture and language.'
            />
            <Atom2 
                flic={Flute}
                title='Finding His Voice'
                subtitle='The Cultural Milieu and American Indian Music'
                text='Aspen music festival etc. etc. etc.'
            />
        </div>
        </div>
    )
}

export default About
