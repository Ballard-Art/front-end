import React from 'react';
import Menu from '../components/Menu';
import G_panel from '../components/G_panel';
//pics below
import g1 from '../assets/gallery/g_1.png';
import g2 from '../assets/gallery/g_2.png';
import g3 from '../assets/gallery/g_3.png';
import g4 from '../assets/gallery/g_4.png';
import g5 from '../assets/gallery/g_5.png';
import g6 from '../assets/gallery/g_6.png';

function Gallery() {
    return (
        <div>
        <Menu 
        />
        <div>
            // eslint-disable-next-line react/jsx-pascal-case
            <G_panel 
                g1={g1}
                g2={g2}
                g3={g3}
                g4={g4}
                g5={g5}
                g6={g6}
            />
        </div>
        </div>
    )
}

export default Gallery
