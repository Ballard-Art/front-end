import React from 'react';

function Menu({ oneTxt, oneLink, twoTxt, twoLink, threeTxt, threeLink, fourTxt, fourLink}) {
    return (
        <div>
            <div>
               <h1>Louis Wayne Ballard</h1> 
            </div>
            <div>
                <button imp='primary' text={oneTxt} link={oneLink} />
                <button imp='secondary' text={twoTxt} link={twoLink} />
                <button imp='tertiary' text={threeTxt} link={threeLink} />
                <button imp='quaternary' text={fourTxt} link={fourLink} />
            </div>
        </div>
    )
}

export default Menu
