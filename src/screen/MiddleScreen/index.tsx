import React from 'react';
import styled from 'styled-components';
import AboutMeScreen from '../AboutMeSreen';
import BottomScreen from '../BottomScreen';
import ProjectScreen from '../ProjectScreen';
import TechnicalScreen from '../TechnicalScreen';

const Container = styled.div`
    height: 100vh;
    width: 100%;
`

const MiddleScreen = () => {

    return (
        <Container>
            <AboutMeScreen/>
            <TechnicalScreen/>
            <ProjectScreen/>
            <BottomScreen/>
        </Container>
    );

}

export default MiddleScreen