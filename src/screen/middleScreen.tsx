import React from 'react';
import styled from 'styled-components';
import AboutMeScreen from './aboutMeScreen';
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
        </Container>
    );

}

export default MiddleScreen