import React from 'react'
import Menu from '../components/Menu';
import BigAtom from '../components/BigAtom';
import LWB from '../assets/lwb_1.jpg'

function Home() {
    return (

        <div>
        <Menu 
            oneTxt='About'
            oneLink='/about'
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
        <BigAtom 
            title='In memory of Louis W. Ballard | 1931-2007'
            subtitle='"The expressiveness in art and in language of the American Indian has a universality possessing the power to touch and speak to every one of us in America, and everyone in the world. It can make a magnificent contribution to the mainstream of ... world literature, music, education, architecture, design. The list is endless. The possibilities are unlimited."'
            text='Louis was one of the premier classical music composers of the 20th century and one of the most notable Native American classical music composers of all time. This site is set up by his family to honor his unique legacy and continue celebrating his pioneering spirit. We are in the process of reviving and curating key musical scores and educational pieces for wider distribution. Please check this website for updates beginning in 2021 and feel free to contact us for other inquiries.'
            flic={LWB}
        />
        </div>
    </div>
    )
}

export default Home
