import React from 'react';
import styled from 'styled-components';
import AboutMeScreen from './aboutMeScreen';
import ProjectScreen from './projectScreen';
import TechnicalScreen from './technicalScreen';

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
        </Container>
    );

}

export default MiddleScreen