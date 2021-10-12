import React from 'react';
import Menu from '../components/Menu';
import ContactForm from '../components/ContactForm';

function Contact() {
    return (
        <div>
          <Menu 
            oneTxt='Main'
            oneLink='/'
            twoTxt='History'
            twoLink='/history'
            threeTxt='Gallery'
            threeLink='/gallery'
            fourTxt='Music'
            fourLink='/music'
            fiveTxt='Resources'
            fiveLink='/resources'
        />
        <div>
            <ContactForm />
        </div>
        </div>
    )
}

export default Contact
