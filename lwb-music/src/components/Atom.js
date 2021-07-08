import React from 'react';
import styled from 'styled-components';

const StyledAtom = styled.div`
    height: 80vh;
    width: 80vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #313a61;
    display: flex;
    justify-content: left;
    scroll-snap-align: start;
`
const StyledContents = styled.div`
    display: flex;
`
const StyledText = styled.div`
    height: 60vh;
    width: 40vw;
    margin-left: 4%;
`
const StyledPic = styled.img`
    height: 45vh;
    width: 35vw;
    margin-left: 0%;
    margin-top: 5%;
`

function Atom({ title, subtitle, text, flic }) {
    return (
    <StyledAtom>
        <div>
            <StyledContents>
                <div>
                    <StyledPic src={flic} alt="primary"/>
                </div>
                <StyledText>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <h3>{text}</h3>
                </StyledText>

            </StyledContents>    
        </div>   
    </StyledAtom>
    )
}

export default Atom
