//we want a vertical timeline extending down the about page marking decades and significant events in his life
//to save space I could potentially do a hover effect for the events and pictures along the dates... something like this

import React from 'react';
import styled from 'styled-components';

const StyledColumn = styled.div`
    height: 280vh;
    width: 20vw;
    background-color: black;
    display: flex;
`
const StyledLine = styled.div`
    height: 280vh;
    width: 0.5vw;
    background-color: #f6eaf4;
    margin-left: 5%;
`
const StyledDate = styled.h1`
    height: 25vh;
    margin-left: 2%;
    &:hover {
        color: #f13e2e
    }
`

function Timeline() {
    return (
        <StyledColumn>
            <StyledLine></StyledLine>
            <div>
                <StyledDate>Timeline</StyledDate>
                <StyledDate>1940s</StyledDate>
                <StyledDate>1950s</StyledDate>
                <StyledDate>1960s</StyledDate>
                <StyledDate>1970s</StyledDate>
                <StyledDate>1980s</StyledDate>
                <StyledDate>1990s</StyledDate>
                <StyledDate>2000s</StyledDate>
                <StyledDate>2010s</StyledDate>
                <StyledDate>2020s</StyledDate>
            </div>
        </StyledColumn>
    )
}

export default Timeline
