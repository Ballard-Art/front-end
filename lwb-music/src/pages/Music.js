import React from 'react'
import Menu from '../components/Menu'
import Tile1 from '../components/Tile1';
import Tile2 from '../components/Tile2';
import Decoy from '../assets/santafe colors.png';

function Music() {
    return (
        <div>
        <Menu 
            oneTxt='Home'
            oneLink='/'
            twoTxt='About'
            twoLink='/about'
            threeTxt='Resources'
            threeLink='/resources'
            fourTxt='Contact'
            fourLink='/contact'
        />
        <div>
            <Tile1 
                icon={Decoy}
                title='The Katcina Dances'
                link=''
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nulla nisi. Quisque suscipit urna vel sem venenatis semper. Nam vehicula sollicitudin dignissim. Aenean non sem a mauris aliquam mattis. Aenean non hendrerit diam, quis lacinia mi. Nam sollicitudin euismod mi, sed molestie nisl congue vitae. Maecenas interdum enim orci, eget lobortis diam pellentesque nec. Morbi pretium felis et lectus volutpat porttitor.'
            />
            <Tile2 
                icon={Decoy}
                title='Incident at Wounded Knee'
                link=''
                text='Nulla sit amet lectus ac mi laoreet dictum eleifend et diam. In et pellentesque mi, vel mollis magna. Fusce maximus tempus lacus malesuada tristique. Quisque commodo nisi nec efficitur aliquet. Nam et lacinia mi. Phasellus mollis tellus eu vulputate gravida. Vestibulum sodales a velit eu tincidunt. Fusce convallis faucibus justo, a feugiat nisi porttitor in. Nulla ac sagittis dolor.'
            />
        </div>
        </div>
    )
}

export default Music
