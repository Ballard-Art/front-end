import React from 'react';
import styled from 'styled-components';

const StyledPanel = styled.div`
    height: 100vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #313a61;
    display: flex;
    scroll-snap-align: start;
`
const StyledContents = styled.div`
    display: flex;
`

function G_panel({ g1, g2, g3, g4, g5, g6 }) {
    return (
        <StyledPanel>
            <StyledContents>
                <img src={g1} alt="tertiary"/>
                <img src={g2} alt="tertiary"/>
                <img src={g3} alt="tertiary"/>
                <img src={g4} alt="tertiary"/>
                <img src={g5} alt="tertiary"/>
                <img src={g6} alt="tertiary"/>
            </StyledContents>
        </StyledPanel>
    )
}

export default G_panel
