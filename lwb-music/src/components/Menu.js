import React from 'react';
import Button from './Button';

function Menu({ oneTxt, oneLink, twoTxt, twoLink, threeTxt, threeLink, fourTxt, fourLink}) {
    return (
        <div>
            <div>
               <h1>Louis Wayne Ballard</h1> 
            </div>
            <div>
                <Button imp='primary' text={oneTxt} link={oneLink} />
                <Button imp='secondary' text={twoTxt} link={twoLink} />
                <Button imp='tertiary' text={threeTxt} link={threeLink} />
                <Button imp='quaternary' text={fourTxt} link={fourLink} />
            </div>
        </div>
    )
}

export default Menu
